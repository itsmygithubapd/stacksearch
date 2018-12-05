import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetDataService } from '../get-data.service';
import { QuestionsComponent } from './questions.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
  let router: Router;
  let dataService: GetDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ QuestionsComponent ],
      providers: [
        GetDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(GetDataService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to answer page on executing onSelectFunction', () => {
    let navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSelect("test");
   expect(navigateSpy).toHaveBeenCalledWith(['answers','test']);
  });

  // it('should call get data function of data service to receive data', () => {
  //   let dataServiceSpy = spyOn(dataService, 'getQuestionData').and.returnValue({'items':['test1']});
  //   component.getQuesions("test");
  //  expect(dataServiceSpy).toHaveBeenCalled();
  // });
});
