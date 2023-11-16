import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { URL_ROUTES } from 'src/app/constants/routing';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	error = '';
	returnUrl: string;
	showPassword: boolean = false;

	// set the currenr year
	year: number = new Date().getFullYear();

	// tslint:disable-next-line: max-line-length
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private globalService: GlobalService,
		private loginService: LoginService,
		private loadingService: LoadingService
	) {
		document.body.setAttribute('data-bs-theme', 'dark');
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	/**
	 * Form submit
	 */
	onSubmit() {
		this.loadingService.showLoader();
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			this.loadingService.hideLoader();
			return;
		} else {
			// login function call
			this.loginService.login(this.loginForm).subscribe((res) => {
				console.log(res);
				if (this.globalService.handleSuccessService(res)) {
					this.loadingService.hideLoader();
					this.router.navigate([URL_ROUTES.DASHBOARD]);
				}
			});
		}
	}
}
