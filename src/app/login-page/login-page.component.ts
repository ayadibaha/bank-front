import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    loading = false;
    submitted = false;
    returnUrl: string;
    username: string = "";
    password: string = "";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
      console.log("haha", this.authenticationService.currentTokenValue)
        // redirect to home if already logged in
        if (this.authenticationService.currentTokenValue) {
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit() {}


    doLogin() {
      console.log("hahahahaha");
        this.submitted = true;

        // reset alerts on submit

        // stop here if form is invalid

        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/dashboard"]);
                },
                error => {
                    this.loading = false;
                });
    }

}
