import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Condominium } from 'src/app/model/condominium';
import { CondominiumService } from 'src/app/services/condominium.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ModalPasswordChangeComponent } from 'src/app/components/modal-password-change/modal-password-change.component';
import { AlertModalComponent } from 'src/app/components/alert-modal/alert-modal.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  loading: Promise<boolean>;
  condo: Condominium;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private service: DashboardService,
    private condoService: CondominiumService) { }

  ngOnInit() {
    this.loading = new Promise((resolve, reject) => {
      this.getCondoData(resolve, reject);
    });
  }

  getCondoData(resolve?, reject?) {
    this.service.getData().subscribe((condoData: Condominium) => {
      this.condo = condoData;
      if (resolve) { resolve(true); }
    }, (error) => {
      if (reject) { reject(false); }
    });
  }

  saveData() {
    this.condoService.edit(this.condo).subscribe(value => {
      this.getCondoData();
    });
  }

  passwordChange() {
    const dialogRef = this.dialog.open(ModalPasswordChangeComponent, {
      width: '50em',
      data: { mail: this.condo.login }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.authService.newPassword(result.userMail, result.userPass, result.newPass).then(() => {
          const alertRef = this.dialog.open(AlertModalComponent, {
            width: '400px',
            data: {
              type: 'alert',
              message: 'Senha alterada com sucesso!'
            }
          });
        }).catch(err => {
            const alertRef = this.dialog.open(AlertModalComponent, {
              width: '400px',
              data: {
                type: 'alert',
                message: 'Erro ao alterar a senha: ' + err
              }
            });
        });
      }
    });
  }

}
