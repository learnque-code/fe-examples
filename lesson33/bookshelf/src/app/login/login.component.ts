import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "./authenticate.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  public error = '';
  private returnUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (this.authenticateService.user) {
      this.router.navigate([this.returnUrl]);
    }
  }

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      this.error = "Form input is invalid";
      return;
    }

    const user = this.authenticateService.login(this.f.username.value, this.f.password.value);

    if (user !== null) {
      this.router.navigate([this.route.snapshot.queryParams.returnUrl || ''])
    } else {
      this.error = "No user found";
    }
  }

}
