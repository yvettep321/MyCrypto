import React from 'react';

import styled from 'styled-components';

import { Box, Icon, Text } from '@components';
import { useAnalytics } from '@services/Analytics';
import { SPACING } from '@theme';
import { IExternalLink } from '@types';
import { openLink } from '@utils';

const SBox = styled(Box)`
  &:hover {
    transform: scale(1.05);
    transition: all 300ms;
  }
  transition: all 300ms;
`;

export const ExternalLink = ({ item }: { item: IExternalLink }) => {
  const { track } = useAnalytics();

  const handleClick = () => {
    openLink(item.link);
    track({ name: 'Link clicked', params: { url: item.link } });
  };

  return (
    <SBox variant="rowAlign" onClick={handleClick} my={SPACING.SM}>
      <Icon type={item.icon} width={{ _: '20px', sm: '2vh', xxl: '20px' }} />
      <Text
        ml={{ _: '15px', sm: '1.5vh', xxl: '15px' }}
        color="BLUE_DARK_SLATE"
        mb={0}
        fontSize={{ _: '16px', sm: '1.6vh', xxl: '16px' }}
      >
        {item.title}
      </Text>
    </SBox>
  );
};
