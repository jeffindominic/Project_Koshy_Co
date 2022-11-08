import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { Column, Row } from '../../globalStyles';

export const Nav = styled.nav`
	background: #fff;

`;

export const NavbarContainer = styled(Container)`
	display: flex;
	align-items: center;
	height: 8px;
	padding-top: .5%;

	${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-top: 10px;
margin-left: 85px;
`;

export const NavIcon = styled.img`
	margin-right: 5rem;
	width: 6rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 50;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: tranrslate(-100%, 60%);
		font-size: 1.8em;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	margin: 1rem 0 0;

	
`;

export const NavItem = styled.li`
display: flex;
	align-items: center;
	justify-content: center;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled.span`
color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: .1rem;
	height: 100%;

	&:hover {
		color: 	#bcbcbc;
		transition: all 0.3s ease;
	}

	
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;


export const FooterRights = styled.div`
	color: #fff;
	margin-bottom: 5px;
	width: 100%;
	font-size: .7rem;
	text-align: center;
	padding: 1rem 0;
	margin: 1rem 0 0;
`;

export const FooterWrapper = styled.div`
	max-width: 280px;
	margin-left: auto;
	margin-right: auto;
	cursor: pointer;
`;

