import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConnectorsComponent } from './modal-connectors.component';

describe('ModalConnectorsComponent', () => {
  let component: ModalConnectorsComponent;
  let fixture: ComponentFixture<ModalConnectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConnectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
