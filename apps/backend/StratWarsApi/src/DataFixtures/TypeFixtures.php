<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Type;
use App\Entity\Stat;

class TypeFixtures extends Fixture
{
	const DATA_SETS = [
		[
			'name' => 'Support',
			'stats' => [2, 1, 7, 3, 0, 0, 0, 1, 1, 0, 0],
			'description' => "Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you'll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides."
		],
		[
			'name' => 'Infantry',
			'stats' => [0, 1, 5, 2, 0.1, 0.1, 0, 2, 2, 0, 0],
			'description' => "Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you'll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides."
		],
		[
			'name' => 'Cavalry',
			'stats' => [3, 3, 5, 3, 0.3, -0.25, 0, 6, 3, 0, 0],
			'description' => "Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you'll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides."
		],
		[
			'name' => 'Guards',
			'stats' => [4, 0, 10, 2, 0.3, 0.4, 0.1, 2, 2, 0, 0],
			'description' => "Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you'll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides."
		],
		[
			'name' => 'Commandement',
			'stats' => [50, 2, 200, 3, 0.3, 0.3, 0.2, 60, 50, 40, 0],
			'description' => "Deads get deads wariors from any kind of species. They were resurected by necromantians. In late game, you'll be able to use necromancians power to bring back your defeated units in fight, or to summon the defeated enemies on battlefield to fight by your sides."
		]
	];

    public function load(ObjectManager $manager)
    {
        foreach (self::DATA_SETS as $dataSet) {
    		$type = new Type();
    		$stat = new Stat();

    		$type->setName($dataSet['name']);
    		$type->setDescription($dataSet['description']);

    		foreach(Stat::DATA_ORDER as $index => $property){
    			$stat->{'set'.ucfirst($property)}($dataSet['stats'][$index]);
    		}

    		$manager->persist($stat);

    		$type->setStat($stat);

        	$manager->persist($type);
        	$manager->flush();
    	} 
    }
}
