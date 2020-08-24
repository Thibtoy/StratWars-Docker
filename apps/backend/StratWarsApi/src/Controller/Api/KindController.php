<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Kind;
use App\Entity\Stat;

class KindController extends AbstractController
{
    /**
     * @Route("/kinds", name="kinds")
     */
    public function index()
    {
    	$em = $this->container->get('doctrine')->getManager();

    	$kinds = $em->getRepository('App:Kind')->getAllKinds();

    	foreach ($kinds as $key => $kind) {
    		$kinds[$key]['stats'] = $em->getRepository('App:Stat')->findStatById($kind['statId']);
            unset($kinds[$key]['statId']);
    	}

        return new JsonResponse($kinds);
    }

     /**
     * @Route("/kind/{name}", name="kind")
     */
    public function show(Kind $kind)
    {
        $em = $this->container->get('doctrine')->getManager();

        $data = [
            'name' => $kind->getName(),
            'description' => $kind->getDescription(),
            'stats' => $em->getRepository('App:Stat')->findStatById($kind->getStat()->getId())
        ];

        return new JsonResponse($data);
    }
}