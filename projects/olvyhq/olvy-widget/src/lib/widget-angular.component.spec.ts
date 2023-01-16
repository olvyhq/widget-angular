// it("Test Olvy widgets", () => {
//   expect(1).toEqual(1);
// });
import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { OlvyWidgetComponent } from "./olvy-widget.component"
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
describe("olvy widget components",()=>{
  let component: OlvyWidgetComponent;
  let fixture : ComponentFixture<OlvyWidgetComponent>;
  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      imports:[OlvyWidgetComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture=TestBed.createComponent(OlvyWidgetComponent);
    component=fixture.componentInstance;
    fixture.detectChanges()
  })
  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
})
