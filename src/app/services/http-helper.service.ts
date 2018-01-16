import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ServerDataModel } from '@app/models';

@Injectable()
export class HttpHelperService {
    constructor(private http: HttpClient) { }

    get(): Observable<ServerDataModel> {
        return this.http.get<ServerDataModel>('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD');
    }
}
