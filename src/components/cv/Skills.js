import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';
import mergeClassNames from "classnames";
import CVStyles from "./cv.module.css";
import Styles from "./styles.module.css";
import SkillLevel from "./SkillLevel";

function Skills({title, breakAfter ,items, ...props}) {
  return (
      <div className={mergeClassNames(CVStyles.container, CVStyles['is-medium'], Styles.commonListContainer)}>
        {items.map((item, i) => {
          const {
            skill: itemSkill,
            level: itemLevel,
          } = item;
          return (
            <div className={mergeClassNames(CVStyles.content, Styles.skillTableRow)}
                 key={i}>
              <div
                className={mergeClassNames(CVStyles.level, Styles.skillTableCell, CVStyles['is-marginless'], CVStyles['is-paddingless'])}
                key={i + 'skillRow'}>
                <h6 className={mergeClassNames(CVStyles['is-marginless'], CVStyles['level-left'],Styles.skillName )}
                    key={i + 'skillTitle'}>
                  {itemSkill}
                </h6>
              </div>
              <SkillLevel level={itemLevel} key={i + 'skillLevel'} />
            </div>
          );
        })}
      </div>
  );
}

Skills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  skill: PropTypes.string,
  level: PropTypes.number
};

export default Skills;
