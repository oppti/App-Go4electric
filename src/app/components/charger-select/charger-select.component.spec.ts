import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerSelectComponent } from './charger-select.component';

describe('ChargerSelectComponent', () => {
  let component: ChargerSelectComponent;
  let fixture: ComponentFixture<ChargerSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
