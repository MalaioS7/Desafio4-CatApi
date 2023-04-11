import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { RacasComponent } from './racas.component';
import { FormsModule } from '@angular/forms';
import { RacasiVIACATService } from './racas-viacat.service';
import { HttpClient } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [FormsModule, MatSelectModule, BrowserModule, MatCardModule],
  exports: [RouterModule],
  declarations: [RacasComponent],
})

export class RacasModule{}
