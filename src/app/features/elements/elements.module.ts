import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingsComponent } from './components/loadings/loadings.component';
import { ElementsHomeComponent } from './components/elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule, ElementsRoutingModule],
  declarations: [ElementsHomeComponent, LoadingsComponent],
  providers: [],
})
export class ElementsModule {}
