import Image from 'next/image';
import Header from './components/header';
import { data } from './data/data';
import Link from 'next/link';
import { plus_jakarta_sans } from './fonts';
import avatar from './assets/images/avatar.jpeg';

const activeMenu = data.menuHomeName;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Header activeMenu={activeMenu} isDarkMode={false} />
			<section className="pt-14">
				<div className="container mx-auto">
					<div className="flex flex-row">
						<div className="basis-1/5">
							<Image src={avatar} alt="mahasadhu" className="rounded-full" />
						</div>
						<h1 className="ml-8 basis-4/5 text-text-black">
							hi! <br />
							I'm I Gede Agus <span className="text-primary-base">Maha</span>sadhu
						</h1>
					</div>
					<p className="type-body-large mb-4 mt-5">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum mollitia aliquam maxime, consequatur odio repellat beatae nemo sit?
					</p>
				</div>
			</section>

			<section className="py-6">
				<div className="">
					<h2 className="">Why me?</h2>
					<p className="type-body-large mb-4 mt-5">
						Having professional experience from 2016, I have experiences in several programming language and development kit. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. Sunt ad, excepturi itaque laborum assumenda dolorem adipisci corrupti, officiis explicabo autem,
						incidunt qui quae aspernatur id illo. At expedita sunt nobis.
					</p>

					<div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
						{data.expertises.map((value) => (
							<div key={value.id} className="group col-span-1 flex flex-col">
								<div className="h-full rounded-xl bg-why-us-item-dark p-4 text-text-white group-hover:bg-gradient-to-r group-hover:from-gradient-start-why-us-item group-hover:to-gradient-to-why-us-item">
									<div className="flex size-[40px] items-center justify-center rounded-full bg-why-us-item-icon-bg group-hover:bg-why-us-item-icon-bg-active lg:size-[64px]">
										<svg
											width="26"
											height="24"
											viewBox="0 0 26 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="size-[18px] fill-primary-base group-hover:fill-text-white lg:size-[30px]"
										>
											<path d="M20.3986 14.9C20.0748 15.2137 19.9261 15.6675 19.9998 16.1125L21.1111 22.2625C21.2048 22.7837 20.9848 23.3113 20.5486 23.6125C20.1211 23.925 19.5523 23.9625 19.0861 23.7125L13.5498 20.825C13.3573 20.7225 13.1436 20.6675 12.9248 20.6613H12.5861C12.4686 20.6788 12.3536 20.7162 12.2486 20.7737L6.71109 23.675C6.43734 23.8125 6.12734 23.8613 5.82359 23.8125C5.08359 23.6725 4.58984 22.9675 4.71109 22.2238L5.82359 16.0737C5.89734 15.625 5.74859 15.1687 5.42484 14.85L0.911095 10.475C0.533595 10.1087 0.402345 9.55875 0.574845 9.0625C0.742345 8.5675 1.16984 8.20625 1.68609 8.125L7.89859 7.22375C8.37109 7.175 8.78609 6.8875 8.99859 6.4625L11.7361 0.85C11.8011 0.725 11.8848 0.61 11.9861 0.5125L12.0986 0.425C12.1573 0.36 12.2248 0.30625 12.2998 0.2625L12.4361 0.2125L12.6486 0.125H13.1748C13.6448 0.17375 14.0586 0.455 14.2748 0.875L17.0486 6.4625C17.2486 6.87125 17.6373 7.155 18.0861 7.22375L24.2986 8.125C24.8236 8.2 25.2623 8.5625 25.4361 9.0625C25.5998 9.56375 25.4586 10.1137 25.0736 10.475L20.3986 14.9Z" />
										</svg>
									</div>
									<p className="type-title mt-4">{value.title}</p>
									<p className="type-body-medium">{value.subtitle}</p>
									<p className="type-body-medium mt-4">{value.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat itaque illum enim eius laboriosam corporis aut in sapiente. Molestias
					commodi, debitis obcaecati ad praesentium dolore culpa voluptatum reprehenderit perferendis.
				</p>
			</section>

			<section className="py-7">
				<div className="container prose mx-auto">
					<p className="type-body-large text-center">
						You still here? Let's see my work <Link href="/experience">experience</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
