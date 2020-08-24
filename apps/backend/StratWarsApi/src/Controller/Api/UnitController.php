<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Stat;
use App\Entity\Unit;
use App\Entity\Kind;
use App\Entity\Type;

class UnitController extends AbstractController
{
    /**
     * @Route("/units", name="units")
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
     * @Route("/units/{name}/{typeName}", name="units_kind_type")
     * @ParamConverter("type", options={"mapping": {"typeName": "name"}})
     */
    public function units(Kind $kind = null, Type $type = null)
    {
        $em = $this->container->get('doctrine')->getManager();
        $data = [];

        if ($kind) {
            if ($type) {
                $units = $em->getRepository('App:Unit')->findBy(["kind" => $kind, "type" => $type]);
            }
            else $units = $em->getRepository('App:Unit')->findBy(["kind" => $kind]);
        }
        else $units = $em->getRepository('App:Unit')->findAll();

        foreach ($units as $unit) {
            $data[] = [
                "name" => $unit->getName(),
                "stats" => $unit->getRealStat(),
            ];
        }

        return new JsonResponse($data);
    }
}