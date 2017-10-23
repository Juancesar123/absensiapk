import { UseraccesfilterPipe } from './useraccesfilter/useraccesfilter';
import { SerachingpipePipe } from './serachingpipe/serachingpipe';
import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time/relative-time';
@NgModule({
	declarations: [RelativeTimePipe,SerachingpipePipe,UseraccesfilterPipe],
	imports: [],
	exports: [RelativeTimePipe,SerachingpipePipe,UseraccesfilterPipe]
})
export class PipesModule {}
