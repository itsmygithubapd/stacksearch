import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'answers/:id', component: AnswersComponent},
  {path: 'questions/:que', component: QuestionsComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
