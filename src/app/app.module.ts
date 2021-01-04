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

import { ProduitAssuranceComponent } from './produit-assurance/produit-assurance.component';
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
import { isTemplateExpression } from 'typescript';

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
    NzFormModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

    OperationBancaireComponent,
    ListOperationBancaireComponent,
    LoginPageComponent,
    AccountComponent
  ],
 
  bootstrap: [AppComponent],
 
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AppModule { }
