import { Injectable } from '@angular/core';
import { Kitten } from "./create-kitten/kitten";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl: string = "../assets/kittensList.json";
  private myService: HttpClient;

  constructor(paramHttp: HttpClient) {
    this.myService = paramHttp;
  }

  public getTitle() {
    return "The Kittens Stories";
  }

  public createKitten(kitten: Kitten): Observable<any> {
    return this.myService.post(this.jsonUrl, kitten);
  }
  /*
  public updateKitten(): Observable<Kitten> {
    
  }

  public deleteKitten(): Observable<Kitten> {
    
  }

  public getKittenById(): Observable<> {
    
  }
  */
  public getKittens(): Observable<Kitten[]> {
    return this.myService.get<Kitten[]>(this.jsonUrl);
  }

 
}
