import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepoViewPageRoutingModule } from './repo-view-routing.module';

import { RepoViewPage } from './repo-view.page';
import { GitService } from '../shared/git.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RepoViewPageRoutingModule,
  ],
  declarations: [RepoViewPage],
  providers: [GitService],
})
export class RepoViewPageModule {}
