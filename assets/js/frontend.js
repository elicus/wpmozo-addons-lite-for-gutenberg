jQuery(document).ready(function($){

    $('.wpmozo-adfgu-before-after-image-wrapper').each(function( key, el ){

        let $this = $(this),
        before_label = $this.data('before-label'),
        after_label = $this.data('after-label'),
        handle_offset = $this.data('handle-offset'),
        slider_orientation = $this.data('slider-orientation'),
        move_onhover = $this.data('move-onhover'),
        move_onclick = $this.data('move-onclick');

        $this.twentytwenty({
            default_offset_pct: handle_offset,
            orientation: slider_orientation,
            before_label: before_label,
            after_label: after_label,
            move_slider_on_hover: move_onhover,
            move_with_handle_only: true,
            click_to_move: move_onclick,
        });

    });

})