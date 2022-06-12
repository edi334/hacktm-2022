import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DefinitelyNotQuestionModel} from "../../definitely-not-models/definitely-not-question-model";
import {QuestionService} from '../../definitely-not-services/question.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-definitely-not-quiz-page',
  templateUrl: './definitely-not-quiz-page.component.html',
  styleUrls: ['./definitely-not-quiz-page.component.scss']
})

export class DefinitelyNotQuizPageComponent implements OnInit {
  questions: DefinitelyNotQuestionModel[] = [];
  loading = true;
  answer: string;
  currentQuestion: DefinitelyNotQuestionModel;
  index = 0;

  constructor(
    private readonly _questionService: QuestionService,
    private readonly _snack: MatSnackBar
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    this.questions = await this._questionService.getAll();
    this.currentQuestion = this.questions[0];
    this.loading = false;
  }

  changeCurrentQuestion(i: number): void {
    this.answer = '';
    if(i<this.questions.length && i>=0) {
      this.index = i;
    }
    this.currentQuestion = this.questions[i];
  }


  checkAnswer(): void {
    const isAnswerCorrect = this.answer === this.currentQuestion.answer;

    if (!isAnswerCorrect) {
      this._snack.open('Answer is incorrect!', 'OK', {duration: 4000});
      return;
    }

    this._snack.open('Answer is correct! Congrats!', 'OK', {duration: 4000});
  }

}
