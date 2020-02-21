import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecargaComponent } from './list-recarga.component';

describe('ListRecargaComponent', () => {
  let component: ListRecargaComponent;
  let fixture: ComponentFixture<ListRecargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
