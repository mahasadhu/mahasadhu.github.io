import Link from 'next/link';
import Header from '../components/header';
import { data } from '../data/data';

const activeMenu = data.menuExperienceName;

export default function PortfolioPage() {
	return (
		<>
			<Header activeMenu={activeMenu} isDarkMode={false} />
			<section className="pb-7 pt-14">
				<div className="container">
					<h1 className="mb-8">experience</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et inventore ducimus dolores facilis ullam, perferendis repudiandae magnam ex
						temporibus natus, saepe at? Inventore sunt numquam quaerat, est quam odio iure.
					</p>
				</div>
			</section>

			{data.experiences.map((value) => (
				<>
					<hr />
					<section key={value.id} className="py-7">
						<div className="container">
							<h2 className="mb-2">{value.companyName}</h2>
							<h3 className="mb-2">{value.position}</h3>
							<p className="mb-4">{value.location}</p>

							<article className="prose">
								<p>{value.desc}</p>
								<ul>
									{value.keyPoints.map((keyPoint, index) => (
										<li key={`keyPoint-${index}`}>{keyPoint}</li>
									))}
								</ul>
							</article>
						</div>
					</section>
				</>
			))}

			<section className="py-7">
				<div className="container prose mx-auto">
					<p className="type-body-large text-center">
						Convinced enough? <Link href="/contact">Let's talk!</Link>
					</p>
				</div>
			</section>
		</>
	);
}
