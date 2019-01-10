import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandComponent} from './land.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {LandRoutingModule} from './land-routing.module';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';

@NgModule({
    declarations: [LandComponent, HeaderComponent, LoginComponent, FooterComponent],
    imports: [
        CommonModule,
        LandRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatFormFieldModule
    ],
})
export class LandModule {
}
