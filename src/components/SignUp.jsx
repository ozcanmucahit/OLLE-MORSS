import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate ,Link} from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';





const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [userDisabled, setUserDisabled] = useState(false)
    const [password, setPassword] = useState('');
    const [notUser, setNotuser] = useState('Geçerli bir mail adresi veya Şifre gir');
 
    useEffect(() => {
      let userİnfo = { email, password };
      let userİnfoError = {notUser}
      const validate = (userİnfo,userİnfoError) => {
        const { email, password } = userİnfo; 
        const { notUser } = userİnfoError;
        if (!email && !password) {
          
          console.log(notUser)      
        }  if (email.includes('@gmail.com')) {
            setNotuser('Dogrulandı')    
        }  if(email.includes('@gmail.com')) {
            notUser  = 'hata  yok'
        }
      }
      validate(userİnfo,userİnfoError)
    },[])
    
      const onSubmit = async (e) => {
        e.preventDefault()
        setUserDisabled(true)
    
      
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
          })
          
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
  
    
      }
  
  return (
    <main >        
     
<div className="bg-grey-lighter min-h-screen flex flex-col">
         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
           <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border">
              <h1 className="mb-8 text-3xl text-center">Üye Ol</h1>
              <form>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-center text-center"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    <input 
                        required
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 placeholder:text-center text-center"
                        name="password"
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  <button onClick={onSubmit} type="submit"  className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1">Kayıt Ol</button>
                    </form>
                    {   notUser && email.length > 2 && (
                        <div className='text-center text-red-500 '>Geçerli bir mail adresi veya şifre gir</div>
                      )}
                  </div>
             
            
                <div className="text-grey-dark mt-6">
                    Zaten bir Hesabın varsa 
                    <b className="px-2 no-underline border-b border-blue text-blue" href="../login/">
                       <Link to={'/login'}>Giriş Yap</Link>
                    </b>
                </div>
            </div>
       </div>
    </main>
  )
}
 
export default Signup