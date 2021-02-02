import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OperationBancaireComponent } from './operation-bancaire/operation-bancaire.component';
import { ListOperationBancaireComponent } from './list-operation-bancaire/list-operation-bancaire.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountComponent } from './account/account.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { isTemplateExpression } from 'typescript';
import { ContratAccountComponent } from './contrat-account/contrat-account.component';
import { UserApprovalComponent } from './user-approval/user-approval.component';
import { MesComptesComponent } from './mes-comptes/mes-comptes.component';
// import {CreditComponent} from './credit/credit.component';
// import { CreditcheckComponent } from './creditcheck/creditcheck.component';

registerLocaleData(en);

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzImageModule,
    NzTypographyModule,
    NzFormModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
// CreditComponent,
    OperationBancaireComponent,
    ListOperationBancaireComponent,
    LoginPageComponent,
    AccountComponent,
    ContratAccountComponent,
    MesComptesComponent,
    // CreditcheckComponent
  ],

  bootstrap: [AppComponent],

  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AppModule { }
