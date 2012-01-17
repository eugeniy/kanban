var Kanban = Kanban || {};
Kanban.models = Kanban.models || {};
Kanban.views = Kanban.views || {};

Kanban.models.Story = Backbone.Model.extend({});
Kanban.models.Column = Backbone.Model.extend({});
Kanban.models.Board = Backbone.Model.extend({});

Kanban.views.Story = Backbone.View.extend({
    className: 'story',

    initialize: function() {
        this.template = _.template($('#story-template').html())
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});

Kanban.views.Column = Backbone.View.extend({
    className: 'column',

    initialize: function() {
        this.template = _.template($('#column-template').html())
    },

    events: {
        'click .create': 'addOne'
    },

    render: function() {
        $(this.el).html(this.template);
        return this;
    },

    addOne: function() {
        var story = new Kanban.models.Story({name: 'a simple task'});
        var view = new Kanban.views.Story({model: story});
        $(this.el).append(view.render().el);
    }
});

Kanban.views.Board = Backbone.View.extend({
    el: $('#kanban'),

    initialize: function() {
        this.template = _.template($('#board-template').html())
        this.render();

        var view = new Kanban.views.Column;
        this.el.append(view.render().el);
    },

    render: function() {
        this.el.html(this.template);
        return this;
    }
});
