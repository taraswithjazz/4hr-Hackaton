import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GenerateQuizComponent } from './generate-quiz/generate-quiz.component';
import { MaterialModule } from './shared/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteQuizesComponent } from './favorite-quizes/favorite-quizes.component';
import { PassQuizComponent } from './pass-quiz/pass-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GenerateQuizComponent,
    FavoriteQuizesComponent,
    PassQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
