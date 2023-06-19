import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}
  getListProjects(): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/projects`
    );
  }

  postProject(data: any): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiUrl}/${environment.prefix}/projects`,
      data
    );
  }

  updateProject(data: any): Observable<any> {
    console.log(data);

    return this.httpClient.put<any>(
      `${environment.apiUrl}/${environment.prefix}/projects/${data.id}`,
      { name: data.name }
    );
  }

  getProject(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.apiUrl}/${environment.prefix}/projects/${id}`
    );
  }

  deleteProject(id: number): Observable<any> {
    return this.httpClient.delete<any>(
      `${environment.apiUrl}/${environment.prefix}/projects/${id}`
    );
  }
}
