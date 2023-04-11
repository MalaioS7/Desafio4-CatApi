import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class FavoriteService {
  header = new HttpHeaders({
    'x-api-key':'live_GbTvj9Q6pNn5wC4UZJBa7FiGYDs4wjBVxUbbZuKSbLO7kxamPpVPrvFY0YmxOM1s'
  })

  user = "user-123"

  constructor(private httpCliente: HttpClient){
  }
  adicionarFavorito(id){
    let body = {
      "image_id": id,
      "sub_id":this.user
    };
    return this.httpCliente.post(`https://api.thecatapi.com/v1/favourites`, body, {headers: this.header});
  }

  pegarFavoritos(){
    return this.httpCliente.get(`https://api.thecatapi.com/v1/favourites?limit=120&sub_id=${this.user}`, {headers: this.header});
  }

  removerFavoritos(id){
    return this.httpCliente.delete(`https://api.thecatapi.com/v1/favourites/${id}`,{headers: this.header});
  }



  options = { headers: new HttpHeaders({
    'x-api-key': 'live_GbTvj9Q6pNn5wC4UZJBa7FiGYDs4wjBVxUbbZuKSbLO7kxamPpVPrvFY0YmxOM1s'
  })}

  puxarFavoritos(){
    return this.httpCliente.get(`https://api.thecatapi.com/v1/favourites?limit=120&sub_id=user-123&`, this.options)
  }
}
