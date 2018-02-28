import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  filterListen: Observable<{filterOption:string, filterText: string, filterActive: boolean}>;
  private filterProperties: Subject<{filterOption:string, filterText: string, filterActive: boolean}>;

  constructor(private _http: HttpClient) {
    this.filterProperties = new Subject<{filterOption:string, filterText: string, filterActive: boolean}>();
    this.filterListen = this.filterProperties.asObservable();
  }


  filterData(filterOption: string, filterText: string, filterActive: boolean){
    this.filterProperties.next({ filterOption: filterOption, filterText: filterText, filterActive: filterActive});
  }

  getData(): Observable<any>{
    return this._http.get('assets/contacts.json');
  }
}


