import {io} from '../../sockets';
import {USERS_API} from './routes';

export interface IUser {
  id: number;
  name: string;
}

let users: IUser[] = [];
for (let i = 0; i <= 10; i++) {
  users.push({
    id: i,
    name: i.toString()
  });
}

export const usersModel = new Proxy(users, {
  set: (target, property, value, receiver) => {
    if (typeof value === 'number') {
      return true;
    }

    target[property] = value;
    io.emit(USERS_API, target);

    return true;
  }
});
