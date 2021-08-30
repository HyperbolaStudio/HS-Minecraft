//! moment.js locale configuration
//! locale : Hio [hio]
//! author : Crindzebra Sjimo : https://github.com/CrSjimo

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
     //! moment.js locale configuration
 
     var hio = moment.defineLocale('hio', {
         months: 'Ūn-lun_Bin-lun_Jin-lun_Vo-lun_Fio-lun_Res-lun_Sep-lun_Ok-lun_Nov-lun_Des-lun_Ūndesṻn-lun_Ūndesbin-lun'.split(
             '_'
         ),
         monthsShort: '1-lun_2-lun_3-lun_4-lun_5-lun_6-lun_7-lun_8-lun_9-lun_10-lun_11-lun_12-lun'.split(
             '_'
         ),
         weekdays: 'Naerōnae_Lunrōnae_Fulerōnae_Desrōnae_Mutrōnae_Guinrōnae_Nerurōnae'.split('_'),
         weekdaysShort: 'Nae_Lun_Fule_Des_Mut_Guin_Neru'.split('_'),
         weekdaysMin: 'Na_Ln_Fl_Ds_Mt_Gn_Nr'.split('_'),
         longDateFormat: {
             LT: 'HH:mm',
             LTS: 'HH:mm:ss',
             L: 'YYYY/MM/DD',
             LL: 'YYYY M D',
             LLL: 'HH:mm, YYYY M D',
             LLLL: 'HH:mm, dddd, YYYY M D',
             l: 'YYYY/M/D',
             ll: 'YYYY M D ',
             lll: 'HH:mm, YYYY M D',
             llll: 'HH:mm, ddd, YYYY M D',
         },
         calendar: {
             sameDay: '[Zig nae za]LT',
             nextDay: '[Nep nae za]LT',
             nextWeek: 'dddd [za] LT',
             lastDay: '[Piata nae za]LT',
             lastWeek: '[Piata] dddd [za] LT',
             sameElse: 'L',
         },
         relativeTime: {
             future: 'zuin %s',
             past: 'myataio %s',
             s: 'se miaüi',
             ss: '%d miaüi',
             m: '1 fenzho',
             mm: '%d fenzho',
             h: '1 biaüi',
             hh: '%d biaüi',
             d: '1 nae',
             dd: '%d nae',
             w: '1 ziaüi',
             ww: '%d ziaüi',
             M: '1 liaüi',
             MM: '%d liaüi',
             y: '1 siaüi',
             yy: '%d siaüi',
         },
         week: {
             dow: 0, // Sunday is the first day of the week.
             doy: 4, // The week that contains Jan 4th is the first week of the year.
         },
     });
 
     return hio;
 
 })));
 