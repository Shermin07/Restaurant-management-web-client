import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


     const handleLogin = e =>{
        e.preventDefault();
       // console.log('hello')

        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email, password)

        
     }

    return (
        <div className="hero   ">
             
        <div className="hero-content  flex-col lg:flex-row">
        
          <div className="text-center lg:text-left">
           
           
          </div>
          <div className="card flex-shrink-0 w-[600px] max-w-lg shadow-2xl bg-gradient-to-r from-[#cbd5e1] to-[rgb(203 213 225 / 0)] ">
         
          <div className="avatar">
  <div className="w-36 ml-48 mt-4 rounded">
    <img src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=sph" />
  </div>
</div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-md text-sky-700">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-md text-sky-700">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link text-sky-700 font-bold text-lg link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn text-sky-700 bg-white font-bold text-xl">Login</button>
                
                <Link  className="btn mt-3 text-sky-700 bg-white font-bold text-xl">Google</Link>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;