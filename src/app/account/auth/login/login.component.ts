import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";
import { GlobalService } from "src/app/core/services/global.service";
import { URL_ROUTES } from "src/app/constants/routing";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = "";
  returnUrl: string;

  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private globalService: GlobalService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.loginService.login(this.loginForm).then((res) => {
        console.log(res);
        if (this.globalService.handleSuccessService(res)) {
          this.router.navigate([URL_ROUTES.DASHBOARD]);
        }
      });
    }
  }
}
