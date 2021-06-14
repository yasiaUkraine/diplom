import { useState } from "react";
import { auth, createUserDocument } from '../firebase';
import './login.css';

const Login = (props) => {
    const [displayName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const {
        id,
        setId,
    } = props;

    const handleLogin = async (e) => {
        // e.preventDefault();
        if (email && password) {
          try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            setId(user.uid);
          } catch (error) {
            switch(error.code) {
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                  setEmailError(error.message);
                  break;
                case 'auth/wrong-password':
                  setPasswordError(error.message);
                  break;
                default:;
              }
          }
        }
      };
    
    const handleSignUp = async (e) => {
        // e.preventDefault();
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
          setId(user.uid);
          await createUserDocument(user, { displayName });
        } catch (error) {
            switch(error.code) {
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                  setEmailError(error.message);
                  break;
                case 'auth/weak-password':
                  setPasswordError(error.message);
                  break;
                default:;
            }
        }
        // this.setState({ displayName: '', email: '', password: '' });
      };

    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div className="col-md-8 col-lg-6 nopadding">
                <div className="login d-flex align-items-center py-5">
                    <div className="container">
                    <div className="row rowForm">
                        <div className="col-md-9 col-lg-8 mx-auto nopadding">
                        <h3 className="login-heading mb-4">Welcome back!</h3>
                        <div>
                            {hasAccount ? (
                                <>
                                </>
                            ): (
                                <div className="form-label-group">
                                    <label htmlFor="inputEmail titleForm">Name</label>
                                    <input type="text" 
                                        id="inputName" 
                                        className="form-control" 
                                        placeholder="Name" 
                                        required 
                                        autoFocus
                                        value={displayName}
                                        onChange = {(e) => setName(e.target.value)}
                                        />
                                </div>
                            )}
                            <div className="form-label-group">
                                <label htmlFor="inputEmail titleForm">Email address</label>
                                <input type="email" 
                                    id="inputEmail" 
                                    className="form-control" 
                                    placeholder="Email address" 
                                    required
                                    value={email}
                                    onChange = {(e) => setEmail(e.target.value)}/>
                            </div>
                            <p className = 'errorMsg'>{emailError}</p>

                            <div className="form-label-group">
                                <label htmlFor="inputPassword titleForm">Password</label>
                                <input type="password" 
                                    id="inputPassword" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    required
                                    value={password}
                                    onChange = {(e) => setPassword(e.target.value)}/>
                            </div>
                            <p className = 'errorMsg'>{passwordError}</p>
                            {hasAccount ? (
                                <>
                                <button 
                                    className="btn btn-lg btn-yellow btn-block btn-login text-uppercase font-weight-bold mb-2" 
                                    onClick = {handleLogin}
                                    >Sign in</button>
                                    <p className = "titleForm">Don't an account ? 
                                        <span className = "titleFormLight" onClick = {() => setHasAccount(!hasAccount)}>Sign up</span>
                                    </p>
                                </>
                            ): (
                                <>
                                <button 
                                    className="btn btn-lg btn-yellow btn-block btn-login text-uppercase font-weight-bold mb-2" 
                                    onClick ={handleSignUp}>Sign up</button>
                                    <p className = "titleForm">Have an account ? 
                                        <span className = "titleFormLight" onClick = {() => setHasAccount(!hasAccount)}>Sign in</span>
                                    </p>
                                </>
                            )}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Login;