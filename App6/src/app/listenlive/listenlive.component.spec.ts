import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenliveComponent } from './listenlive.component';

describe('ListenliveComponent', () => {
    let component: ListenliveComponent;
    let fixture: ComponentFixture<ListenliveComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ListenliveComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListenliveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
