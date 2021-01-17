import Header, {FixedHeader} from './Header';
import React, {FC} from 'react';

import AddressSection from './AddressSection';
import CommunitySection from './CommunitySection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import {Platform} from 'react-native';
import PoweredBySection from './PoweredBySection';
import {RootStackNavigationProps} from '../../navigation/RootStackNavigator';
import StorySection from './StorySection';
import WorkSection from './WorkSection';
import styled from 'styled-components/native';
import {withScreen} from '../../../utils/wrapper';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}): string => theme.background};

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

type Props = {
  navigation: RootStackNavigationProps<'Home'>;
};

const Page: FC<Props> = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <StorySection />
      <CommunitySection />
      <WorkSection />
      <ContactSection />
      <PoweredBySection />
      <AddressSection />
      {Platform.OS === 'web' && <FixedHeader />}
    </Container>
  );
};

export default withScreen(Page);