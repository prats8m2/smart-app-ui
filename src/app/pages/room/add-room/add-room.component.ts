import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/core/services/global.service';
import { UserService } from '../../dashboards/service/user/user.service';
import { DeviceService } from '../../device/service/device.service';
import { SiteService } from '../../site/service/site.service';
import { RoomService } from '../service/room.service';
import { IParams } from 'src/app/core/interface/params';
import { URL_ROUTES } from 'src/app/constants/routing';
import { APP_ROLE } from 'src/app/constants/core';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  isEditScreen: boolean = false;
  submit: boolean;
  siteList: any = [];
  accountList: any[];
  roomList: any[];
  deviceList: any[];
  wifiList: any[];
  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };

  userRole = this.globalService.getUserRole('userRole');

  public roomForm: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    site: [undefined, [Validators.required]],
    account: [undefined],
    device: [undefined, [Validators.required]],
    wifi: [undefined, [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private siteService: SiteService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private roomService: RoomService,
    private deviceService: DeviceService,
    private router: Router,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let roomId = params['id'];
        this.roomForm.value.id = params['id'];
        this.roomService.viewRoom(roomId).then(res => {
          if (res.status == true) {
            this.roomForm.get('site').setValue(res.data?.site?.id);
            this.roomForm.get('name').setValue(res.data?.id);
            this.roomForm.get('device').setValue(res.data?.device?.code);
            this.roomForm.get('id').setValue(res?.data?.id);
          }
        });
      } else {
        this.roomForm.reset();
        if (this.userRole === APP_ROLE.SUPER_ADMIN) {
          this.roomForm.get('account').setValidators([Validators.required]);
          this.userService.listAccounts(this.accountParams).then(res => {
            if (res.data) {
              this.accountList = [...res.data.accounts];
            }
          });
        } else {
          this.changeAccountList(this.globalService.getUserRole('account')?.id);
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
  changeSiteList(value: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      siteId: value,
    };

    this.deviceService.listDevices(param).then(res => {
      this.deviceList = [...res.data.devices];
    });

    this.siteService.viewSite(value).then(res => {
      this.wifiList = [...res.data.wifi];
    });

    setTimeout(() => {
      this.roomForm.get('device').setValue(this.deviceList[0]?.id);
      this.roomForm.get('wifi').setValue(this.wifiList[0]?.id);
    }, 1000);
  }

  changeAccountList(value: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      accountId: value,
    };

    this.roomForm.get('account').setValue(value);

    this.siteService.listSite(param).then(res => {
      this.siteList = [...res.data.sites];
    });
    setTimeout(() => {
      this.roomForm.get('site').setValue(this.siteList[0]?.id);
    }, 1000);
  }

  onSave() {
    this.roomService.addRoom(this.roomForm).then(res => {
      if (res.status) {
        console.log('Room added successfully');
        this.router.navigateByUrl(URL_ROUTES.LIST_ROOM);
      } else {
        console.log('error');
      }
    });
  }
  onUpdate() {}
  onReset() {
    this.roomForm.reset();
  }
}
