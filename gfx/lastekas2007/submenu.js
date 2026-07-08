var submenu_slide_down_time = .5;
var submenu_slide_down_timeout = 1;
var submenu_slide_up_time = .4;
var submenu_slide_up_timeout = 2000;
var submenu_fade_time = .2;
var submenu_slide_fps = 60.0;

var previous_over_id = null;
var can_close_submenu = false;
var opened_submenu_id = null;

var roll_submenu = {
    timeout : null,
    show_submenu: function(menu_id) {
		menu_item = 'submenu_'+menu_id;
        clearTimeout(this.timeout);
		if (previous_over_id != null && previous_over_id != menu_id) {
			new Effect.Fade('submenu_'+previous_over_id, {duration: submenu_fade_time});
			if(opened_submenu_id == previous_over_id) opened_submenu_id = null;
		}
		if (opened_submenu_id == null || opened_submenu_id != menu_id) {
            this.timeout = setTimeout(function(){
				$(menu_item).style.opacity = 1;
				$(menu_item).style.filter = 'alpha(opacity=100)';
				opened_submenu_id = menu_id;
				new Effect.SlideDown(menu_item, {
					scaleFrom: 5,
					scaleTo: 100,
					//scaleX: true,
					//scaleContent: true,
					duration: submenu_slide_down_time, 
					fps: submenu_slide_fps
				});
			}, submenu_slide_down_timeout);
		}
		previous_over_id = menu_id;
    },
    hide_submenu: function(menu_id) {
		menu_item = 'submenu_'+menu_id;
        if($(menu_item).style.display == 'none') {
            clearTimeout(this.timeout);
        }
		else {
			can_close_submenu = true;			
           	this.timeout = setTimeout(function(){
				if(can_close_submenu) {
					new Effect.SlideUp(menu_item, {
						scaleFrom: 100,
						scaleTo: 5,
						//scaleX: true,
						//scaleContent: true,
						duration: submenu_slide_up_time, 
						fps: submenu_slide_fps});
					opened_submenu_id = null;
					previous_over_id = null;
				}
			}, submenu_slide_up_timeout);
        }
    }    
}

function over_img(id) {
	if (previous_over_id != id) can_close_submenu = false;
}

function over_link(id) {
	if (previous_over_id != id) can_close_submenu = false;
}