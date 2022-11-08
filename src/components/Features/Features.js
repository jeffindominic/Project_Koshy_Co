import React from "react";
import { Container, Section } from "../../globalStyles";
import {
  FeatureText,
  FeatureTitle,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
  FeatureTextWrapper,
  FeatureTextBody,
} from "./FeaturesStyles";
import { featuresData } from "../../data/FeaturesData";

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  return (
    <>
      <Section smPadding="50px 10px" position="relative" inverse id="services">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>What We Offer</FeatureTitle>
          </FeatureTextWrapper>
          <FeatureWrapper>
            {featuresData.map((el, index) => (
              <FeatureColumn
                initial={initial}
                animate={animate}
                transition={{ duration: 0.6 + index * 0.1 }}
                key={index}
      
              >
                <FeatureName>{el.name}</FeatureName>
              </FeatureColumn>
            ))}
            
          </FeatureWrapper>
        </Container>
      </Section>

      <Section smPadding="20px 5px" position="relative" inverse id="about">
        <Container>
          <FeatureTextWrapper>
            <FeatureTitle>About Us</FeatureTitle>
          </FeatureTextWrapper>
          <FeatureTextWrapper>
            <FeatureTextBody>
            At Koshy & Co Chartered Accountants, we focus on providing Assurance and Advisory Services 
            to enhance our Clients' opportunities and to mitigate Operational, 
            Financial and Regulatory Risks.
            </FeatureTextBody>
            <FeatureTextBody> <br/></FeatureTextBody>
            <FeatureTextBody>
            We support our Clients in complying with Statutory Audit, and Audit under Fiscal Laws. 
            We help them manage the Regulatory Risks under GST Acts, Income Tax Act, Companies Act, 
            and similar statutes. Our clients stay ahead with a clear understanding of the Financial 
            and Regulatory changes that impact their Business.
            </FeatureTextBody>
            <FeatureTextBody> <br/></FeatureTextBody>
            <FeatureTextBody>
            A zealous commitment to quality, augments the value of services we provide for our Clients. 
            This aids them in extracting greater efficiencies through improved Technology and Business Processes.
            </FeatureTextBody>
            <FeatureTextBody> <br/></FeatureTextBody>
            <FeatureTextBody>
            We strive to ensure that all our Services are undertaken in an environment of the utmost level of
            Objectivity, Independence, Integrity, and Ethical standards.
            </FeatureTextBody>
          </FeatureTextWrapper>
        </Container>
      </Section>
    </>
  );
};

export default Features;
