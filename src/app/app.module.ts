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

import { LoginPageComponent } from './login-page/login-page.component';
import { AccountComponent } from './account/account.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
