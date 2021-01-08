import React from 'react';
import {FacebookLogo, InstagramLogo} from "phosphor-react";
import PropTypes from "prop-types";

const Footer = (props) => {
	return (
		<footer className="bg-purple-400 p-2 text-white h-10 flex items-center text-sm w-full">
			<span aria-label="author">
				Made By <a className="underline" href="https://ugorovomi.dev" target="_blank" rel="noreferrer">Ugo Romi</a> using <span
				className="underline cursor-pointer" onClick={() => props.setDialogIsOpen(true)}>these libraries</span>
			</span>
			<span aria-label="socials" className="ml-auto flex">
				<a href="https://www.instagram.com/social_bullying/" aria-label="instagram" target="_blank" rel="noreferrer" className="pr-1"><InstagramLogo
					size="24px"/></a>
				<a href="https://www.facebook.com/socialbullyingunisi/" aria-label="facebook" target="_blank" rel="noreferrer"><FacebookLogo size="24px"/></a></span>
		</footer>
	);
};

Footer.propTypes = {
	setDialogIsOpen: PropTypes.func.isRequired
};

export default Footer;