<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Kind;
use App\Entity\Stat;

class KindFixtures extends Fixture
{
	const DATA_SETS = [
		[
			'name' => 'Deads',
			'stats' => [3, 0, 0, 0, 0.10, 0.15, -0.10, 3, 0, 0, 0]
		],
		[
			'name' => 'Humans',
			'stats' => [2, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0]
		]
	];

    public function load(ObjectManager $manager)
    {
    	foreach (self::DATA_SETS as $dataSet) {
    		$kind = new Kind();
    		$stat = new Stat();

    		$kind->setName($dataSet['name']);

    		foreach(Stat::DATA_ORDER as $index => $property){
    			$stat->{'set'.ucfirst($property)}($dataSet['stats'][$index]);
    		}

    		$manager->persist($stat);

    		$kind->setStat($stat);

        	$manager->persist($kind);
        	$manager->flush();
    	} 
    }
}
