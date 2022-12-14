import {ButtonLink} from '~/common/button-link';
import {Container} from '~/common/container';
import {Paper} from '~/common/paper';

interface Props {
  applyUrl: string;
  companyName: string;
  position: string;
}

export const PageFooter: React.FC<Props> = ({applyUrl, companyName, position}) => (
  <Paper>
    <footer className="py-6 tablet:py-5.75">
      <Container className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between" size="medium">
        <div className="hidden tablet:flex tablet:flex-col tablet:gap-y-1.5">
          <h3 className="text-h3">{position}</h3>
          <p className="text-base text-gray-700 dark:text-gray-500">{companyName}</p>
        </div>
        <ButtonLink className="w-full" href={applyUrl}>
          Apply Now
        </ButtonLink>
      </Container>
    </footer>
  </Paper>
);
