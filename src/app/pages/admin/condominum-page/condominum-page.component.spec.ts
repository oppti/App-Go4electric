import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominumPageComponent } from './condominum-page.component';

describe('CondominumPageComponent', () => {
  let component: CondominumPageComponent;
  let fixture: ComponentFixture<CondominumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
