import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoViewPage } from './repo-view.page';

const routes: Routes = [
  {
    path: '',
    component: RepoViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoViewPageRoutingModule {}
