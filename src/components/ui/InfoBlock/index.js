import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/ui/Icon';

import * as Styled from './styles';

const InfoBlock = ({ icon, title, href, center }) => (
  <Styled.InfoBlock center={center}>
    <Styled.Icon>
      <Icon icon={icon} />
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      {/* <Styled.Title>{title}</Styled.Title> */}
      {/* <Styled.Content>{content}</Styled.Content> */}
      <Styled.Link
              href={href}
              rel="noreferrer noopener"
              target="_blank"
            >
              {title}
      </Styled.Link>
    </Styled.Wrapper>
  </Styled.InfoBlock>
);

InfoBlock.propTypes = {
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  href: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired
};

export default InfoBlock;
