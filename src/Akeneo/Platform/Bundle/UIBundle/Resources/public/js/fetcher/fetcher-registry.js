'use strict';

define(['jquery', 'underscore', 'pim/base-fetcher', 'require-context'], function ($, _, BaseFetcher, requireContext) {
  return {
    fetchers: {},
    initializePromise: null,

    /**
     * @return Promise
     */
    initialize: async () => {
      if (null === this.initializePromise) {
        this.initializePromise = new Promise(resolve => {
          const fetcherList = __moduleConfig.fetchers;
          const defaultFetcher = 'pim/base-fetcher';
          const fetchers = {};

          fetcherList.forEach((config, name) => {
            config = _.isString(config) ? {module: config} : config;
            config.options = config.options || {};
            fetchers[name] = config;
          });

          for (const fetcher in fetcherList) {
            const moduleName = fetcherList[fetcher].module || defaultFetcher;
            const ResolvedModule = requireContext(moduleName);
            fetchers[fetcher].loadedModule = new ResolvedModule(fetchers[fetcher].options);
            fetchers[fetcher].options = fetcherList[fetcher].options;
          }

          this.fetchers = fetchers;
          resolve();
        });
      }

      return this.initializePromise;
    },

    /**
     * Get the related fetcher for the given collection name
     *
     * @param {String} entityType
     *
     * @return Fetcher
     */
    getFetcher: function (entityType) {
      if (null === this.initializePromise) {
        throw new Error('Cannot call getFetcher before fetcherRegistry initialization');
      }
      var fetcher = this.fetchers[entityType] || this.fetchers.default;

      return fetcher.loadedModule;
    },

    /**
     * Clear the fetcher cache for the given collection name
     *
     * @param {String}         entityType
     * @param {String|integer} entity
     */
    clear: function (entityType, entity) {
      return this.getFetcher(entityType).clear(entity);
    },

    /**
     * Clear all fetchers cache
     */
    clearAll: function () {
      _.each(this.fetchers, function (fetcher) {
        fetcher.loadedModule.clear();
      });
    },
  };
});
