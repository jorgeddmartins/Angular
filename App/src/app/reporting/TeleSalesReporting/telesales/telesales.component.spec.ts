import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TelesalesComponent } from './telesales.component';

describe('TelesalesComponent', () => {
    let component: TelesalesComponent;
    let fixture: ComponentFixture<TelesalesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TelesalesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TelesalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
