import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [MatTabsModule, RouterModule, MatToolbarModule]
})

export class NavbarModule{}
