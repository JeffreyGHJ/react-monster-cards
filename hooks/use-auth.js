import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../slices/auth-context"; 
import useDatabase from "./use-database";

const useAuth = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    
    const { createPlayerData } = useDatabase();
    const authCtx = useContext(AuthContext);
    const router = useRouter();

    const sendRequest = async (isLoginMode, enteredEmail, enteredPassword) => {
        setIsLoading(true);
        console.log("Calling sendRequest() in useAuth() hook:");
        //console.log("isLoginMode: " + isLoginMode + ", enteredEmail: " + enteredEmail + ", enteredPassword: " + enteredPassword);
        
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
                throw new Error(responseData.error.message);
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
            alert(error);
            setIsLoading(false);
        }
    };
    
    return {
        isLoading,
        sendRequest,
    };
};

export default useAuth;