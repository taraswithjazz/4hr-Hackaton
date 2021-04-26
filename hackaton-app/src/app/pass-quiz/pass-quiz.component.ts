import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-pass-quiz',
  templateUrl: './pass-quiz.component.html',
  styleUrls: ['./pass-quiz.component.scss']
})
export class PassQuizComponent implements OnInit {
  quiz$: [] = [];
  subscription: Subscription;
  questionForm = new FormGroup({
    answer: new FormControl('')
  });
  constructor(private quizService: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(switchMap((params) => {
      return this.quizService.getQuiz(params);
    })).subscribe(res => {
      this.quiz$ = res;
    });
  }
}
