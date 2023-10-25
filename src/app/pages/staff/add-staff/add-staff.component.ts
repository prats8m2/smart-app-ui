import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../dashboards/service/user/user.service';
import { SiteService } from '../../site/service/site.service';
import { IParams } from 'src/app/core/interface/params';
import { RoleService } from '../../role/services/role.service';
import { StaffService } from '../services/staff.service';
import { URL_ROUTES } from 'src/app/constants/routing';
import { GlobalService } from 'src/app/core/services/global.service';
import { APP_ROLE } from 'src/app/constants/core';

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
  userRole = this.globalService.getUserRole('userRole');

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

  constructor(
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public userService: UserService,
    private siteService: SiteService,
    private roleService: RoleService,
    private router: Router,
    private staffService: StaffService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let staffId = params['id'];
        this.staffForm.value.id = params['id'];
        this.staffService.viewStaff(staffId).then(res => {
          if (res.status == true) {
            this.staffForm.patchValue(res.data);
            this.staffForm.get('phone').setValue(res.data.mobile);
            this.staffForm.get('account').setValue(res.data.account.name);
            this.staffForm.get('role').setValue(res.data.role.name);
          }
        });
      } else {
        this.staffForm.reset();
        if (this.userRole === APP_ROLE.SUPER_ADMIN) {
          this.userService.listAccounts(this.accountParams).then(res => {
            if (res.data) {
              this.accountList = [...res.data.accounts];
            }
          });
        } else {
          this.staffForm
            .get('account')
            .setValue(this.globalService.getUserRole('account').id);

          setTimeout(() => {
            let param: IParams = {
              limit: 10,
              pageNumber: 1,
              accountId: this.globalService.getUserRole('account').id,
            };
            this.siteService.listSite(param).then(res => {
              this.siteList = [...res.data.sites];
            });

            this.roleService.listRole(param).then(res => {
              if (res.data) {
                this.roleList = [...res.data.roles];
              }
            });
          }, 1000);
        }
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
    this.staffService.addStaff(this.staffForm).then(res => {
      if (res.status) {
        console.log('Staff saved successfully');
        this.router.navigateByUrl(URL_ROUTES.LIST_STAFF);
      } else {
        console.log('error');
      }
    });
  }
  onUpdate() {
    console.log(this.staffForm.value);

    this.staffService.updateStaff(this.staffForm).then(res => {
      if (res.status) {
        console.log('staff updated');
      } else {
        console.log('error');
      }
    });
  }

  changeAccountValue(event: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      accountId: event,
    };

    this.siteService.listSite(param).then(res => {
      this.siteList = [...res.data.sites];
    });

    this.roleService.listRole(param).then(res => {
      if (res.data) {
        this.roleList = [...res.data.roles];
      }
    });
  }
}
