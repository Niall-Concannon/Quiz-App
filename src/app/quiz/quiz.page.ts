import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonAlert } from '@ionic/angular/standalone';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuizPage implements OnInit {

  myQuestions:any[]=[];
  randomQ:number = 0;
  choice:any = '';
  answer:any = '';

  constructor(private questionService:QuestionsService) { }

  ngOnInit():void {
    this.questionService.getQuestionsData().subscribe(
      (data)=>{
        console.log(data);
        this.myQuestions = data;
        this.randomQ = Math.floor(Math.random() * this.myQuestions.length); // Random generator to choose question
      }
    )
  }

  checkAnswerA() {
    this.choice = 'A';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      window.alert("Correct");
    } else {
      window.alert("Incorrect");
    }
    
    
    
    this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
  }

  checkAnswerB() {
    this.choice = 'B';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      window.alert("Correct");
    } else {
      window.alert("Incorrect");
    }
    
    
    
    this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
  }

  checkAnswerC() {
    this.choice = 'C';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      window.alert("Correct");
    } else {
      window.alert("Incorrect");
    }
    
    
    
    this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
  }

  checkAnswerD() {
    this.choice = 'D';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      window.alert("Correct");
    } else {
      window.alert("Incorrect");
    }
    
    
    
    this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
  }

}
