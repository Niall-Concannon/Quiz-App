import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LeaderboardPage implements OnInit {

  leaderboardData: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.leaderboardData = await this.storage.get('leaderboard') || [];

    // Sort leaderboard by score in descending order
    this.leaderboardData.sort((a, b) => b[1] - a[1]);
  }

  async clearLeaderboard() {
    // Clear leaderboard in storage and array
    await this.storage.remove('leaderboard');
    this.leaderboardData = [];
    alert('Leaderboard cleared');
  }

}
