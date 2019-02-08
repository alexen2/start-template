var textareaAdaptiveHeight = document.querySelectorAll('textarea');

if(textareaAdaptiveHeight) {
	[].forEach.call(textareaAdaptiveHeight, function(el) {
    el.addEventListener('keyup', function(e) {
    	if(this.scrollTop > 0) {
				this.style.height = this.scrollHeight + "px";
			}
    });
	});
}