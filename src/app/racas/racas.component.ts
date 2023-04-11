import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RacasiVIACATService } from './racas-viacat.service';
import { CatInterfaceFoto } from './interfaces/cat.interface.foto';
import { CatInterface } from './interfaces/cat.interface';

interface Races{
  value: string;
}

@Component({
  selector: 'app-racas',
  templateUrl: './racas.component.html',
  styleUrls: ['./racas.component.css']
})
export class RacasComponent implements OnInit {
  title = "desafio 4"
  id: string; // number
  id2: string;
  error: Boolean = false;
  dados: CatInterface;
  img: string;
  races: CatInterface[];
  selectedValue: string;
  variável2: any;
  dados2: { id: string; url: string; width: number; height: number; };

  constructor(private Cat: RacasiVIACATService){}

  // consulta(){
  //   this.Cat.buscar(this.id).subscribe(
  //   {
  //     next: this.populaid.bind(this),
  //   }
  //   );
  // }
  // populaid(res){
  //   let breeds = res.breeds[0]
  //   this.img = res.url
  //   this.dados = {
  //     name: breeds.name,
  //     life_span: breeds.life_span,
  //     temperament: breeds.temperament,
  //     origin: breeds.origin,
  //     description: breeds.description,
  //     country_code: breeds.country_code,
  //     rare: breeds.rare,
  //     natural: breeds.natural,
  //     adaptability: breeds.adaptability,
  //     intelligence: breeds.intelligence,
  //     id: breeds.id,
  //   }
  // }

  ngOnInit() {
    this.Cat.todos().subscribe({
      next: this.populaRacas.bind(this)
    })
  }
  populaRacas(res: CatInterface[]){
    this.races = res
    console.log(this.races) // Mostra todos os dados acima de todas as raças
  }

  Mostre(){
    console.log(this.selectedValue); // Mostra o "ID" da raça que foi selecionada
    const selectedRace = this.races.find(r => r.id === this.selectedValue);
    console.log(selectedRace); // Mostra todos os dados da raça selecionada
    this.dados = {
      name: selectedRace.name,
      life_span: selectedRace.life_span,
      temperament: selectedRace.temperament,
      origin: selectedRace.origin,
      description: selectedRace.description,
      country_code: selectedRace.country_code,
      rare: selectedRace.rare,
      natural: selectedRace.natural,
      adaptability: selectedRace.adaptability,
      intelligence: selectedRace.intelligence,
      id: selectedRace.id,
      image: selectedRace.image,
      wikipedia_url: selectedRace.wikipedia_url
    }
    console.log(this.dados) // Mostra só os dados que eu quero da raça selecionada
  }





  // Jeito que estávamos fazendo com ajuda
  chamada(){
    this.Cat.foto(this.selectedValue).subscribe(
    {
      next: this.popula2.bind(this),
    });
  }
  popula2(res2){
    let breeds2 = res2.breeds[0]
    this.dados2 = {
      id: breeds2.id,
      url: breeds2.url,
      width: breeds2.width,
      height: breeds2.height,
    }
    console.log(res2)
  }

  // estavamos fazendo solo
  // chamada(){
  //   this.Cat.buscar(this.id2).subscribe(
  //   {
  //     next: this.populaid2.bind(this),
  //   }
  //   );
  // }
  // populaid2(res2){
  //   let breeds2 = res2.breeds2[0]
  //   this.dados2 = {
  //     id: res2.id,
  //     url: res2.url,
  //     width: res2.width,
  //     height: res2.height,
  //   }
  //   console.log(this.dados2)
  // }


  // esse tá errado mas é só para ter uma base
  // populaId2(res2: any){
  //   this.variável2 = {
  //     id: res2.id,
  //     url: res2.url,
  //     width: res2.width,
  //     height: res2.height,
  //   };
  //   this.img = this.variável2.url
  //   console.log(this.variável2);
  //   console.log(res2)
  // }
}
