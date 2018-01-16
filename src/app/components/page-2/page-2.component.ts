import { Component, OnInit } from '@angular/core';

import { HttpHelperService } from '@app/services';
import { ServerDataModel } from '@app/models';
import { BaseComponent } from '@app/components/core';

@Component({
    selector: 'app-page-2',
    templateUrl: './page-2.component.html'
})
export class Page2Component extends BaseComponent implements OnInit {

    constructor(private httpHelperService: HttpHelperService) {
        super();
    }

    ngOnInit() {
    }

    buttonClick() {
        this.httpHelperService.get().subscribe((data: ServerDataModel) => {
            console.log('Page 2: HttpHelperService.get() (Finite): ', data);
        });
    }

}
