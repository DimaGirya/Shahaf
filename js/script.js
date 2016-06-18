$('.story > img').hover(function(){animate(this)}, function(){reset(this)});

var stories_animations_urls = {
    "cody": "images/animations/CODY.gif",
    "anna": "images/animations/anna-bana.gif",
    "james": "images/animations/JAMES.gif",
    "jess": "images/animations/jess.gif",
    "vanessa": "images/animations/VANESSA.gif",
    "alyssa": "images/animations/ALYSSA.gif",
    "rebekah": "images/animations/rebekah.gif",
    "angel": "images/animations/angel.gif",
    "rose": "images/animations/rose.gif"
}

var stories_original_urls = {
    "cody": "images/static/CODY.png",
    "anna": "images/static/anna-bana.png",
    "james": "images/static/JAMES.png",
    "jess": "images/static/jess.png",
    "vanessa": "images/static/VANESSA.png",
    "alyssa": "images/static/ALYSSA.png",
    "rebekah": "images/static/rebekah.png",
    "angel": "images/static/angel.png",
    "rose": "images/static/rose.png"
};

var animate = function (img) {
    var element =  $(img).parent()[0];
    var animation_url = stories_animations_urls[element.id] + "?p" + new Date().getTime();//workaroud gif caching
    img.src = animation_url;
    play_story(element.id);
}

var reset = function (image) {
    var element =  $(image).parent()[0];
    image.src = stories_original_urls[element.id];
    pause_story(element.id);
}

function play_story(story){
    var audio = $("#"+story).children('audio')[0];
    audio.play();
}

function pause_story(story) {
    var audio = $("#"+story).children('audio')[0];
    audio.pause();
    audio.currentTime = 0; //reset sound on mouse out
}

var elements_animation_urls = {
    "lips": "images/animations/lips.gif",
    "chief": "images/animations/chief.gif",
    "eagle": "images/animations/eagle.gif",
    "football": "images/animations/football.gif",
    "boot": "images/animations/boot.gif",
    "dice": "images/animations/dice.gif",
    "cards": "images/animations/cards.gif",
    "stars": "images/animations/stars.gif",
    "kaktus": "images/animations/kaktus.gif"
}

var elements_original_urls = {
    "lips": "images/static/lips.png",
    "chief": "images/static/chief.png",
    "eagle": "images/static/eagle.png",
    "football": "images/static/football.png",
    "boot": "images/static/boot.png",
    "dice": "images/static/dice.png",
    "cards": "images/static/cards.png",
    "stars": "images/static/stars.png",
    "kaktus": "images/static/kaktus.png"
}

var animate_interval = setInterval(random_animate, 2000);

function random_animate() {
    var element_id = pick_random_element(elements_animation_urls);
    var animation_url = elements_animation_urls[element_id] + "?p" + new Date().getTime();//workaroud gif caching.
    $("#"+element_id).children()[0].src = animation_url;
    var audio = $("#randomLight")[0];
    audio.play();
    var reset_interval = setInterval(random_reset(), 2000);
}

function random_reset() {
    var element_id = pick_random_element(elements_animation_urls);
    var img = $("#"+element_id).children()[0];
    img.src = elements_original_urls[element_id];
}

function pick_random_element(elements) {
    var element_id;
    var counter = 0;
    for (var element in elements) {
        if (Math.random() < 1 / ++counter) {
            element_id = element;
        }
    }
    return element_id;
}