import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <md-card style="margin:8px">
            <md-card-title>{{message.owner}}</md-card-title>
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    </div>
    `
})
export class MessagesComponent {
    constructor(private webService : WebService){}

    ngOnInit(){
        this.webService.getMessages();
    }

    message = [{text:'some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}