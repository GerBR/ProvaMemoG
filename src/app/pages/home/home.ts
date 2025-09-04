import { ChangeDetectionStrategy, Component } from '@angular/core'; //NOOO UTILIZEM  !!!!!!!!!
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ninot } from 'src/app/interfaces/interfaceNinot';// Assegura't que el model Ninot està importat correctament
import { GestioPecesSercice } from 'src/app/service/gestio-peces';


@Component({
  selector: 'app-home',
  imports: [
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
    ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
  
})

export class Home {
  title = 'Home Page';
  llistaNinots: Ninot[] = []; // Array per emmagatzemar els ninots  --- MILLOR ESCRIURE Ininots
  galeriaForm: any;
  index =  0;
 // galeriaForm: FormGroup; // Definició del formulari reactiu per a la galeria
  
  constructor(private GestioPecesSercice: GestioPecesSercice) { // Injecció del servei GestioPessaService 
    // Aquí podrías inicializar datos o realizar otras configuraciones necesarias
    this.llistaNinots = this.GestioPecesSercice.getPessa(); // Obté la llista de ninots des del servei GestioPessaService    
    this.creategaleriaForm(); // Crida al mètode per crear el formulari reactiu
  }

  creategaleriaForm(): void { //sense el void no funciona pq no retorna res?
    this.galeriaForm = new FormGroup({
      id: new FormControl('', Validators.required),
      nom : new FormControl('', Validators.required),
      autor : new FormControl('', Validators.required),
      anyPublicacio: new FormControl('', [Validators.required]),  
      colorPrimario: new FormControl('', Validators.required),
    });
  }  
  
  SudmitGaleria():void{
    // Lògica per enviar el formulari de la galeria
    console.log('Enviant formulari de la galeria');
    if (this.galeriaForm.valid) {
      const newNinot: Ninot = this.galeriaForm.value;
      this.llistaNinots.push(newNinot);
      this.GestioPecesSercice.savePessa(this.llistaNinots); // Guarda els ninots a localStorage mitjançant el servei GestioPessaService
      this.galeriaForm.reset(); // Reinicia el formulari després d'enviar-lo
    
    } else {
      console.log('El formulari no és vàlid');
    } 
  }
  SubmitEditNinot(): void {
    if (this.galeriaForm.valid) {
      const updatedNinot: Ninot = this.galeriaForm.value; // repassar quin es el valor ? mirar-ho a colsol
      this.llistaNinots[this.index] = updatedNinot; // Actualitza el ninot a l'índex especificat
      this.GestioPecesSercice.savePessa(this.llistaNinots); // Guarda els ninots actualitzats a localStorage mitjançant el servei GestioPessaService
      this.galeriaForm.reset(); // Reinicia el formulari després d'editar
     // this.index = -1;  Reinicia l'índex per indicar que no s'està editant cap ninot
      //  CAL REINICIAR L'INDEX PERQUÈ NO ES TORNI A EDITAR EL MATEIX NINOT??
    }  
  }

  deleteNinot(index: number): void {
    // Lògica per eliminar un ninot de la llista  
    this.llistaNinots.splice(index, 1); // Elimina el ninot de la llista a l'índex especificat
    this.GestioPecesSercice.savePessa(this.llistaNinots); // Guarda els ninots actualitzats a localStorage mitjançant el servei GestioPessaService
  }


  editNinot(index: number): void {
    // Lògica per editar un ninot existent
    this.index = index; // Guarda l'índex del ninot que s'està editant
    const ninotToEdit = this.llistaNinots[index];
    this.galeriaForm.setValue({
      id: ninotToEdit.id,
      nom: ninotToEdit.nom,
      autor: ninotToEdit.autor,
      anyPublicacio: ninotToEdit.anyPublicacio || '', // possa buit Si la anyPublicaciono esta definit pq és opcional, assegura't que no sigui undefined
      colorPrimario: ninotToEdit.colorPrimario
    });
    this.index = index; // Guarda l'índex del ninot que s'està editant
  }

}
