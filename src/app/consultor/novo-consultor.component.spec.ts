import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoConsultorComponent } from './novo-consultor.component';

describe('NovoConsultorComponent', () => {
  let component: NovoConsultorComponent;
  let fixture: ComponentFixture<NovoConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
