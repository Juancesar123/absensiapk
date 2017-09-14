import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormdatasiswaComponent } from './formdatasiswa/formdatasiswa';
import { FormeditsiswaComponent } from './formeditsiswa/formeditsiswa';
import { ViewdatasiswaComponent } from './viewdatasiswa/viewdatasiswa';
import { FormtambahkelasComponent } from './formtambahkelas/formtambahkelas';
import { FormeditkelasComponent } from './formeditkelas/formeditkelas';
import { FormtambahuseraccessComponent } from './formtambahuseraccess/formtambahuseraccess';
import { FormedituseraccessComponent } from './formedituseraccess/formedituseraccess';
@NgModule({
	declarations: [
		FormdatasiswaComponent,
    FormeditsiswaComponent,
    ViewdatasiswaComponent,
    FormtambahkelasComponent,
    FormeditkelasComponent,
    FormtambahuseraccessComponent,
    FormedituseraccessComponent,
    FormeditkelasComponent,
	],
	imports: [
		 IonicPageModule.forChild(FormdatasiswaComponent),
	],
	exports: [FormdatasiswaComponent,
    FormeditsiswaComponent,
    ViewdatasiswaComponent,
    FormtambahkelasComponent,
    FormeditkelasComponent,
    FormtambahuseraccessComponent,
    FormedituseraccessComponent,
    FormeditkelasComponent]
})
export class ComponentsModule {}
