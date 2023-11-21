<?php

namespace Shapes;

// Membuat Trait
trait BangunRuang
{
    public function Bentuk($message)
    {
        echo "Bentuk: $message\n";
    }
}

// Membuat Abstract Class
abstract class Shape
{
    abstract public function hitungVolume();
}

// Membuat Class dengan menggunakan Inheritance dan Abstract Class
class Cylinder extends Shape
{
    use BangunRuang;

    private $radius;
    private $tinggi;

    public function __construct($radius, $tinggi)
    {
        $this->radius = $radius;
        $this->tinggi = $tinggi;
    }

    public function hitungVolume()
    {
        return 3.14 * $this->radius * $this->radius * $this->tinggi;
    }
}

// Membuat Class dengan menggunakan Namespace dan Magic Method
class Piramid extends Shape
{
    use BangunRuang;

    private $sisi_alas;
    private $tinggi;

    public function __construct($sisi_alas, $tinggi)
    {
        $this->sisi_alas = $sisi_alas;
        $this->tinggi = $tinggi;
    }

    public function hitungVolume()
    {
        return (1 / 3) * $this->sisi_alas * $this->sisi_alas * $this->tinggi;
    }

    public function __toString()
    {
        return "Piramid dengan alas $this->sisi_alas dan tinggi $this->tinggi";
    }
}

// Membuat objek Cylinder dan Piramid
$myCylinder = new Cylinder(7, 9);
$myPiramid = new Piramid(6, 8);

// Menggunakan method dari Trait
$myCylinder->Bentuk("Tabung");
$myPiramid->Bentuk("Piramid");

// Menggunakan method dari Class
echo "Volume Tabung: " . $myCylinder->hitungVolume() . "\n";
echo $myPiramid . " volume: " . $myPiramid->hitungVolume() . "\n";
