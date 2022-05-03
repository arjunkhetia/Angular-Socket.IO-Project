import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {

  public socket: any;

  constructor() {
    this.socket = io('http://localhost:3000', {
      path: '/socket.io/',
      transports: ['websocket', 'polling'],
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });
    this.onInit();
  }

  onInit() {
    this.socket.on('connect', () => {
      console.log('Connected to Server');
    });
    this.socket.on('connect_timeout', (timeout: any) => {
      console.log('Connection Timeout with : ', timeout);
    });
    this.socket.on('connect_error', (error: any) => {
      console.log('Connection Error : ', error);
    });
    this.socket.on('disconnect', (reason: any) => {
      if (reason === 'io server disconnect') {
        // the disconnection was initiated by the server, you need to reconnect manually by socket.connect()
        console.log('The disconnection was initiated by the server, server disconnected');
      } else {
        // else the socket will automatically try to reconnect
        console.log('Server Disconnected : ', reason);
      }
    });
    this.socket.on('reconnect', (attemptNumber: any) => {
      console.log('Socket Server Successfully Reconnected with attempt : ', attemptNumber);
    });
    this.socket.on('reconnect_attempt', (attemptNumber: any) => {
      console.log('Reconnect Attempt : ', attemptNumber);
    });
    this.socket.on('reconnecting', (attemptNumber: any) => {
      console.log('Attempting to Reconnect : ', attemptNumber);
    });
    this.socket.on('reconnect_error', (error: any) => {
      console.log('Reconnection Error : ', error);
    });
    this.socket.on('reconnect_failed', () => {
      console.log('Reconnection Failed');
    });
    this.socket.on('ping', () => {
      console.log('ping packet is written out to the server');
    });
    this.socket.on('pong', (latency: any) => {
      console.log('pong is received from the server in : ', latency);
    });
  }

  public getSocketId = () => {
    return Observable.create((observer: any) => {
      this.socket.on('socketid', (message: any) => {
        observer.next(message);
      });
    });
  }

  public sendMessage(message: any) {
    this.socket.emit('client-message', message);
  }

  public getMessage = () => {
    return Observable.create((observer: any) => {
      this.socket.on('server-message', (message: any) => {
        observer.next(message);
      });
    });
  }
}
