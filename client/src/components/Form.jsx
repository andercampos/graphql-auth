import { useState } from 'react';

const Form = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form onSubmit={onSubmit} className="col s6">
        <div className="input-field">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>

        <span className="errors">{props.error?.message}</span>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export { Form };
