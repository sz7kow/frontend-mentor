import Head from 'next/head';
import {Fragment} from 'react';

import {ButtonLink} from '~/common/button-link';
import {Card} from '~/common/card';
import {Container} from '~/common/container';
import {PageLayout} from '~/job-offer/page-layout';

const NotFoundPage: React.FC = () => (
  <Fragment>
    <Head>
      <title>404 - Not Found | DevJobs Web App</title>
      <meta key="description" content="This is not the web page you are looking for." property="og:description" />
    </Head>
    <PageLayout>
      <main className="pb-8">
        <Container size="small">
          <Card className="flex flex-col gap-y-10 p-6">
            <div className="text-center tablet:text-left">
              <h1 className="mb-3 text-h3 tablet:text-h2">404 - Not Found</h1>
              <p>This is not the web page you are looking for.</p>
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
export default NotFoundPage;
