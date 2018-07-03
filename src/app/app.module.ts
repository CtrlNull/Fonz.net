import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { MarketingLinkComponent } from './marketingLink/marketingLink.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      ResumeComponent,
      MarketingLinkComponent,
      FooterComponent,
      BlogComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
