import Head from 'next/head';
import {Fragment} from 'react';

import {ButtonLink} from '~/common/button-link';
import {Card} from '~/common/card';
import {Container} from '~/common/container';
import {PageLayout} from '~/job-offer/page-layout';

const InternalErrorPage: React.FC = () => (
  <Fragment>
    <Head>
      <title>500 - Internal Server Error | DevJobs Web App</title>
      <meta
        key="description"
        content="Sorry, this is not working properly. We now know about this mistake and are working to fix it."
        property="og:description"
      />
    </Head>
    <PageLayout>
      <main className="pb-8">
        <Container size="small">
          <Card className="flex flex-col gap-y-10 p-6">
            <div className="text-center tablet:text-left">
              <h1 className="mb-3 text-h3 tablet:text-h2">500 - Internal Server Error</h1>
              <p>Sorry, this is not working properly. We now know about this mistake and are working to fix it.</p>
            </div>
            <ButtonLink className="w-full tablet:w-auto" href="/">
              Go home
            </ButtonLink>
          </Card>
        </Container>
      </main>
    </PageLayout>
  </Fragment>
);

// eslint-disable-next-line import/no-default-export
export default InternalErrorPage;
