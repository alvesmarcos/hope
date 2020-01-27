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
import { Feed } from '~/store/modules/feed/types';
import { RefreshControl } from 'react-native';

interface LayoutProps {
  data: Feed;
  headerName: string;
  loading: boolean;
  onRefresh(): void;
}

const Layout: React.FC<LayoutProps> = ({
  data,
  headerName,
  loading,
  onRefresh,
}) => {
  return (
    <Scroll
      p="medium"
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }>
      <Flex>
        <StatusBar variant="secondary" />
        <Header name={headerName} />
        <Flex mt="large">
          <CardStatus days={23} hours={35} cash={154} />
        </Flex>
        {data.fact && (
          <Flex mt="medium">
            <CardCuriosity description={data.fact.text} />
          </Flex>
        )}
        {data.tip && (
          <Flex mt="medium">
            <CardTip title={data.tip.title} description={data.tip.text} />
          </Flex>
        )}
        {data.quote && (
          <Flex mt="medium">
            <CardQuote description={data.quote.text} />
          </Flex>
        )}
        {data.expert_opinion && (
          <Flex mt="medium">
            <CardExpert
              name={data.expert_opinion.created_by.name}
              tip={data.expert_opinion.text}
              imageURI={data.expert_opinion.created_by.avatar.url}
            />
          </Flex>
        )}
        {data.faq && (
          <Flex mt="medium">
            <CardFaq question={data.faq.question} answer={data.faq.answer} />
          </Flex>
        )}
        {data.article && (
          <Flex mt="medium">
            <CardArticle
              imageUri={data.article.thumbnail.url}
              title="A jornada de superação do médico americano que se viciou em opioides"
              url={data.article.url}
            />
          </Flex>
        )}
        {data.testimony && (
          <Flex mt="medium">
            <CardTestimony
              imageUri={data.testimony.thumbnail.url}
              title={data.testimony.title}
              description={data.testimony.text}
              url={data.testimony.url}
            />
          </Flex>
        )}
        {data.documentary && (
          <Flex mt="medium">
            <CardDocumentary
              imageUri={data.documentary.thumbnail.url}
              title={data.documentary.title}
              description={data.documentary.description}
              url={data.documentary.url}
            />
          </Flex>
        )}
        <Flex mt="medium" mb="xlarge">
          <CardCheckin />
        </Flex>
      </Flex>
    </Scroll>
  );
};

export default Layout;
