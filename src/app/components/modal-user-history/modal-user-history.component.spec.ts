import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserHistoryComponent } from './modal-user-history.component';

describe('ModalUserHistoryComponent', () => {
  let component: ModalUserHistoryComponent;
  let fixture: ComponentFixture<ModalUserHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
