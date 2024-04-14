import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';
import Section from "./SectionDiv";
import mergeClassNames from "classnames";
import CVStyles from "./cv.module.css";
import Styles from "./styles.module.css";
import SkillLevel from "./SkillLevel";

function Skills({title, icon, items, ...props}) {
  const convertedItems = (items || []).map((item) => {
    const {
      skill, level, ...rest
    } = item;
    return {
      skill: skill,
      level: level,
      ...rest,
    };
  });
  return (
    <Section
      title={title}
      icon={icon}
    >
      <div className={mergeClassNames(CVStyles.container, CVStyles['is-medium'], Styles.commonListContainer)}>
        {convertedItems.map((item, i) => {
          const {
            skill: itemSkill,
            level: itemLevel,
          } = item;
          return (
            <div className={mergeClassNames(CVStyles.content, CVStyles.skillTableRow, Styles.avoidBreakingOnPrint)}
                 key={i}>
              <div
                className={mergeClassNames(CVStyles.level, CVStyles.skillTableCell, CVStyles['is-marginless'], CVStyles['is-paddingless'])}
                key={i + 'skillRow'}>
                <h6 className={mergeClassNames(CVStyles['is-marginless'], CVStyles['level-left'])}
                    key={i + 'skillTitle'}>
                  {itemSkill}
                </h6>
              </div>
              <SkillLevel level={itemLevel} key={i + 'skillLevel'}>

              </SkillLevel>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

Skills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  skill: PropTypes.string,
  level: PropTypes.number
};

export default Skills;
