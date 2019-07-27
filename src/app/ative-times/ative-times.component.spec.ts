import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtiveTimesComponent } from './ative-times.component';

describe('AtiveTimesComponent', () => {
  let component: AtiveTimesComponent;
  let fixture: ComponentFixture<AtiveTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtiveTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtiveTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
