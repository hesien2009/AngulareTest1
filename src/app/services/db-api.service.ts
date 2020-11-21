import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { JSDocComment } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class DbApiService {

  constructor(private http: HttpClient) {
    
   }
//bservable=Observable.interval(1000).take(3).subscribe(a=> {
  //console.log(a);
//})
  GetAllCategories()
  {
    return ['ANTIBIOTIC','COSMOTICS','CHEMICALS','OTHERS'];
    
  }
url: string ="https://jsonplaceholder.typicode.com/posts";

bosts ;
 bostss =this.http.get(this.url);

 CreatePost(post)
 {
   return this.http.post(this.url,post)
 }
 updatePost(post)
 {
   return this.http.put(this.url+"/"+post.id,JSON.stringify(post) );
   
 }
 deletepost(post)
 {
   return this.http.delete(this.url+"/"+post.id);
 }
}
