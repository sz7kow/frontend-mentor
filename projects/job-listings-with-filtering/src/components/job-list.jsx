import PropTypes from 'prop-types';
import styled from 'styled-components';

import {JobItem} from 'components/job-item';
import {createBreakpoint} from 'utils/create-breakpoint';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  max-width: 100%;

  ${createBreakpoint('desktop')} {
    row-gap: 1.5rem;
  }
`;

export const JobList = ({jobs, onTagClick}) => (
  <List>
    {jobs.map((job) => (
      <JobItem key={job.id} job={job} onTagClick={onTagClick} />
    ))}
  </List>
);

JobList.propTypes = {
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
  onTagClick: PropTypes.func.isRequired,
};
