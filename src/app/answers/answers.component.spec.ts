import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GetDataService } from '../get-data.service';
import { AnswersComponent } from './answers.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
describe('AnswersComponent', () => {
  let component: AnswersComponent;
  let fixture: ComponentFixture<AnswersComponent>;
  let router: Router;
  let dataService: GetDataService;
  beforeEach(async(() => {
    const mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
      ],
      declarations: [ AnswersComponent ],
      providers: [
        GetDataService,
        HttpClient,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    dataService=fixture.debugElement.injector.get(GetDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
