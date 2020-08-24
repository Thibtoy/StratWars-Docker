<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UnitRepository")
 */
class Unit
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Kind", inversedBy="units")
     * @ORM\JoinColumn(nullable=false)
     */
    private $kind;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Type", inversedBy="units")
     */
    private $type;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Stat", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $stat;

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

    public function getKind(): ?Kind
    {
        return $this->kind;
    }

    public function setKind(?Kind $kind): self
    {
        $this->kind = $kind;

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

    public function getStat(): ?Stat
    {
        return $this->stat;
    }

    public function getRealStat(): array
    {
        $stat = $this->getStat();
        $kindStat = $this->getKind()->getStat();
        $typeStat = $this->getType()->getStat();

        $methods = get_class_methods($stat);

        $realStat = [];

        foreach ($methods as $value) {
            if (preg_match('/^get/', $value) && "getId" !== $value)
                $realStat[lcfirst(preg_replace('/^get/', "", $value))] = $stat->$value()+$kindStat->$value()+$typeStat->$value();
        }

        return $realStat;
    }

    public function setStat(Stat $stat): self
    {
        $this->stat = $stat;

        return $this;
    }
}
