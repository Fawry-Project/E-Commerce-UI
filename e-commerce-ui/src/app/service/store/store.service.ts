import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, catchError, throwError } from 'rxjs';
import { Store } from '../../models/store-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  private apiServerUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient){}

  public getStores(): Observable<Store[]>{
    return this.http.get<Store[]>(`${this.apiServerUrl}/stores`).pipe(
      this.fetchError()
    )
  }

  public getStoreByName(name: string): Observable<Store>{
    return this.http.get<Store>(`${this.apiServerUrl}/stores/${name}`).pipe(
      this.fetchError()
  ) 
  }

  public addStore(store: Store): Observable<Store>{
    return this.http.post<Store>(`${this.apiServerUrl}/stores`, store).pipe(
        this.fetchError()
    )
  }

  public updateStore(store: Store): Observable<Store>{
    return this.http.put<Store>(`${this.apiServerUrl}/stores`, store).pipe(
      this.fetchError()
    )
  }

  public deleteStore(storeId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/stores/${storeId}`).pipe(
      this.fetchError()
  )
  }
  
  private fetchError(): OperatorFunction<any, any>{
    return catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        console.log(`Eclient-side rror: ${error.error.message}`);
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Backend error
        console.log(`Backend Error: ${error.status} - ${error.error.message}`)
        errorMessage = `Error: ${error.status} - ${error.error.message}`;
      }
      return throwError(errorMessage);
    })
  }
}
