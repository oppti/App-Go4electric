import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    this.loginError = false;
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const pass = this.loginForm.get('password').value;
      this.authService.login(email, pass).then((response: boolean) => {
        if (response) {
          this.router.navigate(['/home']);
        }
      }).catch((e) => {
        this.loginError = true;
      });
    } else {
      this.loginError = true;
    }
  }

}
