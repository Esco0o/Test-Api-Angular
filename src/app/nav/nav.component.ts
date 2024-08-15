import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  @ViewChild('nav') el!:ElementRef

  @HostListener('window:scroll') onScroll(){
    if(scrollY > 100){
      this.el.nativeElement.style.paddingBlock = '20px'
    }else{
       this.el.nativeElement.style.padding = '10px'
    }
    
  }
}
