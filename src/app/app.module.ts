import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// SERVICES
import { AuthService } from './services/auth.service';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';

import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './services/loader.interceptor';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalUsersComponent } from './components/modal-users/modal-users.component';
import { ModalVehiclesComponent } from './components/modal-vehicles/modal-vehicles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'node_modules/ngx-mask/';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { ModalChargersComponent } from './components/modal-chargers/modal-chargers.component';
import { ChargeListComponent } from './components/charge-list/charge-list.component';
import { MinCardsComponent } from './components/min-cards/min-cards.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { CellphonePipe } from './cellphone.pipe';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ClientPageComponent } from './pages/admin/client-page/client-page.component';
import { VehiclePageComponent } from './pages/admin/vehicle-page/vehicle-page.component';
import { ConnectorsListComponent } from './components/connectors-list/connectors-list.component';
import { ModalConnectorsComponent } from './components/modal-connectors/modal-connectors.component';
import { ChargerPagesComponent } from './pages/admin/charger-pages/charger-pages.component';
import { CondominumPageComponent } from './pages/admin/condominum-page/condominum-page.component';
import { ConnectorSelectionComponent } from './components/connector-selection/connector-selection.component';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { CondominiumListComponent } from './components/condominium-list/condominium-list.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthUserGuardService } from './services/auth-user-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeComponent,
    LoadingComponent,
    TopbarComponent,
    UsersListComponent,
    ModalUsersComponent,
    ModalVehiclesComponent,
    AlertModalComponent,
    PerformanceComponent,
    ModalChargersComponent,
    ChargeListComponent,
    MinCardsComponent,
    VehicleListComponent,
    CellphonePipe,
    LeftMenuComponent,
    ClientPageComponent,
    VehiclePageComponent,
    ConnectorsListComponent,
    ModalConnectorsComponent,
    ChargerPagesComponent,
    CondominumPageComponent,
    ConnectorSelectionComponent,
    CondominiumListComponent,
    UserDashboardComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  entryComponents: [
    ModalUsersComponent,
    ModalVehiclesComponent,
    ModalChargersComponent,
    AlertModalComponent
  ],
  providers: [
    AuthService, LoaderService, AngularFireStorage,
    AuthGuardService, AuthUserGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
