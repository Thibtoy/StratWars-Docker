<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SquadUnitRepository")
 */
class SquadUnit
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Squad", inversedBy="squadUnits")
     * @ORM\JoinColumn(nullable=false)
     */
    private $squad;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Unit")
     * @ORM\JoinColumn(nullable=false)
     */
    private $unit;

    /**
     * @ORM\Column(type="integer")
     */
    private $positionInSquad;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSquad(): ?Squad
    {
        return $this->squad;
    }

    public function setSquad(?Squad $squad): self
    {
        $this->squad = $squad;

        return $this;
    }

    public function getUnit(): ?Unit
    {
        return $this->unit;
    }

    public function setUnit(?Unit $unit): self
    {
        $this->unit = $unit;

        return $this;
    }

    public function getPositionInSquad(): ?int
    {
        return $this->positionInSquad;
    }

    public function setPositionInSquad(int $positionInSquad): self
    {
        $this->positionInSquad = $positionInSquad;

        return $this;
    }
}
