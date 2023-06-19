import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  projects: any[] = [];
  selectedProject: any;
  showUpdateForm: boolean = false;
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loastListProjects();
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
  onUpdate(project: any) {
    this.selectedProject = project;
    this.form.controls['name'].setValue(this.selectedProject.name);
    this.showUpdateForm = true;
  }

  loastListProjects(): void {
    this.projectService.getListProjects().subscribe(
      (data) => {
        console.log(data);
        this.projects.push(...data);
      },
      (err) => console.log(err)
    );
  }
  onSubmit(): void {
    const name = this.form.value.name;
    this.projectService.postProject({ name }).subscribe(
      (newProject) => {
        this.projectService.getListProjects().subscribe((data) => {
          this.projects = data;
        });
      },
      (error) => {}
    );
  }
  openEditForm(project: any): void {
    this.selectedProject = project;
  }
  closeEditForm(): void {
    this.selectedProject = null;
  }
  submitEditForm(): void {
    this.projectService.updateProject(this.selectedProject.id).subscribe(
      (data) => {
        console.log(data);

        this.closeEditForm();
        const index = this.projects.findIndex(
          (e) => e.id === this.selectedProject.id
        );
        if (index !== -1) {
          this.projects[index] = data;
        }
        this.projectService.getListProjects().subscribe((data) => {
          this.projects = data;
        });
      },
      (err) => console.log(err)
    );
  }

  deleteProject(project: any): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(project.id).subscribe(
        () => {
          console.log('Project deleted successfully');
          const index = this.projects.indexOf(project);
          if (index !== -1) {
            this.projects.splice(index, 1);
          }
        },
        (err) => console.log(err)
      );
    }
  }
}
