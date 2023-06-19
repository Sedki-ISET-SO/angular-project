import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'projects',
        loadChildren: ()=>import("./gestion-project/gestion-project.module").then((m)=>m.GestionProjectModule)
      },
      {
        path: 'elements',
        loadChildren: ()=>import("./gestion-element/gestion-element.module").then((m)=>m.GestionElementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
