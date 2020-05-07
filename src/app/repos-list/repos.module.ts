import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposRoutingModule } from './repos-routing.module';
import { GitService } from '../shared/git.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReposListPage } from './repos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule,
    ReposRoutingModule,
  ],
  declarations: [ReposListPage],
  providers: [GitService],
})
export class ReposModule {}
