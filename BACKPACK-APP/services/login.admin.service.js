import axios from "axios";

const url = `http://localhost:3500/api`;

export const adminLoginRequest = async (user) => {
    try {

        // Realizar solicitud de login para obtener el token
        const response = await axios.post(`${url}/auth/login`, user, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const tokensito = response.data.token;

        // Realizar solicitud a whoami para obtener información del usuario
        const whoResponse = await axios.get(`${url}/auth/whoami`, {
            headers: {
                'Authorization': 'Bearer ' + tokensito
            }
        });

        if (whoResponse.status === 200) {
            const userRole = whoResponse.data.user.role;

            // Verificar si el usuario tiene el rol de administrador
            if (userRole !== 'admin') {
                throw new Error('El usuario no es un administrador');
            }

            // Retornar el token si todo está correcto
            return tokensito;
        }
    } catch (error) {
        // Manejar errores de manera más elegante
        console.error("Error en la autenticación:", error.message);
        return undefined;
    } finally {
        // Ocultar estado de carga
        // TODO: Implementar estado de carga en el componente React
    }
}
