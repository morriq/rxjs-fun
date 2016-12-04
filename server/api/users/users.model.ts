import * as mongoose from 'mongoose';

import {io} from '../../sockets';
import {USERS_API} from './users.routes';

export interface IUser {
  _id: string;
  name: string;
}
export interface IUserDocument extends IUser, mongoose.Document {
  _id: string;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  name: String
});

const hook = function(doc: IUserDocument): void {
  this.constructor.find()
    .then((data: IUser[]) => {
      io.emit(USERS_API, data);
    });
};
userSchema.post('save', hook);
userSchema.post('remove', hook);

export const usersModel: mongoose.Model<IUserDocument> = mongoose.model<IUserDocument>('User', userSchema)
