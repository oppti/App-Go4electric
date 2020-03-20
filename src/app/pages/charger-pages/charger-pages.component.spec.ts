import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargerPagesComponent } from './charger-pages.component';

describe('ChargerPagesComponent', () => {
  let component: ChargerPagesComponent;
  let fixture: ComponentFixture<ChargerPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargerPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
