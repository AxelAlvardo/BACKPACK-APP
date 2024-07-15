import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../../../services/login.service";
import '../../../sass/layout/Login_Admin/_login_admin.scss'

// puto el que lo lea :v

const Login_Admin = ({ setUserLog }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((values) => {
        loginRequest(values)
            .then(token => {
                if (token) {
                    values.token = token
                    setUserLog(values);

                    setTimeout(() => {
                        navigate('/admin');
                    }, 3000);
                    return;
                }

                values.token = null;
                setTimeout(() => {
                }, 3000);
            })
    })

    return (
        <div className="login-container">
            <div className="login-admin">
                <div className="login-box">
                    <div className="title-container">
                        <h2>BACKPACK</h2>
                        <h2>ADMINISTRATION</h2>
                    </div>

                    <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" {...register('email', { required: true })} />
                            {errors.email && <p>Este campo es obligatorio</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password" {...register('password', { required: true })} />
                            {errors.password && <p>Este campo es obligatorio</p>}
                        </div>
                        <Link to={"/admin"}>
                            <button type="submit">Iniciar</button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login_Admin;