import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  messages$ = new BehaviorSubject<string>('');

  constructor(private socket: Socket) {
    this.socket.on('chat-message', (message: string) => {
      console.log(`chat-message event from websocket: ${message}`);
      this.messages$.next(message);
    });
  }

  public sendMessage(message: string) {
    console.log(`sent message via websocket: ${message}`);
    this.socket.emit('chat-message', message);
  }

  public getMessages(): BehaviorSubject<string> {
    return this.messages$;
  }
}

export interface Message {
  id: string;
  body: string;
}
