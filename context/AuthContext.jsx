import { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';


const Context = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {

      const checkAuth = async () => {
        try {
          const localUser = localStorage.getItem('dataUser');

          if (localUser) {

              const dataUser= JSON.parse(localUser);
              const user = await authService.verifyToken(dataUser.id_user, dataUser.token);

              setUser(user.data.decoded);

              if(user.data.authenticated){
                setAuthenticated(true);            
              }else{
                setAuthenticated(false);
              }
            } 
            setLoading(false);

          } catch (error) {
            console.error('Error checking authentication', error);
            setLoading(false);
          }
        };
        checkAuth();
      }, []);

      //console.log(user)

  return (
    <Context.Provider value={{ authenticated, setAuthenticated, user, loading }}>
        {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider }