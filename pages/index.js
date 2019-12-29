import { sanity } from "../util/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";

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
			<div className="favorites">
				{favorite.map((data, index) => {
					return (
						<a className="favorite" href={data.link}>
							<img
								src={urlFor(data.image)
									.width(200)
									.url()}
							/>
							<p key={data.title}>{data.title}</p>
						</a>
					);
				})}
				<div className="favorite add-new" onClick={() => setViewModal(v => !v)}>
					<p>+</p>
				</div>
			</div>
			{viewModal != false ? (
				<>
					<div className="modal-wrapper" onClick={() => setViewModal(v => !v)}>
						<div className="modal">
							test
							<div
								className="cstm-btn"
								onClick={e => {
									e.stopPropagation();
									somethingElse();
								}}
							>
								CLICK THIS
							</div>
						</div>
					</div>
				</>
			) : null}
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

					.add-new {
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.modal-wrapper {
						width: 100vw;
						height: 100vh;
						position: absolute;
						left: 0;
						top: 0;
						background: rgba(0, 0, 0, 0.3);
						z-index: 99999;
						display: flex;
						justify-content: Center;
						align-items: center;
					}
					.modal {
						background: #fff;
						left: 0;
						right: 0;
						margin: auto;
						display: block;
						position: relative;
						width: 70vw;
						height: 80vh;
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
