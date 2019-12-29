import React, { useEffect, useState } from "react";

const Modal = () => {
	const [viewModal, setViewModal] = useState(theModal);

	return (
		<div>
			<div className="modal-wrapper" onClick={() => datView()}>
				<div className="modal">
					test
					<div className="cstm-btn">CLICK THIS</div>
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
					.modal-wrapper {
						width: 70vw;
						height: 80vh;
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
						width: 100%;
						height: 100%;
					}
				`}
			</style>
		</div>
	);
};

export default Modal;

<></>;
