import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import App from '../App'
import Dashboard from "./Dashboard";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('mors@gmail.com');
    const [password, setPassword] = useState('123123');
    const [info, setİnfo] = useState(false);
  
  
  const onLogin = (e) => {
    e.preventDefault();
    setİnfo(true)
      console.log(info)
      //user bilgisi burada
      if (email === 'mors@gmail.com' || email === email || email === 'mucahit@gmail.com') {
           navigate('/login')
      } else {
            navigate('/')
       }
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
            console.log(user);
            if (user.email === user.email) {
                navigate('/login');
            } else {
                navigate('/dashboard');
            }
     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
     

    return(
      <>
        {
          info == true ? (
            <Dashboard email={email} password={password} info={info}/>
         ): 
            <main className='px-2 py-2' >        
                <section>
                     <div className='flex justify-center'>     
                       <div className='text-2xl text-center absolute  bg-black text-white px-2 py-2'>Mors-Panel Hoşgeldiniz</div>            
                          <form className='shadow-md px-2 py-2 translate-y-1/2'>                                              
                             <div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"       
                                    className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-center text-center"                        
                                    required
                                    value={email}        
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}        
                                    className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-center text-center"           
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>  setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div className='text-center'>
                                <button
                                     type='submit'     
                                    onClick={onLogin} 
                                    className='butonLogout bg-black px-2 py-2  text-center text-white'                                       
                                >      
                                    Giriş Yap                                                                  
                                </button>
                            </div>                               
                        </form>
                    </div>
                </section>
            </main>
     }
     </>
    )
}
 
export default Login