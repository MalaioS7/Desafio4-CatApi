import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoriteComponent } from './favorite.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [FormsModule, BrowserModule, MatIconModule],
  exports: [RouterModule],
  declarations: [FavoriteComponent],
})

export class FavoriteModule{}
