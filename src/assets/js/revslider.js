var revapi1, tpj;
jQuery(function() {
    tpj = jQuery;
    revapi1 = tpj("#rev_slider_1_1")
    if (revapi1 == undefined || revapi1.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_1_1");
    } else {
        revapi1.revolution({
            sliderType: "hero",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1240,778,778",
            gridwidth: "1240,1240,778,778",
            gridheight: "700,700,700,700",
            spinner: "spinner2",
            perspective: 600,
            perspectiveType: "global",
            editorheight: "700,768,700,720",
            responsiveLevels: "1240,1240,778,778",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }
});