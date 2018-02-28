import { Component, OnInit } from '@angular/core';
import {TableService} from "./table.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  jsonListFull: any;
  jsonList: any;
  userInfo = {
    "name": "",
    "surname": "",
    "city": "",
    "email": "",
    "phone": "",
  };

  mailto = "";
  imgPath = "";

  sortByName = false;
  isShownId = -1;

  constructor(private _tableService:TableService, private _http: HttpClient) {
  }

  ngOnInit() {
    this._tableService.getData().subscribe(data => {
      this.jsonList = data;
      this.jsonListFull = data
    });
    this._tableService.filterListen.subscribe(data => {
      this.filterData(data)
    });
  }

  showInformation(item:any) {
    this.isShownId = item.id;
    this.userInfo.name = item.name;
    this.userInfo.surname = item.surname;
    this.userInfo.city = item.city;
    this.userInfo.email = item.email;
    this.userInfo.phone = item.phone;
    this.mailto = "mailto:" + item.email +"?Subject=Hello";
    this.imgPath = "assets/userpic.jpg";
  }

  sortDataByName() {
    if(this.sortByName) {
      this.jsonList.sort((a, b) => 0 - (a.name > b.name ? 1 : -1));
      this.sortByName = false;
    } else {
      this.jsonList.sort((a, b) => 0 - (a.name > b.name ? -1 : 1));
      this.sortByName = true;
    }
  }

  filterData(data: {filterOption: string, filterText: string, filterActive: boolean}){
    this.jsonList = this.jsonListFull.map(x => Object.assign({}, x));
    if(data.filterActive) {
      this.removeInactive()
    }

    if(data.filterText){
      switch(data.filterOption) {
        case "Name": {
          this.jsonList = this.jsonList.filter(
            item => item.name.indexOf(data.filterText) !== -1);
          break;
        }
        case "Surname": {
          this.jsonList = this.jsonList.filter(
            item => item.surname.indexOf(data.filterText) !== -1);
          break;
        }
        case "City": {
          this.jsonList = this.jsonList.filter(
            item => item.city.indexOf(data.filterText) !== -1);
          break;
        }
        case "Email": {
          this.jsonList = this.jsonList.filter(
            item => item.email.indexOf(data.filterText) !== -1);
          break;
        }
        case "Phone": {
          this.jsonList = this.jsonList.filter(
            item => item.phone.indexOf(data.filterText) !== -1);
          break;
        }
      }
    }
  }

  removeInactive() {
    let index: number;
    for (let item of this.jsonList) {
      if(!item.active) {
        index = this.jsonList.indexOf(item, 0);
        this.jsonList.splice(index, 1);
      }
    }
  }
}

