Template.modal.events({
    'click #btnComment': function(evt, tmpl) {
        evt.preventDefault();
        if(!Meteor.user()) {
            return alert('로그인을 하시오');
        }

        console.log("btnComment clicked!");
        var comment = $('#inpComment').val();
        var board = Session.get('selectedData');

        var obj = {};
        obj.comment = comment;
        obj.user = Meteor.user();
        if (!board.hasOwnProperty('comments')) {
            board.comments = [];
        }
        board.comments.push(obj);
        Boards.update({_id: board._id}, board);

    }
});

Template.modal.helpers({
    name: function() {
        var obj = Session.get('selectedData') || {};
        return obj.inpName;
    },
    bodyText: function() {
        var obj = Session.get('selectedData') || {};
        return obj.inpTextarea;
    },
    comments: function() {
        var obj = Session.get('selectedData') || {};
        return obj.comments;
    }
});
