import {Injectable} from '@angular/core';


@Injectable()
export class SocketService implements EventTarget{
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {
  }

  dispatchEvent(evt: Event): boolean {
    return undefined;
  }

  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void {
  }

}