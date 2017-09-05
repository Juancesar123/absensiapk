import { FormdatasiswaComponent } from './../../components/formdatasiswa/formdatasiswa';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatasiswaPage } from './datasiswa';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    DatasiswaPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DatasiswaPage),
  ],
  entryComponents: [ FormdatasiswaComponent ]
})
export class DatasiswaPageModule {}
