import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questions = [];
  constructor(private gs: GetDataService, private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.getQuesions(param)
    });
  }

  onSelect(question_id) {
    this.router.navigate(['answers', question_id]);
  }

  getQuesions(title) {
    this.gs.getQuestionData(title).subscribe((data) => {
      this.questions = data['items'];
    });
  }
}
