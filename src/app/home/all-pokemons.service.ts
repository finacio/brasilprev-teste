import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AllPokemonsService {

  private readonly API = 'https://api.pokemontcg.io/v1/cards'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${this.API}`)
  }

  getSpecific(pokemon){
    return this.http.get(`${this.API}?name=${pokemon}`)
  }

  getPage(page){
    return this.http.get(`${this.API}?page=${page}`)
  }
}
