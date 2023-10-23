import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePermissionDeniedComponent } from './page-permission-denied.component';

describe('PagePermissionDeniedComponent', () => {
  let component: PagePermissionDeniedComponent;
  let fixture: ComponentFixture<PagePermissionDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePermissionDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePermissionDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
