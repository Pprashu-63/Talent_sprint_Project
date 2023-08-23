import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductsComponent } from './addproducts.component';

describe('FurnitureformComponent', () => {
  let component: AddproductsComponent;
  let fixture: ComponentFixture<AddproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
