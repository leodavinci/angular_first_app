import { Component } from '@angular/core';

@Component({
    // selector: 'app-server',
    // selector: '[app-server]',
    selector: '.app-server',
    templateUrl: './server.component.html',
    // template: '<h4>I am server component 2!!!</h4>'
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
