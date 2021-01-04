import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthenticationService } from '../../services/authentication.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

let ROUTES_CLIENT :RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/operationBancaire', title: 'operationbancaire',  icon: 'ui-1_simple-add' , class: '' },
  {path: '/listOperationBancaire' , title: 'listOperationBancaire', icon: 'files_single-copy-04', class: '' },
];

let ROUTES_EMPLOYEE :RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
];

let ROUTES_INSURANCE :RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/produitAssurance', title: 'Produit Assurance',  icon: 'design_app', class: '' },
];

let ROUTES_ADMIN :RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
];

/*export const ROUTES: RouteInfo[] = [
  
 
  
 
    { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

];*/

let ROUTES : RouteInfo[] = [];

if(localStorage.getItem("token")){
  let user : any=jwtDecode(localStorage.getItem("token"));

switch (user.rol){
  case 1: ROUTES = ROUTES_CLIENT;
  break;
  case 2: ROUTES = ROUTES_EMPLOYEE;
  break;
  case 3: ROUTES = ROUTES_INSURANCE;
  break;
  case 4: ROUTES = ROUTES_ADMIN;
  break;
    
}
}





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.auth.currentUser())
   
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };
}
