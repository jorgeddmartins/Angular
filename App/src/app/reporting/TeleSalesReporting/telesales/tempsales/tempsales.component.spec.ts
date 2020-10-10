import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {TempsalesComponent } from './tempsales.component';

describe('TempsalesComponent', () => {
    let component: TempsalesComponent;
    let fixture: ComponentFixture<TempsalesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TempsalesComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TempsalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
