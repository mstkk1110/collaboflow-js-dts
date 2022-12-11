/// <reference path="./@types/collaboflow.d.ts"/>

(function () {
  'use strict';

  collaboflow.events.on(['request.input.check', 'request.input.fidText.change'], (e) => {
    const rows = e.parts['tbl_1'].value;

    for (let rowIndex = 0, rowLength = rows.length; rowIndex < rowLength; rowIndex++) {
      const row = row[rowIndex];
      row['fidRowNo'].value = rowIndex + 1;
    }
  });
})();
