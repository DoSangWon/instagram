Template.deleteData.events(
    {

        // button이 클릭되면 우측 함수가 실행된다
        "click #Dlt_btn": function (evt, tmpl) {
            evt.preventDefault();
            var obj = Session.get('selectedData') || {};
            var _id = obj._id;
            console.log(_id);
            console.log("ddd");
            console.log(Boards.remove({_id:_id}));
        }
    }
);