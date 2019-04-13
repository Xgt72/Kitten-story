import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../create-kitten/kitten';
import { CATLIST } from "../list-kitten/list-kitten";
import { USERCATLIST } from "../user-kitten/userList";
import { picturesPath } from "../list-kitten/list-kitten";
// import { DataService } from '../data.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})

export class ListKittenComponent implements OnInit {

  // copy of the path of the pictures into listPicturesPath
  picturesPath = "../assets/images/";

  public kittens: Kitten[] = CATLIST;

  // creation of a cat
  cat: Kitten = {
    name: null,
    race: null,
    birthDate: null,
    pictureLink: null
  }
  // private myService: DataService;

  adoptCat(cName: string, cRace: string, cBirthDate: string, cPictureLink: string, index): void {
    let adoptedKitten = new Kitten();
    adoptedKitten.name = cName;
    adoptedKitten.race = cRace;
    adoptedKitten.birthDate = cBirthDate;
    adoptedKitten.pictureLink = cPictureLink;
    USERCATLIST.push(adoptedKitten);

    CATLIST.splice(CATLIST.indexOf(index),1);
    this.kittens = CATLIST;

    console.log("kitten adopted");
  }

  constructor() { }

  ngOnInit() { }

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
