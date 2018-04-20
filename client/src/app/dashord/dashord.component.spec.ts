import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashordComponent } from './dashord.component';

describe('DashordComponent', () => {
  let component: DashordComponent;
  let fixture: ComponentFixture<DashordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
