import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatCardModule, MatTableModule, MatToolbarModule} from "@angular/material";
import { SummaryTable } from "./components/SummaryTable/SummaryTable";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ApiService } from "./service/ApiService";
import {DndModule} from 'ng2-dnd';

@NgModule({
    declarations: [
        AppComponent,
        SummaryTable
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        HttpClientModule,
        DndModule.forRoot()
    ],
    providers: [HttpClient, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
