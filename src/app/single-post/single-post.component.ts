import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../service/master.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post: any = []
  postId: any;
  comments: any;
  hide: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { 
    this.postId = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getSinglePost()
  }

  toggleOpen(){
    this.hide = true;
  }
  toggleClose(){
    this.hide = false;
  }

  getSinglePost(){
    this.http.get(`http://jsonplaceholder.typicode.com/posts/${this.postId}`)
    .subscribe(res=>{
      // console.log(res)
      this.post = res
    })
  }

getPostComments(){
    
    this.http.get(`http://jsonplaceholder.typicode.com/posts/${this.postId}/comments`)
    .subscribe(res=>{
      console.log(res)
      this.comments = res
      console.log(this.comments)
    })
  }

}
