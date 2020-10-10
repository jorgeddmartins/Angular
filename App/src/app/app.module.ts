import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Importing All Modules
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { HtmlstrComponent } from './leads/htmlstr/htmlstr.component';
import { RightpanelComponent } from './leads/rightpanel/rightpanel.component';
import { TelesalesComponent } from './reporting/TeleSalesReporting/telesales/telesales.component';
import { TempsalesComponent } from './reporting/TeleSalesReporting/telesales/tempsales/tempsales.component';
import { LeadreportingComponent } from './navleft/LeadReporting/LeadReporting.component';
import { SettingsNavComponent } from './navleft/SettingsNav/SettingsNav.component';
import { NavrightComponent } from './navright/navright.component';
import { AllComponent } from './home/all/all.component';
import { SettingsComponent } from './settings/settings.component';
import { RotationComponent } from './rotation/rotation.component';
import { CapturetotalsComponent } from './reporting/LeadReporting/capturetotals/capturetotals.component';
import { DistributiontotalsComponent } from './reporting/LeadReporting/distributiontotals/distributiontotals.component';
import { LeadvolumereportComponent } from './reporting/LeadReporting/leadvolumereport/leadvolumereport.component';
import { TransferreportComponent } from './reporting/LeadReporting/transferreport/transferreport.component';
import { HourlycapturereportComponent } from './reporting/LeadReporting/hourlycapturereport/hourlycapturereport.component';
import { AffiliatereconciliationreportComponent } from './reporting/LeadReporting/affiliatereconciliationreport/affiliatereconciliationreport.component';
import { MinidashboardComponent } from './reporting/LeadReporting/minidashboard/minidashboard.component';
import { MenusettingsComponent } from './menusettings/menusettings.component';
import { IconmodalComponent } from './iconmodal/iconmodal.component';
import { UserreportComponent } from './navright/charts/userreport.component';
import { TeleuserreportComponent } from './navright/charts/teleuserreport.component';
import { KendogridComponent } from './kendogrid/kendogrid.component';
import { KendogridtelesalesComponent } from './kendogridtelesales/kendogridtelesales.component';
import { GeneralsettingsComponent } from './generalsettings/generalsettings.component';
import { CalendarComponent } from './calendar/calendar.component';

// Adding Routes / Urls
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'leads', component: LeadsComponent },
    { path: 'telesales', component: TelesalesComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'rotation', component: RotationComponent },
    { path: 'capturetotals', component: CapturetotalsComponent },
    { path: 'distributiontotals', component: DistributiontotalsComponent },
    { path: 'leadvolumereport', component: LeadvolumereportComponent },
    { path: 'transferreport', component: TransferreportComponent },
    { path: 'hourlycapturereport', component: HourlycapturereportComponent },
    { path: 'affiliatereconciliationreport', component: AffiliatereconciliationreportComponent },
    { path: 'minidashboard', component: MinidashboardComponent },
    { path: 'menusettings', component: MenusettingsComponent },
    { path: 'generalsettings', component: GeneralsettingsComponent },
    { path: 'calendar', component: CalendarComponent }
];

// Declaring Components
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LeadsComponent,
        HtmlstrComponent,
        RightpanelComponent,
        TelesalesComponent,
        TempsalesComponent,
        LeadreportingComponent,
        SettingsNavComponent,
        NavrightComponent,
        AllComponent,
        SettingsComponent,
        RotationComponent,
        CapturetotalsComponent,
        DistributiontotalsComponent,
        LeadvolumereportComponent,
        TransferreportComponent,
        HourlycapturereportComponent,
        AffiliatereconciliationreportComponent,
        MinidashboardComponent,
        MenusettingsComponent,
        IconmodalComponent,
        UserreportComponent,
        TeleuserreportComponent,
        KendogridComponent,
        KendogridtelesalesComponent,
        GeneralsettingsComponent,
        CalendarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
