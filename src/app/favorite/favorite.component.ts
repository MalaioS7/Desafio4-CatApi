import { Component, OnInit } from '@angular/core';
import { FavoriteInterface, image} from './favorite.interface';
import { FavoriteService } from './favorite.service';
import { HttpClient } from '@angular/common/http';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  constructor(private Cat: FavoriteService, private Remove:FavoriteService){}
  races: FavoriteInterface[]
  res2: image[]

  ngOnInit(){
    this.Cat.puxarFavoritos().subscribe({
      next: this.populaFavoritos.bind(this)
    })
  }

  populaFavoritos(res: FavoriteInterface[]){
    this.races = res
    console.log(this.races) // mostra os favoritos
  }

  removerFavoritos(id: string){
    console.log(id)
    let confirm = window.confirm("Deseja remover a imagem?")
    if (confirm){
      this.Remove.removerFavoritos(id).subscribe(res => console.log(res))
      let index = this.races.findIndex(r => r.id==id)
      this.races.splice(index,1);
      window.alert("Imagem removida")
    }
  }
}
