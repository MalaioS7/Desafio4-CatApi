import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavoriteComponent} from './favorite/favorite.component';
import { AppComponent } from './app.component';
import { RacasComponent } from './racas/racas.component';
import { HomeModule } from './home/home.module';
import { ImagesCatComponent } from './images-cat/images-cat.component';

const routes: Routes = [
  {path: 'racas', component: RacasComponent},
  { path: 'racas', loadChildren: () => import('src/app/racas/racas.module').then(m => m.RacasModule)},

  {path: 'favorite', component: FavoriteComponent},
  { path: 'favorite', loadChildren: () => import('src/app/favorite/favorite.module').then(m => m.FavoriteModule)},

  {path: 'images', component: ImagesCatComponent},
  { path: 'images', loadChildren: () => import('src/app/images-cat/images-cat.module').then(m => m.ImagesCatModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
