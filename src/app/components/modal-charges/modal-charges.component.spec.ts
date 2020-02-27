import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChargesComponent } from './modal-charges.component';

describe('ModalChargesComponent', () => {
  let component: ModalChargesComponent;
  let fixture: ComponentFixture<ModalChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
