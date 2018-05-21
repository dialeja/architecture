import { Injectable } from '@angular/core';
import { PostData} from './PostData'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(public http:HttpClient) { }

  url : string = 'https://gist.githubusercontent.com/jdjuan/165053e6cb479a840c88e3e94b33e724/raw/4542ef950b2b32fbe2eea0b3df0338ffe67eae12/todo.json';
  post: PostData[];

}
