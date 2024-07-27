import { Metadata } from 'next';
import Header from '../components/header';
import { data } from '../data/data';

const activeMenu = data.menuContactName;

export const metadata: Metadata = {
	title: 'Contact',
};

export default function ContactPage() {
	return (
		<>
			<Header activeMenu={activeMenu} isDarkMode={false} />
			<section className="pt-14">
				<div className="container mx-auto">
					<h1 className="mb-8">let's talk</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolorem nesciunt pariatur sit voluptatum id? Sequi iure quaerat odio
						aspernatur ex ratione vel quam, voluptas aliquid molestias, reiciendis, exercitationem soluta.
					</p>
					<div className="my-8 grid w-full grid-cols-2 gap-4">
						{data.contactItems.map((value) => (
							<div key={value.id} className="group flex w-full">
								<a
									href={value.url}
									target="_blank"
									className="flex w-full items-center justify-between rounded-xl border border-primary-dark bg-background-white px-3 py-4 group-hover:border-primary-base group-hover:bg-gradient-to-r group-hover:from-gradient-start-why-us-item group-hover:to-gradient-to-why-us-item group-hover:text-text-white"
								>
									<div className="flex items-center space-x-3">
										<div className="flex size-16 items-center justify-center rounded-full bg-why-us-item-icon-bg-active lg:size-[64px]">
											<img src={value.icon} className="p-4" alt="" />
										</div>
										<div className="flex flex-col">
											<p className="type-title">{value.name}</p>
											<p className="type-body-medium">{value.desc}</p>
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt illum ea, laboriosam quidem voluptatem, quibusdam possimus
						iusto praesentium quas vel, molestias autem accusantium. Similique quo aut ipsum excepturi nesciunt?
					</p>
				</div>
			</section>
		</>
	);
}
