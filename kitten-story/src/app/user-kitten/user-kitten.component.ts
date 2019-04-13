import { Component, OnInit } from '@angular/core';
import { USERCATLIST } from "./userList";
import { picturesPath } from "../list-kitten/list-kitten";


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  
  MyCatsList = USERCATLIST;


  constructor() { }

  ngOnInit() {
  }

}
