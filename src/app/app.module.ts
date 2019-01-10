import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {LayoutComponent} from './_layout/layout.component';
import {Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material';

@NgModule({
    declarations: [ AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
       BrowserAnimationsModule,
        // MatButtonModule,
        // MatCheckboxModule,
        // MatInputModule,
        // MatOptionModule,
        // MatFormFieldModule
    ],
    providers: [Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
