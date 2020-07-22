<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StatRepository")
 */
class Stat
{
    const DATA_ORDER = [
        'costPoints', 
        'move', 
        'life', 
        'vision',
        'physicalDefense', 
        'distantDefense', 
        'magicalDefense', 
        'physicalDammages', 
        'distantDammages', 
        'magicalDammages', 
        'grade'
    ];
    
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $costPoints;

    /**
     * @ORM\Column(type="integer")
     */
    private $move;

    /**
     * @ORM\Column(type="integer")
     */
    private $life;

    /**
     * @ORM\Column(type="integer")
     */
    private $vision;

    /**
     * @ORM\Column(type="integer")
     */
    private $physicalDammages;

    /**
     * @ORM\Column(type="integer")
     */
    private $distantDammages;

    /**
     * @ORM\Column(type="integer")
     */
    private $magicalDammages;

    /**
     * @ORM\Column(type="decimal", precision=4, scale=2)
     */
    private $physicalDefense;

    /**
     * @ORM\Column(type="decimal", precision=4, scale=2)
     */
    private $distantDefense;

    /**
     * @ORM\Column(type="decimal", precision=4, scale=2)
     */
    private $magicalDefense;

    /**
     * @ORM\Column(type="integer")
     */
    private $grade;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCostPoints(): ?int
    {
        return $this->costPoints;
    }

    public function setCostPoints(int $costPoints): self
    {
        $this->costPoints = $costPoints;

        return $this;
    }

    public function getMove(): ?int
    {
        return $this->move;
    }

    public function setMove(int $move): self
    {
        $this->move = $move;

        return $this;
    }

    public function getLife(): ?int
    {
        return $this->life;
    }

    public function setLife(int $life): self
    {
        $this->life = $life;

        return $this;
    }

    public function getVision(): ?int
    {
        return $this->vision;
    }

    public function setVision(int $vision): self
    {
        $this->vision = $vision;

        return $this;
    }

    public function getPhysicalDammages(): ?int
    {
        return $this->physicalDammages;
    }

    public function setPhysicalDammages(int $physicalDammages): self
    {
        $this->physicalDammages = $physicalDammages;

        return $this;
    }

    public function getDistantDammages(): ?int
    {
        return $this->distantDammages;
    }

    public function setDistantDammages(int $distantDammages): self
    {
        $this->distantDammages = $distantDammages;

        return $this;
    }

    public function getMagicalDammages(): ?int
    {
        return $this->magicalDammages;
    }

    public function setMagicalDammages(int $magicalDammages): self
    {
        $this->magicalDammages = $magicalDammages;

        return $this;
    }

    public function getPhysicalDefense(): ?string
    {
        return $this->physicalDefense;
    }

    public function setPhysicalDefense(string $physicalDefense): self
    {
        $this->physicalDefense = $physicalDefense;

        return $this;
    }

    public function getDistantDefense(): ?string
    {
        return $this->distantDefense;
    }

    public function setDistantDefense(string $distantDefense): self
    {
        $this->distantDefense = $distantDefense;

        return $this;
    }

    public function getMagicalDefense(): ?string
    {
        return $this->magicalDefense;
    }

    public function setMagicalDefense(string $magicalDefense): self
    {
        $this->magicalDefense = $magicalDefense;

        return $this;
    }

    public function getGrade(): ?int
    {
        return $this->grade;
    }

    public function setGrade(int $grade): self
    {
        $this->grade = $grade;

        return $this;
    }
}
