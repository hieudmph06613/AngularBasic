import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from '../product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  products: Product[];
  product: Product = new Product();
  action;

  constructor(private dataService: DataService, private route: Router) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(data => this.products = data);
  }

  addProduct() {
    const newProduct = { id: this.products.length + 1, ...this.product };
    this.dataService.add(newProduct).subscribe(data => {
      this.products.push(newProduct);
    });
    this.product = new Product();
  }

  delete(id) {
    this.dataService.delete(id).subscribe(data => {
      this.products = this.products.filter(item => item.id !== data.id);
    });
  }

  edit(pro: Product) {
    this.action = 'edit';
    const updatedPro = { ...pro };
    this.product = updatedPro;
  }

  update() {
    this.dataService.update(this.product).subscribe(data => {
      this.loadData();
    });
    this.product = new Product();
  }

  new() {
    this.action = 'add';
    this.product = new Product();
  }

  onSubmit(form) {
    if (form.valid) {
      console.log(form.value);
      const { value } = form;// == const value = form.value;
      const newProduct = { id: this.products.length + 1, ...value };// use new ID that override obj.ID
      this.dataService.add(newProduct).subscribe(data => {
        this.products.push(newProduct);
      });
    } else {
      console.log("FORM INVALID");
    }

  }
}
