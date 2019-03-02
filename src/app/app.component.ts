import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Bài 1";
  public myArr: Array<> = ["Dat", "Le", "Trong"];
  public myObj: { id; name }[] = [
    {
      id: 1,
      name: "Dat"
    },
    {
      id: 2,
      name: "Quynh"
    }
  ];
}
