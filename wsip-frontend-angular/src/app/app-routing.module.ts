import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {AppComponent} from "./app.component";
import {GameResultComponent} from "./components/game-result/game-result.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'game_result', component: GameResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
