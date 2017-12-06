(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['linkTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"gameLink\">\n  <a href=\"/games/"
    + alias1(container.lambda((depths[1] != null ? depths[1].permalink : depths[1]), depth0))
    + alias1(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n    <img class=\"linkPhoto\" src="
    + alias1(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + ">\n    <h6 class=\"linkTitle\">"
    + alias1(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h6>\n    </img>\n  </a>\n</div>\n";
},"useData":true,"useDepths":true});
})();