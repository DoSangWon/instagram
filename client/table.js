Template.table.helpers(
    {
        boards: function() {
            return Boards.find({},{sort:{number: -1}}).fetch();
        }
    }
);

Template.table.events(
    {
        "click tr": function(evt, tmpl) {
            Session.set('selectedData', this);
            

            //Session.set('comments',this.comments);
            //console.log($(Session.get('selectedData'))[0].comments[1].user);
            //console.log('tr clicked');
            //console.log($(this)[1].inpTitle);
            //$('#targetModal').text($(this)[0].inpTextarea);
            //$('#myModalLabel').text($(this)[0].inpName)
            ////console.log($(evt).find('tr').attr('dataId'));
        }
    }
);