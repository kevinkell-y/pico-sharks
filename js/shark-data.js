"use strict";

/*======================================

   Shark Taxonomy Data

=======================================*/


var commonName = ["Sevengill Shark", "Thresher Shark", "Great White Shark",
                  "Bonito Shark", "School Shark", "Pacific Sharpnose Shark",
                  "Hammerhead Shark", "Smooth Hammerhead Shark", "Pacific Angel",
                  "Leopard Shark", "Blue Shark", "Horn Shark", "Extinct Mako Shark",
                  "Salmon Shark", "Megalodon", "Basking Shark", "Copper Shark",
                  "Tiger Shark", "Snaggletooth Shark", "Cosmopolitodus", "Spiny Dogfish",
                  "Bat Stingray", "Round Stingray", "Eagle Ray"];

// Spelling class incorrectly because it's a reserved keyword.
var classs = ["Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii",
             "Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii",
             "Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii",
             "Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii",
             "Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii",
             "Elasmobranchii", "Elasmobranchii", "Elasmobranchii", "Elasmobranchii"];

var order = ["Hexanchiformes", "Lamniformes", "Lamniformes", "Lamniformes", "Carcharhiniformes",
             "Carcharhiniformes", "Carcharhiniformes", "Squatiniformes", "Carcharhiniformes",
             "Carcharhiniformes", "Heterodontiformes", "Lamniformes", "Lamniformes",
             "Lamniformes", "Lamniformes", "Carcharhiniformes", "Carcharhiniformes",
             "Carcharhiniformes", "Lamniformes", "Squaliformes", "Myliobatiformes",
             "Myliobatiformes", "Myliobatiformes"];

var family = ["Hexanchidae", "Alopiidae", "Lamnidae", "Lamnidae", "Triakidae",
              "Carcharhinidae", "Sphyrnidae", "Sphyrnidae", "Squatinidae", "Triakidae",
              "Carcharhinidae", "Heterodontidae", "Lamnidae", "Lamnidae", "Otodontidae",
              "Cetorhinidae", "Carcharhinidae", "Carcharhinidae", "Hemigaleidae", "Lamnidae",
              "Squalidae", "Myliobatidae", "Urotrygonidae", "Myliobatidae"];

var genus = ["Notorynchus", "Alopias", "Carcharodon", "Isurus", "Galeorhinus", "Rhizoprionodon",
             "Sphyrna", "Sphyrna", "Squatina", "Triakis", "Prionace", "Heterodontus",
             "Isurus", "Lamna", "Otodus", "Cetorhinus", "Carcharhinus", "Galeocerdo",
             "Hemipristis", "Cosmopolitodus", "Squalus", "Myliobatis", "Urobatis", "Myliobatis"];

var species = ["maculatus", "vulpinus", "carcharias", "oxyrinchus", "galeus", "longurio",
               "sp.", "zygaena", "californica", "semifasciata", "glauca", "francisci",
               "planus", "ditropis", "megalodon", "maximus", "brachyurus", "cuvier",
               "sp.", "hastalis", "acanthias", "californica", "halleri", "sp."];

var author = ["Ayres, 1855", "Bonnaterre, 1788", "Smith, 1838", "Rafinesque, 1810",
              "Blainville, 1816", "Jordan & Gilbert, 1882", "Gill, 1872", "Linnaeus, 1758",
              "Ayrea, 1859", "Girard, 1855", "Linnaeus, 1758", "Girard, 1855",
              "Agassiz, 1856", "Hubbs & Follett, 1947", "Agassiz, 1856", "Blainville, 1816",
              "Gunther, 1870", "Peron & Lesueur, 1822", "Agassiz, 1843", "Agassiz, 1843",
              "Linnaeus, 1758", "Gill, 1865", "Cooper, 1863", "Cuvier, 1816"];

var alias = ["", "", "", " Shortfin Mako, Blue Pointer", "Soupfin Shark, Top Shark, Snapper Shark",
             "", "", "", "", "", "", "", "", "", "Otodus Meg, Charcharocles", "",
             "Bronze Whaler", "", "", "", "", "", "Whiptail Stingray", ""];


var learnMore =["https://en.wikipedia.org/wiki/Broadnose_sevengill_shark",
                "https://en.wikipedia.org/wiki/Common_thresher",
                "https://en.wikipedia.org/wiki/Great_white_shark",
                "https://en.wikipedia.org/wiki/Shortfin_mako_shark",
                "https://en.wikipedia.org/wiki/School_shark",
                "https://en.wikipedia.org/wiki/Pacific_sharpnose_shark",
                "https://en.wikipedia.org/wiki/Hammerhead_shark",
                "https://en.wikipedia.org/wiki/Smooth_hammerhead",
                "https://en.wikipedia.org/wiki/Pacific_angelshark",
                "https://en.wikipedia.org/wiki/Leopard_shark",
                "https://en.wikipedia.org/wiki/Blue_shark",
                "https://en.wikipedia.org/wiki/Horn_shark",
                "https://en.wikipedia.org/wiki/Isurus_planus",
                "https://en.wikipedia.org/wiki/Salmon_shark",
                "https://en.wikipedia.org/wiki/Megalodon",
                "https://en.wikipedia.org/wiki/Basking_shark",
                "https://en.wikipedia.org/wiki/Copper_shark",
                "https://en.wikipedia.org/wiki/Tiger_shark",
                "https://en.wikipedia.org/wiki/Snaggletooth_shark",
                "https://en.wikipedia.org/wiki/Cosmopolitodus",
                "https://en.wikipedia.org/wiki/Spiny_dogfish",
                "https://en.wikipedia.org/wiki/Bat_ray",
                "https://en.wikipedia.org/wiki/Round_stingray",
                "https://en.wikipedia.org/wiki/Eagle_ray
            ];
