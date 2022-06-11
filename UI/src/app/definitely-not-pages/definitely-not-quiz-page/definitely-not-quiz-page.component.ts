import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-definitely-not-quiz-page',
  templateUrl: './definitely-not-quiz-page.component.html',
  styleUrls: ['./definitely-not-quiz-page.component.scss']
})

export class DefinitelyNotQuizPageComponent implements OnInit{



  options: string[][] = [
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

  questions: string[] = [
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

  quizForm = new FormGroup({});
  question = new  FormControl('');
  option = new FormControl('');

  q:

  constructor(fb: FormBuilder) {
    this.quizForm = fb.group({
      question: this.question,
      option: this.option
    })

  }

  ngOnInit(): void {

    }



  onSubmit(): void {
    // display some fireworks
  }

}
