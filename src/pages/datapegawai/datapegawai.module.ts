import { ViewdatapegawaiComponent } from './../../components/viewdatapegawai/viewdatapegawai';
import { FormeditpegawaiComponent } from './../../components/formeditpegawai/formeditpegawai';
import { FormtambahpegawaiComponent } from './../../components/formtambahpegawai/formtambahpegawai';
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatapegawaiPage } from './datapegawai';

@NgModule({
  declarations: [
    DatapegawaiPage,
  ],
  imports: [
    IonicPageModule.forChild(DatapegawaiPage),
    PipesModule
  ],
  entryComponents: [FormtambahpegawaiComponent,FormeditpegawaiComponent,ViewdatapegawaiComponent]  
})
export class DatapegawaiPageModule {}
