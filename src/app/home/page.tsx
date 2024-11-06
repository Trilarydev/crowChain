'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {

    const integrantes = [
        {
            nombre: 'Michael Quispe Chavez',
            imagen: 'https://github.com/miquidev.png',
            github: 'https://github.com/miquidev',
            linkedin: 'https://www.linkedin.com/in/michael-joseph-quispe-chavez-267185238'
        },
        {
            nombre: 'Trilary Quispe Luyo',
            imagen: 'https://github.com/TrilaryDev.png',
            github: 'https://github.com/TrilaryDev',
            linkedin: 'https://www.linkedin.com/in/trilary-misciel-quispe-luyo-372aa2239'
        },
        {
            nombre: 'Omar López García',
            imagen: 'https://github.com/omarlopezgarcia.png',
            github: 'https://github.com/omarlopezgarcia',
            linkedin: 'https://www.linkedin.com/in/omar-lópez-garcía-a88074235'
        }
    ];

    return (
        <div className="flex flex-col items-start justify-start min-h-screen px-8 py-8">
            <h1 className="text-white text-4xl font-bold mb-6">Bienvenido al Inicio</h1>

            {/* Contenedor de Descripción */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]"> {/* Color de fondo del contenedor */}
                <h2 className="text-white text-2xl font-semibold mb-4">Descripción</h2>
                <p className="text-[#A3C1C1] leading-relaxed overflow-wrap break-words"> {/* Color del texto del párrafo */}
                    Este sistema de campañas de donaciones permite a los usuarios crear, gestionar y publicar sus propias
                    campañas. Aquí podrás contribuir a diversas causas, compartir iniciativas y hacer una diferencia en la
                    vida de quienes más lo necesitan, todo en un solo lugar.
                </p>
            </div>

            {/* Contenedor de Objetivos */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]"> {/* Color de fondo del contenedor */}
                <h2 className="text-white text-2xl font-semibold mb-4">Objetivos</h2>
                <p className="text-[#A3C1C1] leading-relaxed overflow-wrap break-words"> {/* Color del texto del párrafo */}
                    Nuestro objetivo es facilitar la creación y gestión de campañas de donaciones, permitiendo a los
                    usuarios apoyar diferentes causas y conectar con personas que comparten sus valores y
                    preocupaciones. Queremos empoderar a los donantes para generar un impacto positivo en la sociedad.
                </p>
            </div>

            {/* Contenedor de Beneficios */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]"> {/* Color de fondo del contenedor */}
                <h2 className="text-white text-2xl font-semibold mb-4">Beneficios</h2>
                <p className="text-[#A3C1C1] leading-relaxed overflow-wrap break-words"> {/* Color del texto del párrafo */}
                    Al unirte a nuestra plataforma, disfrutarás de una serie de beneficios, incluyendo la posibilidad de
                    crear campañas personalizadas y colaborar con otros donantes.
                </p>
            </div>

            {/* Contenedor de Características */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]">
                <h2 className="text-white text-2xl font-semibold mb-4">Características</h2>
                <ul className="list-disc list-inside text-[#A3C1C1] leading-relaxed">
                    <li>Crea campañas personalizadas de manera sencilla.</li>
                    <li>Gestiona tus campañas con herramientas intuitivas.</li>
                    <li>Vistazo detallado de las campañas en general.</li>
                    <li>Protección sin riesgos en la accesibilidad de los recursos.</li>
                </ul>
            </div>

            {/* Contenedor de Conclusiones */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]">
                <h2 className="text-white text-2xl font-semibold mb-4">Conclusiones</h2>
                <p className="text-[#A3C1C1] leading-relaxed overflow-wrap break-words">
                    Con este sistema de campañas de donaciones, estamos convencidos de que podemos hacer una
                    diferencia positiva en la sociedad. Al proporcionar una plataforma para la creación, gestión y
                    promoción de campañas, empoderamos tanto a los donantes como a las personas que buscan apoyo
                    para sus causas. Esto puede generar un impacto significativo en las vidas de quienes más lo
                    necesitan.
                </p>
            </div>

            {/* Contenedor de Integrantes */}
            <div className="w-full p-8 mt-6 rounded-lg shadow-lg bg-[#18181B]">
                <h2 className="text-white text-2xl font-semibold mb-4">Integrantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {integrantes.map((integrante, index) => (
                        <div key={index} className="bg-[#252527] p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={integrante.imagen}
                                alt={`Foto de ${integrante.nombre}`}
                                className="w-32 h-32 rounded-full mx-auto mb-4" />
                            <h3 className="text-white text-xl font-bold mb-2">{integrante.nombre}</h3>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={integrante.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white hover:bg-white hover:text-black transition-colors">
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href={integrante.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-white hover:text-[#0077B5] transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HomePage;