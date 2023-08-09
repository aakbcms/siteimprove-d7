/**
 * @file
 * Adds siteimprove to the current page.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.itkSiteimprove = {
    attach: function (context, settings) {

      $('body').once('siteimprove-processed', function() {
        const key = settings.itk_siteimprove.key;
        if (key) {
          window.addEventListener('CookieInformationConsentGiven', function (event) {
            if (CookieInformation.getConsentGivenFor('cookie_cat_statistic')) {
              (function()
                {
                  const sz = document.createElement('script');
                  sz.type = 'text/javascript';
                  sz.async = true;
                  sz.src = '//siteimproveanalytics.com/js/siteanalyze_' + key + '.js';

                  const s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(sz, s);
                }
              )();
            }
          }, false);
        }
      });
    }
  };
})(jQuery, Drupal);
