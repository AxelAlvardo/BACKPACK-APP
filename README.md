# 🎒 BackPack

## Sec [02] - Grupo N° [03]

### Integrantes

| #   | Nombre           | Carnet   |
| --- | ---------------- | -------- |
| 01  | Axel Alvarado    | 00216022 |
| 02  | Oscar Armando    | 00090822 |
| 03  | Juan Castellanos | 00182222 |

## 🧑‍🚀 Test Users

### 🌟 Admin de prueba

**Usuario:** juancastellanos376@gmail.com

**Contraseña:** 1234

### 🌟 Usuarios de prueba

#### 🚀 Usuario 1 - Civil

**Usuario:** juan.uca@gmail.com

**Contraseña:** 12345678Aa

#### 🚀 Usuario 2 - Informática

**Usuario:** axel.alvarado@gmail.com

**Contraseña:** 12345678Aa

---

<!-- TODO: REVISAR USUARIOS -->

# 📘 Manual de Usuario

<!-- TODO: CAMBIAR URL -->

Para ingresar a los servicios de BackPack haga click en el siguiente enlace. [BackPack](https://backpack-pearl.vercel.app/).
Este enlace lo redirigira a la página de bienvenida de nuestra aplicación, donde usted podrá estar al tanto de todas las novedades.

Una vez hecho esto, dando click en el boton que dice INICIAR, esto lo redigira al login de usuarios donde usted podra probar las credenciales de prueba y ver todas las caracteristicas que la aplicacion tiene para ofrecer. Tambien puede registrar un nuevo usuario.

Cada usuario tiene una carrera asignada, para ingresar solo deberá colocar el correo y la contraseña, esto lo redigira a la página de inicio, donde tendrá acceso a todas las materias que sean de su carrera. Podrá buscar materias en la barra de búsqueda, además de poder acceder a otras funcionalidades.

Al acceder a una materia, se mostrarán los documentos que sean de esa materia los cuales pueden ser consultados desde una vista web.

En el area de administrador, el adminsitrador puede ver en la aplicación web los usuarios registrados y las diferentes materias que se encuentran en la base de datos.

---

# 📚 Documentación API

La API se encuentra alojada en la carpeta BACKPACK-SERVER, esta API funnciona en base a rutas.
Además, esta API contiene los métodos necesarios para un operaciones básicas. A continuación se muestra la URL Base de la API y posteriormente cada endpoint

```
BaseURL: localhost:3500/api
```

### Materia

`DELETE BY ID -> baseURL/materia/id_materia`

```
{
    "message": "Materia deleted"
}
```

`FIND ALL -> baseURL/materia`

```
{
    "materias": [
        {
            "_id": "6567c9ae1f5467894f244c5f",
            "codigo": "F014K42",
            "name": "Fisica 01",
            "carreras": [
                "informatica",
                "mecanica"
            ],
            "imgUrl": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "createdAt": "2023-11-29T23:30:54.973Z",
            "updatedAt": "2023-11-29T23:30:54.973Z",
            "__v": 0
        }
	]
}
```

`CREATE MATERIA -> baseURL/materia`

En este endpoint, es necesario mandarle un JSON desde nuestra aplicación, con el siguiente formato:

```
{
	codigo: "REWQFD",
	"name": "Calculo 03",
	"carreras": "informatica, mecanica",
	"imgUrl": "https://images.unsplash.com/photo-1657550650283-2fba3a0123fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
```

### Documentos

`VISIBILITY -> baseURL/document/visibility/id_documento`

```
{
    "_id": "6560d8570b49f9cca60a6678",
    "temas": [
        "Diferenciales",
        "Integrales"
    ],
    "hidden": true,
    "user": {
        "username": "Oscar Armando Calderon Arguera",
        "email": "armando.arguera@gmail.com"
    },
    "title": "Documento 03",
    "materia": "Calculo",
    "clasificacion": "parcial",
    "url": "https://github.com/Arguera123",
    "annioPublicacion": "2023",
    "cicloPublicacion": "01",
    "createdAt": "2023-11-24T17:07:35.435Z",
    "updatedAt": "2023-11-24T21:11:21.607Z",
    "__v": 0
}
```

`FAVORITE -> baseURL/document/save/id_documento`

```
{
    "document": [
        {
            "_id": "65614c47a647bda32581a844",
            "temas": [
                "Diferenciales",
                "Integrales"
            ],
            "hidden": false,
            "likes": [],
            "user": {
                "_id": "65614bfca647bda32581a830",
                "username": "Oscar Armando Calderon Arguera",
                "email": "armando.arguera@gmail.com"
            },
            "title": "Documento 03",
            "materia": "Calculo",
            "clasificacion": "parcial",
            "url": "https://github.com/Arguera123",
            "annioPublicacion": "2023",
            "cicloPublicacion": "01",
            "createdAt": "2023-11-25T01:22:15.576Z",
            "updatedAt": "2023-11-25T01:22:15.576Z",
            "__v": 0
        }
	]
}
```

`DELETE BY ID -> baseURL/document/id_documento`

```
{
    "message": "File deleted"
}
```

`FIND ALL -> baseURL/document`

```
{
    "documents": [
        {
            "_id": "65698a6381b065711f70a43d",
            "temas": [
                "diferenciales",
                "integrales"
            ],
            "hidden": false,
            "likes": [],
            "user": {
                "_id": "656956871375201943d9c02d",
                "username": "Oscar Armando Calderon Arguera",
                "email": "armando.arguera@gmail.com"
            },
            "title": "Documento 10",
            "materia": "Elementos",
            "clasificacion": "parcial",
            "url": "http://res.cloudinary.com/dslkhbrbg/image/upload/v1701415523/gldhnkor6rc6sy5t50rh.pdf",
            "annioPublicacion": "2023",
            "cicloPublicacion": "01",
            "createdAt": "2023-12-01T07:25:23.764Z",
            "updatedAt": "2023-12-01T07:25:23.764Z",
            "__v": 0
        }
	]
}
```

`FIND OWN -> baseURL/document/own`

```
{
    "documents": [
        {
            "_id": "65614c3fa647bda32581a83c",
            "temas": [
                "Diferenciales",
                "Integrales"
            ],
            "hidden": false,
            "likes": [
                {
                    "_id": "65614bfca647bda32581a830",
                    "username": "Oscar Armando Calderon Arguera",
                    "email": "armando.arguera@gmail.com"
                }
            ],
            "user": {
                "_id": "65614bfca647bda32581a830",
                "username": "Oscar Armando Calderon Arguera",
                "email": "armando.arguera@gmail.com"
            },
            "title": "Documento 01",
            "materia": "Calculo",
            "clasificacion": "parcial",
            "url": "https://github.com/Arguera123",
            "annioPublicacion": "2023",
            "cicloPublicacion": "01",
            "createdAt": "2023-11-25T01:22:07.862Z",
            "updatedAt": "2023-11-25T01:33:02.911Z",
            "__v": 1
        }
	]
}
```

`FIND SAVED -> baseURL/document/saved`

```
{
    "documents": [
        {
            "_id": "65614c47a647bda32581a844",
            "temas": [
                "Diferenciales",
                "Integrales"
            ],
            "hidden": false,
            "likes": [],
            "user": {
                "_id": "65614bfca647bda32581a830",
                "username": "Oscar Armando Calderon Arguera",
                "email": "armando.arguera@gmail.com"
            },
            "title": "Documento 03",
            "materia": "Calculo",
            "clasificacion": "parcial",
            "url": "https://github.com/Arguera123",
            "annioPublicacion": "2023",
            "cicloPublicacion": "01",
            "createdAt": "2023-11-25T01:22:15.576Z",
            "updatedAt": "2023-11-25T01:22:15.576Z",
            "__v": 0
        }
	]
}
```

`FIND BY USER -> baseURL/document/user/id_user`

```
{
    "documents": [
        {
            "_id": "6560d85b0b49f9cca60a667c",
            "temas": [
                "Diferenciales",
                "Integrales"
            ],
            "hidden": false,
            "user": {
                "_id": "655d89b34b583c11bf5b668f",
                "username": "Oscar Armando Calderon Arguera",
                "email": "armando.arguera@gmail.com"
            },
            "title": "Documento 04",
            "materia": "Calculo",
            "clasificacion": "parcial",
            "url": "https://github.com/Arguera123",
            "annioPublicacion": "2023",
            "cicloPublicacion": "01",
            "createdAt": "2023-11-24T17:07:39.064Z",
            "updatedAt": "2023-11-24T17:07:39.064Z",
            "__v": 0
        }
    ]
}
```

`FIND ONE BY ID baseURL/document/id_document`

```
{
    "_id": "6560f0631e252ba575f5beab",
    "temas": [
        "Diferenciales",
        "Integrales"
    ],
    "hidden": false,
    "user": {
        "username": "Oscar Armando Calderon Arguera",
        "email": "mando.arguera@gmail.com"
    },
    "title": "Documento 06",
    "materia": "Calculo",
    "clasificacion": "parcial",
    "url": "https://github.com/Arguera123",
    "annioPublicacion": "2023",
    "cicloPublicacion": "01",
    "createdAt": "2023-11-24T18:50:11.967Z",
    "updatedAt": "2023-11-24T18:50:11.967Z",
    "__v": 0
}
```

`SAVE`

Este es un metodo que nos permite guardar un documento en nuestra base de datos.
Para esto es necesario mandar la información en formato JSON de la siguiente manera:

```
{
	"title": "Clase Objeto",
	"materia": "POO",
	"temas": "netbeans",
	"clasificacion": "guia",
	"url": "https://res.cloudinary.com/dslkhbrbg/image/upload/v1701497101/Clase_POO_03_u2xy7y.pdf",
	"annioPublicacion": "2022",
	"cicloPublicacion": "02"
}
```

### Usuarios / Auth

`WHO AM I -> baseURL/auth/whoami`

El endpoint Who Am I, nos permite saber que rol tiene un usuario en la base de datos.

```
{
	"role": "admin"
}
```

`LOGIN -> baseURL/auth/login`

El endpoint Login, nos permite realizar una peticion a la API para iniciar sesión en la base de datos.
Abajo se muestra el uso del endpoint y la salida JSON

```
{
	"token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3NTc0MDksImlhdCI6MTcwMTQ2MTQwOX0.CbmhEoimr-WNUX4OnzQYtDtEb-OJLeRPn0V9O5Z6qeY"
}
```

`REGISTER -> baseURL/auth/register`

Este Endpoint permite registrar un nuevo usuario en la base de datos.

```
{
	"message": "User registered"
}
```

`DELETE BY ID -> baseURL/user/id_usuario`

Este endpoint permite eliminar un usuario de la base de datos con respecto a su ID

```
{
	"message": "User deleted"
}
```

`FIND ALL -> baseURL/user/`

Con este método obtenemos todos los usuarios registrados en la base, y con estos toda la informacion que
se ha almacenado de ellos. (para el ejemplo solo se muestra la salida de un usuario)

```
{
	"users": [
		{
			"_id": "656956871375201943d9c02d",
			"username": "Oscar Armando Calderon Arguera",
			"email": "armando.arguera@gmail.com",
			"carrera": "Informatica",
			"hashedPassword": "81cb092fa9bf6c45e2481ea317477aa4b4d3de0e540dde15d6540426ca5dd4988e053a1c4264ecc54e49c96fbd949c18a87186d50de5f8e44ff906cf93c0a102",
			"salt": "c444d9851d45bd05101fbfe38d8ab841",
			"tokens": [
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3NjU3MTAsImlhdCI6MTcwMTQ2OTcxMH0.KutgPgH1P25mnCjZ_hmq7OnQD2xUX6_IJYEU0nCdrwk",
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3ODY3NzksImlhdCI6MTcwMTQ5MDc3OX0.L1v81ppDMWXPcoW4_HYV0SyxA6aUAZS2ELljBc2sYFA",
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3ODUwNjgsImlhdCI6MTcwMTQ4OTA2OH0.g-V1jLtx8CuFhz2_iGNqUicArGsJb3YmBTEaPjVU-aQ",
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3NjI0NTQsImlhdCI6MTcwMTQ2NjQ1NH0.D3r0Y9whoUUp_5Oneiqkbp9TS2nAhewFhgo656pr0MI",
				"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTY5NTY4NzEzNzUyMDE5NDNkOWMwMmQiLCJleHAiOjE3MDI3NjIxNjIsImlhdCI6MTcwMTQ2NjE2Mn0.AD9U4UmA2XmBee9t3a17GyAa_1aCN4F5Qk-w09H_5XU"
			],
			"roles": [
				"user",
				"mod"
			],
			"savedDocuments": [],
			"createdAt": "2023-12-01T03:44:07.160Z",
			"updatedAt": "2023-12-01T22:28:30.202Z",
			"__v": 19
		},

	]
}
```
