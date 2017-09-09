import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormdatasiswaComponent } from './formdatasiswa/formdatasiswa';
import { FormeditsiswaComponent } from './formeditsiswa/formeditsiswa';
@NgModule({
	declarations: [
		FormdatasiswaComponent,
    FormeditsiswaComponent
	],
	imports: [
		 IonicPageModule.forChild(FormdatasiswaComponent),
	],
	exports: [FormdatasiswaComponent,
    FormeditsiswaComponent]
})
export class ComponentsModule {}
