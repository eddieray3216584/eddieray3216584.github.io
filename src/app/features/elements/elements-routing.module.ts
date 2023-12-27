import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './components/elements-home/elements-home.component';
import { LoadingsComponent } from './components/loadings/loadings.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsHomeComponent,
  },
  {
    path: 'loadings',
    component: LoadingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
