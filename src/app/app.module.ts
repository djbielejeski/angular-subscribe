import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '@app/components/app/app.component';
import { Page1Component } from '@app/components/page-1/page-1.component';
import { Page2Component } from '@app/components/page-2/page-2.component';

import * as services from '@app/services';

import { appRoutes } from '@app/routes';
import { Page3Component } from './components/page-3/page-3.component';

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page3Component
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [services.HttpHelperService],
    bootstrap: [AppComponent]
})
export class AppModule { }
