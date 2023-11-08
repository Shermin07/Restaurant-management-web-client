import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext, auth } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";


const Navber = () => {
  const {user,logOut} = useContext(AuthContext);
  
   
  const handleSignOut = () =>{
    logOut(auth)
    .then(result =>{
        console.log(result)
       
    } )
    .catch(error =>{
        console.log(error)
    })
  }

    const navLinks = <>
    
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allFoodItems'>All Food Items</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
      {
        user ? <li><Link onClick={handleSignOut} >LogOut</Link></li> :   <li><NavLink to='/login'>Login</NavLink></li>
      }
     </>



    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Retro Diner Delights</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
{navLinks}

    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
        <label tabIndex={0} ><img className="w-24" src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?size=626&ext=jpg&uid=R121205384&ga=GA1.1.732846257.1688661449&semt=ais"></img></label>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 bg-base-100 rounded-box w-52 mt-4">
          <Link to='/addAFoodItem'>Add a food item</Link>
          <Link to='/MyaddedItems'>My added food items</Link>
          <Link to='/myOrderedItems'>My orderd food items</Link>
        
         
         
        </ul>
      </div>
  </div>
</div>
        </div>
    );
};

export default Navber;