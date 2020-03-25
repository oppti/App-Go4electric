import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumListComponent } from './condominium-list.component';

describe('CondominiumListComponent', () => {
  let component: CondominiumListComponent;
  let fixture: ComponentFixture<CondominiumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominiumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
