<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArmyRepository")
 */
class Army
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="armies")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Kind", inversedBy="armies")
     * @ORM\JoinColumn(nullable=false)
     */
    private $kind;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Squad", mappedBy="army", orphanRemoval=true)
     */
    private $squads;

    public function __construct()
    {
        $this->squads = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getKind(): ?Kind
    {
        return $this->kind;
    }

    public function setKind(?Kind $kind): self
    {
        $this->kind = $kind;

        return $this;
    }

    /**
     * @return Collection|Squad[]
     */
    public function getSquads(): Collection
    {
        return $this->squads;
    }

    public function addSquad(Squad $squad): self
    {
        if (!$this->squads->contains($squad)) {
            $this->squads[] = $squad;
            $squad->setArmy($this);
        }

        return $this;
    }

    public function removeSquad(Squad $squad): self
    {
        if ($this->squads->contains($squad)) {
            $this->squads->removeElement($squad);
            // set the owning side to null (unless already changed)
            if ($squad->getArmy() === $this) {
                $squad->setArmy(null);
            }
        }

        return $this;
    }
}
