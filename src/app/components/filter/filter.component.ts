import { Component, OnInit } from '@angular/core';
import {TableService} from "../table/table.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterList: {id: number, text: string}[] = [
    {id: 0, text: "Name"},
    {id: 1, text: "Surname"},
    {id: 2, text: "City"},
    {id: 3, text: "Email"},
    {id: 4, text: "Phone"}
  ];

  filterOption = "City";
  filterText = "";
  filterActive = false;

  constructor(private _tableService:TableService) {
  }

  ngOnInit() {
  }

  filterData() {
    this._tableService.filterData(this.filterOption, this.filterText, this.filterActive);
    this.filterOption = "City";
    this.filterText = "";
    this.filterActive = false;
  }
}
