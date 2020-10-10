import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bugreportComponent } from './bugreport.component';

describe('bugreportComponent', () => {
    let component: bugreportComponent;
    let fixture: ComponentFixture<bugreportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ bugreportComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(bugreportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
