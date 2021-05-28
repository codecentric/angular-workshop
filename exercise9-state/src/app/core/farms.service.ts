import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Farm} from '../shared/models/farm';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  constructor(private readonly httpClient: HttpClient){

  }

  private selectedFarm: Farm;

  getFarms(): Observable<Farm[]> {
    return this.httpClient.get<Farm[]>("http://localhost:3000/farms")
  }

  getFarm(id: string): Observable<Farm> {
    return this.httpClient.get<Farm>(`http://localhost:3000/farms/${id}`)
  }

  addFarm(farm) {
    return this.httpClient.post("http://localhost:3000/farms", farm)
  }

  selectFarm(farm) {
    this.selectedFarm = farm;
  }

  deselectFarm(){
    this.selectedFarm = null;
  }

  getSelectedFarm() {
    return this.selectedFarm
  }
}
