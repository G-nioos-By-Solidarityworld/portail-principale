import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import img2 from "./assets/img2.jpg";
import innov from "./assets/innov.jpg";
import img1 from "./assets/img1.jpg";

export default function App() {
	return (
		<main className="">
			<div className="md:w-[90%] m-auto px-2 md:px-0">
				<Header />
				
				<div className="md:flex gap-10">
					<div className="border mt-8 bg-white w-full self-start">
						<img src={img1} alt="" />
						<div className="flex flex-col gap-4 p-4">
							<p className="font-bold dark:text-gray-800">Ma ville : Kinshasa</p>
							<p className="dark:text-gray-800">
								Toutes les informations de ma ville (les initiatives citoyennes,
								les événements, des chiffres utiles, etc.)
							</p>
							<button className="bg-blue-700 py-2 px-4 mr-auto text-white rounded-sm">
								En savoir plus
							</button>
						</div>
					</div>

					<div className="flex flex-col w-full self-start">
						<div className="border mt-8 w-full  bg-white">
							<div
								style={{ backgroundImage: `url(${img2})` }}
								className="bg-gray-200 w-full h-[180px] bg-cover"
							/>

							<div className="flex flex-col gap-4 p-4">
								<p className="font-bold dark:text-gray-800">Services/produits du monde entier</p>
								<button className="bg-blue-700 py-2 px-4 mr-auto text-white rounded-sm">
									Découvrir
								</button>
							</div>
						</div>

						<div className="border mt-6 w-full bg-white">
							<div className="flex flex-col gap-4 p-4">
								<p className="font-bold dark:text-gray-800">Petites annonces internationales</p>
								<p className="dark:text-gray-800">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Deserunt molestias doloribus accusamus hic! Laboriosam.
								</p>
								<button className="bg-blue-700 py-2 px-4 mr-auto text-white rounded-sm">
									Découvrir
								</button>
							</div>
						</div>
					</div>

					<div className="border mt-8 w-full bg-white self-start">
						<div className="flex flex-col gap-4 p-4">
							<p className="font-medium dark:text-gray-800">
								Les innovations qui vont révolutionner notre quotidien
							</p>
							<p className="font-medium dark:text-gray-800">
								Les meilleures solutions émergentes à votre service
							</p>
						</div>
						<img src={innov} alt="" />
						<div className="px-4">
							<button className="bg-blue-700 py-2 px-4 my-4 w-full text-white rounded-sm">
								Découvrir
							</button>
						</div>
					</div>
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Actualité</p>
					<div className="text-gray-400 px-3 text-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 px-3 py-1 md:py-0">
							<p>Politiques</p>
							<p>Faits divers</p>
							<p>Culture</p>
							<p>Insolite</p>
							<p>Science</p>
						</div>

					</div>
				</div>

				<div className="flex flex-wrap mb-8">
					<div className="flex w-full md:w-1/2  h-[250px]">
						<img src={img1} className="w-full" alt="" />
					</div>

					<div className="pl-0 md:pl-8 grid self-start grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4  w-full md:w-1/2">
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
					</div>
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Divertissement</p>
					<div className="text-gray-400 px-3 tetx-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 py-1 md:py-0">	
							<p>Célébrité</p>
							<p>Cinema</p>
							<p>Tv</p>
							<p>Musique</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap mb-8">
					<div className="flex w-full md:w-1/2  h-[250px]">
						<img src={img1} className="w-full" alt="" />
					</div>

					<div className="pl-0 md:pl-8 grid self-start grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4  w-full md:w-1/2">
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
					</div>
				</div>

				<div className="bg-white py-4 font-bold underline text-blue-500 text-center justify-center overflow-x-auto whitespace-nowrap">
					<div className="flex gap-4 px-3">
						<p>Programme TV</p>
						<p>Horoscope du jour</p>
						<p>Sondages</p>
						<p>Jeux en ligne</p>
						<p>Coup de coeur</p>
						<p>Connaissances</p>
					</div>	
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Finance</p>
					<div className="text-gray-400 text-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 md:py-0">	
							<p>Finance personelle</p>
							<p>Bourse</p>
							<p>Outil</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap mb-8">
					<div className="flex w-full md:w-1/2  h-[250px]">
						<img src={img1} className="w-full" alt="" />
					</div>

					<div className="pl-0 md:pl-8 grid self-start grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4  w-full md:w-1/2">
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
					</div>
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Sport</p>
					<div className="text-gray-400 text-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 py-1 md:py-0">	
							<p>Football</p>
							<p>Rugby</p>
							<p>Courses auto et moto</p>
							<p>Autres</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap mb-8">
					<div className="flex w-full md:w-1/2  h-[250px]">
						<img src={img1} className="w-full" alt="" />
					</div>

					<div className="pl-0 md:pl-8 grid self-start grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4  w-full md:w-1/2">
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
					</div>
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Locomotion</p>
					<div className="text-gray-400 text-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 md:py-0">	
							<p>Auto</p>
							<p>Moto</p>
							<p>Vélo</p>
							<p>Autres</p>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap mb-8">
					<div className="flex w-full md:w-1/2  h-[250px]">
						<img src={img1} className="w-full" alt="" />
					</div>

					<div className="pl-0 md:pl-8 grid self-start grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4  w-full md:w-1/2">
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
						<BuildGridItem />
					</div>
				</div>

				<div className="flex gap-4 items-end my-8">
					<p className="text-blue-700 font-medium  text-2xl">Videos</p>
					<div className="text-gray-400 text-sm md:text-xs font-bold mb-[4px] overflow-x-auto whitespace-nowrap">
						<div className="flex gap-4 md:py-0">	
							<p>Actualités</p>
							<p>Divertissements</p>
							<p>Sports</p>
							<p>Autres</p>
						</div>
					</div>
				</div>

				<div className="md:grid md:grid-cols-3 justify-between gap-5">
					<div
						className="border border-gray-200 rounded"
						style={{
							backgroundImage: "url('unsplash-photo-1.jpg')",
							minHeight: "300px"
						}}>
						<div className="h-full w-full text-gray-800">
							<iframe
								src="https://www.youtube.com/embed/fCL3SGCOvXE"
								frameBorder="0"
								allowFullScreen
								title="YouTube video"
								className="w-full h-48 mb-4 rounded-t"
							></iframe>
							<div className="text-center">
							<p className="pt-2">This card has even longer content than the first to show that equal height action.</p>
							<p className="mt-5 text-gray-500 font-medium"><small>Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>

					<div className="border border-gray-200 rounded" 
						style={{ 
							backgroundImage: "url('unsplash-photo-1.jpg')", 
							minHeight: "300px"  
						}}>
						<div className="h-full w-full text-gray-800">
							<iframe
								src="https://www.youtube.com/embed/aOsJrRi1wfA"
								frameBorder="0"
								allowFullScreen
								title="YouTube video"
								className="w-full h-48 mb-4 rounded-t"
							></iframe>
							<div className="flex flex-col h-full text-center">
								<p className="pt-2">This card has even longer content than the first to show that equal height action.</p>
								<p className="mt-5 text-gray-500 font-medium"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>

					<div className="border border-gray-200 rounded" 
						style={{ 
							backgroundImage: "url('unsplash-photo-1.jpg')", 
							minHeight: "300px" 
						}}>
						<div className="h-full w-full text-gray-800">
							<iframe
								src="https://www.youtube.com/embed/hmcwbun5tcU"
								frameBorder="0"
								allowFullScreen
								title="YouTube video"
								className="w-full h-48 mb-4 rounded-t"
							></iframe>
							<div className="flex flex-col h-full text-center">
								<p className="pt-2">This card has even longer content than the first to show that equal height action.</p>
								<p className="mt-5 text-gray-500 font-medium"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>

			</div>
			<Footer/>
		</main>
		
	);
}

const BuildGridItem = () => {
	return (
		<div className="bg-white border  border-gray-300 rounded-sm">
			<div className="flex p-4 w-[250px] justify-center">
				<div className="h-[60px] w-[60px] bg-purple-500 mr-4 shrink-0">
					<img src={img2} className="w-full h-full" alt="" />
				</div>
				<div className="flex flex-col space-y-1">
					<p className="text-xs dark:text-gray-800">Lorem ipsum dolororem ipsum dolor</p>
					<p className="text-blue-500 font-bold underline text-sm">
						Go some where
					</p>
				</div>
			</div>
		</div>
	);
};
