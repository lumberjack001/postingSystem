import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MasterService } from '../service/master.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fetched-post',
  templateUrl: './fetched-post.component.html',
  styleUrls: ['./fetched-post.component.css']
})
export class FetchedPostComponent implements OnInit {
  posts: any = []
  postId: any;
  isDelete: boolean = false;
  newPost: any;
  newHead: any;
  newBody: any;

  constructor(private http: HttpClient, private service: MasterService) {
  this.service.getPost().subscribe((res)=>{
    console.log(res)
    this.posts = res
  })
   }

   deletePost(id: any){
    console.log(id)
    this.posts = this.posts.filter((post: any)=>post.id != id)
   }


   editPost(id:any){
    this.newPost = prompt('what would you like to change?')
    console.log(this.newPost);
    let upd_obj = this.posts.find((post: any) => post.id === id);
    if(this.newPost === 'head'){
      this.newHead = prompt('what should the title be?')
      upd_obj.title = this.newHead
    } else if(this.newPost === 'body'){
      this.newBody = prompt('what should the body be?')
      upd_obj.body = this.newBody
    }
    
    
// console.log("Before Object Updation: ", Array_obj[upd_obj]);
// Array_obj[upd_obj].name = "Harry";
   }
  
  ngOnInit(): void {
  }

}
