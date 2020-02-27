import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SocketComponent } from './pages/socket/socket.component';


const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not found', component: NotFoundComponent },
  { path: 'socket', component: SocketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
