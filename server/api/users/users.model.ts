import {sockets} from '../../sockets';


let users = [
  {name: 'www'},
  {name: 'zzz'}
];

export const usersModel = new Proxy(users, {
  set: (target, property, value, receiver) => {
    target[property] = value;
    sockets.emit('users', target);

    return true;
  }
});