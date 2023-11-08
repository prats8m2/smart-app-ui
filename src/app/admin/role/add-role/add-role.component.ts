import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../form/validation/validation.mustmatch';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
import { UserService } from '../../dashboards/service/user/user.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss'],
})
export class AddRoleComponent implements OnInit {
  submit: boolean;
  isEditScreen: boolean = false;

  public roleForm: FormGroup = this.formBuilder.group({
    id: [''],
    roleName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
  });

  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let userId = params['id'];
        this.roleForm.value.id = userId;
      } else {
        this.roleForm.reset();
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
}
