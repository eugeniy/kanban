var Kanban = Kanban || {};
Kanban.models = Kanban.models || {};
Kanban.collections = Kanban.collections || {};
Kanban.views = Kanban.views || {};

Kanban.models.Story = Backbone.Model.extend({});
Kanban.collections.Stories = Backbone.Collection.extend({
    model: Kanban.models.Story
});

Kanban.models.Column = Backbone.Model.extend({});
Kanban.models.Board = Backbone.Model.extend({});

Kanban.views.Story = Backbone.View.extend({
    tagName: 'li',
    className: 'story',

    initialize: function() {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
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
        _.bindAll(this, 'render');
        this.collection.bind('reset', this.render);
        this.collection.bind('add', this.render);
        this.template = _.template($('#column-template').html())
    },

    events: {
        'click .create': 'addOne'
    },

    render: function() {
        $(this.el).html(this.template());
        this.collection.each(function(story) {
            var view = new Kanban.views.Story({model: story});
            this.$('.stories').append(view.render().el);
        });

        return this;
    },

    addOne: function() {
        this.collection.add({name: 'a simple task'});
    }
});

Kanban.views.Board = Backbone.View.extend({
    el: $('#kanban'),

    initialize: function() {
        this.template = _.template($('#board-template').html())
        this.render();

        var stories = new Kanban.collections.Stories;
        var view = new Kanban.views.Column({collection: stories});
        this.el.append(view.render().el);
    },

    render: function() {
        this.el.html(this.template);
        return this;
    }
});
