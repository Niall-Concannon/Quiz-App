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
  btnA:string = "primary";
  btnB:string = "primary";
  btnC:string = "primary";
  btnD:string = "primary";
  disableA:boolean = false;
  disableB:boolean = false;
  disableC:boolean = false;
  disableD:boolean = false;

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
      // Change colours of buttons
      this.btnA = "success";
      this.btnB = "danger";
      this.btnC = "danger";
      this.btnD = "danger";
      window.alert("Correct");
    } else {
      
      if('B' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "danger";
        this.btnB = "success";
        this.btnC = "danger";
        this.btnD = "danger";
      }
      else if ('C' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "success";
        this.btnD = "danger";
      } else {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "success";
      }

      window.alert("Incorrect");
    }

    // Stop clicking
    this.disableA = true;
    this.disableB = true;
    this.disableC = true;
    this.disableD = true;
    
    // Add delay to show right and wrong answers
    setTimeout(() => {
      this.btnA = "primary";
      this.btnB = "primary";
      this.btnC = "primary";
      this.btnD = "primary";
      this.disableA = false;
      this.disableB = false;
      this.disableC = false;
      this.disableD = false;
      this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
    }, 2000);
  }

  checkAnswerB() {
    this.choice = 'B';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "success";
      this.btnC = "danger";
      this.btnD = "danger";
      window.alert("Correct");
    } else {

      if('A' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "success";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "danger";
      }
      else if ('C' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "success";
        this.btnD = "danger";
      } else {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "success";
      }
      window.alert("Incorrect");
    }
    
    this.disableA = true;
    this.disableB = true;
    this.disableC = true;
    this.disableD = true;
    
    // Add delay to show right and wrong answers
    setTimeout(() => {
      this.btnA = "primary";
      this.btnB = "primary";
      this.btnC = "primary";
      this.btnD = "primary";
      this.disableA = false;
      this.disableB = false;
      this.disableC = false;
      this.disableD = false;
      this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
    }, 2000);
  }

  checkAnswerC() {
    this.choice = 'C';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "danger";
      this.btnC = "success";
      this.btnD = "danger";
      window.alert("Correct");
    } else {

      if('A' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "success";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "danger";
      }
      else if ('B' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "danger";
        this.btnB = "success";
        this.btnC = "danger";
        this.btnD = "danger";
      } else {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "success";
      }
      window.alert("Incorrect");
    }
    
    this.disableA = true;
    this.disableB = true;
    this.disableC = true;
    this.disableD = true;
    
    // Add delay to show right and wrong answers
    setTimeout(() => {
      this.btnA = "primary";
      this.btnB = "primary";
      this.btnC = "primary";
      this.btnD = "primary";
      this.disableA = false;
      this.disableB = false;
      this.disableC = false;
      this.disableD = false;
      this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
    }, 2000);
  }

  checkAnswerD() {
    this.choice = 'D';
    this.answer = this.myQuestions[this.randomQ].answer;

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "danger";
      this.btnC = "danger";
      this.btnD = "success";
      window.alert("Correct");
    } else {

      if('A' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "success";
        this.btnB = "danger";
        this.btnC = "danger";
        this.btnD = "danger";
      }
      else if ('B' == this.myQuestions[this.randomQ].answer) {
        this.btnA = "danger";
        this.btnB = "success";
        this.btnC = "danger";
        this.btnD = "danger";
      } else {
        this.btnA = "danger";
        this.btnB = "danger";
        this.btnC = "success";
        this.btnD = "danger";
      }
      window.alert("Incorrect");
    }

    this.disableA = true;
    this.disableB = true;
    this.disableC = true;
    this.disableD = true;
    
    // Add delay to show right and wrong answers
    setTimeout(() => {
      this.btnA = "primary";
      this.btnB = "primary";
      this.btnC = "primary";
      this.btnD = "primary";
      this.disableA = false;
      this.disableB = false;
      this.disableC = false;
      this.disableD = false;
      this.randomQ = Math.floor(Math.random() * this.myQuestions.length);
    }, 2000);
  }

}
