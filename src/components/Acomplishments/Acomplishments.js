import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { data } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personnal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, indx) => (
        <Box key={indx}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
