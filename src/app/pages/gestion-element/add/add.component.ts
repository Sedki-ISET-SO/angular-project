import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ElementService } from '../../../services/element.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  formElement!: FormGroup;
  submitted: boolean = false;
  listProjects: any[] = [];
  constructor(
    private elementService: ElementService,
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getProject();
    this.formElement = this.fb.group({
      name: ['', Validators.required],
      projectId: ['', Validators.required],
    });
  }

  getProject(): void {
    this.projectService.getListProjects().subscribe(
      (data) => {
        this.listProjects.push(...data);
        //  console.log(data)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get f() {
    return this.formElement.controls;
  }
  submit(): void {
    this.elementService.postElement(this.formElement.value).subscribe(
      (data) => {
        window.location.reload();
        console.log(this.formElement.value);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
