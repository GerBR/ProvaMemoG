import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PerfiluserComponent } from '../components/perfiluser/perfiluser.component';
import { Galleymemos } from '../components/galleymemos/galleymemos';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    PerfiluserComponent, Galleymemos,
    RouterOutlet
  ],
})
export class Tab3Page {
  constructor() {}
}
