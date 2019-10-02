import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketServiceService } from './service/socket-service.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SocketServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
