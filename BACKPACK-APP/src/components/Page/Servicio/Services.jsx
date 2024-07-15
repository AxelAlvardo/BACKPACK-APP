// creating function
export const Services = () => {
    // cuerpo del componente
    return (
        <section className="sector">

            <div className="flex-container">
                <div className="box box-1">

                    <div className="image-container">
                        <img src="../../public/images/campana.png" />
                    </div>

                    <div className="text-container">
                        <h1>Aprende</h1>
                        <p>Entra a un espacio de aprendizaje seguro y lleno de nuevos conocimientos para tu crecimiento académico.</p>
                    </div>

                </div>
                <div className="box box-2">

                    <div className="image-container">
                        <img src="../../public/images/organiza.png" />
                    </div>

                    <div className="text-container">
                        <h1>Organiza</h1>
                        <p>Utiliza tu propio espacio personal para organizar tus documentos, tu material de interés y tus apuntes.</p>
                    </div>

                </div>
                <div className="box box-3">

                    <div className="image-container">
                        <img src="../../public/images/bocina.png" />
                    </div>

                    <div className="text-container">
                        <h1>Comparte</h1>
                        <p>Comparte tus conocimientos con la comunidad y se parte del desarrollo académico de todos con tus habilidades.</p>
                    </div>

                </div>
            </div>


            {/* Imagenes para jugar*/}
            <img src='../../public/images/fondo-services.png' className='fondo' />
            <img src='../../public/images/pelota-rosada.png' className='pink-ball' />
            <img src='../../public/images/pelota-azul-oscura.png' className='dark-blue-ball' />
            <img src='../../public/images/pelota-amarilla.png' className='yellow-ball' />
            <img src='../../public/images/pelota-azul.png' className='blue-ball' />
            <img src='../../public/images/pelota-celeste.png' className='light-blue-ball' />
            <img src='../../public/images/pelota-morada-oscura.png' className='dark-purple-ball' />
            <img src='../../public/images/pelota-magenta.png' className='magent-ball' />
            <img src='../../public/images/pelota-magenta-pequeña.png' className='magent-small-ball' />
            <img src='../../public/images/pinky.png' className='pinky-ball' />

        </section >
    )
};