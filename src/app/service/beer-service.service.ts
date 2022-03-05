import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeer } from '../model/beer_model';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  constructor(private http : HttpClient) { }

  getAllBeers(){
      return this.http.get<IBeer[]>('http://127.0.0.1:8000/api/beers');
  }

  addOneBeer(newBeer: IBeer){
    return this.http.post<IBeer>('http://127.0.0.1:8000/api/beers', newBeer);
  }

  updateBeer(id: number, updateOneBeer: IBeer){
    return this.http.put<IBeer>('http://127.0.0.1:8000/api/beers/'+ id, updateOneBeer)
  }

  deleteBeer(id: number){
      return this.http.delete<IBeer>('http://127.0.0.1:8000/api/beers/'+ id)
  }
}
