import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { UnderBuildComponent } from './under-build/under-build.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../main-view/homepage/homepage.module').then(m => m.HomepageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../main-view/about/about.module').then(m => m.AboutModule)
      }
    ]
  },
  {
    path: 'underbuild',
    component: UnderBuildComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
