import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendogridtelesalesComponent } from './kendogridtelesales.component';

describe('KendogridtelesalesComponent', () => {
  let component: KendogridtelesalesComponent;
  let fixture: ComponentFixture<KendogridtelesalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendogridtelesalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendogridtelesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
