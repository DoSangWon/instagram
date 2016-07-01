Template.deleteData.events(
    {

        // button이 클릭되면 우측 함수가 실행된다
        "click #Dlt_btn": function (evt, tmpl) {
            evt.preventDefault();
            var obj = Session.get('selectedData') || {};
            var user = obj.user;
            console.log(user);
            var c_user =  Meteor.user().emails[0].address;
            console.log(c_user);
            if(user == c_user) {
                var _id = obj._id;
                Boards.remove({_id: _id});
            }
            else{
                alert("삭제 권한이 없습니다.");
            }
        }
    }
);