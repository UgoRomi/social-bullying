import React from 'react';
import PropTypes from "prop-types";

// TODO: Add animation
const LibrariesDialog = (props) => {
	if (!props.dialogIsOpen)
		return <></>
	return (
		<div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 w-100 h-100 flex-center-parent" onClick={() => props.setDialogIsOpen(false)} aria-disabled>
			<div className="bg-white p-7 rounded w-5/6 text-lg sm:w-1/2 lg:w-2/5 xl:w-2/6 2xl:w-1/6" onClick={(e) => {
				e.stopPropagation()
			}}>
				<h2 className="text-2xl">Librerie di terze parti usate</h2>
				<ul className="mt-8">
					<li>
						Struttura: <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="underline">React</a>
					</li>
					<li>
						Icone: <a href="https://phosphoricons.com/" target="_blank" rel="noreferrer" className="underline">Phosphoricons</a>
					</li>
					<li>
						Grafici: <a href="https://recharts.org/" target="_blank" rel="noreferrer" className="underline">Recharts</a>
					</li>
					<li>
						Stile: <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline">TailwindCSS</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

LibrariesDialog.propTypes = {
	dialogIsOpen: PropTypes.bool.isRequired,
	setDialogIsOpen: PropTypes.func.isRequired
};
export default LibrariesDialog;