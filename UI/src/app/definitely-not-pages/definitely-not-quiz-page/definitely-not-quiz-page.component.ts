import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DefinitelyNotQuestionModel} from "../../definitely-not-models/definitely-not-question-model";


@Component({
  selector: 'app-definitely-not-quiz-page',
  templateUrl: './definitely-not-quiz-page.component.html',
  styleUrls: ['./definitely-not-quiz-page.component.scss']
})

export class DefinitelyNotQuizPageComponent implements OnInit {


  /* options: string[][] = [
     ['Stiglebauer', 'Cziszter', 'Miskolczi'],
     ['a', 'b', 'c'],
     ['d', 'e', 'f'],
     ['g', 'h', 'i'],
     ['j', 'k', 'l'],
     ['m', 'n', 'o'],
     ['p', 'q', 'e'],
     ['s', 't', 'u'],
     ['v', 'w', 'x'],
     ['y', 'z', '0'],
   ];

   questions_mock: string[] = [
     "Care nume e mai complicat?",
     "Cate scaune sunt in toata sala?",
     "Care e mancarea preferata?",
     "Cine e cel mai prost?",
     "Cum te cheama?",
     "Mancatea-si ...?",
     "Rupem p...?",
     "HackTM HackTM HackTM HackTM HackTM?",
     "UniHack UniHack UniHack UniHack UniHack UniHack?",
     "Definitely not a question?"
   ];
 */
  questions: DefinitelyNotQuestionModel[] = [];

  quizForm = new FormGroup({});
  question = new FormControl('');
  option = new FormControl('');
  currentQuestion: DefinitelyNotQuestionModel;

  index = 0;

  constructor(fb: FormBuilder) {
    this.quizForm = fb.group({
      question: this.question,
      option: this.option
    })

  }

  ngOnInit(): void {
    this.questions = [
      {
        questionText: "Care nume e mai complicat?",
        answer: 'Cziszter',
        option1: 'Stiglebauer',
        option2: 'Cziszter',
        option3: 'Miskolczi',
        isGrill: true
      },
      {
        questionText: "Cate scaune sunt in toata sala?",
        answer: 'a',
        option1: 'a',
        option2: 'b',
        option3: 'c',
        isGrill: true
      },
      {
        questionText: "Care e mancarea preferata?",
        answer: 'f',
        option1: 'd',
        option2: 'e',
        option3: 'f',
        isGrill: true
      },
      {
        questionText: "Care e mancarea preferata?",
        answer: 'f',
        isGrill: false
      }
    ];
    this.currentQuestion = this.questions[0];
  }

  changeCurrentQuestion(i: number): void {
    if(i<this.questions.length && i>=0) {
      this.index = i;
    }
    this.currentQuestion = this.questions[i];
  }


  onSubmit(): void {
    // display some fireworks
  }

}
