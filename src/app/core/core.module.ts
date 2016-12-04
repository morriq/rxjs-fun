import {NgModule} from '@angular/core';
const io = require('socket.io-client');

import {SocketService} from './socket.service';
import {configuration} from '../../../config/environment/index';


@NgModule({
  imports: [

  ],
  providers: [
    {
      provide: 'URL',
      useValue: configuration.ip + ':' + configuration.port
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