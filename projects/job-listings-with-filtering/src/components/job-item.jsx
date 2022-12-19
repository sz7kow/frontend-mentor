/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Badge} from 'components/badge';
import {TagList} from 'components/tag-list';
import {createBreakpoint} from 'utils/create-breakpoint';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  box-shadow: ${({theme}) => theme.palette.boxShadow.default};
  border-radius: 0.3125rem;
  border-left: 0.3125rem solid ${({theme}) => theme.palette.background.primary};
  padding: 2rem 1.5rem 1.5rem 1.1875rem;
  background-color: ${({theme}) => theme.palette.background.primary};

  &[data-is-featured='true'] {
    border-left-color: ${({theme}) => theme.palette.background.tertiary};
  }

  ${createBreakpoint('desktop')} {
    flex-direction: row;
    align-items: center;
    column-gap: 1.5rem;
    padding: 2rem 2.5rem 2rem 2.1875rem;
  }
`;

export const CompanyLogo = styled.img`
  position: absolute;
  inset: 0 auto auto 1.1875rem;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;

  ${createBreakpoint('desktop')} {
    position: static;
    transform: none;
    width: 5.5rem;
    height: 5.5rem;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid ${({theme}) => theme.palette.background.spacer};

  ${createBreakpoint('desktop')} {
    border: none;
    padding-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
`;

export const CompanyName = styled.p`
  margin-right: 1rem;
  font: 700 0.8125rem/0.9375rem ${({theme}) => theme.typography.fontFamily};
  color: ${({theme}) => theme.palette.typography.defaultAlt};

  ${createBreakpoint('desktop')} {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;

export const Position = styled.h1`
  cursor: pointer;
  transition: ${({theme}) => theme.transition.default};
  margin-bottom: 0.5rem;
  font: 700 0.9375rem/1.5rem ${({theme}) => theme.typography.fontFamily};
  color: ${({theme}) => theme.palette.typography.title};

  &:hover {
    color: ${({theme}) => theme.palette.typography.defaultAlt};
  }

  ${createBreakpoint('desktop')} {
    font-size: 1.125rem;
  }
`;

export const DetailList = styled.ul`
  display: flex;
`;

export const DetailItem = styled.li`
  margin-right: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.5rem;
  letter-spacing: -0.00625rem;

  ${createBreakpoint('desktop')} {
    font-size: 0.9375rem;
    margin-right: 1rem;
    letter-spacing: -0.0075rem;
  }

  & + & {
    position: relative;
    padding-left: 0.75rem;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      border-radius: 50%;
      background-color: ${({theme}) => theme.palette.typography.default};
      width: 0.25rem;
      height: 0.25rem;
    }

    ${createBreakpoint('desktop')} {
      padding-left: 1.25rem;
    }
  }
`;

export const JobItem = ({
  job: {company, contract, isFeatured, isNew, location, logoPath, position, postedAt, tags},
  onTagClick,
}) => (
  <Item data-is-featured={isFeatured}>
    <CompanyLogo alt={`${company}'s logo`} src={logoPath} />
    <Content>
      <Header>
        <CompanyName>{company}</CompanyName>
        {isNew && <Badge variant="default">New!</Badge>}
        {isFeatured && <Badge variant="contrast">Featured</Badge>}
      </Header>
      <Position>{position}</Position>
      <DetailList>
        <DetailItem>{postedAt}</DetailItem>
        <DetailItem>{contract}</DetailItem>
        <DetailItem>{location}</DetailItem>
      </DetailList>
    </Content>
    <TagList onTagClick={onTagClick} tags={tags} />
  </Item>
);

JobItem.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool.isRequired,
    isNew: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onTagClick: PropTypes.func.isRequired,
};
