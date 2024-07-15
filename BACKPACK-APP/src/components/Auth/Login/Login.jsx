import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginRequest } from '../../../../services/login.service';
import { useEffect, useState } from 'react';
import { Alert } from '../../Alert/Alert';
import { Error } from '../../Alert/Error';
import useAuthStore from '../../../store/store';

export const Login = ({ setUserLog,setIdMateria }) => {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(false);
    const [alerta, setAlerta] = useState(false);

    const navigate = useNavigate();

    useEffect(()=> {
        setIdMateria('')
    }, [])

    //STORE
    const{setToken} = useAuthStore();

    const onSubmit = handleSubmit((values) => {
        loginRequest(values)
            .then(token => {
                if (token) {
                    values.token = token
                    setUserLog(values);
                    setAlerta(true);
                    
                    setToken(token)

                    setTimeout(() => {
                        setAlerta(false);
                        navigate('/home');
                    }, 3000);
                    return;
                }

                values.token = null;
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
            })
    })

    return (
        <div className='login'>


            <div className="login__section">
                <figure className='section__images'>
                    <img src="./../../public/images/book.png" alt="book" className='book' />
                    <img src="./../../public/images/nut.png" alt="nut" className='gear' />
                    <img src="./../../public/images/nut.png" alt="nut" className='nut-2' />
                    <img src="./../../public/images/nut.png" alt="nut" className='nut-3' />


                    <img src="./../../public/images/bub-bk-1.png" alt="nut" className='bub-bk-1' />
                    <img src="./../../public/images/bub-bk-2.png" alt="nut" className='bub-bk-2' />
                    <img src="./../../public/images/bub-bk-3.png" alt="nut" className='bub-bk-3' />
                </figure>

                <div className='div__form'>

                    <form className='form' onSubmit={onSubmit}>
                        <div className="form__logo">
                            <img src="../../../public/images/logo-log.png" alt="logo" className='logo' />
                            <p className='logo__title'>BACKPACK</p>
                        </div>


                        {
                            alerta ? <Alert>Iniciando la App</Alert> : null
                        }

                        {
                            error ? <Error>Credenciales incorrectas</Error> : null
                        }

                        <div className="campo">
                            <label htmlFor="email" className='label'>Email :</label>
                            <input type="email" className='email input' {...register('identifier', { required: true })} />
                            <img src="../../../public/images/mail.svg" alt="mail" className='mail icon-form' />
                        </div>

                        <div className="campo">
                            <label htmlFor="password" className='label'>Contraseña :</label>
                            <input type="password" className='password input' {...register('password', { required: true })} />
                            <img src="../../../public/images/lock.svg" alt="mail" className='mail icon-form' />
                        </div>

                        <div className="campo__btn">
                            <button type='submit' className='send btn'>
                                <img src="../../../public/images/send.svg" alt="send" />
                            </button>

                            <NavLink className='new btn' to='/register'>
                                <img src="../../../public/images/new.svg" alt="send" />
                            </NavLink>
                        </div>
                    </form>

                    <img src="./../../public/images/bub-fo-1.png" alt="nut" className='bub-fo-1' />
                    <img src="./../../public/images/bub-fo-2.png" alt="nut" className='bub-fo-2' />
                    <img src="./../../public/images/bub-fo-3.png" alt="nut" className='bub-fo-3' />


                    <img src="./../../public/images/bub-fo-1.png" alt="nut" className='bub-fo-4' />
                    <img src="./../../public/images/bub-fo-2.png" alt="nut" className='bub-fo-5' />
                    <img src="./../../public/images/bub-fo-3.png" alt="nut" className='bub-fo-6' />
                </div>

            </div>



            <NavLink to='/'>
                <button className='btn-back'>
                    <img src="../../../public/images/arrow.png" alt="arrow" />
                </button>
            </NavLink>


            {/* BUBBLE BLUE */}
            <img src="../../../public/images/bub-1-log.png" alt="bubble" className="bub-1 bub" />
            <img src="../../../public/images/bub-2-log.png" alt="bubble" className="bub-2 bub" />
            <img src="../../../public/images/bub-3-log.png" alt="bubble" className="bub-3 bub" />
            {/* BUBBLE PURPLE */}
            <img src="../../../public/images/bub-4-log.png" alt="bubble" className="bub-4 bub" />
            <img src="../../../public/images/bub-5-log.png" alt="bubble" className="bub-5 bub" />
            <img src="../../../public/images/bub-6-log.png" alt="bubble" className="bub-6 bub" />


        </div>
    )
}
