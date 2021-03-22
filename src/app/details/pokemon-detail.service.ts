import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {
  private readonly API = 'https://api.pokemontcg.io/v1/cards'

  constructor(private http: HttpClient) { }

  getSpecific(pokemon){
    return this.http.get(`${this.API}/${pokemon}`)
  }
}
