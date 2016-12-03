let users = [
	{name: 'www'},
	{name: 'zzz'}
];
let usersObserver = new Proxy(users, {
	set: (target, property, value, receiver) => {
		target[property] = value;
		io.sockets.emit('users', target);

		return true;
	}
});

export class UsersController {
	dupa = 123;

	show = (req, res) => {
		console.log(this.dupa);
		res.json(usersObserver).end();
	}

	insert = (req, res) => {
		usersObserver.push(req.body);
		res.status(201).end();
	}
}