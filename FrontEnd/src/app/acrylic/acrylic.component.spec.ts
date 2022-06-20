import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrylicComponent } from './acrylic.component';

describe('AcrylicComponent', () => {
  let component: AcrylicComponent;
  let fixture: ComponentFixture<AcrylicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcrylicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrylicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
