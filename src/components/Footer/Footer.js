import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, FooterSection,Column } from '../../globalStyles';



function Footer() {
	return (
		<FooterSection padding="4rem 0 2rem 0" id="contact">
			<FooterWrapper>
				
				<Column align="center" margin="auto  0 0 0" gap="1rem">
						<FooterLogo to="/">
							
							CONTACT
						</FooterLogo>
						<FooterLinkItems>
						Koshy & Co Chartered Accountants<br/>
						No. 27/2957A1 K P Vallon Road<br/>
						Kadavanthra Ernakulam Kochi - 682020<br/>
						Kerala<br/>
						Tel: +91 83308 92299<br/>
						+91 83308 93399<br/>
						</FooterLinkItems>
						
						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.tolink}
									target="_blank"
									aria-label={social.name}
									
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
						</Column>
				
			</FooterWrapper>
		</FooterSection>
	);
}

export default Footer;
