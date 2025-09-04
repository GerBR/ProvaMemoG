import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestioPecesSercice {
  ////////////////////  RECORDA CANVIAR els 3 ITEMS PER PESSA - itemNinot ///////////////////////
  savePessa(informacioA: any[]): void {
    window.localStorage.setItem('itemNinot', JSON.stringify(informacioA)); // Guarda els informacioA a localStorage 
    console.log('Ninots guardats a localStorage:', informacioA);
  }
  getPessa(): any[] {
    const informacioA = window.localStorage.getItem('itemNinot'); // Obtén els informacioA des de localStorage
    return informacioA ? JSON.parse(informacioA) : []; // Retorna la llista de informacioA o un array buit si no hi ha dades
  } 
  deletePessa(): void {
    window.localStorage.removeItem('itemNinot'); // Elimina els informacioA de localStorage
    console.log('Ninots eliminats de localStorage');
  }
}
