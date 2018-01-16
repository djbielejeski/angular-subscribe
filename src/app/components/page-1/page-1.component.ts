import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/takeUntil';

import { BaseComponent } from '@app/components/core';
import { HttpHelperService } from '@app/services';
import { ServerDataModel } from '@app/models';

@Component({
    selector: 'app-page-1',
    templateUrl: './page-1.component.html'
})
export class Page1Component extends BaseComponent implements OnInit {

    constructor(private router: Router,
                private httpHelperService: HttpHelperService) {
        super();
    }

    ngOnInit() {
        // Infinite without unsubscribe
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Page 1: Router.Events.Subscribe (Infinite) - No Unsubscribe: ', event);
            }
        });

        this.router.events.takeUntil(this.ngUnsubscribe).subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log('Page 1: Router.Events.Subscribe (Infinite) - With Unsubscribe: ', event);
            }
        });
    }

    buttonClick() {
        this.httpHelperService.get().subscribe((data: ServerDataModel) => {
           console.log('Page 1: HttpHelperService.get() (Finite): ', data);
        });
    }

}
