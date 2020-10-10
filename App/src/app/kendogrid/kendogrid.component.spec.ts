import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendogridComponent } from './kendogrid.component';

describe('KendogridComponent', () => {
  let component: KendogridComponent;
  let fixture: ComponentFixture<KendogridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendogridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendogridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
