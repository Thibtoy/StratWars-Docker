<?php

namespace App\Repository;

use App\Entity\Stat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Stat|null find($id, $lockMode = null, $lockVersion = null)
 * @method Stat|null findOneBy(array $criteria, array $orderBy = null)
 * @method Stat[]    findAll()
 * @method Stat[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Stat::class);
    }

    // /**
    //  * @return Stat[] Returns an array of Stat objects
    //  */
    
    public function findStatById($id)
    {
        return $this->createQueryBuilder('s')
            ->select('s.costPoints, s.move, s.life, s.vision, s.physicalDammages, s.distantDammages, s.magicalDammages, s.physicalDefense, s.distantDefense, s.magicalDefense, s.grade')
            ->where('s.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()[0]
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?Stat
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
