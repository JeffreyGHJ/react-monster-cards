export const API_KEY = 'AIzaSyDtaLkz4b5br6bC7ss6DNmF2zn243qllP0';
export const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY;
export const LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY;

async function handler(req, res) {
    const { isLoginMode, enteredEmail, enteredPassword } = req.body;
    const url = isLoginMode ? LOGIN_URL : SIGN_UP_URL;

    try {
        const response = await fetch( url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const responseData = await response.json();
        console.log(response);
        console.log(responseData);
        res.status(response.status).json(responseData);
        /* res.setHeader('Content-Type', 'application/json'); */
        /* const data = await response.json();
        console.log(data);
        if ( !response.ok ) { 
            console.log("adding error to response");
            res.status(data.error.code).json({      // this status code will produce RED in dev console
                error: data.error
            });
        } else {
            res.status(200).json(data);
        } */
    } catch (error) {
        res.status(400).json(e);
        //console.log("error in authenticate-user.js");
        /* res.json(error);
        res.status(405).end(); */
    }
}

export default handler;