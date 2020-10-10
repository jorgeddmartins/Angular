
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNavComponent } from './SettingsNav.component';

describe('SettingsNavComponent', () => {
    let component: SettingsNavComponent;
    let fixture: ComponentFixture<SettingsNavComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
          declarations: [ SettingsNavComponent ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(SettingsNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
