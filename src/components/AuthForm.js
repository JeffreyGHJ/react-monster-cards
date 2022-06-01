import classes from './AuthForm.module.css'

const AuthForm = ( props ) => {

    return (
        <div>
            <div className={classes.container}>
                <h2>Login</h2>
                <form>
                    <div className={classes.inputs}>
                        <div className={classes['input-group']}>
                            <label for='email'>Email</label>
                            <input id='email' type='email' placeholder='Email'></input>
                        </div>
                        <div className={classes['input-group']}>
                            <label for='password'>Password</label>
                            <input type='password' placeholder='Password'></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default AuthForm;