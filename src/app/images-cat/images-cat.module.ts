import { ImagesCatComponent } from './images-cat.component';
import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [FormsModule, MatSelectModule, BrowserModule, MatCardModule, MatIconModule, MatProgressSpinnerModule],
  exports: [RouterModule],
  declarations: [ImagesCatComponent],
})

export class ImagesCatModule{}
