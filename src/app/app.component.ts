import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'My lazy loader app';

    public constructor(private titleService: Title) {
    }

    ngOnInit() {
        this.titleService.setTitle(this.title);
    }
}
