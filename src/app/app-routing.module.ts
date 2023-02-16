import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FetchedPostComponent } from './fetched-post/fetched-post.component';
import { FetchPicsComponent } from './fetch-pics/fetch-pics.component';
import { SinglePostComponent } from './single-post/single-post.component';
// import { PostCommentsComponent } from './post-comments/post-comments.component';
// import { SingleHomeComponent } from './single-home/single-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'posts',
    component: FetchedPostComponent,
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent,
  },
  {
    path: 'pics',
    component: FetchPicsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
