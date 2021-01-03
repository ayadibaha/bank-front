import { Component, OnInit } from '@angular/core';
import {OperationBancaire} from '../module/OperationBancaire';
import {OperationBancaireService} from '../services/operation-bancaire.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-operation-bancaire',
  templateUrl: './operation-bancaire.component.html',
  styleUrls: ['./operation-bancaire.component.css']
})
export class OperationBancaireComponent implements OnInit {

  op: OperationBancaire = new OperationBancaire();
  submitted = false;
  constructor(private obs: OperationBancaireService , private router: Router) { }

  ngOnInit(): void {

  }
  save() {
    this.obs.createVirement(this.op).subscribe(data => {
        console.log(data)
        this.op = new OperationBancaire();
        this.gotoList();
      },
      error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listOperationBancaire']);
  }


  }




