import {NgModule} from "@angular/core";
import {SocketService} from "./socket.service";
const io = require('socket.io-client');

@NgModule({
  imports: [

  ],
  providers: [
    {
      provide: 'URL',
      useValue: 'http://localhost:3000'
    },
    {
      provide: SocketService,
      useFactory: io,
      deps: ['URL']
    }
  ],
  bootstrap: []
})
export class CoreModule {}