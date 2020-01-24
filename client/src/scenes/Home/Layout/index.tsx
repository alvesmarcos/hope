import React from 'react';

import {
  StatusBar,
  Flex,
  Scroll,
  CardTip,
  CardCuriosity,
  CardStatus,
  CardCheckin,
  CardQuote,
  CardExpert,
  CardFaq,
  CardArticle,
  CardTestimony,
  Header,
  CardDocumentary,
} from '~/components';

const Layout: React.FC = () => {
  return (
    <Scroll p="medium">
      <Flex justifyContent="space-around">
        <StatusBar variant="secondary" />
        <Header name="Marcos Henrique" />
        <CardStatus days={23} hours={35} cash={154} />
        <CardCuriosity description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        <CardTip
          title="Dica #1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <CardCheckin />
        <CardQuote description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <CardExpert
          name="João Paulo de Lima"
          tip="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
        <CardFaq
          question="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry"
        />
        <CardArticle
          imageUri="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/11/25/3190220.jpg"
          title="A jornada de superação do médico americano que se viciou em opioides"
        />
        <CardTestimony
          imageUri="https://e0.365dm.com/19/12/768x432/skysports-tom-brady-new-england-patriots_4863145.jpg"
          title="História de Sucesso #27"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry"
        />
        <CardDocumentary
          imageUri="https://i.ytimg.com/vi/KZ2V3_fa6Ys/maxresdefault.jpg"
          title="Crack - Documentário"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry"
        />
      </Flex>
    </Scroll>
  );
};

export default Layout;
