'use strict';
(self.webpackChunkskote = self.webpackChunkskote || []).push([
  [851],
  {
    88851: (w, v, a) => {
      a.r(v), a.d(v, { AccountModule: () => g });
      var s = a(86019),
        l = a(56225),
        p = a(83668);
      const f = [
        {
          path: 'auth',
          loadChildren: () =>
            Promise.resolve()
              .then(a.bind(a, 49018))
              .then(m => m.AuthModule),
        },
      ];
      let h = (() => {
        class m {}
        return (
          (m.ɵfac = function (u) {
            return new (u || m)();
          }),
          (m.ɵmod = p.ɵɵdefineNgModule({ type: m })),
          (m.ɵinj = p.ɵɵdefineInjector({
            imports: [[l.Bz.forChild(f)], l.Bz],
          })),
          m
        );
      })();
      var o = a(49018);
      let g = (() => {
        class m {}
        return (
          (m.ɵfac = function (u) {
            return new (u || m)();
          }),
          (m.ɵmod = p.ɵɵdefineNgModule({ type: m })),
          (m.ɵinj = p.ɵɵdefineInjector({
            imports: [[s.CommonModule, h, o.AuthModule]],
          })),
          m
        );
      })();
    },
    49018: (w, v, a) => {
      a.r(v), a.d(v, { AuthModule: () => Se });
      var s = a(86019),
        l = a(49133),
        p = a(80549),
        f = a(37720),
        h = a(63091),
        o = a(56225),
        g = a(10739),
        m = a(18260),
        e = a(83668),
        u = a(67686),
        C = a(92464);
      function I(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'ngb-alert', 49),
            e.ɵɵtext(1),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty('dismissible', !1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(n.error);
        }
      }
      function _(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email is required'),
          e.ɵɵelementEnd());
      }
      function k(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email must be a valid email address'),
          e.ɵɵelementEnd());
      }
      function F(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 50),
            e.ɵɵtemplate(1, _, 2, 0, 'div', 51),
            e.ɵɵtemplate(2, k, 2, 0, 'div', 51),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.required),
            e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.email);
        }
      }
      function j(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'span'),
          e.ɵɵtext(1, 'Password is required'),
          e.ɵɵelementEnd());
      }
      function T(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 50),
            e.ɵɵtemplate(1, j, 2, 0, 'span', 51),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty('ngIf', n.f.password.errors.required);
        }
      }
      const y = function (t) {
        return { 'is-invalid': t };
      };
      let R = (() => {
        class t {
          constructor(n, r, d, c, S) {
            (this.formBuilder = n),
              (this.route = r),
              (this.router = d),
              (this.authenticationService = c),
              (this.authFackservice = S),
              (this.submitted = !1),
              (this.error = ''),
              (this.year = new Date().getFullYear());
          }
          ngOnInit() {
            (this.loginForm = this.formBuilder.group({
              email: ['admin@themesbrand.com', [l.kI.required, l.kI.email]],
              password: ['123456', [l.kI.required]],
            })),
              (this.returnUrl =
                this.route.snapshot.queryParams.returnUrl || '/');
          }
          get f() {
            return this.loginForm.controls;
          }
          onSubmit() {
            (this.submitted = !0),
              !this.loginForm.invalid &&
                ('firebase' === m.N.defaultauth
                  ? this.authenticationService
                      .login(this.f.email.value, this.f.password.value)
                      .then(n => {
                        this.router.navigate(['/dashboard']);
                      })
                      .catch(n => {
                        this.error = n || '';
                      })
                  : this.authFackservice
                      .login(this.f.email.value, this.f.password.value)
                      .pipe((0, g.P)())
                      .subscribe(
                        n => {
                          this.router.navigate(['/dashboard']);
                        },
                        n => {
                          this.error = n || '';
                        },
                      ));
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(l.qu),
              e.ɵɵdirectiveInject(o.gz),
              e.ɵɵdirectiveInject(o.F0),
              e.ɵɵdirectiveInject(u.$),
              e.ɵɵdirectiveInject(C.g),
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [['app-login']],
            decls: 70,
            vars: 11,
            consts: [
              [1, 'account-pages', 'my-5', 'pt-sm-5'],
              [1, 'container'],
              [1, 'row', 'justify-content-center'],
              [1, 'col-md-8', 'col-lg-6', 'col-xl-5'],
              [1, 'card', 'overflow-hidden'],
              [1, 'bg-soft', 'bg-primary'],
              [1, 'row'],
              [1, 'col-7'],
              [1, 'text-primary', 'p-4'],
              [1, 'text-primary'],
              [1, 'col-5', 'align-self-end'],
              [
                'src',
                'assets/images/profile-img.png',
                'alt',
                '',
                1,
                'img-fluid',
              ],
              [1, 'card-body', 'pt-0'],
              ['routerLink', '/'],
              [1, 'avatar-md', 'profile-user-wid', 'mb-4'],
              [1, 'avatar-title', 'rounded-circle', 'bg-light'],
              [
                'src',
                'assets/images/logo.svg',
                'alt',
                '',
                'height',
                '34',
                1,
                'rounded-circle',
              ],
              [1, 'p-2'],
              [1, 'form-horizontal', 3, 'formGroup', 'ngSubmit'],
              ['type', 'danger', 3, 'dismissible', 4, 'ngIf'],
              [1, 'mb-3'],
              ['for', 'email'],
              [
                'type',
                'email',
                'formControlName',
                'email',
                'id',
                'email',
                'placeholder',
                'Email',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              ['class', 'invalid-feedback', 4, 'ngIf'],
              ['for', 'password'],
              [1, 'input-group', 'auth-pass-inputgroup'],
              [
                'type',
                'password',
                'formControlName',
                'password',
                'placeholder',
                'Enter password',
                'aria-label',
                'Password',
                'aria-describedby',
                'password-addon',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              [
                'type',
                'button',
                'id',
                'password-addon',
                1,
                'btn',
                'btn-light',
                'ms-0',
              ],
              [1, 'mdi', 'mdi-eye-outline'],
              [1, 'form-check'],
              [
                'type',
                'checkbox',
                'id',
                'remember-check',
                1,
                'form-check-input',
              ],
              ['for', 'remember-check', 1, 'form-check-label'],
              [1, 'mt-3', 'd-grid'],
              ['type', 'submit', 1, 'btn', 'btn-primary'],
              [1, 'mt-4', 'text-center'],
              [1, 'font-size-14', 'mb-3'],
              [1, 'list-inline'],
              [1, 'list-inline-item'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-primary',
                'text-white',
                'border-primary',
              ],
              [1, 'mdi', 'mdi-facebook'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-info',
                'text-white',
                'border-info',
              ],
              [1, 'mdi', 'mdi-twitter'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-danger',
                'text-white',
                'border-danger',
              ],
              [1, 'mdi', 'mdi-google'],
              ['routerLink', '/account/reset-password', 1, 'text-muted'],
              [1, 'mdi', 'mdi-lock', 'mr-1'],
              [1, 'mt-5', 'text-center'],
              ['routerLink', '/account/signup', 1, 'fw-medium', 'text-primary'],
              [1, 'mdi', 'mdi-heart', 'text-danger'],
              ['type', 'danger', 3, 'dismissible'],
              [1, 'invalid-feedback'],
              [4, 'ngIf'],
            ],
            template: function (n, r) {
              1 & n &&
                (e.ɵɵelementStart(0, 'div', 0),
                e.ɵɵelementStart(1, 'div', 1),
                e.ɵɵelementStart(2, 'div', 2),
                e.ɵɵelementStart(3, 'div', 3),
                e.ɵɵelementStart(4, 'div', 4),
                e.ɵɵelementStart(5, 'div', 5),
                e.ɵɵelementStart(6, 'div', 6),
                e.ɵɵelementStart(7, 'div', 7),
                e.ɵɵelementStart(8, 'div', 8),
                e.ɵɵelementStart(9, 'h5', 9),
                e.ɵɵtext(10, 'Welcome Back !'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, 'p'),
                e.ɵɵtext(12, 'Sign in to continue to Skote.'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(13, 'div', 10),
                e.ɵɵelement(14, 'img', 11),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(15, 'div', 12),
                e.ɵɵelementStart(16, 'div'),
                e.ɵɵelementStart(17, 'a', 13),
                e.ɵɵelementStart(18, 'div', 14),
                e.ɵɵelementStart(19, 'span', 15),
                e.ɵɵelement(20, 'img', 16),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(21, 'div', 17),
                e.ɵɵelementStart(22, 'form', 18),
                e.ɵɵlistener('ngSubmit', function () {
                  return r.onSubmit();
                }),
                e.ɵɵtemplate(23, I, 2, 2, 'ngb-alert', 19),
                e.ɵɵelementStart(24, 'div', 20),
                e.ɵɵelementStart(25, 'label', 21),
                e.ɵɵtext(26, 'Email'),
                e.ɵɵelementEnd(),
                e.ɵɵelement(27, 'input', 22),
                e.ɵɵtemplate(28, F, 3, 2, 'div', 23),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(29, 'div', 20),
                e.ɵɵelementStart(30, 'label', 24),
                e.ɵɵtext(31, 'Password'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(32, 'div', 25),
                e.ɵɵelement(33, 'input', 26),
                e.ɵɵelementStart(34, 'button', 27),
                e.ɵɵelement(35, 'i', 28),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(36, T, 2, 1, 'div', 23),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(37, 'div', 29),
                e.ɵɵelement(38, 'input', 30),
                e.ɵɵelementStart(39, 'label', 31),
                e.ɵɵtext(40, ' Remember me '),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(41, 'div', 32),
                e.ɵɵelementStart(42, 'button', 33),
                e.ɵɵtext(43, 'Log In'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(44, 'div', 34),
                e.ɵɵelementStart(45, 'h5', 35),
                e.ɵɵtext(46, 'Sign in with'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(47, 'ul', 36),
                e.ɵɵelementStart(48, 'li', 37),
                e.ɵɵelementStart(49, 'a', 38),
                e.ɵɵelement(50, 'i', 39),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(51, 'li', 37),
                e.ɵɵelementStart(52, 'a', 40),
                e.ɵɵelement(53, 'i', 41),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(54, 'li', 37),
                e.ɵɵelementStart(55, 'a', 42),
                e.ɵɵelement(56, 'i', 43),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(57, 'div', 34),
                e.ɵɵelementStart(58, 'a', 44),
                e.ɵɵelement(59, 'i', 45),
                e.ɵɵtext(60, ' Forgot your password?'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(61, 'div', 46),
                e.ɵɵelementStart(62, 'p'),
                e.ɵɵtext(63, "Don't have an account ? "),
                e.ɵɵelementStart(64, 'a', 47),
                e.ɵɵtext(65, ' Signup now '),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(66, 'p'),
                e.ɵɵtext(67),
                e.ɵɵelement(68, 'i', 48),
                e.ɵɵtext(69, ' by Themesbrand'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd()),
                2 & n &&
                  (e.ɵɵadvance(22),
                  e.ɵɵproperty('formGroup', r.loginForm),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.error),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(7, y, r.submitted && r.f.email.errors),
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.email.errors),
                  e.ɵɵadvance(5),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(9, y, r.submitted && r.f.password.errors),
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.password.errors),
                  e.ɵɵadvance(31),
                  e.ɵɵtextInterpolate1(
                    '\xa9 ',
                    r.year,
                    ' Skote. Crafted with ',
                  ));
            },
            directives: [
              o.yS,
              l._Y,
              l.JL,
              l.sg,
              s.NgIf,
              l.Fj,
              l.JJ,
              l.u,
              s.NgClass,
              p.xm,
            ],
            styles: [''],
          })),
          t
        );
      })();
      var L = a(6665),
        P = a(44522);
      let x = (() => {
        class t {
          constructor(n) {
            this.http = n;
          }
          getAll() {
            return this.http.get('/api/login');
          }
          register(n) {
            return this.http.post('/users/register', n);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(e.ɵɵinject(P.eN));
          }),
          (t.ɵprov = e.ɵɵdefineInjectable({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
      function N(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'ngb-alert', 46),
          e.ɵɵtext(1, 'Registeration successfull. '),
          e.ɵɵelementEnd()),
          2 & t && e.ɵɵproperty('dismissible', !1);
      }
      function A(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'ngb-alert', 47),
            e.ɵɵtext(1),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty('dismissible', !1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(n.error);
        }
      }
      function M(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Userame is required'),
          e.ɵɵelementEnd());
      }
      function z(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 48),
            e.ɵɵtemplate(1, M, 2, 0, 'div', 49),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty('ngIf', n.f.username.errors.required);
        }
      }
      function B(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email is required'),
          e.ɵɵelementEnd());
      }
      function q(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email must be a valid email address'),
          e.ɵɵelementEnd());
      }
      function U(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 48),
            e.ɵɵtemplate(1, B, 2, 0, 'div', 49),
            e.ɵɵtemplate(2, q, 2, 0, 'div', 49),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.required),
            e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.email);
        }
      }
      function J(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Password is required'),
          e.ɵɵelementEnd());
      }
      function Y(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 48),
            e.ɵɵtemplate(1, J, 2, 0, 'div', 49),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty('ngIf', n.f.password.errors.required);
        }
      }
      const E = function (t) {
        return { 'is-invalid': t };
      };
      let G = (() => {
        class t {
          constructor(n, r, d, c, S) {
            (this.formBuilder = n),
              (this.route = r),
              (this.router = d),
              (this.authenticationService = c),
              (this.userService = S),
              (this.submitted = !1),
              (this.error = ''),
              (this.successmsg = !1),
              (this.year = new Date().getFullYear());
          }
          ngOnInit() {
            this.signupForm = this.formBuilder.group({
              username: ['', l.kI.required],
              email: ['', [l.kI.required, l.kI.email]],
              password: ['', l.kI.required],
            });
          }
          get f() {
            return this.signupForm.controls;
          }
          onSubmit() {
            (this.submitted = !0),
              !this.signupForm.invalid &&
                ('firebase' === m.N.defaultauth
                  ? this.authenticationService
                      .register(this.f.email.value, this.f.password.value)
                      .then(n => {
                        (this.successmsg = !0),
                          this.successmsg &&
                            this.router.navigate(['/dashboard']);
                      })
                      .catch(n => {
                        this.error = n || '';
                      })
                  : this.userService
                      .register(this.signupForm.value)
                      .pipe((0, g.P)())
                      .subscribe(
                        n => {
                          (this.successmsg = !0),
                            this.successmsg &&
                              this.router.navigate(['/account/login']);
                        },
                        n => {
                          this.error = n || '';
                        },
                      ));
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(l.qu),
              e.ɵɵdirectiveInject(o.gz),
              e.ɵɵdirectiveInject(o.F0),
              e.ɵɵdirectiveInject(u.$),
              e.ɵɵdirectiveInject(x),
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [['app-signup']],
            decls: 70,
            vars: 16,
            consts: [
              [1, 'account-pages', 'my-5', 'pt-sm-5'],
              [1, 'container'],
              [1, 'row', 'justify-content-center'],
              [1, 'col-md-8', 'col-lg-6', 'col-xl-5'],
              [1, 'card', 'overflow-hidden'],
              [1, 'bg-soft', 'bg-primary'],
              [1, 'row'],
              [1, 'col-7'],
              [1, 'text-primary', 'p-4'],
              [1, 'text-primary'],
              [1, 'col-5', 'align-self-end'],
              [
                'src',
                'assets/images/profile-img.png',
                'alt',
                '',
                1,
                'img-fluid',
              ],
              [1, 'card-body', 'pt-0'],
              ['routerLink', '/'],
              [1, 'avatar-md', 'profile-user-wid', 'mb-4'],
              [1, 'avatar-title', 'rounded-circle', 'bg-light'],
              [
                'src',
                'assets/images/logo.svg',
                'alt',
                '',
                'height',
                '34',
                1,
                'rounded-circle',
              ],
              [1, 'p-2'],
              [
                'name',
                'signupForm',
                'novalidate',
                '',
                1,
                'needs-validation',
                3,
                'formGroup',
                'ngSubmit',
              ],
              ['type', 'success', 3, 'dismissible', 4, 'ngIf'],
              ['type', 'danger', 3, 'dismissible', 4, 'ngIf'],
              [1, 'mb-3'],
              ['for', 'username', 1, 'form-label'],
              [
                'type',
                'text',
                'formControlName',
                'username',
                'id',
                'username',
                'placeholder',
                'Enter username',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              ['class', 'invalid-feedback', 4, 'ngIf'],
              ['for', 'email', 1, 'form-label'],
              [
                'type',
                'email',
                'formControlName',
                'email',
                'id',
                'email',
                'placeholder',
                'Email',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              ['for', 'password', 1, 'form-label'],
              [
                'type',
                'password',
                'formControlName',
                'password',
                'id',
                'password',
                'placeholder',
                'Password',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              [1, 'mt-4', 'd-grid'],
              ['type', 'submit', 1, 'btn', 'btn-primary'],
              [1, 'mt-4', 'text-center'],
              [1, 'font-size-14', 'mb-3'],
              [1, 'list-inline'],
              [1, 'list-inline-item'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-primary',
                'text-white',
                'border-primary',
              ],
              [1, 'mdi', 'mdi-facebook'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-info',
                'text-white',
                'border-info',
              ],
              [1, 'mdi', 'mdi-twitter'],
              [
                'href',
                'javascript::void()',
                1,
                'social-list-item',
                'bg-danger',
                'text-white',
                'border-danger',
              ],
              [1, 'mdi', 'mdi-google'],
              [1, 'mb-0'],
              ['href', 'javascript: void(0);', 1, 'text-primary'],
              [1, 'mt-5', 'text-center'],
              ['routerLink', '/account/login', 1, 'fw-medium', 'text-primary'],
              [1, 'mdi', 'mdi-heart', 'text-danger'],
              ['type', 'success', 3, 'dismissible'],
              ['type', 'danger', 3, 'dismissible'],
              [1, 'invalid-feedback'],
              [4, 'ngIf'],
            ],
            template: function (n, r) {
              1 & n &&
                (e.ɵɵelementStart(0, 'div', 0),
                e.ɵɵelementStart(1, 'div', 1),
                e.ɵɵelementStart(2, 'div', 2),
                e.ɵɵelementStart(3, 'div', 3),
                e.ɵɵelementStart(4, 'div', 4),
                e.ɵɵelementStart(5, 'div', 5),
                e.ɵɵelementStart(6, 'div', 6),
                e.ɵɵelementStart(7, 'div', 7),
                e.ɵɵelementStart(8, 'div', 8),
                e.ɵɵelementStart(9, 'h5', 9),
                e.ɵɵtext(10, 'Free Register'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, 'p'),
                e.ɵɵtext(12, 'Get your free Skote account now.'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(13, 'div', 10),
                e.ɵɵelement(14, 'img', 11),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(15, 'div', 12),
                e.ɵɵelementStart(16, 'div'),
                e.ɵɵelementStart(17, 'a', 13),
                e.ɵɵelementStart(18, 'div', 14),
                e.ɵɵelementStart(19, 'span', 15),
                e.ɵɵelement(20, 'img', 16),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(21, 'div', 17),
                e.ɵɵelementStart(22, 'form', 18),
                e.ɵɵlistener('ngSubmit', function () {
                  return r.onSubmit();
                }),
                e.ɵɵtemplate(23, N, 2, 1, 'ngb-alert', 19),
                e.ɵɵtemplate(24, A, 2, 2, 'ngb-alert', 20),
                e.ɵɵelementStart(25, 'div', 21),
                e.ɵɵelementStart(26, 'label', 22),
                e.ɵɵtext(27, 'Username'),
                e.ɵɵelementEnd(),
                e.ɵɵelement(28, 'input', 23),
                e.ɵɵtemplate(29, z, 2, 1, 'div', 24),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(30, 'div', 21),
                e.ɵɵelementStart(31, 'label', 25),
                e.ɵɵtext(32, 'Email'),
                e.ɵɵelementEnd(),
                e.ɵɵelement(33, 'input', 26),
                e.ɵɵtemplate(34, U, 3, 2, 'div', 24),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(35, 'div', 21),
                e.ɵɵelementStart(36, 'label', 27),
                e.ɵɵtext(37, 'Password'),
                e.ɵɵelementEnd(),
                e.ɵɵelement(38, 'input', 28),
                e.ɵɵtemplate(39, Y, 2, 1, 'div', 24),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(40, 'div', 29),
                e.ɵɵelementStart(41, 'button', 30),
                e.ɵɵtext(42, 'Register'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(43, 'div', 31),
                e.ɵɵelementStart(44, 'h5', 32),
                e.ɵɵtext(45, 'Sign in with'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(46, 'ul', 33),
                e.ɵɵelementStart(47, 'li', 34),
                e.ɵɵelementStart(48, 'a', 35),
                e.ɵɵelement(49, 'i', 36),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(50, 'li', 34),
                e.ɵɵelementStart(51, 'a', 37),
                e.ɵɵelement(52, 'i', 38),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(53, 'li', 34),
                e.ɵɵelementStart(54, 'a', 39),
                e.ɵɵelement(55, 'i', 40),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(56, 'div', 31),
                e.ɵɵelementStart(57, 'p', 41),
                e.ɵɵtext(58, 'By registering you agree to the Skote '),
                e.ɵɵelementStart(59, 'a', 42),
                e.ɵɵtext(60, 'Terms of Use'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(61, 'div', 43),
                e.ɵɵelementStart(62, 'p'),
                e.ɵɵtext(63, 'Already have an account ? '),
                e.ɵɵelementStart(64, 'a', 44),
                e.ɵɵtext(65, ' Login'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(66, 'p'),
                e.ɵɵtext(67),
                e.ɵɵelement(68, 'i', 45),
                e.ɵɵtext(69, ' by Themesbrand'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd()),
                2 & n &&
                  (e.ɵɵadvance(22),
                  e.ɵɵproperty('formGroup', r.signupForm),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.successmsg),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.error),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(
                      10,
                      E,
                      r.submitted && r.f.username.errors,
                    ),
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.username.errors),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(12, E, r.submitted && r.f.email.errors),
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.email.errors),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(
                      14,
                      E,
                      r.submitted && r.f.password.errors,
                    ),
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.password.errors),
                  e.ɵɵadvance(28),
                  e.ɵɵtextInterpolate1(
                    '\xa9 ',
                    r.year,
                    ' Skote. Crafted with ',
                  ));
            },
            directives: [
              o.yS,
              l._Y,
              l.JL,
              l.sg,
              s.NgIf,
              l.Fj,
              l.JJ,
              l.u,
              s.NgClass,
              p.xm,
            ],
            styles: [''],
          })),
          t
        );
      })();
      function O(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'ngb-alert', 28),
            e.ɵɵtext(1),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty('dismissible', !1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(n.error);
        }
      }
      function D(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email is required'),
          e.ɵɵelementEnd());
      }
      function $(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email must be a valid email address'),
          e.ɵɵelementEnd());
      }
      function V(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 29),
            e.ɵɵtemplate(1, D, 2, 0, 'div', 30),
            e.ɵɵtemplate(2, $, 2, 0, 'div', 30),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.required),
            e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.email);
        }
      }
      const W = function (t) {
        return { 'is-invalid': t };
      };
      let H = (() => {
        class t {
          constructor(n, r, d, c) {
            (this.formBuilder = n),
              (this.route = r),
              (this.router = d),
              (this.authenticationService = c),
              (this.submitted = !1),
              (this.error = ''),
              (this.success = ''),
              (this.loading = !1),
              (this.year = new Date().getFullYear());
          }
          ngOnInit() {
            this.resetForm = this.formBuilder.group({
              email: ['', [l.kI.required, l.kI.email]],
            });
          }
          ngAfterViewInit() {}
          get f() {
            return this.resetForm.controls;
          }
          onSubmit() {
            (this.success = ''),
              (this.submitted = !0),
              !this.resetForm.invalid &&
                'firebase' === m.N.defaultauth &&
                this.authenticationService
                  .resetPassword(this.f.email.value)
                  .catch(n => {
                    this.error = n || '';
                  });
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(
              e.ɵɵdirectiveInject(l.qu),
              e.ɵɵdirectiveInject(o.gz),
              e.ɵɵdirectiveInject(o.F0),
              e.ɵɵdirectiveInject(u.$),
            );
          }),
          (t.ɵcmp = e.ɵɵdefineComponent({
            type: t,
            selectors: [['app-passwordreset']],
            decls: 40,
            vars: 7,
            consts: [
              [1, 'account-pages', 'my-5', 'pt-sm-5'],
              [1, 'container'],
              [1, 'row', 'justify-content-center'],
              [1, 'col-md-8', 'col-lg-6', 'col-xl-5'],
              [1, 'card', 'overflow-hidden'],
              [1, 'bg-soft', 'bg-primary'],
              [1, 'row'],
              [1, 'col-7'],
              [1, 'text-primary', 'p-4'],
              [1, 'text-primary'],
              [1, 'col-5', 'align-self-end'],
              [
                'src',
                'assets/images/profile-img.png',
                'alt',
                '',
                1,
                'img-fluid',
              ],
              [1, 'card-body', 'pt-0'],
              ['routerLink', '/'],
              [1, 'avatar-md', 'profile-user-wid', 'mb-4'],
              [1, 'avatar-title', 'rounded-circle', 'bg-light'],
              [
                'src',
                'assets/images/logo.svg',
                'alt',
                '',
                'height',
                '34',
                1,
                'rounded-circle',
              ],
              [
                'name',
                'resetForm',
                'novalidate',
                '',
                1,
                'needs-validation',
                3,
                'formGroup',
                'ngSubmit',
              ],
              ['type', 'danger', 3, 'dismissible', 4, 'ngIf'],
              [1, 'mb-3'],
              ['for', 'email'],
              [
                'type',
                'email',
                'formControlName',
                'email',
                'id',
                'email',
                'placeholder',
                'Email',
                1,
                'form-control',
                3,
                'ngClass',
              ],
              ['class', 'invalid-feedback', 4, 'ngIf'],
              [1, 'text-end'],
              ['type', 'submit', 1, 'btn', 'btn-primary', 'w-md'],
              [1, 'mt-5', 'text-center'],
              ['routerLink', '/account/login', 1, 'fw-medium', 'text-primary'],
              [1, 'mdi', 'mdi-heart', 'text-danger'],
              ['type', 'danger', 3, 'dismissible'],
              [1, 'invalid-feedback'],
              [4, 'ngIf'],
            ],
            template: function (n, r) {
              1 & n &&
                (e.ɵɵelementStart(0, 'div', 0),
                e.ɵɵelementStart(1, 'div', 1),
                e.ɵɵelementStart(2, 'div', 2),
                e.ɵɵelementStart(3, 'div', 3),
                e.ɵɵelementStart(4, 'div', 4),
                e.ɵɵelementStart(5, 'div', 5),
                e.ɵɵelementStart(6, 'div', 6),
                e.ɵɵelementStart(7, 'div', 7),
                e.ɵɵelementStart(8, 'div', 8),
                e.ɵɵelementStart(9, 'h5', 9),
                e.ɵɵtext(10, ' Reset Password'),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, 'p'),
                e.ɵɵtext(12, 'Re-Password with Skote.'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(13, 'div', 10),
                e.ɵɵelement(14, 'img', 11),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(15, 'div', 12),
                e.ɵɵelementStart(16, 'div'),
                e.ɵɵelementStart(17, 'a', 13),
                e.ɵɵelementStart(18, 'div', 14),
                e.ɵɵelementStart(19, 'span', 15),
                e.ɵɵelement(20, 'img', 16),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(21, 'form', 17),
                e.ɵɵlistener('ngSubmit', function () {
                  return r.onSubmit();
                }),
                e.ɵɵtemplate(22, O, 2, 2, 'ngb-alert', 18),
                e.ɵɵelementStart(23, 'div', 19),
                e.ɵɵelementStart(24, 'label', 20),
                e.ɵɵtext(25, 'Email'),
                e.ɵɵelementEnd(),
                e.ɵɵelement(26, 'input', 21),
                e.ɵɵtemplate(27, V, 3, 2, 'div', 22),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(28, 'div', 23),
                e.ɵɵelementStart(29, 'button', 24),
                e.ɵɵtext(30, 'Reset'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(31, 'div', 25),
                e.ɵɵelementStart(32, 'p'),
                e.ɵɵtext(33, 'Remember It ? '),
                e.ɵɵelementStart(34, 'a', 26),
                e.ɵɵtext(35, ' Sign In here'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(36, 'p'),
                e.ɵɵtext(37),
                e.ɵɵelement(38, 'i', 27),
                e.ɵɵtext(39, ' by Themesbrand'),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd(),
                e.ɵɵelementEnd()),
                2 & n &&
                  (e.ɵɵadvance(21),
                  e.ɵɵproperty('formGroup', r.resetForm),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.error),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    'ngClass',
                    e.ɵɵpureFunction1(5, W, r.submitted && r.f.email.errors),
                  ),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty('ngIf', r.submitted && r.f.email.errors),
                  e.ɵɵadvance(10),
                  e.ɵɵtextInterpolate1(
                    '\xa9 ',
                    r.year,
                    ' Skote. Crafted with ',
                  ));
            },
            directives: [
              o.yS,
              l._Y,
              l.JL,
              l.sg,
              s.NgIf,
              l.Fj,
              l.JJ,
              l.u,
              s.NgClass,
              p.xm,
            ],
            styles: [''],
          })),
          t
        );
      })();
      function K(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div', 55),
          e.ɵɵelementStart(1, 'div', 56),
          e.ɵɵelementStart(2, 'p', 57),
          e.ɵɵtext(
            3,
            '" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the \'dist\' folder...no need to install git and all the other stuff the documentation talks about. " ',
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, 'div'),
          e.ɵɵelementStart(5, 'h4', 58),
          e.ɵɵtext(6, 'Abs1981'),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(7, 'p', 59),
          e.ɵɵtext(8, '- Skote User'),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd());
      }
      function X(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div', 55),
          e.ɵɵelementStart(1, 'div', 56),
          e.ɵɵelementStart(2, 'p', 57),
          e.ɵɵtext(
            3,
            '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "',
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, 'div'),
          e.ɵɵelementStart(5, 'h4', 58),
          e.ɵɵtext(6, 'nezerious'),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(7, 'p', 59),
          e.ɵɵtext(8, '- Skote User'),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd());
      }
      function Q(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'ngb-alert', 60),
          e.ɵɵtext(1, 'Registeration successfull. '),
          e.ɵɵelementEnd()),
          2 & t && e.ɵɵproperty('dismissible', !1);
      }
      function Z(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'ngb-alert', 61),
            e.ɵɵtext(1),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty('dismissible', !1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(n.error);
        }
      }
      function ee(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Userame is required'),
          e.ɵɵelementEnd());
      }
      function te(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 62),
            e.ɵɵtemplate(1, ee, 2, 0, 'div', 63),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty('ngIf', n.f.username.errors.required);
        }
      }
      function ne(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email is required'),
          e.ɵɵelementEnd());
      }
      function re(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email must be a valid email address'),
          e.ɵɵelementEnd());
      }
      function ie(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 62),
            e.ɵɵtemplate(1, ne, 2, 0, 'div', 63),
            e.ɵɵtemplate(2, re, 2, 0, 'div', 63),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.required),
            e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.email);
        }
      }
      function le(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Password is required'),
          e.ɵɵelementEnd());
      }
      function ae(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 62),
            e.ɵɵtemplate(1, le, 2, 0, 'div', 63),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty('ngIf', n.f.password.errors.required);
        }
      }
      const b = function (t) {
        return { 'is-invalid': t };
      };
      function oe(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div', 40),
          e.ɵɵelementStart(1, 'div', 41),
          e.ɵɵelementStart(2, 'p', 42),
          e.ɵɵtext(
            3,
            '" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the \'dist\' folder...no need to install git and all the other stuff the documentation talks about. " ',
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, 'div'),
          e.ɵɵelementStart(5, 'h4', 43),
          e.ɵɵtext(6, 'Abs1981'),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(7, 'p', 44),
          e.ɵɵtext(8, '- Skote User'),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd());
      }
      function de(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div', 40),
          e.ɵɵelementStart(1, 'div', 41),
          e.ɵɵelementStart(2, 'p', 42),
          e.ɵɵtext(
            3,
            '" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. "',
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, 'div'),
          e.ɵɵelementStart(5, 'h4', 43),
          e.ɵɵtext(6, 'nezerious'),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(7, 'p', 44),
          e.ɵɵtext(8, '- Skote User'),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd(),
          e.ɵɵelementEnd());
      }
      function se(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'ngb-alert', 45),
            e.ɵɵtext(1),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵproperty('dismissible', !1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(n.error);
        }
      }
      function pe(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email is required'),
          e.ɵɵelementEnd());
      }
      function ue(t, i) {
        1 & t &&
          (e.ɵɵelementStart(0, 'div'),
          e.ɵɵtext(1, 'Email must be a valid email address'),
          e.ɵɵelementEnd());
      }
      function ce(t, i) {
        if (
          (1 & t &&
            (e.ɵɵelementStart(0, 'div', 46),
            e.ɵɵtemplate(1, pe, 2, 0, 'div', 47),
            e.ɵɵtemplate(2, ue, 2, 0, 'div', 47),
            e.ɵɵelementEnd()),
          2 & t)
        ) {
          const n = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.required),
            e.ɵɵadvance(1),
            e.ɵɵproperty('ngIf', n.f.email.errors.email);
        }
      }
      const fe = function (t) {
          return { 'is-invalid': t };
        },
        ve = [
          { path: 'login', component: R },
          { path: 'signup', component: G },
          {
            path: 'signup-2',
            component: (() => {
              class t {
                constructor(n, r, d, c, S) {
                  (this.formBuilder = n),
                    (this.route = r),
                    (this.router = d),
                    (this.authenticationService = c),
                    (this.userService = S),
                    (this.submitted = !1),
                    (this.error = ''),
                    (this.successmsg = !1),
                    (this.year = new Date().getFullYear()),
                    (this.carouselOption = {
                      items: 1,
                      loop: !1,
                      margin: 0,
                      nav: !1,
                      dots: !0,
                      responsive: { 680: { items: 1 } },
                    });
                }
                ngOnInit() {
                  document.body.classList.add('auth-body-bg'),
                    (this.signupForm = this.formBuilder.group({
                      username: ['', l.kI.required],
                      email: ['', [l.kI.required, l.kI.email]],
                      password: ['', l.kI.required],
                    }));
                }
                get f() {
                  return this.signupForm.controls;
                }
                onSubmit() {
                  (this.submitted = !0),
                    !this.signupForm.invalid &&
                      ('firebase' === m.N.defaultauth
                        ? this.authenticationService
                            .register(this.f.email.value, this.f.password.value)
                            .then(n => {
                              (this.successmsg = !0),
                                this.successmsg &&
                                  this.router.navigate(['/dashboard']);
                            })
                            .catch(n => {
                              this.error = n || '';
                            })
                        : this.userService
                            .register(this.signupForm.value)
                            .pipe((0, g.P)())
                            .subscribe(
                              n => {
                                (this.successmsg = !0),
                                  this.successmsg &&
                                    this.router.navigate(['/account/login']);
                              },
                              n => {
                                this.error = n || '';
                              },
                            ));
                }
              }
              return (
                (t.ɵfac = function (n) {
                  return new (n || t)(
                    e.ɵɵdirectiveInject(l.qu),
                    e.ɵɵdirectiveInject(o.gz),
                    e.ɵɵdirectiveInject(o.F0),
                    e.ɵɵdirectiveInject(u.$),
                    e.ɵɵdirectiveInject(x),
                  );
                }),
                (t.ɵcmp = e.ɵɵdefineComponent({
                  type: t,
                  selectors: [['app-register2']],
                  decls: 84,
                  vars: 17,
                  consts: [
                    [1, 'container-fluid', 'p-0'],
                    [1, 'row', 'g-0'],
                    [1, 'col-xl-9'],
                    [1, 'auth-full-bg', 'pt-lg-5', 'p-4'],
                    [1, 'w-100'],
                    [1, 'bg-overlay'],
                    [1, 'd-flex', 'h-100', 'flex-column'],
                    [1, 'p-4', 'mt-auto'],
                    [1, 'row', 'justify-content-center'],
                    [1, 'col-lg-7'],
                    [1, 'text-center'],
                    [1, 'mb-3'],
                    [
                      1,
                      'bx',
                      'bxs-quote-alt-left',
                      'text-primary',
                      'h1',
                      'align-middle',
                      'me-3',
                    ],
                    [1, 'text-primary'],
                    ['dir', 'ltr'],
                    [1, 'owl-theme', 'auth-review-carousel', 3, 'options'],
                    ['carouselSlide', ''],
                    [1, 'col-xl-3'],
                    [1, 'auth-full-page-content', 'p-md-5', 'p-4'],
                    [1, 'd-flex', 'flex-column', 'h-100'],
                    [1, 'mb-4', 'mb-md-5'],
                    ['routerLink', '/', 1, 'd-block', 'auth-logo'],
                    [
                      'src',
                      'assets/images/logo-dark.png',
                      'alt',
                      '',
                      'height',
                      '18',
                      1,
                      'auth-logo-dark',
                    ],
                    [
                      'src',
                      'assets/images/logo-light.png',
                      'alt',
                      '',
                      'height',
                      '18',
                      1,
                      'auth-logo-light',
                    ],
                    [1, 'my-auto'],
                    [1, 'text-muted'],
                    [1, 'mt-4'],
                    [3, 'formGroup', 'ngSubmit'],
                    ['type', 'success', 3, 'dismissible', 4, 'ngIf'],
                    ['type', 'danger', 3, 'dismissible', 4, 'ngIf'],
                    ['for', 'username'],
                    [
                      'type',
                      'text',
                      'formControlName',
                      'username',
                      'id',
                      'username',
                      'placeholder',
                      'Enter username',
                      1,
                      'form-control',
                      3,
                      'ngClass',
                    ],
                    ['class', 'invalid-feedback', 4, 'ngIf'],
                    ['for', 'useremail'],
                    [
                      'type',
                      'email',
                      'formControlName',
                      'email',
                      'id',
                      'useremail',
                      'placeholder',
                      'Enter email',
                      1,
                      'form-control',
                      3,
                      'ngClass',
                    ],
                    ['for', 'userpassword'],
                    [
                      'type',
                      'password',
                      'formControlName',
                      'password',
                      'id',
                      'userpassword',
                      'placeholder',
                      'Enter password',
                      1,
                      'form-control',
                      3,
                      'ngClass',
                    ],
                    [1, 'mb-0'],
                    ['href', 'javascript: void(0);', 1, 'text-primary'],
                    [1, 'mt-4', 'd-grid'],
                    ['type', 'submit', 1, 'btn', 'btn-primary', 'btn-block'],
                    [1, 'mt-4', 'text-center'],
                    [1, 'font-size-14', 'mb-3'],
                    [1, 'list-inline'],
                    [1, 'list-inline-item'],
                    [
                      'href',
                      'javascript::void()',
                      1,
                      'social-list-item',
                      'bg-primary',
                      'text-white',
                      'border-primary',
                    ],
                    [1, 'mdi', 'mdi-facebook'],
                    [
                      'href',
                      'javascript::void()',
                      1,
                      'social-list-item',
                      'bg-info',
                      'text-white',
                      'border-info',
                    ],
                    [1, 'mdi', 'mdi-twitter'],
                    [
                      'href',
                      'javascript::void()',
                      1,
                      'social-list-item',
                      'bg-danger',
                      'text-white',
                      'border-danger',
                    ],
                    [1, 'mdi', 'mdi-google'],
                    [1, 'mt-5', 'text-center'],
                    [
                      'routerLink',
                      '/account/login-2',
                      1,
                      'fw-medium',
                      'text-primary',
                    ],
                    [1, 'mt-4', 'mt-md-5', 'text-center'],
                    [1, 'mdi', 'mdi-heart', 'text-danger'],
                    [1, 'item'],
                    [1, 'py-3'],
                    [1, 'font-size-16', 'mb-4'],
                    [1, 'font-size-16', 'text-primary'],
                    [1, 'font-size-14', 'mb-0'],
                    ['type', 'success', 3, 'dismissible'],
                    ['type', 'danger', 3, 'dismissible'],
                    [1, 'invalid-feedback'],
                    [4, 'ngIf'],
                  ],
                  template: function (n, r) {
                    1 & n &&
                      (e.ɵɵelementStart(0, 'div', 0),
                      e.ɵɵelementStart(1, 'div', 1),
                      e.ɵɵelementStart(2, 'div', 2),
                      e.ɵɵelementStart(3, 'div', 3),
                      e.ɵɵelementStart(4, 'div', 4),
                      e.ɵɵelement(5, 'div', 5),
                      e.ɵɵelementStart(6, 'div', 6),
                      e.ɵɵelementStart(7, 'div', 7),
                      e.ɵɵelementStart(8, 'div', 8),
                      e.ɵɵelementStart(9, 'div', 9),
                      e.ɵɵelementStart(10, 'div', 10),
                      e.ɵɵelementStart(11, 'h4', 11),
                      e.ɵɵelement(12, 'i', 12),
                      e.ɵɵelementStart(13, 'span', 13),
                      e.ɵɵtext(14, '5k'),
                      e.ɵɵelementEnd(),
                      e.ɵɵtext(15, '+ Satisfied clients'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(16, 'div', 14),
                      e.ɵɵelementStart(17, 'owl-carousel-o', 15),
                      e.ɵɵtemplate(18, K, 9, 0, 'ng-template', 16),
                      e.ɵɵtemplate(19, X, 9, 0, 'ng-template', 16),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(20, 'div', 17),
                      e.ɵɵelementStart(21, 'div', 18),
                      e.ɵɵelementStart(22, 'div', 4),
                      e.ɵɵelementStart(23, 'div', 19),
                      e.ɵɵelementStart(24, 'div', 20),
                      e.ɵɵelementStart(25, 'a', 21),
                      e.ɵɵelement(26, 'img', 22),
                      e.ɵɵelement(27, 'img', 23),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(28, 'div', 24),
                      e.ɵɵelementStart(29, 'div'),
                      e.ɵɵelementStart(30, 'h5', 13),
                      e.ɵɵtext(31, 'Register account'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(32, 'p', 25),
                      e.ɵɵtext(33, 'Get your free Skote account now.'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(34, 'div', 26),
                      e.ɵɵelementStart(35, 'form', 27),
                      e.ɵɵlistener('ngSubmit', function () {
                        return r.onSubmit();
                      }),
                      e.ɵɵtemplate(36, Q, 2, 1, 'ngb-alert', 28),
                      e.ɵɵtemplate(37, Z, 2, 2, 'ngb-alert', 29),
                      e.ɵɵelementStart(38, 'div', 11),
                      e.ɵɵelementStart(39, 'label', 30),
                      e.ɵɵtext(40, 'Username'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelement(41, 'input', 31),
                      e.ɵɵtemplate(42, te, 2, 1, 'div', 32),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(43, 'div', 11),
                      e.ɵɵelementStart(44, 'label', 33),
                      e.ɵɵtext(45, 'Email'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelement(46, 'input', 34),
                      e.ɵɵtemplate(47, ie, 3, 2, 'div', 32),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(48, 'div', 11),
                      e.ɵɵelementStart(49, 'label', 35),
                      e.ɵɵtext(50, 'Password'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelement(51, 'input', 36),
                      e.ɵɵtemplate(52, ae, 2, 1, 'div', 32),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(53, 'div'),
                      e.ɵɵelementStart(54, 'p', 37),
                      e.ɵɵtext(55, 'By registering you agree to the Skote '),
                      e.ɵɵelementStart(56, 'a', 38),
                      e.ɵɵtext(57, 'Terms of Use'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(58, 'div', 39),
                      e.ɵɵelementStart(59, 'button', 40),
                      e.ɵɵtext(60, 'Register'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(61, 'div', 41),
                      e.ɵɵelementStart(62, 'h5', 42),
                      e.ɵɵtext(63, 'Sign up using'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(64, 'ul', 43),
                      e.ɵɵelementStart(65, 'li', 44),
                      e.ɵɵelementStart(66, 'a', 45),
                      e.ɵɵelement(67, 'i', 46),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(68, 'li', 44),
                      e.ɵɵelementStart(69, 'a', 47),
                      e.ɵɵelement(70, 'i', 48),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(71, 'li', 44),
                      e.ɵɵelementStart(72, 'a', 49),
                      e.ɵɵelement(73, 'i', 50),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(74, 'div', 51),
                      e.ɵɵelementStart(75, 'p'),
                      e.ɵɵtext(76, 'Already have an account ? '),
                      e.ɵɵelementStart(77, 'a', 52),
                      e.ɵɵtext(78, ' Login'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(79, 'div', 53),
                      e.ɵɵelementStart(80, 'p', 37),
                      e.ɵɵtext(81),
                      e.ɵɵelement(82, 'i', 54),
                      e.ɵɵtext(83, ' by Themesbrand'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd()),
                      2 & n &&
                        (e.ɵɵadvance(17),
                        e.ɵɵproperty('options', r.carouselOption),
                        e.ɵɵadvance(18),
                        e.ɵɵproperty('formGroup', r.signupForm),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty('ngIf', r.successmsg),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty('ngIf', r.error),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty(
                          'ngClass',
                          e.ɵɵpureFunction1(
                            11,
                            b,
                            r.submitted && r.f.username.errors,
                          ),
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                          'ngIf',
                          r.submitted && r.f.username.errors,
                        ),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty(
                          'ngClass',
                          e.ɵɵpureFunction1(
                            13,
                            b,
                            r.submitted && r.f.email.errors,
                          ),
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty('ngIf', r.submitted && r.f.email.errors),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty(
                          'ngClass',
                          e.ɵɵpureFunction1(
                            15,
                            b,
                            r.submitted && r.f.password.errors,
                          ),
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty(
                          'ngIf',
                          r.submitted && r.f.password.errors,
                        ),
                        e.ɵɵadvance(29),
                        e.ɵɵtextInterpolate1(
                          '\xa9 ',
                          r.year,
                          ' Skote. Crafted with ',
                        ));
                  },
                  directives: [
                    f.Fy,
                    f.Mp,
                    o.yS,
                    l._Y,
                    l.JL,
                    l.sg,
                    s.NgIf,
                    l.Fj,
                    l.JJ,
                    l.u,
                    s.NgClass,
                    p.xm,
                  ],
                  styles: [''],
                })),
                t
              );
            })(),
          },
          { path: 'reset-password', component: H },
          {
            path: 'recoverpwd-2',
            component: (() => {
              class t {
                constructor(n, r, d, c) {
                  (this.formBuilder = n),
                    (this.route = r),
                    (this.router = d),
                    (this.authenticationService = c),
                    (this.year = new Date().getFullYear()),
                    (this.submitted = !1),
                    (this.error = ''),
                    (this.success = ''),
                    (this.loading = !1),
                    (this.carouselOption = {
                      items: 1,
                      loop: !1,
                      margin: 0,
                      nav: !1,
                      dots: !0,
                      responsive: { 680: { items: 1 } },
                    });
                }
                ngOnInit() {
                  this.resetForm = this.formBuilder.group({
                    email: ['', [l.kI.required, l.kI.email]],
                  });
                }
                get f() {
                  return this.resetForm.controls;
                }
                onSubmit() {
                  (this.success = ''),
                    (this.submitted = !0),
                    !this.resetForm.invalid &&
                      'firebase' === m.N.defaultauth &&
                      this.authenticationService
                        .resetPassword(this.f.email.value)
                        .catch(n => {
                          this.error = n || '';
                        });
                }
              }
              return (
                (t.ɵfac = function (n) {
                  return new (n || t)(
                    e.ɵɵdirectiveInject(l.qu),
                    e.ɵɵdirectiveInject(o.gz),
                    e.ɵɵdirectiveInject(o.F0),
                    e.ɵɵdirectiveInject(u.$),
                  );
                }),
                (t.ɵcmp = e.ɵɵdefineComponent({
                  type: t,
                  selectors: [['app-recoverpwd2']],
                  decls: 58,
                  vars: 8,
                  consts: [
                    [1, 'container-fluid', 'p-0'],
                    [1, 'row', 'g-0'],
                    [1, 'col-xl-9'],
                    [1, 'auth-full-bg', 'pt-lg-5', 'p-4'],
                    [1, 'w-100'],
                    [1, 'bg-overlay'],
                    [1, 'd-flex', 'h-100', 'flex-column'],
                    [1, 'p-4', 'mt-auto'],
                    [1, 'row', 'justify-content-center'],
                    [1, 'col-lg-7'],
                    [1, 'text-center'],
                    [1, 'mb-3'],
                    [
                      1,
                      'bx',
                      'bxs-quote-alt-left',
                      'text-primary',
                      'h1',
                      'align-middle',
                      'me-3',
                    ],
                    [1, 'text-primary'],
                    ['dir', 'ltr'],
                    [1, 'owl-theme', 'auth-review-carousel', 3, 'options'],
                    ['carouselSlide', ''],
                    [1, 'col-xl-3'],
                    [1, 'auth-full-page-content', 'p-md-5', 'p-4'],
                    [1, 'd-flex', 'flex-column', 'h-100'],
                    [1, 'mb-4', 'mb-md-5'],
                    ['routerLink', '/', 1, 'd-block', 'auth-logo'],
                    [
                      'src',
                      'assets/images/logo-dark.png',
                      'alt',
                      '',
                      'height',
                      '18',
                      1,
                      'auth-logo-dark',
                    ],
                    [
                      'src',
                      'assets/images/logo-light.png',
                      'alt',
                      '',
                      'height',
                      '18',
                      1,
                      'auth-logo-light',
                    ],
                    [1, 'my-auto'],
                    [1, 'text-muted'],
                    [1, 'mt-4'],
                    [
                      'role',
                      'alert',
                      1,
                      'alert',
                      'alert-success',
                      'text-center',
                      'mb-4',
                    ],
                    [3, 'formGroup', 'ngSubmit'],
                    ['type', 'danger', 3, 'dismissible', 4, 'ngIf'],
                    ['for', 'useremail'],
                    [
                      'type',
                      'email',
                      'formControlName',
                      'email',
                      'id',
                      'useremail',
                      'placeholder',
                      'Enter email',
                      1,
                      'form-control',
                      3,
                      'ngClass',
                    ],
                    ['class', 'invalid-feedback', 4, 'ngIf'],
                    [1, 'text-end'],
                    ['type', 'submit', 1, 'btn', 'btn-primary', 'w-md'],
                    [1, 'mt-5', 'text-center'],
                    [
                      'routerLink',
                      '/account/login-2',
                      1,
                      'fw-medium',
                      'text-primary',
                    ],
                    [1, 'mt-4', 'mt-md-5', 'text-center'],
                    [1, 'mb-0'],
                    [1, 'mdi', 'mdi-heart', 'text-danger'],
                    [1, 'item'],
                    [1, 'py-3'],
                    [1, 'font-size-16', 'mb-4'],
                    [1, 'font-size-16', 'text-primary'],
                    [1, 'font-size-14', 'mb-0'],
                    ['type', 'danger', 3, 'dismissible'],
                    [1, 'invalid-feedback'],
                    [4, 'ngIf'],
                  ],
                  template: function (n, r) {
                    1 & n &&
                      (e.ɵɵelementStart(0, 'div'),
                      e.ɵɵelementStart(1, 'div', 0),
                      e.ɵɵelementStart(2, 'div', 1),
                      e.ɵɵelementStart(3, 'div', 2),
                      e.ɵɵelementStart(4, 'div', 3),
                      e.ɵɵelementStart(5, 'div', 4),
                      e.ɵɵelement(6, 'div', 5),
                      e.ɵɵelementStart(7, 'div', 6),
                      e.ɵɵelementStart(8, 'div', 7),
                      e.ɵɵelementStart(9, 'div', 8),
                      e.ɵɵelementStart(10, 'div', 9),
                      e.ɵɵelementStart(11, 'div', 10),
                      e.ɵɵelementStart(12, 'h4', 11),
                      e.ɵɵelement(13, 'i', 12),
                      e.ɵɵelementStart(14, 'span', 13),
                      e.ɵɵtext(15, '5k'),
                      e.ɵɵelementEnd(),
                      e.ɵɵtext(16, '+ Satisfied clients'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(17, 'div', 14),
                      e.ɵɵelementStart(18, 'owl-carousel-o', 15),
                      e.ɵɵtemplate(19, oe, 9, 0, 'ng-template', 16),
                      e.ɵɵtemplate(20, de, 9, 0, 'ng-template', 16),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(21, 'div', 17),
                      e.ɵɵelementStart(22, 'div', 18),
                      e.ɵɵelementStart(23, 'div', 4),
                      e.ɵɵelementStart(24, 'div', 19),
                      e.ɵɵelementStart(25, 'div', 20),
                      e.ɵɵelementStart(26, 'a', 21),
                      e.ɵɵelement(27, 'img', 22),
                      e.ɵɵelement(28, 'img', 23),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(29, 'div', 24),
                      e.ɵɵelementStart(30, 'div'),
                      e.ɵɵelementStart(31, 'h5', 13),
                      e.ɵɵtext(32, ' Reset Password'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(33, 'p', 25),
                      e.ɵɵtext(34, 'Re-Password with Skote.'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(35, 'div', 26),
                      e.ɵɵelementStart(36, 'div', 27),
                      e.ɵɵtext(
                        37,
                        ' Enter your Email and instructions will be sent to you! ',
                      ),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(38, 'form', 28),
                      e.ɵɵlistener('ngSubmit', function () {
                        return r.onSubmit();
                      }),
                      e.ɵɵtemplate(39, se, 2, 2, 'ngb-alert', 29),
                      e.ɵɵelementStart(40, 'div', 11),
                      e.ɵɵelementStart(41, 'label', 30),
                      e.ɵɵtext(42, 'Email'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelement(43, 'input', 31),
                      e.ɵɵtemplate(44, ce, 3, 2, 'div', 32),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(45, 'div', 33),
                      e.ɵɵelementStart(46, 'button', 34),
                      e.ɵɵtext(47, 'Reset'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(48, 'div', 35),
                      e.ɵɵelementStart(49, 'p'),
                      e.ɵɵtext(50, 'Remember It ? '),
                      e.ɵɵelementStart(51, 'a', 36),
                      e.ɵɵtext(52, ' Sign In here'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementStart(53, 'div', 37),
                      e.ɵɵelementStart(54, 'p', 38),
                      e.ɵɵtext(55),
                      e.ɵɵelement(56, 'i', 39),
                      e.ɵɵtext(57, ' by Themesbrand'),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd(),
                      e.ɵɵelementEnd()),
                      2 & n &&
                        (e.ɵɵadvance(18),
                        e.ɵɵproperty('options', r.carouselOption),
                        e.ɵɵadvance(20),
                        e.ɵɵproperty('formGroup', r.resetForm),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty('ngIf', r.error),
                        e.ɵɵadvance(4),
                        e.ɵɵproperty(
                          'ngClass',
                          e.ɵɵpureFunction1(
                            6,
                            fe,
                            r.submitted && r.f.email.errors,
                          ),
                        ),
                        e.ɵɵadvance(1),
                        e.ɵɵproperty('ngIf', r.submitted && r.f.email.errors),
                        e.ɵɵadvance(11),
                        e.ɵɵtextInterpolate1(
                          '\xa9',
                          r.year,
                          ' Skote. Crafted with ',
                        ));
                  },
                  directives: [
                    f.Fy,
                    f.Mp,
                    o.yS,
                    l._Y,
                    l.JL,
                    l.sg,
                    s.NgIf,
                    l.Fj,
                    l.JJ,
                    l.u,
                    s.NgClass,
                    p.xm,
                  ],
                  styles: [''],
                })),
                t
              );
            })(),
          },
          { path: 'login-2', component: L.$ },
        ];
      let ge = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [[o.Bz.forChild(ve)], o.Bz],
            })),
            t
          );
        })(),
        Se = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.ɵɵdefineNgModule({ type: t })),
            (t.ɵinj = e.ɵɵdefineInjector({
              imports: [[s.CommonModule, l.UX, l.u5, p._A, h.v, ge, f.bB]],
            })),
            t
          );
        })();
    },
  },
]);
