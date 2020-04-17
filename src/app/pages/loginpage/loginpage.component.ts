import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalResetPasswordComponent } from 'src/app/components/modal-reset-password/modal-reset-password.component';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;
  resetSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.logout();
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
          if (this.authService.isAdmin()) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/dashboard/charts']);
          }
        }
      }).catch((e) => {
        this.loginError = true;
        this.setVariablesTimeout();
      });
    } else {
      this.loginError = true;
      this.setVariablesTimeout();
    }
  }

  setVariablesTimeout() {
    setTimeout(() => {
      this.resetSent = false;
      this.loginError = false;
    }, 4000);
  }

  passRecovery() {
    const dialogRef = this.dialog.open(ModalResetPasswordComponent, {
      width: '50em',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.forgotPass(result).then(() => {
          this.resetSent = true;
          this.setVariablesTimeout();
        }).catch(e => {
          console.log(e);
        });
      }
    });
  }

}
