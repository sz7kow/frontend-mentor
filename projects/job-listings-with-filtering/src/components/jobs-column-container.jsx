import {useState} from 'react';

import {JobsColumn} from 'components/jobs-column';
import {defaultJobs} from 'constants/default-jobs';

export const JobsColumnContainer = () => {
  const [requiredTags, setRequiredTags] = useState([]);

  return (
    <JobsColumn
      jobs={defaultJobs.filter(({tags}) => requiredTags.every((tag) => tags.includes(tag)))}
      onRequiredTagAddition={(tag) => !requiredTags.includes(tag) && setRequiredTags((tags) => [...tags, tag])}
      onRequiredTagRemoval={(tag) => setRequiredTags((tags) => tags.filter((currentTag) => currentTag !== tag))}
      onRequiredTagsReset={() => setRequiredTags([])}
      requiredTags={requiredTags}
    />
  );
};

JobsColumnContainer.propTypes = {};
