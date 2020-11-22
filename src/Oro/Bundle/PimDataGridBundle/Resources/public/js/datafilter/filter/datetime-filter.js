import {dateContext} from 'pimui/js/date-context';

/* global define */
define(['jquery', 'underscore', 'oro/datafilter/date-filter'], function ($, _, DateFilter) {
  'use strict';
  /**
   * Datetime filter: filter type as option + interval begin and end dates
   *
   * @export  oro/datafilter/datetime-filter
   * @class   oro.datafilter.DatetimeFilter
   * @extends oro.datafilter.DateFilter
   */
  return DateFilter.extend({
    /**
     * CSS class for visual datetime input elements
     *
     * @property
     */
    inputClass: 'AknTextField',

    /**
     * Date widget options
     *
     * @property
     */
    datetimepickerOptions: {
      format: dateContext.get('time').format,
      defaultFormat: dateContext.get('time').defaultFormat,
      language: dateContext.get('language'),
      pickTime: true,
      pickSeconds: false,
      pick12HourFormat: dateContext.get('twelveHourFormat'),
    },
  });
});
