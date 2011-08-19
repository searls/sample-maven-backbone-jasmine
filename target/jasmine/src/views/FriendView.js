FriendView = Backbone.View.extend({
	tagName: "li",

	template: function() { return _.template($("#friend-template").html()); },

	// template: _.template("<%= name %>"),
	
	render: function () {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});
