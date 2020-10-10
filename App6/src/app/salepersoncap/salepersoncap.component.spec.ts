import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalepersoncapComponent } from './salepersoncap.component';

describe('SalepersoncapComponent', () => {
  let component: SalepersoncapComponent;
  let fixture: ComponentFixture<SalepersoncapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalepersoncapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalepersoncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
