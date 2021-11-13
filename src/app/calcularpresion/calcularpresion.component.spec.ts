import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularpresionComponent } from './calcularpresion.component';

describe('CalcularpresionComponent', () => {
  let component: CalcularpresionComponent;
  let fixture: ComponentFixture<CalcularpresionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularpresionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
