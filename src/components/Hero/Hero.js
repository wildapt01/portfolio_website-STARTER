import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Patrick Boutier
        <br /> Software engineer
      </SectionTitle>
      <SectionText>
        I am a Software Developer well versed in NodeJS, React, Javascript, CSS
        and HTML among other technologies. At the Literacy Assitance Center, my
        main project is a complete overhaul of ASISTS, our main product...
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
