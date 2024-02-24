import {Component} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  // items: string[]=[];
  items: { title: string; episodes: string;  imageUrl: string ; time: string }[]=[];

  constructor(private  homeService : HomeService) {
    this.items = this.homeService.items;
  }




}
