import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectorsListComponent } from './connectors-list.component';

describe('ConnectorsListComponent', () => {
  let component: ConnectorsListComponent;
  let fixture: ComponentFixture<ConnectorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
