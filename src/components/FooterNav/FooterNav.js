import React, { useState }from 'react'
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
    FooterRights,FooterWrapper,FooterGrid
} from './FooterNavStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarDataFooter';
import { Row, FooterNavSection,Column } from '../../globalStyles';


const FooterNav = () => {
	const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<FooterNavSection padding="4rem 0 2rem 0" id="contact">
			<FooterWrapper> 
					<NavLogo to="/">
					<NavIcon src="./assets/logoinverse.png" alt="logo" />
					</NavLogo>
					<NavMenu show={show}>
								{data.map((el, index) => (
									<FooterWrapper key={index}>
										<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
											{el.text}
										</NavLinks>
									</FooterWrapper>
								))}
							</NavMenu>
                    <FooterRights>
                        Koshy & Co Chartered Accountants ⓒ 2020-22
					</FooterRights>
			</FooterWrapper>
		</FooterNavSection>
			
	);
};

export default FooterNav;