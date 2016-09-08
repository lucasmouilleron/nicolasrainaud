////////////////////////////////////////////////////////////////////////
$(function() {
    $("header nav.js-nav li").each(function() {
        elt = $(this);
        linkElt = elt.find("a");
        if(endsWith(linkElt.attr("href"), location.pathname)) {
            linkElt.replaceWith(linkElt.text());
        }
    });
    $('.container a').each(function(){
        if(!$(this).attr("href").startsWith(siteURL)) {$(this).attr('target', '_blank');}
    });
});

////////////////////////////////////////////////////////////////////////
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}