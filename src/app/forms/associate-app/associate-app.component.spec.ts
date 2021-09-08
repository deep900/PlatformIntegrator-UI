import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateAppComponent } from './associate-app.component';

describe('AssociateAppComponent', () => {
  let component: AssociateAppComponent;
  let fixture: ComponentFixture<AssociateAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
