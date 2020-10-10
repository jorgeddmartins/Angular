import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackqueueComponent } from './backqueue.component';

describe('BackqueueComponent', () => {
    let component: BackqueueComponent;
    let fixture: ComponentFixture<BackqueueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ BackqueueComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BackqueueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
