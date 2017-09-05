import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormdatasiswaComponent } from './formdatasiswa/formdatasiswa';
@NgModule({
	declarations: [
		FormdatasiswaComponent
	],
	imports: [
		 IonicPageModule.forChild(FormdatasiswaComponent),
	],
	exports: [FormdatasiswaComponent]
})
export class ComponentsModule {}
