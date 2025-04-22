import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { QuestionsService } from '../services/questions.service';
// import below for icons to work
import { addIcons } from 'ionicons';
import { settingsSharp } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [RouterLink, IonIcon, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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
  timerEnabled = false;
  timeLimit = 10;
  timer: any;

  // Add specific icons to constructor
  constructor(private questionService:QuestionsService, private storage:Storage) { addIcons({settingsSharp}); }

  ngOnInit():void {
    this.questionService.getQuestionsData().subscribe(
      (data)=>{
        console.log(data);
        this.myQuestions = data;
        this.randomQ = Math.floor(Math.random() * this.myQuestions.length); // Random generator to choose question
      }
    )
  }

  // Stops the timer if you leave the page
  ionViewWillLeave() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.timerEnabled = await this.storage.get('timerEnabled');

    if (this.timerEnabled) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timeLimit = 10;
  
    clearInterval(this.timer); // clears any existing timer
    
    this.timer = setInterval(() => {
      --this.timeLimit;
      if (this.timeLimit == 0) {
        clearInterval(this.timer);
        alert("Times up");
        
        if('A' == this.myQuestions[this.randomQ].answer){
          this.btnA = "success";
          this.btnB = "danger";
          this.btnC = "danger";
          this.btnD = "danger";
        } else if('B' == this.myQuestions[this.randomQ].answer) {
          this.btnA = "danger";
          this.btnB = "success";
          this.btnC = "danger";
          this.btnD = "danger";
        } else if ('C' == this.myQuestions[this.randomQ].answer) {
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
      
          if (this.timerEnabled) {
            this.startTimer();
          }
        }, 2000);
      }
    }, 1000);
  }
  
  checkAnswerA() {
    this.choice = 'A';
    this.answer = this.myQuestions[this.randomQ].answer;

    if (this.timer) clearInterval(this.timer);

    if(this.choice == this.answer) {
      // Change colours of buttons
      this.btnA = "success";
      this.btnB = "danger";
      this.btnC = "danger";
      this.btnD = "danger";
      alert("Correct");
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

      alert("Incorrect");
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
  
      if (this.timerEnabled) {
        this.startTimer();
      }
    }, 2000);
  }

  checkAnswerB() {
    this.choice = 'B';
    this.answer = this.myQuestions[this.randomQ].answer;

    if (this.timer) clearInterval(this.timer);

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "success";
      this.btnC = "danger";
      this.btnD = "danger";
      alert("Correct");
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
      alert("Incorrect");
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
  
      if (this.timerEnabled) {
        this.startTimer();
      }
    }, 2000);
  }

  checkAnswerC() {
    this.choice = 'C';
    this.answer = this.myQuestions[this.randomQ].answer;

    if (this.timer) clearInterval(this.timer);

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "danger";
      this.btnC = "success";
      this.btnD = "danger";
      alert("Correct");
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
      alert("Incorrect");
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
  
      if (this.timerEnabled) {
        this.startTimer();
      }
    }, 2000);
  }

  checkAnswerD() {
    this.choice = 'D';
    this.answer = this.myQuestions[this.randomQ].answer;

    if (this.timer) clearInterval(this.timer);

    if(this.choice == this.answer) {
      this.btnA = "danger";
      this.btnB = "danger";
      this.btnC = "danger";
      this.btnD = "success";
      alert("Correct");
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
      alert("Incorrect");
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
  
      if (this.timerEnabled) {
        this.startTimer();
      }
    }, 2000);
  }

}
