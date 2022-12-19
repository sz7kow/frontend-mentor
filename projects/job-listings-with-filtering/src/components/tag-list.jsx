import PropTypes from 'prop-types';
import styled from 'styled-components';

import {TagItem} from 'components/tag-item';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  max-width: 100%;
`;

export const TagList = ({areRemovable, onTagClick, tags}) => (
  <List>
    {tags.map((tag) => (
      <TagItem key={tag} isRemovable={areRemovable} onClick={onTagClick} value={tag} />
    ))}
  </List>
);

TagList.propTypes = {
  areRemovable: PropTypes.bool,
  onTagClick: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TagList.defaultProps = {
  areRemovable: false,
};
