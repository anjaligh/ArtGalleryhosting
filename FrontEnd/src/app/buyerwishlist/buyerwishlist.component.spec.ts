import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerwishlistComponent } from './buyerwishlist.component';

describe('BuyerwishlistComponent', () => {
  let component: BuyerwishlistComponent;
  let fixture: ComponentFixture<BuyerwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerwishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
