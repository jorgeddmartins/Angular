import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepersontypesComponent } from './salepersontypes.component';

describe('SalepersontypesComponent', () => {
  let component: SalepersontypesComponent;
  let fixture: ComponentFixture<SalepersontypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepersontypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepersontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
