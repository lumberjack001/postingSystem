import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title: string = 'Home page'
  text: string = 'welcome to the Home page, click below to fetch posts'
  pText: string = 'click the button below to fetch pics'

  constructor() { }

  ngOnInit(): void {
  }

}
