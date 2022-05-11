import React from 'react';
import './login.css';

import {useForms} from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValuesInput, handleLoginInpuntChange] = useForms({
        lEmail: '',
        lPassword: ''
    });

    const [formValuesRegister, handleRegisterInpuntChange] = useForms({
        rName: '',
        rEmail: '',
        rPassword: '',
        rPassword2: ''
    });


    const {lEmail, lPassword} = formValuesInput;
    const {rName, rEmail, rPassword, rPassword2} = formValuesRegister;

    const handleLogin = (e) =>  {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
     }

     const handleRegister = (e) =>  {
         e.preventDefault();
         if(rPassword!==rPassword2){
             Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
         }else{
             dispatch(startRegister(rName, rEmail, rPassword));
         }
      }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo electrónico"
                                name= "lEmail"
                                value={lEmail}
                                onChange={handleLoginInpuntChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name= "lPassword"
                                value={lPassword}
                                onChange={handleLoginInpuntChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name= "rName"
                                value={rName}
                                onChange={handleRegisterInpuntChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo electrónico"
                                name= "rEmail"
                                value={rEmail}
                                onChange={handleRegisterInpuntChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name= "rPassword"
                                value={rPassword}
                                onChange={handleRegisterInpuntChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name= "rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInpuntChange}
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}