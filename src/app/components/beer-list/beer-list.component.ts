import { IBeer } from 'src/app/model/beer_model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BeerServiceService } from 'src/app/service/beer-service.service';

import { FormControl, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit,OnDestroy  {

    public beers: IBeer[] = []
    public findBeer: IBeer[] = []
    public beerToEdit: IBeer = new IBeer

    public subscription : Subscription = new Subscription
  
    constructor(private service: BeerServiceService) { }

  option = this.beers
  
  aaa(option: MatOption){
    console.log(option.value.name)
    this.searchAuto(option.value.name)
  }

  displayName(option){
    return option.name
  }

  searchAuto(text){
    console.log(text)
    let searchAuto: IBeer = this.beers.find(x => x.name.toLocaleLowerCase() == text.toLocaleLowerCase())
    if(searchAuto){
        this.findBeer.push(searchAuto)
        this.beers = this.findBeer
    }
    if(!searchAuto){
        this.findBeer = []
        this.ngOnInit()
    }
    }

    editForm = new FormGroup({
        name: new FormControl(),
        country: new FormControl(),
        price: new FormControl()
    })

    editOneBeer(b){
        this.beerToEdit = b
        this.editForm.setValue({
            name: b.name,
            country: b.country,
            price: b.price
        })
    }

    async editBeer(){
        console.log(this.editForm.value)
        await this.service.updateBeer(this.beerToEdit.id, this.editForm.value).subscribe(() => 
            {
                this.editForm.setValue({
                    name:null,
                    country: null,
                    price: null
                })
                return this.ngOnInit()
            })
    }

    deleteItem(id){
        this.service.deleteBeer(id).subscribe(() => 
        {
            this.ngOnInit()
        })
    }


  ngOnInit(): void {
    this.subscription.add(
        this.service.getAllBeers().subscribe(data => this.beers = data)
    )
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
