import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerhistoryComponent } from './buyerhistory.component';

describe('BuyerhistoryComponent', () => {
  let component: BuyerhistoryComponent;
  let fixture: ComponentFixture<BuyerhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
