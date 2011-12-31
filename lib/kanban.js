var Kanban = Kanban || {};
Kanban.models = Kanban.models || {};
Kanban.views = Kanban.views || {};

Kanban.models.Story = Backbone.Model.extend({});
Kanban.models.Column = Backbone.Model.extend({});
Kanban.models.Board = Backbone.Model.extend({});

Kanban.views.Story = Backbone.View.extend({
    el: 'div',
    className: 'story',

    initialize: function() {
        this.template = _.template($('#story-template').html());
        this.render();
    },
    render: function() {
        $(this.el).html(this.template);
        return this;
    }
});

Kanban.views.Column = Backbone.View.extend({
    el: 'div',
    className: 'column',

    initialize: function() {
        this.template = _.template($('#column-template').html());
        this.render();
    },
    render: function() {
        $(this.el).html(this.template);
        return this;
    }
});

Kanban.views.Board = Backbone.View.extend({
    el: 'div',
    id: 'kanban',

    initialize: function() {
        this.template = _.template($('#board-template').html());
        this.render();
    },
    render: function() {
        $(this.el).html(this.template);
        return this;
    }
});
