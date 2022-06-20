import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerhistoryComponent } from './sellerhistory.component';

describe('SellerhistoryComponent', () => {
  let component: SellerhistoryComponent;
  let fixture: ComponentFixture<SellerhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
