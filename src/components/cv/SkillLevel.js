import React from 'react';
import PropTypes from 'prop-types';
import './styles.module.css';
import mergeClassNames from "classnames";
import CVStyles from "./cv.module.css";
import Styles from "./styles.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";

function Skills({
                  level
                }) {
  return (
    <div className={mergeClassNames(Styles.skillTableCell, CVStyles['is-marginless'], CVStyles['level-right'])}>
      <div className={mergeClassNames(CVStyles.content, Styles.skillTableRow, Styles.avoidBreakingOnPrint)}>
        {Array(level).fill(0).map((_, i) => {
          return (
            <div
              className={mergeClassNames(CVStyles.level, Styles.skillTableCell, CVStyles['is-marginless'], CVStyles['is-paddingless'])}
              key={i + 'skillStar'}>
              <FontAwesomeIcon icon={faStarSolid} style={{color: '#ffb703'}}/>
            </div>
          );
        })}
        {Array(5 - level).fill(0).map((_, i) => {
          return (
            <div
              className={mergeClassNames(CVStyles.level, Styles.skillTableCell, CVStyles['is-marginless'], CVStyles['is-paddingless'])}
              key={i + 'skillStar'}>
              <FontAwesomeIcon icon={faStarRegular} style={{color: '#ffb703'}}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Skills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  skill: PropTypes.string,
  level: PropTypes.number
};

export default Skills;
