import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GitRepositories, Repository } from './git.model';
import { map } from 'rxjs/operators';

@Injectable()
export class GitService {
  constructor(private http: HttpClient) {}

  getRepositories(query: string): Observable<GitRepositories> {
    const URL = `${environment.gitAPI}search/repositories`;
    const params = { params: { q: query } };
    return this.http.get(URL, params).pipe(map((d) => d as GitRepositories));
  }

  getSingleRepo(id: string): Observable<Repository> {
    const URL = `${environment.gitAPI}repositories/${id}`;
    return this.http.get(URL).pipe(map((d) => d as Repository));
  }
}
