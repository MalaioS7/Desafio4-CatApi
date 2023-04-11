import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatTabsModule} from '@angular/material/tabs';

import { FavoriteComponent } from './favorite/favorite.component';
import { RacasComponent } from './racas/racas.component';
import { FavoriteModule } from './favorite/favorite.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from './app.routing.module';
import { RacasModule } from './racas/racas.module';
import { RacasiVIACATService } from './racas/racas-viacat.service';
import { HttpClientModule } from '@angular/common/http';
import { ImagesCatService } from './images-cat/images-cat.service';
import { FavoriteService } from './favorite/favorite.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    RacasModule,
    HttpClientModule,
    FavoriteModule,NoopAnimationsModule, BrowserAnimationsModule
  ],
  providers: [RacasiVIACATService, ImagesCatService, FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
