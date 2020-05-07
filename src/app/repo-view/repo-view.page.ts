import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { GitService } from '../shared/git.service';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../shared/git.model';

@Component({
  templateUrl: './repo-view.page.html',
  styleUrls: ['./repo-view.page.scss'],
})
export class RepoViewPage implements OnInit {
  repo: Repository;

  constructor(
    private service: GitService,
    public loadingController: LoadingController,
    private active: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getSingleRepo();
  }

  getSingleRepo() {
    const loader = this.presentLoading('Repository is loading');

    this.service
      .getSingleRepo(this.active.snapshot.params.id)
      .subscribe(
        (repo: Repository) => {
          this.repo = repo;
        },
        () => {
          this.exceededLimit();
        }
      )
      .add(() => {
        this.loadingController
          .dismiss()
          .then((res) => {
            console.log('Loading dismissed!', res);
          })
          .catch((error) => {
            console.log('error', error);
          });
      });
  }

  async exceededLimit() {
    const alert = await this.alertController.create({
      header: 'Oops you exceeded your IP limit!',
      message: 'Wait 1 hour and try again!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  presentLoading(content: string) {
    const loading = this.loadingController
      .create({
        message: content,
      })
      .then((res) => {
        res.dismiss();
      });

    return loading;
  }
}
