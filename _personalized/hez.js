//! moment.js locale configuration
//! locale : Hez [hez]
//! author : Crindzebra Sjimo : https://github.com/CrSjimo

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
     //! moment.js locale configuration
 
     var hez = moment.defineLocale('hez', {
         months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
             '_'
         ),
         monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
             '_'
         ),
         weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
         weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
         weekdaysMin: 'Ná_Ln_Fl_Ds_Mt_Gn_Nr'.split('_'),
         longDateFormat: {
             LT: 'HH:mm',
             LTS: 'HH:mm:ss',
             L: 'YYYY/MM/DD',
             LL: 'YYYY年M月D',
             LLL: 'YYYY年M月D，HH时mm分',
             LLLL: 'YYYY年M月Ddddd，HH时mm分',
             l: 'YYYY/M/D',
             ll: 'YYYY年M月D',
             lll: 'YYYY年M月D，HH时mm分',
             llll: 'YYYY年M月D（ddd），HH时mm分',
         },
         calendar: {
             sameDay: '[今日]LT',
             nextDay: '[明日]LT',
             nextWeek: '[后]ddddLT',
             lastDay: '[昨日]LT',
             lastWeek: '[先]ddddLT',
             sameElse: 'L',
         },
         relativeTime: {
             future: '%sㄗㄨㄧㄋ',
             past: '%s先ㄩㄙ',
             s: '数秒',
             ss: '%d秒',
             m: '1分',
             mm: '%d分',
             h: '1时',
             hh: '%d时',
             d: '1日',
             dd: '%d日',
             w: '1周',
             ww: '%d周',
             M: '1个月',
             MM: '%d个月',
             y: '1年',
             yy: '%d年',
         },
         week: {
             dow: 0, // Sunday is the first day of the week.
             doy: 4, // The week that contains Jan 4th is the first week of the year.
         },
     });
 
     return hez;
 
 })));
 