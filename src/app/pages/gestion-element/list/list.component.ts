import { Component, OnInit } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public listElements: any[] = [];
  public projects: any[] = [];
  public selectedElement: any = null;

  constructor(private elementService: ElementService) {}

  ngOnInit(): void {
    this.getElements();
    this.getProjects();
  }

  getElements(): void {
    this.elementService.getElements().subscribe(
      (data) => {
        console.log(data);
        this.listElements.push(...data);
      },
      (err) => console.log(err)
    );
  }
  getProjectName(id: number): string {
    const project = this.projects.find((d) => d.id === id);
    return project ? project.name : '';
  }
  getProjects(): void {
    this.elementService.getListProjects().subscribe(
      (data) => {
        console.log(data);
        this.projects = data;
      },
      (err) => console.log(err)
    );
  }
  openEditForm(element: any): void {
    this.selectedElement = element;
  }
  closeEditForm(): void {
    this.selectedElement = null;
  }
  submitEditForm(): void {
    this.elementService
      .updateElement(this.selectedElement.id, this.selectedElement)
      .subscribe(
        (data) => {
          console.log(data);

          this.closeEditForm();
          const index = this.listElements.findIndex(
            (e) => e.id === this.selectedElement.id
          );
          if (index !== -1) {
            this.listElements[index] = data;
          }
          this.elementService.getElements().subscribe((data) => {
            this.projects = data;
          });
        },
        (err) => console.log(err)
      );
  }

  deleteElement(element: any): void {
    if (confirm('Are you sure you want to delete this element?')) {
      this.elementService.deleteElement(element.id).subscribe(
        () => {
          console.log('Element deleted successfully');
          const index = this.listElements.indexOf(element);
          if (index !== -1) {
            this.listElements.splice(index, 1);
          }
        },
        (err) => console.log(err)
      );
    }
  }
}
