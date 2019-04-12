import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/Product';
import { ActivatedRoute} from '@angular/router';
import { ThongBaoSVService} from '../service/thong-bao-sv.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
// @Input('infoProduct') detail:Product;
product:Product;

  constructor(private thongBaoSVService:ThongBaoSVService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getproduct();
    
  }
getproduct(){
  const id= +this.route.snapshot.paramMap.get('id');
  this.thongBaoSVService.showdetail(id).subscribe(data=>this.product=data)
//  console.log(this.product);

}
save(product){
  
    this.thongBaoSVService.editproduct(this.product).subscribe(
    );
    
  
}
}
