import {NgModule} from '@angular/core';
const io = require('socket.io-client');

import {SocketService} from './socket.service';


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