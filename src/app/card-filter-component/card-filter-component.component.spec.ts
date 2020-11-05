import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilterComponentComponent } from './card-filter-component.component';

describe('CardFilterComponentComponent', () => {
  let component: CardFilterComponentComponent;
  let fixture: ComponentFixture<CardFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFilterComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
