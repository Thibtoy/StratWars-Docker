<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Stat;
use App\Entity\Type;

class TypeController extends AbstractController
{
    /**
     * @Route("/types", name="types")
     */
    public function index()
    {
    	$em = $this->container->get('doctrine')->getManager();

        $types = $em->getRepository('App:Type')->findAllTypes();
        
        foreach ($types as $key => $type) $types[$key]['stats'] = $em->getRepository('App:Stat')->findStatById($type['statId']);
        
        unset($types[$key]['statId']); 

        return new JsonResponse($types);
    }

    /**
     * @Route("/type/{name}", name="type")
     */
    public function show(Type $type)
    {
        $em = $this->container->get('doctrine')->getManager();

        $data = [
            'name' => $type->getName(),
            'stats' => $em->getRepository('App:Stat')->findStatById($type->getStat()->getId()) 
        ];

        return new JsonResponse($data);
    }
}
