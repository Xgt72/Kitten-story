import { Component, OnInit, Input, Output } from '@angular/core';
import { Kitten } from './kitten';
import { CATLIST } from "../list-kitten/list-kitten";
import { picturesPath } from "../list-kitten/list-kitten";

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

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

  constructor() {}

  ngOnInit() {}

}
