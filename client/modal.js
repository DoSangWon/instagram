Template.modal.events({
    'click #btnComment': function(evt, tmpl) {
        evt.preventDefault();
        if(!Meteor.user()) {
            return alert('로그인을 하시오');
        }

        console.log("btnComment clicked!");
        var comment = $('#inpComment').val();
        var board = Session.get('selectedData');
        var user = Meteor.user().emails[0].address;//현재 코멘트 다는 사람의 ID

        var obj = {};
        obj.comment = comment;
        obj.user = user;
        obj.date = new Date().format("yyyy.MM.dd a/p hh:mm:ss")

        
        if (!board.hasOwnProperty('comments')) {
            board.comments = [];
        }
        board.comments.push(obj);
        Boards.update({_id: board._id}, board);
        $('#inpComment').val("");
    }
});

Template.modal.helpers({
    name: function() {
        var obj = Session.get('selectedData') || {};
        return obj.inpTitle;
    },
    textarea: function() {
        var obj = Session.get('selectedData') || {};
        return obj.wt_textarea;
    },
    comments: function() {
        var obj = Session.get('selectedData') || {};
        return obj.comments;
    },
    image: function () {
        var obj = Session.get('selectedData') || {};
        return obj.image;
    }

});