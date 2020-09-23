<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\RequestStack;

class JWTAuthenticationSuccessListener 
{
	private $requestStack;

	public function __construct(RequestStack $requestStack)
	{
	    $this->requestStack = $requestStack;
	}

	/**
	 * @param AuthenticationSuccessEvent $event
	 */
	public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
	{
	    $user = $event->getUser();
	    if (!$user instanceof UserInterface) return;

	    $request = $this->requestStack->getCurrentRequest();
	    $data = $event->getData();

	    $response = $event->getResponse();

	    $domain = $request->server->get('SERVER_NAME');
        $secure = ($request->server->get('REQUEST_SCHEME') === 'https')? true : false; 
		$cookie = new Cookie('token', $data['token'], strtotime('now + 30 day'), '/', $domain, $secure, true, true, 'lax');

	    $response->headers->setCookie($cookie);
	}
}