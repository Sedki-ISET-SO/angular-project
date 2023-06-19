import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionProjectRoutingModule } from './gestion-project-routing.module';
import { GestionProjectComponent } from './gestion-project.component';
import { ListComponent } from './list/list.component';
import { ProjectService } from '../../services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GestionProjectComponent, ListComponent],
  imports: [
    CommonModule,
    GestionProjectRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProjectService],
})
export class GestionProjectModule {}
