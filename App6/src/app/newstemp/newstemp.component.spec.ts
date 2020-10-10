import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newstempComponent } from './newstemp.component';

describe('newstempComponent', () => {
    let component: newstempComponent;
    let fixture: ComponentFixture<newstempComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ newstempComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(newstempComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
