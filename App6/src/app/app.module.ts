import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RightbtnComponent } from './template/rightbtn.component';
import { TakeleadComponent } from './template/takelead.component';
import { PoliciesComponent } from './policies/policies.component';
import { FishingComponent } from './fishing/fishing.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { UserComponent } from './user/user.component';
import { AddleadComponent } from './addlead/addlead.component';
import { PolicydetailComponent } from './policydetail/policydetail.component';
import { LeadpotComponent } from './leadpot/leadpot.component';
import { NewsComponent } from './news/news.component';
import { IconmodalComponent } from './iconmodal/iconmodal.component';
import { ListenliveComponent } from './listenlive/listenlive.component';
import { newstempComponent } from './newstemp/newstemp.component';
import { bugreportComponent } from './bugreport/bugreport.component';
import { popupsComponent } from './popups/popups.component';
import { tasksectionComponent } from './tasksection/tasksection.component';
import { AlertsComponent } from './alerts/alerts.component';
import { GridscreenComponent } from './gridscreen/gridscreen.component';
import { FishingsectionComponent } from './tasksection/fishingsection.component';
import { MenusettingsComponent } from './menusettings/menusettings.component';
import { AllpoliciesComponent } from './allpolicies/allpolicies.component';
import { SalepersoncapComponent } from './salepersoncap/salepersoncap.component';
import { SalepersontypesComponent } from './salepersontypes/salepersontypes.component';
import { MyleadsComponent } from './myleads/myleads.component';
import { MypoliciesComponent } from './mypolicies/mypolicies.component';
import { PreriskpoliciesComponent } from './preriskpolicies/preriskpolicies.component';
import { PresavepoliciesComponent } from './presavepolicies/presavepolicies.component';
import { PrecancellationpoliciesComponent } from './precancellationpolicies/precancellationpolicies.component';
import { OnriskpoliciesComponent } from './onriskpolicies/onriskpolicies.component';
import { TasksComponent } from './tasks/tasks.component';
import { BackqueueComponent } from './backqueue/backqueue.component';
import { KendogridComponent } from './kendogrid/kendogrid.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quotes', component: QuotesComponent },
    { path: 'policies', component: PoliciesComponent },
    { path: 'fishing', component: FishingComponent },
    { path: 'addlead', component: AddleadComponent },
    { path: 'policydetail', component: PolicydetailComponent },
    { path: 'leadpot', component: LeadpotComponent },
    { path: 'news', component: NewsComponent },
    { path: 'iconmodal', component: IconmodalComponent },
    { path: 'listenlive', component: ListenliveComponent },
    { path: 'gridscreen', component: GridscreenComponent },
    { path: 'menusettings', component: MenusettingsComponent },
    { path: 'allpolicies', component: AllpoliciesComponent },
    { path: 'salepersoncap', component: SalepersoncapComponent },
    { path: 'salepersontypes', component: SalepersontypesComponent },
    { path: 'myleads', component: MyleadsComponent },
    { path: 'mypolicies', component: MypoliciesComponent },
    { path: 'preriskpolicies', component: PreriskpoliciesComponent },
    { path: 'presavepolicies', component: PresavepoliciesComponent },
    { path: 'precancellation', component: PrecancellationpoliciesComponent },
    { path: 'onriskpolicies', component: OnriskpoliciesComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'backqueue', component: BackqueueComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GlobalComponent,
        QuotesComponent,
        RightbtnComponent,
        TakeleadComponent,
        PoliciesComponent,
        FishingComponent,
        MainmenuComponent,
        UserComponent,
        AddleadComponent,
        PolicydetailComponent,
        LeadpotComponent,
        NewsComponent,
        IconmodalComponent,
        ListenliveComponent,
        newstempComponent,
        bugreportComponent,
        popupsComponent,
        tasksectionComponent,
        AlertsComponent,
        GridscreenComponent,
        FishingsectionComponent,
        MenusettingsComponent,
        AllpoliciesComponent,
        SalepersoncapComponent,
        SalepersontypesComponent,
        MyleadsComponent,
        MypoliciesComponent,
        PreriskpoliciesComponent,
        PresavepoliciesComponent,
        PrecancellationpoliciesComponent,
        OnriskpoliciesComponent, 
        TasksComponent,
        BackqueueComponent,
        KendogridComponent
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