import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {AuthGuard} from './user/auth.guard';
import {LayoutComponent} from './_layout/layout.component';


const routes: Routes = [
    // { path: '', redirectTo: 'eager', pathMatch: 'full' },
    {
        path: '',
        pathMatch: 'full',
        canLoad: [AuthGuard],
        loadChildren: './land/land.module#LandModule'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
        ]
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
