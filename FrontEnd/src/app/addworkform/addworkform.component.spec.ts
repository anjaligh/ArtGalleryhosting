import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkformComponent } from './addworkform.component';

describe('AddworkformComponent', () => {
  let component: AddworkformComponent;
  let fixture: ComponentFixture<AddworkformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworkformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddworkformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
