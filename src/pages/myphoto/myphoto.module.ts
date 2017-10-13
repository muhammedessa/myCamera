import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyphotoPage } from './myphoto';

@NgModule({
  declarations: [
    MyphotoPage,
  ],
  imports: [
    IonicPageModule.forChild(MyphotoPage),
  ],
})
export class MyphotoPageModule {}
