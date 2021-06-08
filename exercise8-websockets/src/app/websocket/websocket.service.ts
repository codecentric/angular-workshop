import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}

  public sendMessage(message: string) {
    // TODO: implement
  }

  public getMessages() {
    // TODO: implement
  }
}

export interface Message {
  id: string;
  body: string;
}
