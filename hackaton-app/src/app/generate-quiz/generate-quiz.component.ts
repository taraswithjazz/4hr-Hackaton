import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.scss']
})
export class GenerateQuizComponent implements OnInit, OnDestroy {
  difficulties = ['easy', 'medium', 'hard'];
  categories$: [] = [];
  subscription: Subscription;
  selectedCategory: string;

  generateForm: FormGroup = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.max(50)]),
    category: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required)
  });
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.quizService.getCategories().subscribe(value => {
      this.categories$ = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGenerate(): void {
    this.router.navigate(['/pass'], { queryParams: this.generateForm.value });
  }

}
