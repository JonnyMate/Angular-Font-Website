import { Component, OnInit } from "@angular/core";

@Component({
  inputs: ["userInput"],
  selector: "app-fonts",
  templateUrl: "./fonts.component.html",
  styleUrls: ["./fonts.component.scss"]
})
export class FontsComponent implements OnInit {
  title = "angular-font-website";

  constructor() {}

  ngOnInit() {}
}
