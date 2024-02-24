import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  // items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  items: { title: string; episodes: string;  imageUrl: string ; time: string }[] = [
    {
      title: 'Strength training 1',
      episodes: '4 Episodes',
      imageUrl: 'assets/image/home/Home_A.jpg',
      time:'55m'
    },
    {
      title: 'Strength training 2',
      episodes: '4 Episodes',
      imageUrl: 'assets/image/home/Home_B.jpg',
      time:'55m'
    },
    {
      title: 'Program Mass',
      episodes: '4 Episodes',
      imageUrl: 'assets/image/home/Home_C.jpg',
      time:'55m'
    },
    // Add similar objects for other items
  ];

}
