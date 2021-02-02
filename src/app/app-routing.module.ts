import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitAssuranceComponent } from './produit-assurance/produit-assurance.component';
import {OperationBancaire} from './module/OperationBancaire';
import {ListOperationBancaireComponent} from './list-operation-bancaire/list-operation-bancaire.component';
import { UserApprovalComponent } from './user-approval/user-approval.component';
import {MesComptesComponent} from './mes-comptes/mes-comptes.component';
// import {CreditComponent} from './credit/credit.component';
// import {CreditcheckComponent} from './creditcheck/creditcheck.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produitAssurance', component: ProduitAssuranceComponent },
  // { path: 'credit', component: CreditComponent },
  // { path: 'creditcheck', component: CreditcheckComponent },
 // {path: 'operationBancaire' , component: OperationBancaire},
  {path: 'listOperationBancaire' , component: ListOperationBancaireComponent},
  {path: 'users' , component: UserApprovalComponent},
  {path: 'mesComptes' , component: MesComptesComponent},

  // { path: 'produitAssurance', component: ProduitAssuranceComponent },

  // { path: 'user-profile', component: UserProfileComponent },
  // { path: 'table-list', component: TableListComponent },
  // { path: 'typography', component: TypographyComponent },
  // { path: 'icons', component: IconsComponent },
  // { path: 'maps', component: MapsComponent },
  // { path: 'notifications', component: NotificationsComponent },
  // { path: 'upgrade', component: UpgradeComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
