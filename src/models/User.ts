import mongoose, { Schema, model, Model } from 'mongoose';
import { User } from '../interfaces';

import { generateKey } from '../utils';


const userSchema = new Schema(
  {
    ruc: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: 'Client',
      required: true,
      enum: {
        values: ['Client', 'Admin'],
        message: '{VALUE} is not a valid role',
      },
    },

    isConfirm: {
      type: Boolean,
      default: false,
    },

    key: {
      type: String,
      default: generateKey(),
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<User> = mongoose.models.User || model('user', userSchema);
export default User;
