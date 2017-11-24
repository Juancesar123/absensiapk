import { FormubahprofilComponent } from './../../components/formubahprofil/formubahprofil';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPage } from './profil';

@NgModule({
  declarations: [
    ProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilPage),
  ],
  entryComponents: [FormubahprofilComponent]
})
export class ProfilPageModule {}
