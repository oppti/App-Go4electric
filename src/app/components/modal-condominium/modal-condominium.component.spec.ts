import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCondominiumComponent } from './modal-condominium.component';

describe('ModalCondominiumComponent', () => {
  let component: ModalCondominiumComponent;
  let fixture: ComponentFixture<ModalCondominiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCondominiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
