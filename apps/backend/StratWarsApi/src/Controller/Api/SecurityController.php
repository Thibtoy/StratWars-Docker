<?php

namespace App\Controller\Api;

use App\Controller\ApiRoute;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    private $passwordEncoder;

    private $em;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em, JWTTokenManagerInterface $tokenManager) {
        $this->passwordEncoder = $passwordEncoder;
        $this->tokenManager = $tokenManager;
        $this->em = $em;
    }
    /**
     * @Route("/security", name="security")
     */
    public function index()
    {
        return $this->render('security/index.html.twig', [
            'controller_name' => 'SecurityController',
        ]);
    }

    /**
     * @ApiRoute("/register", name="register")
     */
    public function register(Request $request)
    {
        $userRepository = $this->em->getRepository(User::class);
        $userParams = json_decode($request->getContent());
        $status = 200;
        $success = false;
        $token = null;

        if (null !== $userRepository->findOneBy(['email' => $userParams->email]))
            $message = 'An account already exists with this email';
        else if (null !== $userRepository->findOneBy(['username' => $userParams->username]))
            $message = 'This username is already in use';
        else {
            $user = new User();
            $user->setEmail($userParams->email)
                 ->setUsername($userParams->username)
                 ->setPassword($this->passwordEncoder->encodePassword(
                    $user,
                    $userParams->password
                 ))
                 ->setRoles(['ROLE_USER']);

            $this->em->persist($user);
            $this->em->flush();

            $status = 201;
            $success = true;
            $message = 'Account successfully created';
            $token = $this->tokenManager->create($user);
        }
            
        $response = new JsonResponse([
            'status'  => $status, 
            'payload' => [
                'success' => $success,
                'message' => $message,
                'token'   => $token
            ]
        ]);

        if (null !== $token) {
            $domain = $request->server->get('SERVER_NAME');
            $secure = ($request->server->get('REQUEST_SCHEME') === 'https')? true : false; 
            $cookie = new Cookie('token', $token, strtotime('now + 30 day'), '/', $domain, $secure, true, true, 'lax');

            $response->headers->setCookie($cookie);
        }
        
        return $response;
    }

    /**
     * @Route("/authenticate", name="authenticate")
     */
    public function authenticate(Request $request)
    {
        return new JsonResponse([
            'status'  => 200, 
            'payload' => [
                'success' => true,
                'token'   => $request->cookies->get('token')
            ]
        ]);
    }

    /**
     * @ApiRoute(name="login", path="/login")
     * @return JsonResponse
     */
    public function login(): JsonResponse
    {
        return new JsonResponse('');
    }

    /**
     * @ApiRoute("/login2", name="login2")
     */
    public function login2(AuthenticationUtils $authenticationUtils)
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        //return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
        return new JsonResponse('hello');
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
