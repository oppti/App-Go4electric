import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChargersComponent as ModalChargersComponent } from './modal-chargers.component';

describe('ModalChargesComponent', () => {
  let component: ModalChargersComponent;
  let fixture: ComponentFixture<ModalChargersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChargersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
