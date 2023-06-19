import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionElementComponent } from './gestion-element.component';

const routes: Routes = [
  {
    path: '',
    component: GestionElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionElementRoutingModule {}
