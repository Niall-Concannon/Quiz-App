import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
// import below for icons to work
import { addIcons } from 'ionicons';
import { settingsSharp } from 'ionicons/icons';
import { Browser } from '@capacitor/browser'; // Import the Browser plugin

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterLink],
})
export class HomePage {
  // Add specific icons to constructor
  constructor() {addIcons({ settingsSharp })}

  // Opens site - Tried to do toast, notifications and status bar and none seemed to work
  async openWebsite() {
    await Browser.open({ url: 'https://vlegalwaymayo.atu.ie/course/view.php?id=12392' });
  }

}
