import { Component, OnInit, Input } from '@angular/core';
import { ThongBaoSVService } from '../service/thong-bao-sv.service';
import {Product} from'src/app/components/product/Product';
import { DataProduct } from '../product/MockProduct';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @Input() dataproduct:Product[];
  product:Product=new Product;
  constructor(private thongBaoSVService : ThongBaoSVService) { }
anh: 'https://lh4.googleusercontent.com/-0AMm8haCjH8/XJnh9Qyp73I/AAAAAAAABPI/D4T2lwgp8Hg9LBWeH8t6lv8lgvFX5FGggCLcBGAs/s1600/Eureka-WaDo-SLM04-XanhLo.jpg'
  ngOnInit() {
  }
//  showadd(sds){
//    console.log("hello");
  
//  }

// showadd2(){
//   this.thongBaoSVService.showMS()
//  }
addProduct(product){
   this.thongBaoSVService.addProduct(this.product).subscribe();
   
 }
 onSubmit(formadd){
   console.log(formadd.value)
   if(formadd.valid){
     const {value}=formadd;
    this.thongBaoSVService.addProduct(formadd.value).subscribe(data=>this.dataproduct.push(data));
   }
 }
}
