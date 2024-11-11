'use client';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import './pageHome.css';
import React, { useState } from 'react';

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState('es'); // Estado para gestionar el idioma

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const integrantes = [
        {
            nombre: language === 'es' ? 'Michael Quispe Chavez' : 'Michael Quispe Chavez',
            imagen: 'https://github.com/miquidev.png',
            github: 'https://github.com/miquidev',
            linkedin: 'https://www.linkedin.com/in/michael-joseph-quispe-chavez-267185238'
        },
        {
            nombre: language === 'es' ? 'Trilary Quispe Luyo' : 'Trilary Quispe Luyo',
            imagen: 'https://github.com/TrilaryDev.png',
            github: 'https://github.com/TrilaryDev',
            linkedin: 'https://www.linkedin.com/in/trilary-misciel-quispe-luyo-372aa2239'
        },
        {
            nombre: language === 'es' ? 'Omar López García' : 'Omar López García',
            imagen: 'https://github.com/omarlopezgarcia.png',
            github: 'https://github.com/omarlopezgarcia',
            linkedin: 'https://www.linkedin.com/in/omar-lópez-garcía-a88074235'
        }
    ];

    const data = [
        {
            title: language === 'es' ? 'Beneficios' : 'Benefits',
            grid: 'benefits',
            skill: [language === 'es' ? 'Al unirte a nuestra plataforma, disfrutarás de una serie de beneficios, incluyendo la posibilidad de crear campañas personalizadas y colaborar con otros donantes.' : 'By joining our platform, you will enjoy a series of benefits, including the ability to create personalized campaigns and collaborate with other donors.']
        },
        {
            title: language === 'es' ? 'Objetivos' : 'Objectives',
            grid: 'objectives',
            skill: [
                language === 'es' ? 'Nuestro objetivo es facilitar la creación y gestión de campañas de donaciones, permitiendo a los usuarios apoyar diferentes causas y conectar con personas que comparten sus valores y preocupaciones.' : 'Our goal is to facilitate the creation and management of donation campaigns, allowing users to support different causes and connect with people who share their values and concerns.',
                language === 'es' ? 'Impulsar la transparencia y confianza en las campañas de donación, proporcionando información clara y actualizada sobre cómo se utilizan los fondos y el impacto generado en las causas apoyadas.' : 'Promote transparency and trust in donation campaigns by providing clear and up-to-date information on how funds are used and the impact generated on the supported causes.',
                language === 'es' ? 'Fomentar el uso de aplicaciones virtuales como billeteras digitales para simplificar las donaciones y promover la inclusión financiera, permitiendo a los usuarios realizar transacciones de manera rápida, segura y accesible desde cualquier lugar.' : 'Encourage the use of virtual applications like digital wallets to simplify donations and promote financial inclusion, allowing users to make transactions quickly, securely, and accessibly from anywhere.'
            ]
        },
        {
            title: language === 'es' ? 'Descripción' : 'Description',
            grid: 'description',
            skill: [language === 'es' ? 'Este sistema de campañas de donaciones permite a los usuarios crear, gestionar y publicar sus propias campañas. Aquí podrás contribuir a diversas causas, compartir iniciativas y hacer una diferencia en la vida de quienes más lo necesitan, todo en un solo lugar.' : 'This donation campaign system allows users to create, manage, and publish their own campaigns. Here you can contribute to various causes, share initiatives, and make a difference in the lives of those who need it most, all in one place.']
        },
        {
            title: language === 'es' ? 'Características' : 'Features',
            grid: 'characteristics',
            skill: [
                language === 'es' ? 'Crea campañas personalizadas de manera sencilla.' : 'Create personalized campaigns easily.',
                language === 'es' ? 'Gestiona tus campañas con herramientas intuitivas.' : 'Manage your campaigns with intuitive tools.',
                language === 'es' ? 'Vistazo detallado de las campañas en general.' : 'Detailed view of campaigns in general.',
                language === 'es' ? 'Protección sin riesgos en la accesibilidad de los recursos.' : 'Risk-free protection in resource accessibility.'
            ]
        },
    ];

    return (
        <div className={`flex flex-col items-start justify-start min-h-screen px-8 py-8 ${darkMode ? 'bg-[#18181B] text-white' : 'bg-white text-black'}`}>
        {/* Contenedor para el título y los botones de cambio */}
        <div className="flex items-center justify-between w-full mb-6">
            <h1 className="text-4xl font-bold">{language === 'es' ? 'Bienvenido al Inicio' : 'Welcome to the Home Page'}</h1>
            
            {/* Contenedor flex para el selector de idioma y botón de cambio de tema */}
            <div className="flex items-center space-x-4">
                {/* Selector de idioma */}
                <select 
                    onChange={toggleLanguage} 
                    value={language} 
                    className="p-2 rounded-full bg-gray-300 text-black"
                >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
                
                {/* Botón de cambio de tema */}
                <div 
                    onClick={toggleTheme} 
                    className="flex items-center space-x-2 cursor-pointer p-2 bg-gray-300 rounded-full"
                >
                    <span className="text-black">{darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}</span>
                    <span className="text-black">{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
                </div>
            </div>
        </div>
    
            {/* Contenedor de habilidades */}
            <div id="skills" className="skills">
                {data.map((tech, index) => (
                    <div
                        key={index}
                        className="skills__container"
                        style={{ gridArea: tech.grid }}
                    >
                        <div className="skills__header">{tech.title}</div>
                        <ul className="skills__list">
                            {tech.skill.map((skill, skillIndex) => (
                                <li key={skillIndex} className="skills__list-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Contenedor de Integrantes */}
            <div className="w-full p-8 mt-6 -lg shadow-lg" style={{ backgroundColor: darkMode ? '#18181B' : '#F0F0F0' }}>
                <h2 className="text-2xl mb-4">{language === 'es' ? 'Integrantes' : 'Members'}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {integrantes.map((integrante, index) => (
                        <div key={index} className={`p-6 rounded-lg shadow-lg text-center ${darkMode ? 'bg-[#252527] text-white' : 'bg-[#E0E0E0] text-black'}`}>
                            <img
                                src={integrante.imagen}
                                alt={`Foto de ${integrante.nombre}`}
                                className="w-32 h-32 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:scale-105" />
                            <h3 className="text-xl font-bold mb-2">{integrante.nombre}</h3>
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

            {/* Contenedor de Conclusiones */}
            <div className="w-full p-8 mt-6 -lg shadow-lg" style={{ backgroundColor: darkMode ? '#18181B' : '#F0F0F0' }}>
                <h2 className="text-2xl mb-4">{language === 'es' ? 'Conclusiones' : 'Conclusions'}</h2>
                <p className="leading-relaxed overflow-wrap break-words" style={{ fontSize: 20 }}>
                    {language === 'es' ? 'Con este sistema de campañas de donaciones, estamos convencidos de que podemos hacer una diferencia positiva en la sociedad. Al proporcionar una plataforma para la creación, gestión y promoción de campañas, empoderamos tanto a los donantes como a las personas que buscan apoyo para sus causas. Esto puede generar un impacto significativo en las vidas de quienes más lo necesitan.' : 'With this system of donation campaigns, we are convinced that we can make a positive difference in society. By providing a platform for creating, managing and promoting campaigns, we empower both donors and people seeking support for their causes. This can make a significant impact in the lives of those who need it most.'}
                </p>
            </div>
        </div>
    );
};

export default HomePage;
