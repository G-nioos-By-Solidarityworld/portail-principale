
import logo from "../assets/logo.png";

export default function Footer() {

    return (
        <footer className="border-t border-gray-200 mt-14">
            <div className="md:w-[90%] mx-auto  px-5 py-5">
                <div className="md:flex justify-between items-stretch mt-10">
                    <div className="mt-5 md:w-2/4">
                        <h3 className="font-bold">Les plus</h3>
                        <div className="mt-5 text-gray-500">
                            <div><a href="" className="underline">Petites annonces gratuites</a></div>
                            <div><a href="" className="underline">Sondages</a></div>
                            <div><a href="" className="underline">Revue du web</a></div>
                            <div><a href="" className="underline">Podcasts audio</a></div>
                            <div><a href="" className="underline">Abonnement mensuel au portail</a></div>
                            <div><a href="" className="underline">Sponsoring</a></div>
                            <div><a href="" className="underline">En page d’accueil</a></div>
                        </div>
                    </div>

                    <div className="mt-5 md:w-2/4">
                        <h3 className="font-bold">A propos de Nous</h3>
                        <div className="mt-5  text-gray-500">
                            <div><a href="" className="underline">Notre vision</a></div>
                            <div><a href="" className="underline">L’équipe</a></div>
                            <div><a href="" className="underline">Partenaires</a></div>
                            <div><a href="" className="underline">Médias</a></div>
                            <div><a href="" className="underline">Nous rejoindre</a></div>
                        </div>
                    </div>
                </div>


                <div className="md:flex justify-between items-stretch mt-10">
                    <div className="mt-5 md:w-2/4">
                        <h3 className="font-bold">Les portails du groupe</h3>
                        <div className="mt-5 text-gray-500">
                            <div><a href="" className="underline">Europe</a></div>
                            <div><a href="" className="underline">Afrique</a></div>
                            <div><a href="" className="underline">Amérique</a></div>
                            <div><a href="" className="underline">Asie</a></div>
                        </div>
                    </div>

                    <div className="mt-5 md:w-2/4">
                        <h3 className="font-bold">Newsletter</h3>
                        <div className="mt-5 flex gap-5 text-gray-500">
                            <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded"/>
                            <button className="text-white bg-blue-700 rounded px-2 py-2 w-44">S'abonner</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="bg-[#D3D3D3]">
                <div className="md:w-[90%] mx-auto text-gray-800 py-3 px-5 grid grid-cols-2 justify-between">
                    <div className="h-[100px] w-[110px] mb-2">
                        <img src={logo} alt="" />
                    </div>

                    <div className="md:flex md:jusstify-between text-[0.63rem] font-bold mt-10 gap-2">
                        <div><a href="">G.NIOOS 2021</a></div>
                        <div><a href="">Support membres</a></div>
                        <div><a href="">Mentions légales</a></div>
                        <div><a href="">Conditions d'utilisations</a></div>
                        <div><a href="">G.nioos recrute</a></div>
                        <div><a href="">Données personnelles</a></div>
                    </div>
                </div>
            </div>

        </footer>
    );
}