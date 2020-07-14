<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', array(
        	'controller_name' => 'coucou'
        ));
    }

    /**
     * @Route("/api/admin", name="test")
     */
    public function test(): JsonResponse
    {
        return new JsonResponse('coucou');
    }
}
