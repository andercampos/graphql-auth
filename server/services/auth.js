import { model } from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from '../models/User';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, 'Invalid Credentials');
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, 'Invalid credentials.');
      });
    });
  })
);

async function signup({ email, password, req }) {
  const user = new User({ email, password });
  if (!email || !password) {
    throw new Error('You must provide an email and password.');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email in use');
  }
  const user_1 = user.save();
  return await new Promise((resolve, reject) => {
    req.logIn(user_1, (err) => {
      if (err) {
        reject(err);
      }
      resolve(user_1);
    });
  });
}

function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        reject('Invalid credentials.');
      }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

export { signup, login };
