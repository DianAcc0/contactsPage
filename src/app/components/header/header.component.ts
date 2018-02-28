import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = "Diana";
  userSurname:string = "Cairn";
  menuClicked:boolean = false;
  chosenTab:number = 1;
  menuList: {id: number, text: string, icon: string}[] = [
    {id: 0, text: "Groups", icon: "fa fa-group"},
    {id: 1, text: "Frequently contacted", icon: "fa fa-comments "},
    {id: 2, text: "Preferences", icon: "fa fa-wrench"},
    {id: 3, text: "Log out", icon: "fa fa-power-off "}
  ];

  constructor() { }

  ngOnInit() {
  }

}
