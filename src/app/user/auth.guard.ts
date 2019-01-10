import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanLoad, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(): boolean {
        if (this.authService.isLoggedIn) {
            this.router.navigate(['/dashboard']);

            return false;
        }

        return true;
    }
}
