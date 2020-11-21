import { DbApiService } from './../../services/db-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bosts',
  templateUrl: './bosts.component.html',
  styleUrls: ['./bosts.component.css']
})
export class BostsComponent implements OnInit {

  constructor(private db:DbApiService) { }
 bosts: any[];
  ngOnInit(): void {
      this.db.bostss.subscribe(a=>{ 
      this.bosts =(a as any[])
      console.log(this.bosts )
    })  
  
  }

  CreatePost(title)
  {
    let post={title:title,id:''};
    this.db.CreatePost(post).subscribe(Response=>
      {
        this.bosts.splice(0,0,post)
      }) 
  }
  updatePost(Post,UpdateValue)
  {
    let udatepost={title:UpdateValue,id:Post.id}
    this.db.updatePost(udatepost).subscribe(Response=>{
      let index=this.bosts.indexOf(Post);
      this.bosts[index]=udatepost;
    })
  }
  deletePost(post)
  {
    let index=this.bosts.indexOf(post);
    this.db.deletepost(post).subscribe(Response=>
      {
        this.bosts.splice(index,1);
      })
  }
}
