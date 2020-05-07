import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposListPage } from './repos-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReposListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReposRoutingModule {}
