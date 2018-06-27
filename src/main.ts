import 'polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';
import 'ng2-dnd/bundles/style.css';
import '@angular/material/prebuilt-themes/indigo-pink.css';

declare var PRODUCTION: string;

PRODUCTION && enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);