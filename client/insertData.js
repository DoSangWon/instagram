Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};
Template.insertData.events(
    {

        // button이 클릭되면 우측 함수가 실행된다
        "click #inpwt_btn": function(evt, tmpl) {
            evt.preventDefault();
            var user = Meteor.user().emails[0].address;

            if(!user) {
                return alert('로그인이 필요합니다');
            }
            var number = Boards.find({}).count();
            //Session.set('selectedData', this);
            //var board = Session.get('selectedData');
            //board = Boards.number;
            //console.log(board);

          
            //data를 input에서 꺼내서 디비에 저장한다
            var obj = {};
            obj.number = number+1;
            obj.inpTitle = $('#inpTitle').val();
            obj.wt_textarea = $('#wt_textarea').val();
            obj.user = user;
            obj.create = new Date().format("yyyy-MM-dd");
            console.log(obj.create);
            var image = $('#inpFile').val();

            if(image.length > 0) {
                //이미지가 있을 때 이미지 저장 처리
                console.log('after');
                fileObj = tmpl.find("#inpFile").files[0]
                fileReader = new FileReader();
                fileReader.onload = function(file) {
                    console.log('callback');
                    obj.image = file.srcElement.result;
                    console.log(obj)
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