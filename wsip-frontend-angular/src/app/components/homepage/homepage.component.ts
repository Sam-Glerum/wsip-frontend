import { Component, OnInit } from '@angular/core';
import {SteamApiService} from "../../services/steam-api.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  result = [];

  steamIDForm = new FormGroup({
    steamID : new FormControl('')
  });

  constructor(private steamApiService: SteamApiService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let steamID = this.steamIDForm.controls.steamID.value;
    this.getSteamGames(steamID);
  }

  getSteamGames(steamID) {
    this.steamApiService.getGamesFromSteam(steamID).subscribe(response => {
      this.result = response;
      console.log(this.result);
    });
  }

}
