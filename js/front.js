var wocs_loading_first_time = true;//simply flag var
jQuery(function() {

    if (woocs_drop_down_view == 'chosen') {
        try {
            if (jQuery("select.woocommerce-currency-switcher").length) {
                jQuery("select.woocommerce-currency-switcher").chosen({
                    disable_search_threshold: 10
                });
                
                jQuery.each(jQuery('.woocommerce-currency-switcher-form .chosen-container'), function(index, obj) {
                    jQuery(obj).css({'width':jQuery(this).prev('select').data('width')});
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    if (woocs_drop_down_view == 'ddslick') {
        try {
            jQuery.each(jQuery('select.woocommerce-currency-switcher'), function(index, obj) {
                var width = jQuery(obj).data('width');
                var flag_position = jQuery(obj).data('flag-position');
                jQuery(obj).ddslick({
                    //data: ddData,
                    width: width,
                    imagePosition: flag_position,
                    selectText: "Select currency",
                    onSelected: function(data) {
                        if (!wocs_loading_first_time) {
                            jQuery(data.selectedItem).closest('form.woocommerce-currency-switcher-form').find('input[name="woocommerce-currency-switcher"]').eq(0).val(data.selectedData.value);
                            jQuery(data.selectedItem).closest('form.woocommerce-currency-switcher-form').submit();
                        }
                    }
                });
            });



        } catch (e) {
            console.log(e);
        }
    }


    wocs_loading_first_time = false;
});

