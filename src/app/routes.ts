import { Routes } from '@angular/router';

import { AppComponent } from '@app/components/app/app.component';
import { Page1Component } from '@app/components/page-1/page-1.component';
import { Page2Component } from '@app/components/page-2/page-2.component';
import { Page3Component } from '@app/components/page-3/page-3.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/page-1', pathMatch: 'full' },
    { path: 'page-1', component: Page1Component },
    { path: 'page-2', component: Page2Component },
    { path: 'page-3', component: Page3Component},
    { path: '**', component: Page1Component },
]
