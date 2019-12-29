import { sanity } from "../util/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import Favorites from "../components/favorites.js";
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanity);

function urlFor(source) {
	return builder.image(source);
}

const Home = ({ favorite }) => {
	const [viewModal, setViewModal] = useState(false);

	function somethingElse() {
		console.log("poof");
	}
	return (
		<>
			<Favorites favorite={favorite} />
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
