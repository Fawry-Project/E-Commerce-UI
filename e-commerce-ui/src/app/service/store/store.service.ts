import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../models/storeResponse-model';
import { StoreDTORequest } from '../../models/store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient){}

  public getStores(): Observable<Store[]>{
    return this.http.get<Store[]>(`${this.apiServerUrl}/stores`)
  }

  public getStoreByName(name: string): Observable<Store>{
    return this.http.get<Store>(`${this.apiServerUrl}/stores/${name}`);
  }

  public addStore(store: Store): Observable<Store>{
    return this.http.post<Store>(`${this.apiServerUrl}/stores`, store);
  }

  public updateStore(store: Store): Observable<Store>{
    return this.http.put<Store>(`${this.apiServerUrl}/stores`, store);
  }

  public deleteStore(storeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/stores/${storeId}`);
  }
}
