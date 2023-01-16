import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakrComponent } from './breakr.component';

describe('BreakrComponent', () => {
  let component: BreakrComponent;
  let fixture: ComponentFixture<BreakrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
