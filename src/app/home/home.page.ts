import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GitService } from '../shared/git.service';
import { GitRepositories, Repository } from '../shared/git.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  repo: FormControl;
  repos: Array<Repository> = [];

  constructor(private service: GitService) {}

  ngOnInit() {
    this.initNickControl();
  }

  initNickControl() {
    this.repo = new FormControl();

    this.repo.valueChanges
      .pipe(debounceTime(50))
      .subscribe((query: string) => this.service.getRepositories(query));
  }

  getRepositories(query: string) {
    this.service.getRepositories(query).subscribe((repos: GitRepositories) => {
      this.repos = repos.items;
    });
  }

  searchRepos() {
    this.getRepositories(this.repo.value);
  }
}
