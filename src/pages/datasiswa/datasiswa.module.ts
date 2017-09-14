import { ViewdatasiswaComponent } from './../../components/viewdatasiswa/viewdatasiswa';
//import { FilterPipe } from './../../components/filteringdata/filteringdata';
import { FormeditsiswaComponent } from './../../components/formeditsiswa/formeditsiswa';
import { FormdatasiswaComponent } from './../../components/formdatasiswa/formdatasiswa';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatasiswaPage } from './datasiswa';
import { ComponentsModule } from "../../components/components.module";
import { FilterPipe } from "../../app/filterpipe";

@NgModule({
  declarations: [
    DatasiswaPage,
    FilterPipe
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DatasiswaPage),
  ],
  entryComponents: [ FormdatasiswaComponent,FormeditsiswaComponent,ViewdatasiswaComponent]
})
export class DatasiswaPageModule {}
