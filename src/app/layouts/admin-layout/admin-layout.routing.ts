import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProduitAssuranceComponent } from '../../../app/produit-assurance/produit-assurance.component';

import {OperationBancaireComponent} from '../../operation-bancaire/operation-bancaire.component';
import {ListOperationBancaireComponent} from '../../list-operation-bancaire/list-operation-bancaire.component';

import { ContratAssuranceComponent } from '../../../app/contrat-assurance/contrat-assurance.component';
import {AccountComponent} from '../../account/account.component';
import {ContratAccountComponent} from '../../contrat-account/contrat-account.component';
import { UserApprovalComponent } from '../../user-approval/user-approval.component';
import {MesComptesComponent} from '../../mes-comptes/mes-comptes.component';
import { RegisterComponent } from '../../register/register.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'produitAssurance', component: ProduitAssuranceComponent},

    { path: 'operationBancaire' , component: OperationBancaireComponent },
    // { path: 'listOperationBancaire' , component: ListOperationBancaireComponent },


    { path: 'contratAssurance', component: ContratAssuranceComponent},
    { path: 'accounts',       component: AccountComponent},
    { path: 'contratAccount',       component: ContratAccountComponent},
    { path: 'users',       component: UserApprovalComponent},
    { path: 'mesComptes',       component: MesComptesComponent},
    { path: 'register', component: RegisterComponent},
];
