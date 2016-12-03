import {io} from '../../sockets';

export interface IUser {
  name: string;
}

let users: IUser[] = [];
for (let i = 0; i <= 10; i++) {
  users.push({
    name: i.toString()
  });
}
export const usersModel = new Proxy(users, {
  set: (target, property, value, receiver) => {
    if (typeof value === 'number') return true;

    target[property] = value;
    io.emit('users', target);

    return true;
  }
});
