import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { GitService } from '../shared/git.service';
import { GitRepositories, Repository } from '../shared/git.model';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  templateUrl: 'repos-list.page.html',
  styleUrls: ['repos-list.page.scss'],
})
export class ReposListPage implements OnInit {
  query: string = '';
  repo: FormControl;
  repos: Array<Repository> = [];

  constructor(
    private service: GitService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.initNickControl();
  }

  initNickControl() {
    this.repo = new FormControl();

    this.repo.valueChanges
      .pipe(debounceTime(50))
      .subscribe((query: string) => this.service.getRepositories(query));
  }

  presentLoading() {
    const loading = this.loadingController
      .create({
        message: 'Please wait...',
      })
      .then((res) => {
        res.present();
      });
  }

  async emptyData() {
    const alert = await this.alertController.create({
      header: 'Validation Error!',
      message: 'Search input is empty',
      buttons: ['OK'],
    });
    await alert.present();
  }

  getRepositories(query: string) {
    if (!query) {
      this.emptyData();
      return;
    }

    if (!!query && query === this.query) return;
    this.query = query;

    this.presentLoading();

    this.service
      .getRepositories(query)
      .subscribe((repos: GitRepositories) => {
        this.repos = repos.items;
      })
      .add(() => {
        this.loadingController.dismiss();
      });
  }

  searchRepos() {
    this.getRepositories(!!this.repo.value ? this.repo.value : '');
  }
}
