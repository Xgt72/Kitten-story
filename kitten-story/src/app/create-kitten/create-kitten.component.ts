import { Component, OnInit, Input, Output } from '@angular/core';
import { Kitten } from './kitten';
import { CATLIST } from "../list-kitten/list-kitten";
import { picturesPath } from "../list-kitten/list-kitten";
// import { DataService } from '../data.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  // @Input() validButton: string = "#c0ebff";

  // public kittens: Kitten[];
  // private myService: DataService;

  // creation of a cat
  cat: Kitten = {
    name: null,
    race: null,
    birthDate: null,
    pictureLink: null
  }

  
  // function to create a new kitten and add it to the CATLIST
  createCat(): void {
    if (this.cat.name && this.cat.race && this.cat.birthDate) {
      if (this.cat.pictureLink) {
        CATLIST.push({ name: this.cat.name, race: this.cat.race, birthDate: this.cat.birthDate, pictureLink: picturesPath + this.cat.pictureLink });
        console.log("form submitted");
      } else {
        CATLIST.push({ name: this.cat.name, race: this.cat.race, birthDate: this.cat.birthDate, pictureLink: picturesPath + "cat10.png" });
        console.log("form submitted");
      }
    } else {
      alert("Votre demande n'est pas valide, vérifié si tous les champs requis sont remplies.");
      
    }
  }
  
  /*
  createCat(): void {
    this.myService.createKitten(this.cat).subscribe(
      () => {
        console.log("Enregistrement terminé");
      },
      (error) => {
        console.log("Erreur !: " + error);
      }
    );
  }
  */

  // function to change the color of the button to green when the form is valid
  getColorValidButton(name: string, race: string, birthDate: string){
    if (name && race && birthDate){
      return "#00ea2";
    } else {
      return "#c0ebff";
    }
  }

  constructor() {}

  ngOnInit() {}

  /*
  constructor(paramService: DataService) {
    this.myService = paramService;
    this.kittens = [];
  }

  ngOnInit() {
    this.myService.getKittens().subscribe(
      (paramsKittens: Kitten[]) => {
        this.kittens = paramsKittens;
      },
      (error) => {
        console.log("Erreur chargement!: " + error);
      }
    )
  }
  */

}
