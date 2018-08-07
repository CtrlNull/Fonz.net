import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'blog', component: BlogComponent},
  // { path: 'tools', component: ToolsComponent},
  // { path: 'chatRoom', component: ChatroomComponnt},
  // { path: 'contact', component: ContactComponent}
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

