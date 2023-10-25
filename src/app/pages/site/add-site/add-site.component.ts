import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/core/services/event.service';
import { UserService } from '../../dashboards/service/user/user.service';
import { IParams } from 'src/app/core/interface/params';
import { SiteService } from '../service/site.service';
import { URL_ROUTES } from 'src/app/constants/routing';
import { GlobalService } from 'src/app/core/services/global.service';
import { APP_ROLE } from 'src/app/constants/core';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss'],
})
export class AddSiteComponent implements OnInit {
  submit: boolean;
  isEditScreen: boolean = false;
  accountList: any = [];

  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };

  userRole = this.globalService.getUserRole('userRole');

  public siteForm: FormGroup = this.formBuilder.group({
    id: [''],
    siteName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    account: [undefined, [Validators.required]],
    type: [undefined, [Validators.required]],
    address: [
      '',
      [Validators.required, Validators.minLength(12), Validators.maxLength(30)],
    ],
    wifiDetails: new FormArray([]),
  });
  siteTypes = [
    { id: 1, label: 'Hotel' },
    { id: 2, label: 'Restaurant' },
  ];

  @ViewChild('content') content;

  constructor(
    private eventService: EventService,
    public formBuilder: FormBuilder,
    public userService: UserService,
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService,
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let siteId = params['id'];
        this.siteForm.value.id = params['id'];
        this.siteService.viewSite(siteId).then(res => {
          if (res.status === true) {
            this.siteForm.patchValue(res.data);
            this.siteForm.get('siteName').patchValue(res.data.id);
            this.siteForm.get('account').setValue(res.data.account.id);
            this.accountList.push(res.data.account);
            let wifiDetails = res.data.wifi;
            wifiDetails.forEach(element => {
              this.formData.push(this.formBuilder.group(element));
            });

            console.log(this.siteForm.value);
          }
        });
      } else {
        this.siteForm.reset();
        if (this.userRole === APP_ROLE.SUPER_ADMIN) {
          this.userService.listAccounts(this.accountParams).then(res => {
            if (res.data) {
              this.accountList = [...res.data.accounts];
            }
          });
        } else {
          this.siteForm
            .get('account')
            .setValue(this.globalService.getUserRole('account').id);
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

  field(): FormGroup {
    return this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }

  get form() {
    return this.siteForm.controls;
  }

  validSubmit() {
    this.submit = true;
  }

  get type() {
    return this.siteForm.controls;
  }

  onSave() {
    this.siteService.addSite(this.siteForm).then(res => {
      if (res.status) {
        console.log('site added successfully');
        this.router.navigateByUrl(URL_ROUTES.LIST_SITE);
      } else {
        console.log('error');
      }
    });
  }

  get formData(): FormArray {
    return this.siteForm.get('wifiDetails') as FormArray;
  }

  onReset() {
    this.siteForm.reset();
  }

  onUpdate() {
    this.siteService.updateSite(this.siteForm).then(res => {
      if (res.status) {
        console.log('Site updated successfully');
        this.router.navigateByUrl(URL_ROUTES.LIST_SITE);
      } else {
        console.log('error');
      }
    });
  }

  removeField(i: number) {
    this.formData.removeAt(i);
  }

  addField() {
    this.formData.push(this.field());
  }
}
