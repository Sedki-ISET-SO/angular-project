import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProjectComponent } from './gestion-project.component';

const routes: Routes = [
  {
    path: '',
    component: GestionProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProjectRoutingModule { }
