import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  constructor(private socket: Socket) {}

  public sendMessage(message: string) {
    console.log(`sent message via websocket: ${message}`);
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('new-message', (message: string) => {
        console.log(`new-message event from websocket: ${message}`);
        observer.next(message);
      });
    });
  };
}

export interface Message {
  id: string;
  body: string;
}
