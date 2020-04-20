import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SteamApiService {
  private httpOptions;
  result = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getGamesFromSteam(steamID: String) {
    return this.http.get<any>('https://wsip-api.herokuapp.com/api/' + steamID);
  }
}
