import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerwishlistComponent } from './sellerwishlist.component';

describe('SellerwishlistComponent', () => {
  let component: SellerwishlistComponent;
  let fixture: ComponentFixture<SellerwishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerwishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
