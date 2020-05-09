window.onload = () => {
    console.log('loaded basic.js');

    function burgerTime() {
        //give toggle
        //responsive-links when added will activate small screen show links
        $('.collapse-links').toggleClass('responsive-links');
        $('.burgericon').toggleClass('active-burger');
        // $('.responsive-links').hide();
        // $('.responsive-links').show(900);
    }

    //add nav and burger icon
    $('.navigation-bar').append('<img src="/public/images/burgericon.png" alt="hamburger menu icon" class="burgericon"><ul class="collapse-links"><li><a href="doggy.html">Doggy</a></li><li><a href="">Spark</a></li></ul>');
    $('.burgericon').click(() => burgerTime());

    //only add footer to footers with this class
    $('.add-footer').append('<div class="footer-area"><div class="people"><p>Chris Herold</p><a href="https://github.com/cjherold">Github</a><br><a href="mrchristopherherold@gmail.com">MrChristopherHerold@gmail.com</a></div><div class="course"><p><a href="doggy.html">Doggy</a></p><p>|</p><p><a href="">Spark</a></p><p>|</p><p><a href="">2020</a></p></div></div>');

    





    //for swapping images ===================================================================================
    
    var current2 = 0;
    var current3 = 0;
    const nextImage = (section) => {
        console.log('next: ' + current2 + ' ' + current3);
        if (section == "2") {
            
            let images = ["/public/images/dogsleepy.png", "/public/images/upsidedown.png", "/public/images/dogtongue.png"];
            
            current2 += 1;
            if (current2 == images.length) {
                current2 = 0;
            }
            let imageString = 'url(\"' + images[current2] + '\")';
            $('#section-2').css('background-image', imageString);
        }
        
        if (section == "3") {
            let images = ["/public/images/beddog.png", "/public/images/dogonchair.png"];
            
            current3 += 1;
            if (current3 == images.length) {
                current3 = 0;
            }
            let imageString = 'url(\"' + images[current3] + '\")';
            $('#section-3').css('background-image', imageString);
        }
    }

    const prevImage = (section) => {
        console.log('next: ' + current2 + ' ' + current3);
        if (section == "2") {
            let images = ["/public/images/dogsleepy.png", "/public/images/upsidedown.png", "/public/images/dogtongue.png"];
            current2 -= 1;
            if (current2 < 0) {
                current2 = (images.length - 1);
            }
            let imageString = 'url(\"' + images[current2] + '\")';
            $('#section-2').css('background-image', imageString);
        }
        
        if (section == "3") {
            let images = ["/public/images/beddog.png", "/public/images/dogonchair.png"];
            current3 -= 1;
            if (current3 < 0) {
                current3 = (images.length - 1);
            }
            let imageString = 'url(\"' + images[current3] + '\")';
            $('#section-3').css('background-image', imageString);
        }
    }
    //end swapping images ============================================================================
    //add onclick function to the buttons for nextImage and prevImage
    $('#hobby-left').click(() => prevImage('2'));
    $('#hobby-right').click(() => nextImage('2'));
    $('#last-left').click(() => prevImage('3'));
    $('#last-right').click(() => nextImage('3'));
};