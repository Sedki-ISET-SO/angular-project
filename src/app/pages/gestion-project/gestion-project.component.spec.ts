import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProjectComponent } from './gestion-project.component';

describe('GestionProjectComponent', () => {
  let component: GestionProjectComponent;
  let fixture: ComponentFixture<GestionProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
