import { CommonModule } from '@angular/common';
import { Component,inject,Input, OnInit} from '@angular/core';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

import { MemoryimagesService } from 'src/app/service/memoryimg';
import { MemoryInfo } from 'src/app/interfaces/memorypeces';
// ... altres imports

@Component({
  selector: 'app-mostrapecesmemo',
  templateUrl: './mostrapecesmemo.component.html',
  styleUrls: ['./mostrapecesmemo.component.scss'],
  imports: [IonGrid, IonRow, IonCol, CommonModule],
})
export class MostrapecesmemoComponent implements OnInit {
  // Aquesta serà la llista que utilitzaràs a l'HTML
  public memoryImgList: MemoryInfo[] = [];
  public selectedMemory: MemoryInfo | undefined;
  // 1. Injecta el servei en el constructor
  constructor(private memoryImagesService: MemoryimagesService) {}

  // Pots canviar 'any' pel tipus de dada correcte (ex: number, string).
  @Input() memoryId: any;
  MemoryimagesService = inject(MemoryimagesService);
 
  ngOnInit() {
    // Carreguem tota la llista d’imatges
    this.memoryImgList = this.memoryImagesService.getAllMemoryImg();
    // this.memoryId === this.memoryId.toString()
    if (this.memoryId || this.memoryId === 0) {
      console.log('ID del memory rebut:', this.memoryId);

      // Troba l'objecte que té la mateixa ID
      //pasar de number a string
      const memoryObj = this.memoryImgList.find(item => item.id === String(this.memoryId));
      if (memoryObj) {
        console.log('Objecte trobat:', memoryObj);
        // Aquí pots fer el que vulguis amb memoryObj
        this.selectedMemory = memoryObj;
      } else {
        console.warn('No s’ha trobat cap objecte amb aquesta ID.'  );
      }
    }
  }

  
}
