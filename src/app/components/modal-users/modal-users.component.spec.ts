import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsersComponent } from './modal-users.component';

describe('ModalUsersComponent', () => {
  let component: ModalUsersComponent;
  let fixture: ComponentFixture<ModalUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
