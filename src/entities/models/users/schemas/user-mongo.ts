import {Schema} from 'mongoose';
import crypto from 'crypto';
import { User } from './user';

export const UserSchemaMongo = new Schema<User>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String, },
},{
    versionKey: false,
    timestamps: true
}) ;

UserSchemaMongo.methods.toJSON = function () {
 const { _id, ...user } = this.toObject();
 user.uuid = _id;
 return user;
};