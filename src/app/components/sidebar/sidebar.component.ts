import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
<<<<<<< HEAD
=======
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/produitAssurance', title: 'Produit Assurance',  icon: 'design_app', class: '' },
  { path: '/accounts', title: 'Comptes',  icon: 'design_app', class: '' },
  { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
>>>>>>> 55d1a7bb3bc266bf68425527ca0260d53f14b37b

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '' },
  { path: '/produitAssurance', title: 'Produit Assurance', icon: 'design-2_ruler-pencil', class: '' },
  { path: '/contratAssurance', title: 'Contrat Assurance', icon: 'files_paper', class: ''},
  { path: '/icons', title: 'Icons', icon: 'education_atom', class: '' },
  { path: '/maps', title: 'Maps', icon: 'location_map-big', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '' },
  { path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '' },
  { path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '' },
  { path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '' }

];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  };
}
