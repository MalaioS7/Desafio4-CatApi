import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';


@Injectable()
export class ImagesCatService {
  constructor(private httpCliente: HttpClient){}

  options = {headers: new HttpHeaders({
    'x-api-key':'live_GbTvj9Q6pNn5wC4UZJBa7FiGYDs4wjBVxUbbZuKSbLO7kxamPpVPrvFY0YmxOM1s'
  })}

  puxa(){
    return this.httpCliente.get(`https://api.thecatapi.com/v1/images/search?limit=44`,this.options)
  }
}
