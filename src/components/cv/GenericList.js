import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import CVStyles from '../cv/cv.module.css';
import Styles from './styles.module.css';
import Section from './SectionDiv';
import {Keywords} from './Keywords';
import {MarkdownRender, getFixedUrl} from './Utils';

export default function GenericList({
                                      title, description, icon, items, xtraClassName,
                                    }) {
  return (
    <Section
      xtraClassName={xtraClassName}
      title={title}
      content={description}
      icon={icon}
    >
      <div className={mergeClassNames(CVStyles.container, CVStyles['is-medium'], Styles.commonListContainer)}>
        {items.map((item, i) => {
          const {
            authority,
            authorityWebSite, authorityMeta, rightSide,
            title: itemTitle,
            description: itemDesc,
            descriptionTags,
          } = item;
          return (
            <div className={mergeClassNames(CVStyles.content, Styles.avoidBreakingOnPrint)} key={i}>
              <div className={mergeClassNames(CVStyles.level, CVStyles['is-marginless'], CVStyles['is-paddingless'])}>
                <h5
                  className={mergeClassNames(CVStyles.title, CVStyles['is-marginless'], CVStyles['level-left'], CVStyles['is-size-5'])}>
                  {itemTitle}
                </h5>
                <span className={mergeClassNames(CVStyles['level-right'])}>{rightSide}</span>
              </div>
              <h6
                className={mergeClassNames(CVStyles.subtitle, Styles.companyTitle, CVStyles['is-size-6'])}
              >
                {authorityWebSite ?
                  <a href={getFixedUrl(authorityWebSite)} target="_blank" rel="noreferrer">{authority}</a> : authority}
              </h6>
              {authorityMeta
                ? <span className={mergeClassNames(Styles.companyMeta)}>{`(${authorityMeta})`}</span>
                : null}
              <div>
                {descriptionTags && <Keywords tags={descriptionTags} tagClass="is-info"/>}
                <MarkdownRender
                  markdown={itemDesc}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

GenericList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
};
