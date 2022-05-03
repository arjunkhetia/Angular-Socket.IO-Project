import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './service/socket-io.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title = 'Angular Socket.IO Project';
  public clientId: any = '';
  public socketId: any = '';
  public serverStatus: boolean = false;
  public messages: string[] = [];
  public message: string = '';
  public subscription: Subscription = new Subscription;

  constructor(private socketservice: SocketIoService) { }

  ngOnInit(): void {
    if (this.socketservice) {
      this.subscription = this.socketservice.getSocketId().subscribe((message: any) => {
        this.serverStatus = true;
        this.clientId = message.clientId;
        this.socketId = message.socketId;
        this.subscription.unsubscribe();
      });
      this.socketservice.getMessage().subscribe((message: any) => {
        this.messages.push(message);
      });
    } else {
      this.serverStatus = false;
    }
  }

  public sendMessage() {
    this.socketservice.sendMessage({
      client: this.clientId,
      message: this.message
    });
    this.message = '';
  }
}
