import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonItem, IonLabel, IonButton, IonToggle } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonToggle, IonButton, IonLabel, IonItem, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage {

  timerEnabled: boolean = false;
  notificationsEnabled: boolean = false;

  constructor(private storage:Storage) { }

  // Create the storage
  async ionViewWillEnter() {
    await this.storage.create();
    this.timerEnabled = await this.storage.get('timerEnabled');
  }

  toggleTimer() {
    this.timerEnabled = !this.timerEnabled;
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
  }

  async saveSettings() {
    await this.storage.set('timerEnabled', this.timerEnabled);
    alert('Settings saved!');
  }
}
