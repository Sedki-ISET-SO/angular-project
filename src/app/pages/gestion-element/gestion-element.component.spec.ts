import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionElementComponent } from './gestion-element.component';

describe('GestionElementComponent', () => {
  let component: GestionElementComponent;
  let fixture: ComponentFixture<GestionElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionElementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
