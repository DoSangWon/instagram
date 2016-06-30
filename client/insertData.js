Template.insertData.events(
    {
        // button이 클릭되면 우측 함수가 실행된다
        "click #wt_btn": function(evt, tmpl) {
            evt.preventDefault();
            var user = Meteor.user();
            console.log(user);
            if(!user) {
                return alert('로그인이 필요합니다');
            }



            //data를 input에서 꺼내서 디비에 저장한다
            var obj = {};
            obj.inpTitle = $('#inpTitle').val();
            obj.wt_textarea = $('#wt_textarea').val();

            var image = $('#inpFile').val();

            if(image.length > 0) {
                //이미지가 있을 때 이미지 저장 처리
                console.log('after');
                fileObj = tmpl.find("#inpFile").files[0]
                fileReader = new FileReader();
                fileReader.onload = function(file) {
                    console.log('callback');
                    obj.image = file.srcElement.result;

                    Boards.insert(obj);

                    $('#inpTitle').val("");
                    $('#wt_textarea').val("");
                    $('#inpFile').val("");
                }
                fileReader.readAsDataURL(fileObj);
            }
            else {
                //이미지가 없을 때 게시 글만 처리
                Boards.insert(obj);

                $('#inpTitle').val("");
                $('#wt_textarea').val("");
                $('#inpFile').val("");
            }


        }
    }
);