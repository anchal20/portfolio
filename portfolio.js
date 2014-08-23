/******************document ready function*******************/
$(document).ready(function(){   
    $("#main_body").addClass("orange");
    $("#about-me").removeClass("active show").addClass("hide inactive");
    $("#skill_section").removeClass("active show").addClass("inactive hide");
    $("#home_section").removeClass("inactive hide").addClass("show active");
    
    $("#contactID").hide();
    
    $("#plane").sprite({fps: 4, no_of_frames: 14});
    $('#sun').sprite({fps:4, no_of_frames: 4});
    
});
/************************************ ends here ***************************/
/***************************** reset all ***************************************/
function reset() {
    $('#direct').removeClass("html_mov css_mov java_mov jquery_mov");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
    $('#rd').removeClass("show active").addClass("hide inactive");
}
/*******************************************************************************/

/******************************* select screen *********************************/
function select_screen(screen_id) {
    var id = screen_id;
    reset();
    
    if (id=='skill_ref'){
        $('#main_body').removeClass("orange blue").addClass("sky-blue");
        $("#skill_section").removeClass("hide inactive").addClass("active show");
        $("#home_section").removeClass("active show").addClass("hide inactive");
        $("#contact_section").removeClass("active show").addClass("hide inactive");
        $("#about-me").removeClass("active show").addClass("hide inactive");
    }
    else if (id=='about') {
        $('#main_body').removeClass("orange sky-blue").addClass("blue");
        $("#skill_section").removeClass("show active").addClass("inactive hide");
        $("#home_section").removeClass("active show").addClass("hide inactive");
        $("#contact_section").removeClass("active show").addClass("hide inactive");
        $("#about-me").removeClass("inactive hide").addClass("show active");
    }
    else if (id=='home') {
        $('#main_body').removeClass("blue sky-blue").addClass("orange");
        $("#skill_section").removeClass("active show").addClass("inactive hide");
        $("#home_section").removeClass("inactive hide").addClass("active show");
        $("#contact_section").removeClass("inactive hide").addClass("active show");
        $("#about-me").removeClass("active show").addClass("inactive hide");
    }
        
}

/********************************************************************************/

/*********************************** contacts ********************************************/
function closeContact() {
    $('#contactID').hide();
    $('#infoID').slideDown();
}

function showContact() {
    $('#infoID').hide();
    $('#contactID').slideDown();   
}
/***************************************************************************************/

/******************************skill display functions*************************************/
function html_disp() {
    $('#direct').addClass("html_mov").removeClass("css_mov java_mov jquery_mov");
    $('#h-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("hide inactive").addClass("show active");
    $('#rd').removeClass("show active").addClass("hide inactive");
}

function css_disp() {
    $('#direct').addClass("css_mov").removeClass("html_mov java_mov jquery_mov");
    $('#c-board').removeClass("hide inactive").addClass("show active");
    $('#rd').removeClass("hide inactive").addClass("show active");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
}

function java_disp() {
    $('#direct').addClass("java_mov").removeClass("html_mov css_mov jquery_mov");
    $('#j-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("hide inactive").addClass("show active");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#jq-board').removeClass("show active").addClass("hide inactive");
    $('#rd').removeClass("show active").addClass("hide inactive");
}

function jquery_disp() {
    $('#direct').addClass("jquery_mov").removeClass("html_mov css_mov java_mov");
    $('#rd').removeClass("hide inactive").addClass("show active");
    $('#jq-board').removeClass("hide inactive").addClass("show active");
    $('#c-board').removeClass("show active").addClass("hide inactive");
    $('#h-board').removeClass("show active").addClass("hide inactive");
    $('#j-board').removeClass("show active").addClass("hide inactive");
    $('#rd1').removeClass("show active").addClass("hide inactive");
}
/****************************************************************************************/

/************************************** about me ****************************************/
function show_back() {
    $('#com1').removeClass("hide inactive").addClass("show active");
}
function remove_com() {
    $('#com1').removeClass("show active").addClass("hide inactive");
}
/****************************************************************************************/