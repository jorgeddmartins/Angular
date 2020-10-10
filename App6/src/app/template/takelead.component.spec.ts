import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeleadComponent } from './takelead.component';

describe('TakeleadComponent', () => {
    let component: TakeleadComponent;
    let fixture: ComponentFixture<TakeleadComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TakeleadComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TakeleadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
