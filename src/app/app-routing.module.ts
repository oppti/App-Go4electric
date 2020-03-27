import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ClientPageComponent } from './pages/admin/client-page/client-page.component';
import { VehiclePageComponent } from './pages/admin/vehicle-page/vehicle-page.component';
import { ChargerPagesComponent } from './pages/admin/charger-pages/charger-pages.component';
import { CondominumPageComponent } from './pages/admin/condominum-page/condominum-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { AuthUserGuardService } from './services/auth-user-guard.service';


const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'login', component: LoginpageComponent },
  {
    path: 'admin', component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'clients', component: ClientPageComponent },
      { path: 'vehicles', component: VehiclePageComponent },
      { path: 'chargers', component: ChargerPagesComponent },
      { path: 'condominiums', component: CondominumPageComponent }
    ]
  },
  {
    path: 'dashboard', component: UserDashboardComponent,
    canActivate: [AuthUserGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
