import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RacineComponent } from './racine/racine.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenProfilComponent } from './kitten-profil/kitten-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    RacineComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    KittenProfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"create-kitten", component: CreateKittenComponent, pathMatch: "full" },
      { path:"", redirectTo:"user-kitten", pathMatch:"full" },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
