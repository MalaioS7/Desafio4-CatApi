import { Component, OnInit } from '@angular/core';
import { ImagesCatService } from './images-cat.service';
import { CatInterfaceFoto2 } from './cat.interface.foto2';
import { FavoriteService } from '../favorite/favorite.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-images-cat',
  templateUrl: './images-cat.component.html',
  styleUrls: ['./images-cat.component.css']
})
export class ImagesCatComponent implements OnInit {
  constructor(private Cat: ImagesCatService, private Favorite: FavoriteService){}
  races: CatInterfaceFoto2[]
  dados: CatInterfaceFoto2
  selectedValue: string;

  ngOnInit() {
    this.Cat.puxa().subscribe({
      next: this.populaFotos.bind(this)
    })
  }
  populaFotos(res: CatInterfaceFoto2[]){
    this.races = res
    console.log(this.races)
  }

  // Daqui para baixo, se necessário, só jogar fora...
  Mostre(){
    const selectedRace = this.races.find(r => r.id === this.selectedValue);
    console.log(selectedRace); // Mostra todos os dados da raça selecionada
    this.dados = {
      id: selectedRace.id,
      url: selectedRace.url,
      width: selectedRace.width,
      height: selectedRace.height
    }
    console.log(this.dados) // Mostra só os dados que eu quero da raça selecionada
  }

  adicionarFavorito(id:string){
    console.log(id)
    this.Favorite.adicionarFavorito(id).subscribe(res=>console.log(res))
    window.alert("Imagem favoritada")
  }
}
