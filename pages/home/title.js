define(['jquery', 'when'], function($, when) {
	$titleContainer = $(".titleContainer");

	return {
		set : function(title){
			$titleContainer.html(
				title.map(function(t){
					return '<a class="navTitle" ' + (t.href ? ('href="' + t.href + '"') : '') + '>' + t.text + '</a>'
				})
			)
		}
	}
});