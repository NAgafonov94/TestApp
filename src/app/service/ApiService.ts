import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {IData} from "interface";

@Injectable()
export class ApiService {
    private dataUrl = 'data/data.json';

    constructor(private http: HttpClient) {
    }

    getData(): Observable<IData> {
        return this.http.get<IData>(this.dataUrl);
    }
}