import {Component, OnInit} from '@angular/core';
import './app.scss';
import {ApiService} from "./service/ApiService";
import {IData} from "interface";
import {delay} from "rxjs/internal/operators";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public title = 'Test app';
    public tablesSorted = ['Technical support', 'Marketing', 'CEO'];
    public data: IData;
    public isLoading: boolean;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.apiService.getData()
            .pipe(delay(500), (data) => {
                this.isLoading = true;

                return data;
            })
            .subscribe(data => {
                this.isLoading = false;
                this.data = data;
            });
    }
}