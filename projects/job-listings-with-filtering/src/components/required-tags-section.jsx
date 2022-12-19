import PropTypes from 'prop-types';
import styled from 'styled-components';

import {TagList} from 'components/tag-list';
import {createBreakpoint} from 'utils/create-breakpoint';

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -2.25rem;
  box-shadow: ${({theme}) => theme.palette.boxShadow.default};
  border-radius: 0.3125rem;
  min-height: 4.5rem;
  padding: 1.25rem 1.5rem 1.25rem 1.1875rem;
  background-color: ${({theme}) => theme.palette.background.primary};
`;

export const Button = styled.button`
  transition: ${({theme}) => theme.transition.default};
  border: none;
  background: none;
  font: 700 0.8125rem/1.5rem ${({theme}) => theme.typography.fontFamily};
  letter-spacing: -0.00625rem;
  color: ${({theme}) => theme.palette.typography.default};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${({theme}) => theme.palette.typography.defaultAlt};
  }
`;

const Spacer = styled.div`
  ${createBreakpoint('desktop')} {
    margin-bottom: 2.25rem;
  }
`;

export const RequiredTagsSection = ({onRequiredTagRemoval, onRequiredTagsReset, requiredTags}) => {
  if (requiredTags.length === 0) return <Spacer />;

  return (
    <Section>
      <TagList areRemovable onTagClick={onRequiredTagRemoval} tags={requiredTags} />
      <Button onClick={onRequiredTagsReset}>Clear</Button>
    </Section>
  );
};

RequiredTagsSection.propTypes = {
  onRequiredTagRemoval: PropTypes.func.isRequired,
  onRequiredTagsReset: PropTypes.func.isRequired,
  requiredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
