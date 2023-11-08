import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SiteService } from "../../site/service/site.service";
import { ActivatedRoute } from "@angular/router";
import { IParams } from "src/app/core/interface/params";
import { GlobalService } from "src/app/core/services/global.service";
import { RoomService } from "../../room/service/room.service";
import { DeviceService } from "../service/device.service";
import { ROUTING_PERMISSION } from "src/app/constants/permission";
import { URL_ROUTES } from "src/app/constants/routing";
import { APP_ROLE } from "src/app/constants/core";
import { AccountService } from "../../accounts/service/account.service";

@Component({
  selector: "app-add-device",
  templateUrl: "./add-device.component.html",
  styleUrls: ["./add-device.component.scss"],
})
export class AddDeviceComponent implements OnInit {
  isEditScreen: boolean = false;
  submit: boolean;
  siteList: any = [];
  accountList: any[];
  roomList: any[];
  userRole = this.globalService.getUserRole("userRole");

  public deviceForm: FormGroup = this.formBuilder.group({
    id: [""],
    code: ["", [Validators.required]],
    roomId: [""],
    site: [undefined, [Validators.required]],
    account: [undefined, [Validators.required]],
  });
  accountParams: IParams = {
    limit: 10,
    pageNumber: 1,
  };

  constructor(
    public formBuilder: FormBuilder,
    private siteService: SiteService,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private userService: AccountService,
    private roomService: RoomService,
    public deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.edit) {
        this.isEditScreen = true;
        let deviceId = params["id"];
        this.deviceForm.value.id = params["id"];
        this.deviceService.viewDevice(deviceId).then((res) => {
          if (res.status == true) {
            this.deviceForm.get("code").setValue(res.data.device.code);
            this.deviceForm.get("site").setValue(res.data.device.site.name);
          }
        });
      } else {
        this.deviceForm.reset();
        if (this.userRole === APP_ROLE.SUPER_ADMIN) {
          this.userService.listAccounts(this.accountParams).then((res) => {
            if (res.data) {
              this.accountList = [...res.data.accounts];
            }
            this.deviceForm.get("account").setValue(this.accountList[0]?.id);

            let param: IParams = {
              limit: 10,
              pageNumber: 1,
              accountId: this.accountList[0]?.id,
            };

            this.siteService.listSite(param).then((res) => {
              this.siteList = [...res.data.sites];
            });
            setTimeout(() => {
              this.deviceForm.get("site").setValue(this.siteList[0]?.id);
              let param: IParams = {
                limit: 10,
                pageNumber: 1,
                siteId: this.siteList[0]?.id,
              };

              this.roomService.listRooms(param).then((res) => {
                this.roomList = [...res.data.rooms];
              });
            }, 1000);
          });
        } else {
          this.deviceForm
            .get("account")
            .setValue(this.globalService.getUserRole("account").id);

          let param: IParams = {
            limit: 10,
            pageNumber: 1,
            accountId: this.globalService.getUserRole("account").id,
          };

          console.log(param);
          this.siteService.listSite(param).then((res) => {
            this.siteList = [...res.data.sites];
          });

          setTimeout(() => {
            console.log(this.siteList);
            this.changeSiteList(this.siteList[0]?.id);
          }, 1000);
        }
      }
    });
    const attribute = document.body.getAttribute("data-layout");

    const vertical = document.getElementById("layout-vertical");
    if (vertical != null) {
      vertical.setAttribute("checked", "true");
    }
    if (attribute == "horizontal") {
      const horizontal = document.getElementById("layout-horizontal");
      if (horizontal != null) {
        horizontal.setAttribute("checked", "true");
      }
    }
    this.submit = false;
  }

  validSubmit() {
    this.submit = true;
  }

  onUpdate() {}

  onSave() {
    this.deviceService.addDevice(this.deviceForm).then((res) => {
      if (res.status) {
        this.globalService.checkForPermissionAndRoute(
          ROUTING_PERMISSION.LIST_DEVICE,
          URL_ROUTES.LIST_DEVICE
        );
      }
    });
  }

  onReset() {}

  changeAccountList(value: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      accountId: value,
    };

    this.siteService.listSite(param).then((res) => {
      this.siteList = [...res.data.sites];
    });

    setTimeout(() => {
      console.log(this.siteList);
      this.changeSiteList(this.siteList[0].id);
      this.deviceForm.get("site").setValue(this.siteList[0].id);
    }, 1000);
  }

  changeSiteList(value: any) {
    let param: IParams = {
      limit: 10,
      pageNumber: 1,
      siteId: value,
    };

    this.roomService.listRooms(param).then((res) => {
      this.roomList = [...res.data.rooms];
    });
  }
}
