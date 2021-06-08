import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss'],
})
export class WebsocketComponent implements OnInit {
  newMessage: string = '';
  messageList: string[] = [];

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    // TODO: react to new messages
  }

  public sendMessage() {
    const message = this.newMessage;
    if (message) {
      this.websocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
