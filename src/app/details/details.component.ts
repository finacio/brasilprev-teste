import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { PokemonDetailService } from './pokemon-detail.service';

import { card } from './card'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public detailsPokemon: Object;
  public loading: boolean = false;

  constructor(
    private service: PokemonDetailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true
    this.service.getSpecific(this.route.snapshot.params.id).subscribe(
      (data: card) => {
      this.detailsPokemon = data.card;
      this.loading = false
      console.log('retorno api de details ', this.detailsPokemon)
      }, (error) => {
        this.router.navigate(['not-found/']);
        console.log('retorno do erro', error);
      })
  }

}
