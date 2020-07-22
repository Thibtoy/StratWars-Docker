<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Kind;

/**
 * @Route("/api")
 */
class CodexController extends AbstractController
{
    /**
     * @Route("/codex", name="api_codex")
     */
    public function index()
    {
    	$em = $this->container->get('doctrine')->getManager();
    	$data = [];

    	$kinds = $em->getRepository('App:Kind')->getAllKinds();

        return new JsonResponse($kinds);
    }
}
