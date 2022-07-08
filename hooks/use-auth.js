import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setError } from '../slices/error-modal-slice';
import AuthContext from "../slices/auth-context"; 
import useDatabase from "./use-database";

const useAuth = () => {
    const router = useRouter();
    const authCtx = useContext(AuthContext);
    const { createPlayerData } = useDatabase();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    
    const sendRequest = async (isLoginMode, enteredEmail, enteredPassword) => {
        setIsLoading(true);
        console.log("Calling sendRequest() in useAuth() hook:");
        
        try {
            const response = await fetch('/api/authenticate-user', {
                method: 'POST',
                body: JSON.stringify({
                    isLoginMode: isLoginMode,
                    enteredEmail: enteredEmail,
                    enteredPassword: enteredPassword,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let responseData = await response.json();
            if (!response.ok) {
                
                console.log(response.status);
                console.log(response.statusText);
                console.log(responseData.error);
                console.log(responseData.error.message); // Auth errors have an error object with message
                let errorObj = {
                    status: response.status,
                    statusText: response.statusText,
                    message: responseData.error.message || 'Error'
                }
                dispatch(setError(errorObj));
                throw new Error(responseData.error);
            } else {
                console.log("fetched with no error! - response data: ");
                const expirationTime = new Date( new Date().getTime() + (+responseData.expiresIn * 1000) );
                
                if ( !isLoginMode ) {
                    console.log("Adding db entry for new user...");
                    await createPlayerData(responseData.localId);
                }

                // TO-DO: IF ERROR FROM CREATE USER, THEN DO NOT PERFORM LOGIN

                authCtx.login(responseData.idToken, expirationTime.toISOString(), responseData.localId);
                setIsLoading(false);
                router.replace("/");
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };
    
    return {
        isLoading,
        sendRequest,
    };
};

export default useAuth;