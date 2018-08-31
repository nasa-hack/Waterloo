import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }

  
  getData(lat,long){
    return this.http.get("hello world"+lat+long);
}

}
