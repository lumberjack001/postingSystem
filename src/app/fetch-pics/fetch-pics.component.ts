import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-pics',
  templateUrl: './fetch-pics.component.html',
  styleUrls: ['./fetch-pics.component.css']
})
export class FetchPicsComponent implements OnInit {

  pics: any= []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPics()
  }

  getPics(){
    this.http.get('http://jsonplaceholder.typicode.com/photos?_limit=5')
    .subscribe((res)=>{
      console.log(res)
      this.pics = res
    })
  }
}
