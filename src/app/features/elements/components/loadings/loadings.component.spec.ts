import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingsComponent } from './loadings.component';

describe('LoadingsComponent', () => {
  let component: LoadingsComponent;
  let fixture: ComponentFixture<LoadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingsComponent]
    });
    fixture = TestBed.createComponent(LoadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
