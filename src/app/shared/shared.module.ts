import { BlockUIComponent } from './components/block-ui/block-ui.component';
import { NgModule } from '@angular/core';
import { LoadingMaskComponent } from './components/loading-mask/loading-mask.component';

@NgModule({
  declarations: [BlockUIComponent, LoadingMaskComponent],
  imports: [],
  providers: [],
  exports: [BlockUIComponent, LoadingMaskComponent],
})
export class SharedModule {}
