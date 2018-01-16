import { OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class BaseComponent  implements OnDestroy {
    ngUnsubscribe: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
