import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThongbaoService {

  constructor() { }
  showMessage(){
    console.log('Hello My Friends!')
  }
}
