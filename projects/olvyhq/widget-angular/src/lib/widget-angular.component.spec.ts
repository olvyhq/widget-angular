import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAngularComponent } from './widget-angular.component';

describe('WidgetAngularComponent', () => {
  let component: WidgetAngularComponent;
  let fixture: ComponentFixture<WidgetAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
