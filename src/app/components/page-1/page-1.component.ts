import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/takeUntil';

import { BaseComponent } from '@app/components/core';
import { HttpHelperService } from '@app/services';
import { ServerDataModel } from '@app/models';

@Component({
    selector: 'app-page-1',
    templateUrl: './page-1.component.html'
})
export class Page1Component extends BaseComponent implements OnInit, OnDestroy {
    // Duplicated code every time you have an infinite subscription.
    private subscriptions = new Subscription();

    constructor(private router: Router,
                private httpHelperService: HttpHelperService) {
        super();
    }

    ngOnInit() {
        // Infinite subscription without unsubscribe
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Page 1: Router.Events.Subscribe (Infinite) - No Unsubscribe: ', event);
            }
        });

        // The clean way of unsubscribing from an infinite subscription
        this.router.events.takeUntil(this.ngUnsubscribe).subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Page 1: Router.Events.Subscribe (Infinite) - With Unsubscribe: ', event);
            }
        });

        // The duplicated code way of unsubscribing from an infinite subscription
        const badWayToUnsubscribe_Subscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Page 1: Router.Events.Subscribe (Infinite) - With Extra Unsubscribe Step: ', event);
            }
        });

        this.subscriptions.add(badWayToUnsubscribe_Subscription);
    }

    ngOnDestroy() {
        super.ngOnDestroy();

        this.subscriptions.unsubscribe();
    }

    buttonClick() {
        // Notice we don't have to unsubscribe here since this is a Finite(1) call thanks to how angular HttpClient works.
        this.httpHelperService.get().subscribe((data: ServerDataModel) => {
           console.log('Page 1: HttpHelperService.get() (Finite): ', data);
        });
    }

}
