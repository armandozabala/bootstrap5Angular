import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 user:any = {};
 exampleModal:any;

  constructor() { }

  ngOnInit(): void {



  }

  onSubmit(){



}

getRandomArbitrary(min) {
  let index = Math.floor(Math.random() * (999 - min) + min);

  return `https://picsum.photos/id/${index}/1000/400`;
}

}
