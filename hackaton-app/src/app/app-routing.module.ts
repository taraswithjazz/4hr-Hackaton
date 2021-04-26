import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteQuizesComponent } from './favorite-quizes/favorite-quizes.component';
import { GenerateQuizComponent } from './generate-quiz/generate-quiz.component';
import { PassQuizComponent } from './pass-quiz/pass-quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'generate',
    pathMatch: 'full'
  },
  {
    path: 'generate',
    component: GenerateQuizComponent
  },
  {
    path: 'pass',
    component: PassQuizComponent
  },
  {
    path: 'favorites',
    component: FavoriteQuizesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
