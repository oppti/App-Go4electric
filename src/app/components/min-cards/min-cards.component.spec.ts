import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinCardsComponent } from './min-cards.component';

describe('MinCardsComponent', () => {
  let component: MinCardsComponent;
  let fixture: ComponentFixture<MinCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
