import { Component, OnInit } from '@angular/core';
import {OperationBancaire} from '../module/OperationBancaire';
import {Observable} from 'rxjs';
import {OperationBancaireService} from '../services/operation-bancaire.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-operation-bancaire',
  templateUrl: './list-operation-bancaire.component.html',
  styleUrls: ['./list-operation-bancaire.component.css']
})
export class ListOperationBancaireComponent implements OnInit  {
  operationBancaire: Observable<OperationBancaire[]>;
  constructor(private ops: OperationBancaireService, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
  }
  reloadData() {
    // @ts-ignore
    this.operationBancaire = this.ops.getoperationList();
  }
}
