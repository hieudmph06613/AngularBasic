import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title : String ='Front-end Framework';
  statusProduct : boolean =true //con hang;
  imgLynk: String="https://dummyimage.com/200x200/c6d426/07055e";
  cart_title: String="Sản Phẩm";
  product = {
     cart_title:'Sản Phẩm',
  }

}
