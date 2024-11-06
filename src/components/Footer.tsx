const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-4"> {/* py-4 reduce el alto */}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-sm text-center">
                        © 2024 CrowChain. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;