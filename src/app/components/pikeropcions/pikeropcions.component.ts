import { Component, OnInit } from '@angular/core';
import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pikeropcions',
  templateUrl: './pikeropcions.component.html',
  styleUrls: ['./pikeropcions.component.scss'],
  imports: [ IonPicker, IonPickerColumn, IonPickerColumnOption],
})
export class PikeropcionsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
