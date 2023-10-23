import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../form/validation/validation.mustmatch';
import { UserService } from '../service/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  // Form submition
  submit: boolean;
  isEditScreen: boolean = false;

  public userForm: FormGroup = this.formBuilder.group(
    {
      id: [''],
      firstName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z0-9]+')],
      ],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      username: ['', [Validators.required, Validators.maxLength(30)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      accountName: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(6),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpwd: ['', Validators.required],
      phone: [
        null,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(`^(\\+\\d{1,3}[- ]?)?\\d{10}$`),
        ],
      ],
    },
    {
      validator: MustMatch('password', 'confirmpwd'),
    }
  );

  @ViewChild('content') content;
  constructor(
    private eventService: EventService,
    public formBuilder: FormBuilder,
    public userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.edit) {
        this.isEditScreen = true;
        let userId = params['id'];
        this.userForm.value.id = params['id'];
        this.userService.viewUser(userId).then(res => {
          if (res.status === true) {
            this.userForm.patchValue(res.data);
            this.userForm.get('password')?.patchValue('');
            this.userForm.get('confirmpwd')?.patchValue('');
            this.userForm.get('accountName').patchValue(res.data.account.name);
            this.userForm.get('phone').patchValue(res.data.mobile);
          }
        });
      } else {
        this.userForm.reset();
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
        console.log(horizontal);
      }
    }

    this.submit = false;
  }

  changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }

  get form() {
    return this.userForm.controls;
  }

  validSubmit() {
    this.submit = true;
  }

  get type() {
    return this.userForm.controls;
  }

  onSave() {
    let addUserStatus = this.userService.addUser(this.userForm);
    if (addUserStatus) {
      console.log('user added');
    } else {
      console.log('error');
    }
  }

  onReset() {
    this.userForm.reset();
  }

  onUpdate() {
    this.userService.updateUser(this.userForm).then(res => {
      if (res.status) {
        console.log('user updated');
      } else {
        console.log('error');
      }
    });
  }
}
