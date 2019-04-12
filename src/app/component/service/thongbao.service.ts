import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ThongbaoService {

  constructor() { }
  ShowMess(){
    console.log("hello-service")
  }
}
