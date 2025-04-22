import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
// import below for icons to work
import { addIcons } from 'ionicons';
import { settingsSharp } from 'ionicons/icons';
import { Browser } from '@capacitor/browser'; // Import the Browser plugin
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [FormsModule, IonInput, IonLabel, IonItem, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  
  playerName: string = '';

  // Add specific icons to constructor
  constructor(private storage: Storage) {addIcons({ settingsSharp });}
  
  async ngOnInit() {
    await this.storage.create();
    this.playerName = await this.storage.get('playerName');
  }

  async saveName() {
    await this.storage.set('playerName', this.playerName);
    alert('Name saved');
  }

  // Opens site - Tried to do toast, notifications and status bar and none seemed to work
  async openWebsite() {
    await Browser.open({ url: 'https://vlegalwaymayo.atu.ie/course/view.php?id=12392' });
  }

}
