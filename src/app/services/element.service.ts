import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ElementService {
  constructor(private httpClient: HttpClient) {}
  getElements(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/elements`
    );
  }

  postElement(data: any): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiUrl}/${environment.prefix}/elements`,
      data
    );
  }

  getElement(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/elements/${id}`
    );
  }

  updateElement(id: number, data: any): Observable<any[]> {
    return this.httpClient.put<any[]>(
      `${environment.apiUrl}/${environment.prefix}/elements/${id}`,
      {
        name: data.name,
        projectId: data.projectId,
      }
    );
  }

  deleteElement(id: number): Observable<any> {
    return this.httpClient.delete<any[]>(
      `${environment.apiUrl}/${environment.prefix}/elements/${id}`
    );
  }

  getListProjects(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/projects`
    );
  }
}
