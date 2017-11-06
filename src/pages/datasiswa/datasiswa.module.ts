import { LoginPageModule } from './../login/login.module';
import { ViewdatasiswaComponent } from './../../components/viewdatasiswa/viewdatasiswa';
//import { FilterPipe } from './../../components/filteringdata/filteringdata';
import { FormeditsiswaComponent } from './../../components/formeditsiswa/formeditsiswa';
import { FormdatasiswaComponent } from './../../components/formdatasiswa/formdatasiswa';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatasiswaPage } from './datasiswa';
import { ComponentsModule } from "../../components/components.module";
import { FilterPipe } from "../../app/filterpipe";
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DatasiswaPage,
    FilterPipe
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DatasiswaPage),
    LoginPageModule,
    PipesModule
  ],
  entryComponents: [ FormdatasiswaComponent,FormeditsiswaComponent,ViewdatasiswaComponent]
})
export class DatasiswaPageModule {}
