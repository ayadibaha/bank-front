import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-approval',
  templateUrl: './user-approval.component.html',
  styleUrls: ['./user-approval.component.css']
})
export class UserApprovalComponent implements OnInit {
  not_approved = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllNA().subscribe((response: any)=>{
      console.log(response);
      this.not_approved = response;
    })
  }

  acceptUser(id){
    this.userService.acceptUser(id).subscribe((response)=>{
      console.log(response);
    })
  }
}
