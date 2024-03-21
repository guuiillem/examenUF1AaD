import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExamenComponent } from './component-examen.component';

describe('ComponentExamenComponent', () => {
  let component: ComponentExamenComponent;
  let fixture: ComponentFixture<ComponentExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExamenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
