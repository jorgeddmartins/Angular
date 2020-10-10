import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbtnComponent } from './rightbtn.component';

describe('RightbtnComponent', () => {
    let component: RightbtnComponent;
    let fixture: ComponentFixture<RightbtnComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ RightbtnComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RightbtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
