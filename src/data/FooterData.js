import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		tolink: 'https://www.facebook.com/'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		tolink: 'https://www.instagram.com/koshy.n.co/'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		tolink: 'https://www.youtube.com/'
	},
	{
		name: 'Gmail',
		icon: iconStyle(MdEmail),
		tolink: 'mailto:mail@koshyandco.com?'
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];
