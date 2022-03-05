import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBeer } from 'src/app/model/beer_model';
import { BeerServiceService } from 'src/app/service/beer-service.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.component.html',
  styleUrls: ['./add-beer.component.css']
})
export class AddBeerComponent implements OnInit {

    public newBeer:IBeer = new IBeer()
  constructor(private service: BeerServiceService, private myRouter: Router ) { }

    async addNewBeer(){
        await this.service.addOneBeer(this.newBeer).toPromise()
        this.myRouter.navigateByUrl('/beer-list')
    }

  ngOnInit(): void {
  }

}
