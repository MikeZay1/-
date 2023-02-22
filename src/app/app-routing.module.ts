import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './Posts/posts.component';
import { MainComponent } from './main/main.component';
import { OtherComponent } from './other/other.component';
import { PracComponent } from './prac/prac.component';

const routes: Routes = [
  {
    path: 'Posts',
    component: PostsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'other',
    component: OtherComponent,
  },
  {
    path: 'prac',
    component: PracComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
