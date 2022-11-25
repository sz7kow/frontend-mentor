import {Button} from 'common/components/button';
import {JobMetadata} from 'job-offers/components/job-metadata';
import {JobOfferDetails} from 'job-offers/types/job-offer';
import Link from 'next/link';

import * as S from './job-details-card.styles';

interface Props {
  createdAt: string;
  details: JobOfferDetails;
}

export const JobDetailsCard: React.FC<Props> = ({
  createdAt,
  details: {applyUrl, contract, description, location, position, requirements, role},
}) => (
  <S.Card>
    <S.CardHeader>
      <S.JobDetails>
        <JobMetadata contract={contract} createdAt={createdAt} />
        <S.JobPosition>{position}</S.JobPosition>
        <S.JobLocation>{location}</S.JobLocation>
      </S.JobDetails>
      <Link href={applyUrl}>
        <Button>Apply Now</Button>
      </Link>
    </S.CardHeader>
    <S.CardContent>
      <S.CardText>{description}</S.CardText>
      <S.Section>
        <S.SectionTitle>Requirements</S.SectionTitle>
        <S.SectionText>{requirements.content}</S.SectionText>
        <S.SectionUl>
          {requirements.items.map(item => (
            <S.SectionLi key={item}>{item}</S.SectionLi>
          ))}
        </S.SectionUl>
      </S.Section>
      <S.Section>
        <S.SectionTitle>What You Will Do</S.SectionTitle>
        <S.SectionText>{role.content}</S.SectionText>
        <S.SectionOl>
          {role.items.map(item => (
            <S.SectionLi key={item}>{item}</S.SectionLi>
          ))}
        </S.SectionOl>
      </S.Section>
    </S.CardContent>
  </S.Card>
);
