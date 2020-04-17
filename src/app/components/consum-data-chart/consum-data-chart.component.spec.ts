import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumDataChartComponent } from './consum-data-chart.component';

describe('ConsumDataChartComponent', () => {
  let component: ConsumDataChartComponent;
  let fixture: ComponentFixture<ConsumDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
