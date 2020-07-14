<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SquadRepository")
 */
class Squad
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $squadFilling;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Army", inversedBy="squads")
     * @ORM\JoinColumn(nullable=false)
     */
    private $army;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Type")
     * @ORM\JoinColumn(nullable=false)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SquadUnit", mappedBy="squad", orphanRemoval=true)
     */
    private $squadUnits;

    public function __construct()
    {
        $this->squadUnits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSquadFilling(): ?int
    {
        return $this->squadFilling;
    }

    public function setSquadFilling(?int $squadFilling): self
    {
        $this->squadFilling = $squadFilling;

        return $this;
    }

    public function getArmy(): ?Army
    {
        return $this->army;
    }

    public function setArmy(?Army $army): self
    {
        $this->army = $army;

        return $this;
    }

    public function getType(): ?Type
    {
        return $this->type;
    }

    public function setType(?Type $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|SquadUnit[]
     */
    public function getSquadUnits(): Collection
    {
        return $this->squadUnits;
    }

    public function addSquadUnit(SquadUnit $squadUnit): self
    {
        if (!$this->squadUnits->contains($squadUnit)) {
            $this->squadUnits[] = $squadUnit;
            $squadUnit->setSquad($this);
        }

        return $this;
    }

    public function removeSquadUnit(SquadUnit $squadUnit): self
    {
        if ($this->squadUnits->contains($squadUnit)) {
            $this->squadUnits->removeElement($squadUnit);
            // set the owning side to null (unless already changed)
            if ($squadUnit->getSquad() === $this) {
                $squadUnit->setSquad(null);
            }
        }

        return $this;
    }
}
