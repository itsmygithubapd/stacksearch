import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    router = TestBed.get(Router);
  })
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
  
  it("should navigate on search click", async(()=>{
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.routeQuestion("test");
   expect(navigateSpy).toHaveBeenCalledWith(['questions','test']);
  }));
  
  it("shouldd navigate on search click with empty test as space", async(()=>{
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.routeQuestion("");
   expect(navigateSpy).toHaveBeenCalledWith(['questions',' ']);
  }));
});
