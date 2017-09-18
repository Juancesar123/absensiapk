import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormdatasiswaComponent } from './formdatasiswa/formdatasiswa';
import { FormeditsiswaComponent } from './formeditsiswa/formeditsiswa';
import { ViewdatasiswaComponent } from './viewdatasiswa/viewdatasiswa';
import { FormtambahkelasComponent } from './formtambahkelas/formtambahkelas';
import { FormeditkelasComponent } from './formeditkelas/formeditkelas';
import { FormtambahuseraccessComponent } from './formtambahuseraccess/formtambahuseraccess';
import { FormedituseraccessComponent } from './formedituseraccess/formedituseraccess';
import { LogoutComponent } from './logout/logout';
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
    LogoutComponent,
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
    FormeditkelasComponent,
    LogoutComponent]
})
export class ComponentsModule {}
