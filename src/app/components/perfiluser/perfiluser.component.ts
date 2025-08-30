import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonChip, IonIcon, IonAvatar, IonNote, IonToggle } from '@ionic/angular/standalone';
// import { GridbasesComponent } from '../gridbases/gridbases.component';

import { addIcons } from 'ionicons';
import { alarm, heart, dice } from 'ionicons/icons';


@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.scss'],
   imports: [IonToggle, IonNote, IonItem, IonLabel, IonChip, IonAvatar, IonIcon,
    ],
})
export class PerfiluserComponent  implements OnInit {

  constructor() {
     /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ alarm, heart, dice });
   }

  ngOnInit() {}

}
