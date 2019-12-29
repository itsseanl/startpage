import { sanity } from "../util/sanity.js";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanity);

function urlFor(source) {
	return builder.image(source);
}

const Home = ({ favorite }) => {
	return (
		<>
			<div className="favorites">
				{favorite.map((data, index) => {
					return (
						<a className="favorite" href={data.link}>
							<img
								src={urlFor(data.image)
									.width(200)
									.height(100)
									.url()}
							/>
							<p key={data.title}>{data.title}</p>
						</a>
					);
				})}
				<div className="favorite addNew">
					<p>+</p>
				</div>
			</div>
			<style jsx>
				{`
					* {
						box-sizing: border-box;
					}
					html,
					body {
						width: 100%;
						margin: 0;
						padding: 0;
					}
					.favorites {
						display: grid;
						grid-template-columns: repeat(4, 1fr);
						grid-column-gap: 1em;
					}
					.favorite {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						box-shadow: 0px 2px 13px 2px rgba(0, 0, 0, 0.3);
						text-align: left;
						width: 100%;
						padding: 5px 10px;
						margin: 15px;
						cursor: pointer;
						text-decoration: none;
						color: #000;
					}

					.addNew {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}
			</style>
		</>
	);
};

Home.getInitialProps = async props => {
	const q = `
      *[_type == 'favorite']`;
	const favorite = await sanity.fetch(q);
	return {
		favorite
	};
};

export default Home;
