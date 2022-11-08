import React from 'react';
import {Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, HeroImg} from './HeroStyles';


const Hero = () => {
	return (
		<HeroSection>
			<HeroImg src="./assets/bg_1.png" />
			<Container marginTop = '75'>
				<MainHeading></MainHeading>
				<HeroText>
					
				</HeroText>
			</Container>
		</HeroSection>
	);
};

export default Hero;
