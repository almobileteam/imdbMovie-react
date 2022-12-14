import { useRef } from 'react';
import '../../pages/registration/signup/signup.scss';
import { Link } from 'react-router-dom';

export default function Account () {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const local = JSON.parse(localStorage.getItem('data'));

  const submit = (e) => {
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    };
    window.localStorage.setItem('data', JSON.stringify(data));
    alert('data updated');
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'name',
      className: 'form-input',
      ref: name
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'email',
      className: 'form-input',
      ref: email
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      className: 'form-input',
      ref: password
    }
  ];

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Sign Up</h1>
        <form>
          <h2>

            Last Datas: {local.name}, {local.email}, {local.password}
          </h2>

          {inputs.map((input, i) => (
            <>
              <input
                key={i}
                name={input.name}
                className={input.className}
                ref={input.ref}
                type={input.type}
                placeholder={input.placeholder}
              />

            </>

          ))}
           <button className="update" type="submit" onClick={submit}>
                update
              </button>
              <Link to='/login'> <button className="form-button" >Login</button></Link>

        </form>

      </div>
    </div>
  );
}
