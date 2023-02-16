import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FetchedPostComponent } from './fetched-post/fetched-post.component';
import { FetchPicsComponent } from './fetch-pics/fetch-pics.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FetchedPostComponent,
    FetchPicsComponent,
    SinglePostComponent,
    PostCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
