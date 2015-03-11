jssor_slider1_starter = function (containerId) {
    var options = {
        $FillMode: 2,                              // The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, 5 contain for large image, actual size for small image, default value is 0
        $AutoPlay: true,                           // Whether to auto play, to enable slideshow, this option must be set to true, default value is false
        $AutoPlayInterval: 4000,                   // Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
        $PauseOnHover: 1,                          // Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

        $ArrowKeyNavigation: true,                 // Allows keyboard (arrow key) navigation or not, default value is false
        $SlideEasing: $JssorEasing$.$EaseOutQuint, // Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
        $SlideDuration: 800,                       // Specifies default duration (swipe) for slide in milliseconds, default value is 500
        $MinDragOffsetToSlide: 20,                 // Minimum drag offset to trigger slide , default value is 20
        $SlideSpacing: 0,                          // Space between each slide in pixels, default value is 0
        $DisplayPieces: 1,                         // Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
        $ParkingPosition: 0,                       // The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
        $UISearchMode: 1,                          // The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
        $PlayOrientation: 1,                       // Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
        $DragOrientation: 1,                       // Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        $BulletNavigatorOptions: {                 // Options to specify and enable navigator or not
            $Class: $JssorBulletNavigator$,        // [Required] Class to create navigator instance
            $ChanceToShow: 2,                      // [Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 1,                        // Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1,                             // Steps to go for each navigation request, default value is 1
            $Lanes: 1,                             // Specify lanes to arrange items, default value is 1
            $SpacingX: 8,                          // Horizontal space between each item in pixel, default value is 0
            $SpacingY: 8,                          // Vertical space between each item in pixel, default value is 0
            $Orientation: 1                        // The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
        },

        $ArrowNavigatorOptions: {                  // Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,         // [Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                      // [Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 0,                        // Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1                              // Steps to go for each navigation request, default value is 1
        }
    };

    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    // responsive code begin (scale as the window is resized)
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    // responsive code end
};

$( document ).ready(function() {
    jssor_slider1_starter('slider1_container');
});
