import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlstrComponent } from './htmlstr/htmlstr.component';

describe('HtmlstrComponent', () => {
    let component: HtmlstrComponent;
    let fixture: ComponentFixture<HtmlstrComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ HtmlstrComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HtmlstrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

      it('should create', () => {
        expect(component).toBeTruthy();
    });
});
