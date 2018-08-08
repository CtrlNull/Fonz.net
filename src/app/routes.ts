import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { UnderContructionComponent } from './under-contruction/under-contruction.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tools', component: UnderContructionComponent},
  { path: 'chatRoom', component: UnderContructionComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

