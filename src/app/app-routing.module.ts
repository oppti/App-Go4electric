import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { VehiclePageComponent } from './pages/vehicle-page/vehicle-page.component';
import { ChargerPagesComponent } from './pages/charger-pages/charger-pages.component';
import { CondominumPageComponent } from './pages/condominum-page/condominum-page.component';


const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'clients', component: ClientPageComponent },
      { path: 'vehicles', component: VehiclePageComponent },
      { path: 'chargers', component: ChargerPagesComponent },
      { path: 'condominiums',  component: CondominumPageComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
