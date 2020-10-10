
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusettingsComponent } from './menusettings.component';

describe('MenusettingsComponent', () => {
    let component: MenusettingsComponent;
    let fixture: ComponentFixture<MenusettingsComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ MenusettingsComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(MenusettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
