import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Go4electric';

  constructor(public http: HttpClient, private router: Router, private authService: AuthService) {
    this.authService.isLogged().then(async (result) => {
      const token = await result.getIdToken();
      if (result.uid === localStorage.getItem('uid') && token === localStorage.getItem('token')) {
        console.log('logged, contiue');
      } else {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    }).catch(e => {
      this.authService.logout();
      this.router.navigate(['/login']);
    });
  }
}
