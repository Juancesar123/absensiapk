import { ForminputsuratketeranganComponent } from './../../components/forminputsuratketerangan/forminputsuratketerangan';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuratketeranganPage } from './suratketerangan';

@NgModule({
  declarations: [
    SuratketeranganPage,
  ],
  imports: [
    IonicPageModule.forChild(SuratketeranganPage),
  ],
  entryComponents:[ForminputsuratketeranganComponent]
})
export class SuratketeranganPageModule {}
