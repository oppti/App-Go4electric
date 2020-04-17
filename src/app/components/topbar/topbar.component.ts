import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  showBackButton: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showBackButton = false;
  }

  logout() {
    this.authService.logout();
  }

  hideBack() {
    this.showBackButton = false;
  }

  showBack() {
    this.showBackButton = true;
  }

  back() {
    this.showBackButton = false;
    this.router.navigateByUrl('/dashboard/charts');
  }
}
