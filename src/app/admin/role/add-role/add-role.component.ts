import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "../../accounts/service/account.service";

@Component({
  selector: "app-add-role",
  templateUrl: "./add-role.component.html",
  styleUrls: ["./add-role.component.scss"],
})
export class AddRoleComponent implements OnInit {
  submit: boolean;
  isEditScreen: boolean = false;

  public roleForm: FormGroup;

  headings: string[] = [
    "Staff",
    "Device",
    "Room",
    "Table",
    "Category",
    "Product",
    "Menu",
    "Order",
  ];
  permissions: string[] = ["ADD", "UPDATE", "DELETE", "VIEW", "LIST"];

  constructor(
    public formBuilder: FormBuilder,
    public userService: AccountService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.roleForm = this.formBuilder.group({
      id: [""],
      roleName: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      permissions: this.formBuilder.group({}),
    });

    this.headings.forEach((heading) => {
      const headingGroup = {};
      this.permissions.forEach((permission) => {
        headingGroup[permission] = this.formBuilder.control(false); // Initialize the nested controls
      });
      (this.roleForm.get("permissions") as FormGroup).addControl(
        heading,
        this.formBuilder.group(headingGroup)
      );
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.edit) {
        this.isEditScreen = true;
        let userId = params["id"];
        this.roleForm.value.id = userId;
      } else {
        this.roleForm.reset();
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

  get form() {
    return this.roleForm.controls;
  }

  validSubmit() {
    this.submit = true;
  }
  onReset() {
    this.roleForm.reset();
  }

  onSave() {
    console.log(this.roleForm.value);
  }

  onUpdate() {
    console.log(this.roleForm);
  }

  submit1() {
    // Output selected permissions to console or send to API
    console.log(this.roleForm.value);
    // You can send the selected permissions to the server or perform other actions here.
  }
}
