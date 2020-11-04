import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReastaurantComponent } from './update-reastaurant.component';

describe('UpdateReastaurantComponent', () => {
  let component: UpdateReastaurantComponent;
  let fixture: ComponentFixture<UpdateReastaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReastaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReastaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
