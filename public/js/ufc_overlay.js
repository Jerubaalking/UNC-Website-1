/**
 * @file
 * Adds additional JS functionality to the overlay blocks.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Adds overlay.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the overlay behavior.
   */
  Drupal.behaviors.ufcOverlay = {
    attach: function (context) {
      $('#overlay_share, #overlay_comment').click(function(e){
        $('#overlay .block-addtoany svg path').attr('fill', 'white');
        e.preventDefault();
        // Clean up previous overlay invocations.
        $('#overlay_close').remove();
        $('#overlay .block-addtoany, #overlay .block-facebook-comments').hide();
        // Load overlay with enclosed close button.
        $('#overlay').fadeIn('fast', function(){
          $('#overlay .region-overlay').prepend('<a id="overlay_close" href="#" onclick="jQuery(\'#overlay\').fadeOut();"><span class="halflings halflings-remove">&nbsp;</span></a>');
        });
        switch(e.currentTarget.id) {
          case 'overlay_share':
            var block = '.block-addtoany';
          break;
          case 'overlay_comment':
            var block = '.block-facebook-comments';
          break;
        }

        $('#overlay ' + block).fadeIn('fast', function(){
          console.log('fadedin');
        });

        console.log('in');
      });
    }
  };

})(jQuery, Drupal);
