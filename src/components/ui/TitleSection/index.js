import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const TitleSection = ({ center, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
    <Styled.Title center={center}>{subtitle}</Styled.Title>
    <Styled.TitleSubSection center={center}>
      <Styled.Separator center={center} />
      <Styled.Separator2 center={center}/>
    </Styled.TitleSubSection>
  </Styled.TitleSection>
);

TitleSection.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleSection;
