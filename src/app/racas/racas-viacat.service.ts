import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class RacasiVIACATService {
  constructor(private httpCliente: HttpClient){}

  options = {headers: new HttpHeaders({
    'x-api-key':'live_GbTvj9Q6pNn5wC4UZJBa7FiGYDs4wjBVxUbbZuKSbLO7kxamPpVPrvFY0YmxOM1s'
  })}

  buscar(id: string){ //id: number
    return this.httpCliente.get(`https://api.thecatapi.com/v1/images/${id}?limit=10&`,this.options)
  }

  todos(){
    return this.httpCliente.get(`https://api.thecatapi.com/v1/breeds/`,this.options)
  }

  foto(id2: string){
    return this.httpCliente.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id2}`,this.options)
  }
}
