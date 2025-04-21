import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonItem, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage {

  timerEnabled: boolean = false;
  notificationsEnabled: boolean = false;

  constructor() { }

  toggleTimer() {
    this.timerEnabled = !this.timerEnabled;
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }

}
