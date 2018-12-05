import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})



export class GetDataService {



  constructor(private http: HttpClient) {
  }
  getQuestionData(question) {
    return this.http
    .get(`https://api.stackexchange.com/2.2/search/advanced?&title=${question}&site=stackoverflow`)

  }
  getAnswerData(answersId) {
      return this.http
      .get(`https://api.stackexchange.com/2.2/questions/${answersId}/answers?order=desc&sort=activity
      &site=stackoverflow&filter=!-*jbN.OXKfDP`);
  }

}
