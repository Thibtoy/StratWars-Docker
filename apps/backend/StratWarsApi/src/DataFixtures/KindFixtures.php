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
            'description' => 'Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you\'ll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides.<br />They get a basic advantage in physical defense (10% resitance), in distant defense (15% resistance) and in physical dammages (3 hit points) but they get a malus in magical defense (-10% resistance).',
			'stats' => [3, 0, 0, 0, 0.10, 0.15, -0.10, 3, 0, 0, 0]
		],
		[
			'name' => 'Humans',
            'description' => 'Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you\'ll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides. They get a basic advantage in physical defense (10% resitance), in distant defense (15% resistance) and in physical dammages (3 hit points) but they get a malus in magical defense (-10% resistance).',
			'stats' => [2, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0]
		]
	];

    public function load(ObjectManager $manager)
    {
    	foreach (self::DATA_SETS as $dataSet) {
    		$kind = new Kind();
    		$stat = new Stat();

    		$kind->setName($dataSet['name']);
            $kind->setDescription($dataSet['description']);

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
