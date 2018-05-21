import { delay, pluck } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http'




@Injectable()
export class YesOrNoService {
  url: string ='http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { 
   
  }

  getAnswer(){
    return this.http.get(this.url).pipe(pluck('body'),delay(300))
  }

  test (){
    console.log("Hello")
  }
}
