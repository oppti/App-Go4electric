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
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';

import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './services/loader.interceptor';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UsersListComponent } from './pages/list-tables/users-list.component';
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
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
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
    AlertModalComponent
  ],
  providers: [AuthService, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
