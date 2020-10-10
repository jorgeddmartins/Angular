import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LeadsComponent } from './leads.component';

describe('LeadsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LeadsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LeadsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'newqinexv9'`, () => {
    const fixture = TestBed.createComponent(LeadsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('newqinexv9');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LeadsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('newqinexv9 app is running!');
  });
});
