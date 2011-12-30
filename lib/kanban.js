var Kanban = Kanban || {};
Kanban.views = Kanban.views || {};

Kanban.views.Board = Backbone.View.extend({
    el: 'div',
    id: 'kanban',

    events: {'click': 'mouseDown'},

    initialize: function() {
        this.template = _.template($('#board-template').html());
        this.render();
    },

    render: function() {
        $(this.el).html(this.template);
        return this;
    },

    mouseDown: function() {
        window.alert('hello world!');
    }
});
