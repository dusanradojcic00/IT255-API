import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrystatsComponent } from './countrystats.component';

describe('CountrystatsComponent', () => {
  let component: CountrystatsComponent;
  let fixture: ComponentFixture<CountrystatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrystatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrystatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
