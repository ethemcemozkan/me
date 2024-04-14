import React from 'react';
import PropTypes from 'prop-types';
import mergeClass from 'classnames';
import './styles.module.css';
import Section from './SectionDiv';
import CVStyles from './cv.module.css';

export function Keywords({tags = [], tagClass}) {
  return (
    <div className={mergeClass(CVStyles.tags, CVStyles['are-medium'])}>
      {tags.map((tag, i) => (
        <div className={mergeClass(CVStyles.tag, CVStyles[tagClass])} key={i}>
          {tag}
        </div>
      ))}
    </div>
  );
}

Keywords.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string, PropTypes.shape({})).isRequired,
  tagClass: PropTypes.string,
};

Keywords.defaultProps = {
  tagClass: 'is-info',
};

export default function Tags({
                               title, description, icon, items,
                             }) {
  return (
    <Section
      title={title}
      content={description}
      icon={icon}
    >
      <Tags tags={items} tagClass="is-primary"/>
    </Section>
  );
}

Tags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
};
