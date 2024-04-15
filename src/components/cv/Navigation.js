import React from 'react';

import CVStyles from './cv.module.css';
import mergeClassNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({
                                     sections,
                                   }) {
  return (
    <div className={mergeClassNames(CVStyles.divTable)}>
      <div className={mergeClassNames(CVStyles.divTableBody, CVStyles.noPrint, CVStyles.stickyNavBar)}>
        <div className={mergeClassNames(CVStyles.container, CVStyles.divTableRow)}>
          {sections.map((sectionDetails, i) => {
            return (
              <a key={i} className={mergeClassNames(CVStyles.divTableCell)}
                 href={'#' + sectionDetails.title}
                 role='button'>
                {sectionDetails.title}
              </a>
            );
          })}
          <a className={mergeClassNames(CVStyles.divTableCell, CVStyles.levelRight)}
             href="./EthemCemOzkanCV.pdf" download>
            <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
