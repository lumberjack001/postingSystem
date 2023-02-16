import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  @Input() comments: any;
  // @Input() getPostComments: any;
 
  userId: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { 
    // const x = this.activatedRoute.snapshot.params['id'];
    // console.log(this.activatedRoute.params)
  }

  ngOnInit(): void {
    // this.getPostComments()

  }

  // getPostComments(){
    
  //   this.http.get(`http://jsonplaceholder.typicode.com/posts/${this.userId}/comments`)
  //   .subscribe(res=>{
  //     console.log(res)
      
  //     this.post = res
  //   })
  // }
}
