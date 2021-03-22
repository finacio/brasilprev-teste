import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AllPokemonsService } from './all-pokemons.service';

import { cards } from './cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allPokemons = <Object>[];
  public resultsOfSearch = <Object>[];
  public loading: boolean = false;
  public pages: Array<Number>;
  public currentPage: number;
  // public allPokemons = [
  //   {
  //     "id": "xy7-4",
  //     "name": "Bellossom",
  //     "nationalPokedexNumber": 182,
  //     "imageUrl": "https://images.pokemontcg.io/xy7/4.png",
  //     "imageUrlHiRes": "https://images.pokemontcg.io/xy7/4_hires.png",
  //     "types": [
  //       "Grass"
  //     ],
  //     "supertype": "Pokémon",
  //     "subtype": "Stage 2",
  //     "evolvesFrom": "Gloom",
  //     "hp": "120",
  //     "retreatCost": [
  //       "Colorless"
  //     ],
  //     "convertedRetreatCost": 1,
  //     "number": "4",
  //     "artist": "Mizue",
  //     "rarity": "Uncommon",
  //     "series": "XY",
  //     "set": "Ancient Origins",
  //     "setCode": "xy7",
  //     "attacks": [
  //       {
  //         "cost": [
  //           "Grass"
  //         ],
  //         "name": "Windmill",
  //         "text": "Switch this Pokémon with 1 of your Benched Pokémon.",
  //         "damage": "20",
  //         "convertedEnergyCost": 1
  //       },
  //       {
  //         "cost": [
  //           "Grass",
  //           "Colorless"
  //         ],
  //         "name": "Flower Tornado",
  //         "text": "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
  //         "damage": "60",
  //         "convertedEnergyCost": 2
  //       }
  //     ],
  //     "weaknesses": [
  //       {
  //         "type": "Fire",
  //         "value": "×2"
  //       }
  //     ]
  //   }]

  constructor(
    private service: AllPokemonsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loading = true
    console.log('ngOnInit')
    this.service.list().subscribe((data: cards) => {
      this.allPokemons = data.cards.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });;
      this.loading = false
      this.pages = new Array(10);
      this.currentPage = 1;
      console.log('verificando o retorno', this.allPokemons)
    },
    (error) => {
      console.log('houve um problema', error);
      this.loading = false
    })
  }

  findSpecificPokemon(name){
    this.loading = true
    this.service.getSpecific(name.value).subscribe((data: cards) => {
      this.allPokemons = data.cards.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
      this.loading = false
    },
    (error) => {
      console.log('houve um problema', error);
      this.loading = false
    })
  }

  previous(){
    this.allPokemons = [];
    this.loading = true
    this.currentPage = this.currentPage - 1;
    this.service.getPage(this.currentPage - 1).subscribe((data: cards) => {
      this.allPokemons = data.cards.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
      this.loading = false
    },
    (error) => {
      console.log('houve um problema', error);
      this.loading = false
    })
  }

  pageNumber(num){
    console.log('pageNumber')
    this.allPokemons = [];
    this.loading = true
    this.currentPage = num;
    this.service.getPage(num).subscribe((data: cards) => {
      this.allPokemons = data.cards.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
      this.loading = false
    },
    (error) => {
      console.log('houve um problema', error);
      this.loading = false
    })
  }

  next(){
    this.allPokemons = [];
    this.loading = true
    this.currentPage = this.currentPage + 1;
    this.service.getPage(this.currentPage + 1).subscribe((data: cards) => {
      this.allPokemons = data.cards.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
      this.loading = false

    },
    (error) => {
      console.log('houve um problema', error);
      this.loading = false
    })
  }

  redirectoToSpecificPokemon(id) {
    this.router.navigate([`/details/${id}`]);
  }

}
