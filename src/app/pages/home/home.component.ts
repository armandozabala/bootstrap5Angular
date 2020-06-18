import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

cols = [{
   img: 'https://picsum.photos/500/300',
   title: 'Title',
   description: 'Description'
},
{
  img: 'https://picsum.photos/500/300',
  title: 'Title',
  description: 'Description'
},
{
  img: 'https://picsum.photos/500/300',
  title: 'Title',
  description: 'Description'
},
{
  img: 'https://picsum.photos/500/300',
  title: 'Title',
  description: 'Description'
},
{
 img: 'https://picsum.photos/500/300',
 title: 'Title',
 description: 'Description'
},
{
 img: 'https://picsum.photos/500/300',
 title: 'Title',
 description: 'Description'
}];
  user:any = {};

   exampleModal:any;

  constructor() {


  }

  ngOnInit(): void {







  }

  getRandomArbitrary(min) {
    let index = Math.floor(Math.random() * (999 - min) + min);

    return `https://picsum.photos/id/${index}/500/300`;
 }



}
