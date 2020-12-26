import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';

@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    LayoutsModule
  ]
})
export class MainViewModule { }
