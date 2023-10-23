import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../dashboards/service/user/user.service';
import { SiteService } from '../../site/service/site.service';
import { IParams } from 'src/app/core/interface/params';
import { RoleService } from '../../role/services/role.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss'],
})
export class AddStaffComponent implements OnInit {
  submit: boolean;
  isEditScreen: boolean = false;
  accountList: any = [];
  siteList: any = [];
  roleList: any = [];

  public staffForm: FormGroup = this.formBuilder.group({
    id: [''],
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    username: ['', [Validators.required, Validators.maxLength(30)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [
      null,
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern(`^(\\+\\d{1,3}[- ]?)?\\d{10}$`),
      ],
    ],
    account: [undefined, [Validators.required]],
    role: [undefined, [Validators.required]],
    site: [undefined, [Validators.required]],
  });
  siteTypes = [
    { id: 1, label: 'Hotel' },
    { id: 2, label: 'Restaurant' },
  ];

  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };
  siteParams: IParams = {
    limit: 10,
    pageNumber: 1,
    accountId: 7,
  };

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private siteService: SiteService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let siteId = params['id'];
        this.staffForm.value.id = params['id'];
        this.siteService.viewSite(siteId).then(res => {
          if (res.status === true) {
            this.staffForm.patchValue(res.data);
          }
        });
      } else {
        this.staffForm.reset();
        this.userService.listAccounts(this.accountParams).then(res => {
          if (res.data) {
            res.data.accounts.forEach(element => {
              this.accountList.push(element);
            });
          }
        });

        this.siteService.listSite(this.siteParams).then(res => {
          if (res.data) {
            res.data.sites.forEach(element => {
              this.siteList.push(element);
            });
          }
        });

        this.roleService.listRole(this.siteParams).then(res => {
          if (res.data) {
            res.data.roles.forEach(element => {
              this.roleList.push(element);
            });
          }
        });
      }
    });
    const attribute = document.body.getAttribute('data-layout');

    const vertical = document.getElementById('layout-vertical');
    if (vertical != null) {
      vertical.setAttribute('checked', 'true');
    }
    if (attribute == 'horizontal') {
      const horizontal = document.getElementById('layout-horizontal');
      if (horizontal != null) {
        horizontal.setAttribute('checked', 'true');
      }
    }
    this.submit = false;
  }

  validSubmit() {
    this.submit = true;
  }

  get type() {
    return this.staffForm.controls;
  }

  onReset() {
    this.staffForm.reset();
  }

  onSave() {
    console.log(this.staffForm.value);
  }
  onUpdate() {
    console.log(this.staffForm.value);
  }
}
