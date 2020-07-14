<?php

namespace App\Repository;

use App\Entity\SquadUnit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SquadUnit|null find($id, $lockMode = null, $lockVersion = null)
 * @method SquadUnit|null findOneBy(array $criteria, array $orderBy = null)
 * @method SquadUnit[]    findAll()
 * @method SquadUnit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SquadUnitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SquadUnit::class);
    }

    // /**
    //  * @return SquadUnit[] Returns an array of SquadUnit objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SquadUnit
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
