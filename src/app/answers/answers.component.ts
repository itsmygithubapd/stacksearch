import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  public answers = [];
  constructor(private gs: GetDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param=>this.getAnswers(param.id))
  }
  
  getAnswers(questionid) {
    this.gs.getAnswerData(questionid).subscribe((data) => {
      this.answers = data['items'];
    });
  }

}
