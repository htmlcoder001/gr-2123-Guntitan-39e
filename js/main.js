(()=>{var t={801:t=>{"use strict";t.exports="var appendNull = function (t) {\n  return t < 10 ? 0 + t.toString() : t;\n};\nfunction dtime_nums(t) {\n  (d = new Date()), (p = new Date(d.getTime() + 864e5 * (t + 1))), (monthb = '01,02,03,04,05,06,07,08,09,10,11,12'.split(',')), document.write(appendNull(p.getDate()) + '.' + monthb[p.getMonth()] + '.' + p.getFullYear());\n}\n"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var p=n[r]={exports:{}};return t[r](p,p.exports,e),p.exports}eval.call(null,e(801)),$((function(){}))})();