import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercartComponent } from './sellercart.component';

describe('SellercartComponent', () => {
  let component: SellercartComponent;
  let fixture: ComponentFixture<SellercartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellercartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
