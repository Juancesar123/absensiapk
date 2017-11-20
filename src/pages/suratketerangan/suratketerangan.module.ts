import { ForminputketeranganadminComponent } from './../../components/forminputketeranganadmin/forminputketeranganadmin';
import { FormeditsuratketeranganComponent } from './../../components/formeditsuratketerangan/formeditsuratketerangan';
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
  entryComponents:[ForminputsuratketeranganComponent,FormeditsuratketeranganComponent,ForminputketeranganadminComponent]
})
export class SuratketeranganPageModule {}
