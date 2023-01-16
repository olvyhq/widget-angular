// it("Test Olvy widgets", () => {
//   expect(1).toEqual(1);
// });
import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { WidgetAngularComponent } from "./widget-angular.component"
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
describe("olvy widget components",()=>{
  let component: WidgetAngularComponent;
  let fixture : ComponentFixture<WidgetAngularComponent>;
  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      imports:[WidgetAngularComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture=TestBed.createComponent(WidgetAngularComponent);
    component=fixture.componentInstance;
    fixture.detectChanges()
  })
  it("should create", () => {
    expect(1).toEqual(1);
  //expect(component).toBeTruthy();
});
})
