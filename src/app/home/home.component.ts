import { Component, inject, OnInit } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Iproduct } from '../i-products';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 constructor(private _MoviesDataService:MoviesDataService){}
 

 products:Iproduct[]= []
 rrating!:Iproduct

 ngOnInit(): void {
     this._MoviesDataService.getMovies().subscribe({
      next:(res)=>{
        this.products = res
        this.rrating = res.rating
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
      }
     })
 }
}
