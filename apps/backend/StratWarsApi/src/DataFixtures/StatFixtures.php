<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Stat;

class StatFixtures extends Fixture
{
	

	// const DATA_SETS = [
	// 	[3, 0, 0, 0, 0.10, 0.15, -0.10, 3, 0, 0, 0]
	// ];

    public function load(ObjectManager $manager)
    {
    	// foreach (self::DATA_SETS as $set) {
    	// 	$stat = new Stat();
    	// 	foreach (self::DATA_ORDER as $index => $key) {
    	// 		$stat->{'set'.ucfirst($key)}($set[$index]);
    	// 	}
     //    	$manager->persist($stat);
    	// }
     //    $manager->flush();
    }
}
