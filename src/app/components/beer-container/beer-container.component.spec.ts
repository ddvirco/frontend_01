import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerContainerComponent } from './beer-container.component';

describe('BeerContainerComponent', () => {
  let component: BeerContainerComponent;
  let fixture: ComponentFixture<BeerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
