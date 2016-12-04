import {usersModel} from './users.model';


usersModel.find().remove()
  .then(() => {
    usersModel.create([
      {
        name: 'Wojtek'
      },
      {
        name: 'Agata'
      }
    ]);
  });
