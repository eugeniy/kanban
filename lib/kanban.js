var Kanban = Kanban || {};
Kanban.models = Kanban.models || {};
Kanban.views = Kanban.views || {};

Kanban.models.Story = Backbone.Model.extend({});
Kanban.models.Column = Backbone.Model.extend({});
Kanban.models.Board = Backbone.Model.extend({});

Kanban.views.Story = Backbone.View.extend({
    className: 'story',
    template: _.template($('#story-template').html()),

    render: function() {
        $(this.el).html(this.template);
        return this;
    }
});

Kanban.views.Column = Backbone.View.extend({
    className: 'column',
    template: _.template($('#column-template').html()),

    render: function() {
        $(this.el).html(this.template);
        return this;
    }
});

Kanban.views.Board = Backbone.View.extend({
    el: $('#kanban'),
    template: _.template($('#board-template').html()),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.el.html(this.template);
        return this;
    }
});
