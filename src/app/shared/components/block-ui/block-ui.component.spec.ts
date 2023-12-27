import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUIComponent } from './block-ui.component';

describe('BlockUIComponent', () => {
  let component: BlockUIComponent;
  let fixture: ComponentFixture<BlockUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockUIComponent]
    });
    fixture = TestBed.createComponent(BlockUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
