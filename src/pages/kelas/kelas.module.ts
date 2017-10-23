import { PipesModule } from './../../pipes/pipes.module';
import { SerachingpipePipe } from './../../pipes/serachingpipe/serachingpipe';
import { DatasiswaPageModule } from './../datasiswa/datasiswa.module';
import { FormeditkelasComponent } from './../../components/formeditkelas/formeditkelas';
import { FormtambahkelasComponent } from './../../components/formtambahkelas/formtambahkelas';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KelasPage } from './kelas';

@NgModule({
  declarations: [
    KelasPage
  ],
  imports: [
    IonicPageModule.forChild(KelasPage),
    PipesModule
  ],
  entryComponents: [FormtambahkelasComponent,FormeditkelasComponent]
})
export class KelasPageModule {}
