import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCellComponent } from './create-cell.component';

describe('CreateCellComponent', () => {
  let component: CreateCellComponent;
  let fixture: ComponentFixture<CreateCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
