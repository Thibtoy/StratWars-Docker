<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Unit;
use App\Entity\Stat;
use App\Entity\Kind;
use App\Entity\Type;

class UnitFixtures extends Fixture
{
    const DATA_SETS = [
		[
			'name' => 'Skulittle',
			'kind' => 'Deads',
			'type' => 'Infantry',
			'stats' => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		],
		[
			'name' => 'Skull Warrior',
			'kind' => 'Deads',
			'type' => 'Infantry',
			'stats' => [2, 1, 0, 1, 0.05, 0, 0, 1, 1, 0, 1]
		],
		[
			'name' => 'Hungry Farmer',
			'kind' => 'Humans',
			'type' => 'Infantry',
			'stats' => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
		]
	];

    public function load(ObjectManager $manager)
    {
        foreach (self::DATA_SETS as $dataSet) {
    		$unit = new Unit();
    		$stat = new Stat();

    		$kind = $manager->getRepository("App:Kind")->findOneBy(['name' => $dataSet['kind']]);
    		$type = $manager->getRepository("App:Type")->findOneBy(['name' => $dataSet['type']]);

    		$unit->setName($dataSet['name'])
    			->setKind($kind)
    			->setType($type);

    		foreach(Stat::DATA_ORDER as $index => $property){
    			$stat->{'set'.ucfirst($property)}($dataSet['stats'][$index]);
    		}

    		$manager->persist($stat);

    		$unit->setStat($stat);

        	$manager->persist($unit);
        	$manager->flush();
    	} 
    }
}
