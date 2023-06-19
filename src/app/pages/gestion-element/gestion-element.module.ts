import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionElementRoutingModule } from './gestion-element-routing.module';
import { GestionElementComponent } from './gestion-element.component';
import { ListComponent } from './list/list.component';
import { ElementService } from '../../services/element.service';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ProjectService } from '../../services/project.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestionElementComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    GestionElementRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ElementService, ProjectService],
})
export class GestionElementModule {}
