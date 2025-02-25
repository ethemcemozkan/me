import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';
import mergeClassNames from "classnames";
import CVStyles from "./cv.module.css";
import Styles from "./styles.module.css";
import Section from './SectionDiv';
import mc from 'classnames';
import { getFixedUrl } from './Utils';

function Certificate({title, breakAfter, icon, items, ...props}) {
  return (
        <Section
          title={title}
          icon={icon}
          breakAfter={breakAfter}
        >
      <div className={mergeClassNames(CVStyles.container, CVStyles['is-medium'], Styles.commonListContainer,  CVStyles.responsiveWrapper)}>
      {items.map((item, i) => {
          const {
            authorityWebSite,
            badge,
            title: itemTitle,
          } = item;
          const placement = i % 2 === 0 ? CVStyles.responsiveColumnLeft : CVStyles.responsiveColumnRight
          return (
            <div className={mergeClassNames(CVStyles.content, Styles.skillTableRow, placement)}
                 key={i}>
              <div  
                className={mergeClassNames(CVStyles.level, Styles.skillTableCell, CVStyles['is-marginless'], CVStyles['is-paddingless'])}
                key={i + 'skillRow'}>
                
              <figure className={mc(CVStyles.image, Styles.certificateBadgeImage)}>
                  <img className={mergeClassNames(CVStyles['is-rounded'], Styles.certificateBadge)} src={badge} alt={itemTitle}/>
              </figure>
                <h6 className={mergeClassNames(Styles.skillTableCell,CVStyles['is-marginless'],Styles.certificateName )}
                    key={i + 'itemTitle'}>
                  <a href={getFixedUrl(authorityWebSite)} target="_blank" rel="noreferrer">{itemTitle}</a>
                </h6>
              </div>
            </div>
          );
        })}
      </div>
      </Section>
  );
}

Certificate.propTypes = {
  breakAfter: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    skill: PropTypes.string,
    level: PropTypes.number
  })),
};

export default Certificate;
