import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'repositories',
    loadChildren: () =>
      import('./repos-list/repos.module').then((m) => m.ReposModule),
  },
  {
    path: '',
    redirectTo: 'repositories',
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./repo-view/repo-view.module').then((m) => m.RepoViewPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
