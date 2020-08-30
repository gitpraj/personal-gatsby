import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/ui/Icon';

import * as Styled from './styles';

const InfoBlockDesc = ({ icon, title, content, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

InfoBlockDesc.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired
};

export default InfoBlockDesc;
