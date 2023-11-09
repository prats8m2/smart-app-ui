import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormArray, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from "src/app/core/services/event.service";
import { GlobalService } from "src/app/core/services/global.service";
import { SiteService } from "../../site/service/site.service";
import { AccountService } from "../service/account.service";

@Component({
  selector: "app-add-account",
  templateUrl: "./add-account.component.html",
  styleUrls: ["./add-account.component.scss"],
})
export class AddAccountComponent implements OnInit {
  submit: boolean;
  isEditScreen: boolean = false;

  public accountForm: FormGroup = this.formBuilder.group({
    id: [""],
    siteName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
    account: [undefined, [Validators.required]],
    type: [undefined, [Validators.required]],
    address: [
      "",
      [Validators.required, Validators.minLength(12), Validators.maxLength(30)],
    ],
    wifiDetails: new FormArray([]),
  });
  siteTypes = [
    { id: 1, label: "Hotel" },
    { id: 2, label: "Restaurant" },
  ];

  constructor(
    public formBuilder: FormBuilder,
    public userService: AccountService,
    private activatedRoute: ActivatedRoute
  ) {}

  validSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.edit) {
        this.isEditScreen = true;
      } else {
        this.accountForm.reset();
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
}
