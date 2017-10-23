import { PipesModule } from './../../pipes/pipes.module';
import { FormedituseraccessComponent } from './../../components/formedituseraccess/formedituseraccess';
import { FormeditkelasComponent } from './../../components/formeditkelas/formeditkelas';
import { FormtambahuseraccessComponent } from './../../components/formtambahuseraccess/formtambahuseraccess';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UseraccessPage } from './useraccess';

@NgModule({
  declarations: [
    UseraccessPage,
  ],
  imports: [
    IonicPageModule.forChild(UseraccessPage),
    PipesModule
  ],
  entryComponents:[FormtambahuseraccessComponent,FormeditkelasComponent,FormedituseraccessComponent]
})
export class UseraccessPageModule {}
