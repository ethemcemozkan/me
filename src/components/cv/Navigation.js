import React from 'react';

import CVStyles from './cv.module.css';
import mergeClassNames from "classnames";

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
        </div>
      </div>
    </div>
  );
}
