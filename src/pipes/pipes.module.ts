import { TesPipe } from './tes/tes';
import { DatapegawaisearchPipe } from './datapegawaisearch/datapegawaisearch';
import { UseraccesfilterPipe } from './useraccesfilter/useraccesfilter';
import { SerachingpipePipe } from './serachingpipe/serachingpipe';
import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time/relative-time';
import { DatasiswasearchPipe } from './datasiswasearch/datasiswasearch';
@NgModule({
	declarations: [TesPipe,DatapegawaisearchPipe,RelativeTimePipe,SerachingpipePipe,UseraccesfilterPipe,DatasiswasearchPipe],
	imports: [],
	exports: [TesPipe,DatapegawaisearchPipe,RelativeTimePipe,SerachingpipePipe,UseraccesfilterPipe,DatasiswasearchPipe]
})
export class PipesModule {}
