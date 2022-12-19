import PropTypes from 'prop-types';
import styled from 'styled-components';

import {JobList} from 'components/job-list';
import {RequiredTagsSection} from 'components/required-tags-section';
import {createBreakpoint} from 'utils/create-breakpoint';

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 69.375rem;

  ${createBreakpoint('desktop')} {
    row-gap: 2.5rem;
  }
`;

export const JobsColumn = ({jobs, onRequiredTagAddition, onRequiredTagRemoval, onRequiredTagsReset, requiredTags}) => (
  <Column>
    <RequiredTagsSection
      onRequiredTagRemoval={onRequiredTagRemoval}
      onRequiredTagsReset={onRequiredTagsReset}
      requiredTags={requiredTags}
    />
    <JobList jobs={jobs} onTagClick={onRequiredTagAddition} />
  </Column>
);

JobsColumn.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      contract: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool.isRequired,
      isNew: PropTypes.bool.isRequired,
      location: PropTypes.string.isRequired,
      logoPath: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      postedAt: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  onRequiredTagAddition: PropTypes.func.isRequired,
  onRequiredTagRemoval: PropTypes.func.isRequired,
  onRequiredTagsReset: PropTypes.func.isRequired,
  requiredTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
