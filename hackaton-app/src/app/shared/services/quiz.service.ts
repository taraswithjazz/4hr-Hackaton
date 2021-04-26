import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private categoriesURL = 'https://opentdb.com/api_category.php';
  private quizURL = 'https://opentdb.com/api.php?';
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.categoriesURL).pipe(map((res: any) => res.trivia_categories));
  }
  getQuiz(params): Observable<any> {
    return this.http.get(`${this.quizURL}amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=boolean`)
      .pipe(map((res: any) =>
        res.results
      ));
  }
}
