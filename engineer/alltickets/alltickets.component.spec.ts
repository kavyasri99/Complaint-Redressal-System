import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllticketsComponent } from './alltickets.component';

describe('AllticketsComponent', () => {
  let component: AllticketsComponent;
  let fixture: ComponentFixture<AllticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllticketsComponent]
    });
    fixture = TestBed.createComponent(AllticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
