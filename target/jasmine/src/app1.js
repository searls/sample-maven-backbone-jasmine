
	Friend = Backbone.Model.extend({
		name: null
	});

	Friends = Backbone.Collection.extend({});

	FriendView = Backbone.View.extend({
		tagName: "li",

		template: _.template($("#friend-template").html()),

		render: function () {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	AppView = Backbone.View.extend({
		el: '#friends-app',

		initialize: function () {    
			this.input = $("input[name='first-name']");             
			this.friends = new Friends();
			this.friends.bind("add", this.addFriend);
		},
	
		events: {
			"submit": "createFriend"
		},
	
		addFriend: function (friend) {
			var friendView = new FriendView({model: friend});
			$("#friends-list").append(friendView.render().el);
		},
	
		createFriend: function () {
			var friend = new Friend({name: this.input.val()});
			this.friends.add(friend);
			this.input.val('');
			
			return false;
		}
	});