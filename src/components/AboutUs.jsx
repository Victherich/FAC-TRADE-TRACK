
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaLeaf, FaSolarPanel, FaTruck, FaChargingStation } from 'react-icons/fa';
// import car1 from '../Images/car1.jpeg';
// import car2 from '../Images/car2.jpeg';
// import car3 from '../Images/car3.jpeg';

// // Animations
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideBackground = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -200% 0; }
// `;

// // Styled Components
// const AboutContainer = styled.div`
//   animation: ${fadeIn} 1s ease;
// `;

// const HeroSection = styled.section`
//   height: 50vh;
//   background: url(${car1}) no-repeat center center/cover;
//   animation: ${slideBackground} 15s linear infinite;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #fff;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   text-align: center;
//   padding: 1rem;
// `;

// const Section = styled.section`
//   padding: 3rem 2rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
//   align-items: center;

//   @media (min-width: 768px) {
//     flex-wrap: nowrap;
//   }
// `;

// const ContentColumn = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
// `;

// const ImageColumn = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   animation: ${fadeIn} 1.5s ease;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #333;
//   animation: ${fadeIn} 1.2s ease;
// `;

// const Text = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.8;
//   color: #555;
//   animation: ${fadeIn} 1.4s ease;
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin: 1rem 0;
//   animation: ${fadeIn} 1.6s ease;

//   svg {
//     font-size: 2rem;
//     color: #fbbf24;
//   }
// `;

// const Slideshow = styled.div`
//   display: flex;
//   overflow-x: auto;
//   gap: 1rem;
//   padding: 1rem;
//   animation: ${fadeIn} 1.8s ease;

//   img {
//     width: 300px;
//     height: auto;
//     border-radius: 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
//     transition: transform 0.3s;

//     &:hover {
//       transform: scale(1.05);
//     }
//   }
// `;

// // About Component
// const AboutUs = () => {
//   return (
//     <AboutContainer>
//       <HeroSection>
//         <HeroTitle>About FAC Trade Track Ltd.</HeroTitle>
//       </HeroSection>
//       <Section>
//         <ContentColumn>
//           <SectionTitle>Who We Are</SectionTitle>
//           <Text>
//             FAC Trade Track Ltd. is a trailblazer in Africa’s journey toward sustainable development, redefining the future of transportation, infrastructure, and energy solutions across the continent. Rooted in innovation and sustainability, we are committed to delivering world-class services and technologies that elevate industries, empower communities, and drive economic transformation.
//           </Text>
//           <IconWrapper>
//             <FaLeaf />
//             <FaSolarPanel />
//             <FaTruck />
//             <FaChargingStation />
//           </IconWrapper>
//         </ContentColumn>
//         <ImageColumn>
//           <img src={car2} alt="Sustainable Development" />
//         </ImageColumn>
//       </Section>
//       <Section>
//         <ImageColumn>
//           <img src={car3} alt="Global Partnerships" />
//         </ImageColumn>
//         <ContentColumn>
//           <SectionTitle>Our Vision</SectionTitle>
//           <Text>
//             To pioneer transformative infrastructure, transportation, and clean energy projects that position Africa as a leader in sustainable development, fostering prosperity for future generations.
//           </Text>
//         </ContentColumn>
//       </Section>
//       <Slideshow>
//         <img src={car1} alt="Car Slide 1" />
//         <img src={car2} alt="Car Slide 2" />
//         <img src={car3} alt="Car Slide 3" />
//       </Slideshow>
//     </AboutContainer>
//   );
// };

// export default AboutUs;










import React, { useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLeaf, FaSolarPanel, FaTruck, FaChargingStation } from 'react-icons/fa';
import car11 from '../Images/car11.jpg';
import car12 from '../Images/car12.jpg';
import car13 from '../Images/car13.jpg';
import car14 from '../Images/car14.jpg';
import car1 from '../Images/car1.jpeg'
import { Context } from './Context'; // Assuming you have a theme context
import whoWeAre from '../Images/who we are.png'
import strategic from '../Images/strategic.png'
import scope from '../Images/scope.png'


// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideBackground = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -200% 0; }
`;

// Styled Components
const AboutContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(180deg, #1e293b, #0f172a)'
      : 'linear-gradient(180deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  padding: 2rem;
`;

const HeroSection = styled.section`
  height: 50vh;
  background: url(${car1}) no-repeat center center/cover;
  animation: ${slideBackground} 15s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

const Section = styled.section`
  padding: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const ContentColumn = styled.div`

  min-width: 300px;
  max-width: 600px;
`;

const ImageColumn = styled.div`
  animation: ${fadeIn} 1.5s ease;
`;

const Img = styled.img`

`

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  animation: ${fadeIn} 1.2s ease;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => (theme === 'dark' ? '#e2e8f0' : '#555')};
  animation: ${fadeIn} 1.4s ease;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  animation: ${fadeIn} 1.6s ease;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => (theme === 'dark' ? '#fbbf24' : '#FF7133')};
  }
`;

const Slideshow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  animation: ${fadeIn} 1.8s ease;

  img {
    width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

// About Component
const AboutUs = () => {
  const { theme } = useContext(Context); // Access theme context


    

  return (
    <AboutContainer  theme={theme === true ? 'light' : 'dark'}>
      <HeroSection>
        <HeroTitle>About FAC Trade Track Ltd.</HeroTitle>
      </HeroSection>
      <Section>
        <ContentColumn>
          <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Who We Are</SectionTitle>
          <Text  theme={theme === true ? 'light' : 'dark'}>
            FAC Trade Track Ltd. is a trailblazer in Africa’s journey toward sustainable development, redefining the
            future of transportation, infrastructure, and energy solutions across the continent.
          </Text>
          <IconWrapper  theme={theme === true ? 'light' : 'dark'}>
            <FaLeaf />
            <FaSolarPanel />
            <FaTruck />
            <FaChargingStation />
          </IconWrapper>
        </ContentColumn>
        <ImageColumn>
          <Img src={whoWeAre} alt="Sustainable Development" />
        </ImageColumn>
      </Section>
      <Section>
        <ContentColumn>
          <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Strategic Initiatives</SectionTitle>
          <Text  theme={theme === true ? 'light' : 'dark'}>
            <b>Renewable Energy Leadership:</b> FAC Trade Track Ltd. is championing renewable energy projects across
            Africa, focusing on solar, wind, and CNG solutions to create cleaner cities.
          </Text>
          <Text  theme={theme === true ? 'light' : 'dark'}>
            <b>Advanced Mobility Solutions:</b> From fuel-powered to electric and hybrid vehicles, we address the full
            spectrum of mobility needs, ensuring the seamless movement of people and goods.
          </Text>
          <Text  theme={theme === true ? 'light' : 'dark'}>
            <b>Economic Empowerment:</b> Through investments in natural rubber plantations and manufacturing plants, we
            empower local communities.
          </Text>
        </ContentColumn>
        <ImageColumn>
          <Img src={strategic} alt="Renewable Energy" />
        </ImageColumn>
      </Section>
      <Section>
        <ImageColumn>
          <Img src={scope} alt="Pan-African Scope" />
        </ImageColumn>
        <ContentColumn>
          <SectionTitle  theme={theme === true ? 'light' : 'dark'}>Our Pan-African Scope</SectionTitle>
          <Text  theme={theme === true ? 'light' : 'dark'}>
            Although headquartered in Nigeria, our operations span the entire African continent, delivering scalable
            solutions tailored to diverse regional needs.
          </Text>
        </ContentColumn>
      </Section>
      <Slideshow>
        <img src={car11} alt="Car Slide 1" />
        <img src={car12} alt="Car Slide 2" />
        <img src={car13} alt="Car Slide 3" />
        <img src={car14} alt="Car Slide 3" />
      </Slideshow>
    </AboutContainer>
  );
};

export default AboutUs;
