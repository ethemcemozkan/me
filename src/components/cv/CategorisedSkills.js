import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';
import Section from "./SectionDiv";
import mergeClassNames from "classnames";
import CVStyles from "./cv.module.css";
import BulmaCSS from './cv.module.css';
import Styles from "./styles.module.css";
import Skills from "./Skills";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faLanguage, faScrewdriverWrench, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faAws, faMicrosoft } from '@fortawesome/free-brands-svg-icons';


const predefinedIcons = {
  cloud: faCloud,
  language: faLanguage,
  aws: faAws,
  tooling: faScrewdriverWrench,
  code: faCode,
  azure: faMicrosoft,
  observability: faMagnifyingGlass
};

function CategorisedSkills({title, icon, breakAfter, items, ...props}) {
  return (
    <Section
      title={title}
      icon={icon}
      breakAfter={breakAfter? breakAfter: false}
    >
      <div className={mergeClassNames(CVStyles.container, CVStyles['is-medium'], Styles.commonListContainer, CVStyles.responsiveWrapper)}>
      <div className={mergeClassNames(CVStyles.responsiveColumnLeft, Styles.skillTableBody)}> 
      {items.filter(item => item.column === 'left').map((item) => {
          const {
            category: itemCategory,
            skills: itemSkills,
            icon: itemIcon,
          } = item;
          return ( 
            <div className={mergeClassNames(CVStyles.content,  Styles.skillTableColumn, Styles.avoidBreakingOnPrint)}
                 key={itemCategory}>
              <h6
              className={mergeClassNames(BulmaCSS.title, BulmaCSS['is-size-6'], Styles.avoidBreakingOnPrint)}>
            <span className={Styles.skillCategoryIcon}>
              <FontAwesomeIcon icon={predefinedIcons[itemIcon]} size='2xs'/>
            </span>
            {itemCategory}
          </h6>
              <Skills items={itemSkills} />
            </div>
          );
        })}
      </div>
      <div className={mergeClassNames(CVStyles.responsiveColumnRight, Styles.skillTableColumn)}> 
      {items.filter(item => item.column === 'right').map((item) => {
          const {
            category: itemCategory,
            skills: itemSkills,
            icon: itemIcon,
          } = item;
          return ( 
            <div className={mergeClassNames(CVStyles.content,  Styles.avoidBreakingOnPrint)}
                 key={itemCategory}>
              <h6
              className={mergeClassNames(BulmaCSS.title, BulmaCSS['is-size-6'], Styles.avoidBreakingOnPrint)}>
            <span className={Styles.skillCategoryIcon}>
              <FontAwesomeIcon icon={predefinedIcons[itemIcon]} size='2xs'/>
            </span>
            {itemCategory}
          </h6>
              <Skills items={itemSkills} />
            </div>
          );
        })}
      </div>  
      </div>
    </Section>
  );
}


CategorisedSkills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    icon: PropTypes.string,
    column: PropTypes.oneOf(['left', 'right']),
    skills: PropTypes.arrayOf(PropTypes.shape({
      skill: PropTypes.string,
      level:PropTypes.oneOf([1, 2, 3, 4, 5]),
    }))
  })),
  breakAfter: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
};

export default CategorisedSkills;
