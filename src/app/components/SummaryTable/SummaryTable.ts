import {Component, Input} from '@angular/core';
import {IData, ITableColumn, IDropEvent} from "interface";
import './SummaryTable.scss';

@Component({
    selector: 'summary-table',
    templateUrl: 'SummaryTable.html'
})
export class SummaryTable {
    @Input() name: string;
    @Input() data: IData[] = [];

    public columns: ITableColumn[] = [{
        name: 'summary',
        label: 'Summary'
    }, {
        name: 'fromEmail',
        label: 'From email'
    }, {
        name: 'date',
        label: 'Date'
    }];

    constructor() {
    }

    getColumnNames(): string[] {
        return this.columns.map(col => col.name);
    }

    dropSuccess(event: IDropEvent) {
        if (event.dragData) {
            this.data = this.data.concat(event.dragData);
        }
    }

    dragSuccess(row: number) {
        this.data = this.data.filter((data, index) => row !== index);
    }
}