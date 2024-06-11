import {Schema} from 'mongoose';
import crypto from 'crypto';
import { Account } from './account';

export const AccountSchemaMongo = new Schema<Account>({
    _id: { type: String, unique: true, default: () => crypto.randomUUID() },
    name: { type: String },
    username: { type: String },
    status: { type: String, },
    password: { type: String, required: true },
    budget: { type: Number },
    system: { type: String },
    market: { type: String },
    provider: { type: String }
},{
    versionKey: false,
    timestamps: true
}) ;

AccountSchemaMongo.methods.toJSON = function () {
 const { _id, ...acount } = this.toObject();
 acount.id = _id;
 return acount;
};