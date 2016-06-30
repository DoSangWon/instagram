Template.table.helpers(
    {
        boards: function() {
            return Boards.find().fetch();
        }
    }
);

Template.table.events(
    {
        "click trd": function(evt, tmpl) {
            //Session.set('selectedData', this);      ?????????????
            //console.log('tr clicked');
            //console.log($(this)[0].inpTextarea);
            //$('#targetModal').text($(this)[0].inpTextarea);
            //$('#myModalLabel').text($(this)[0].inpName)
            ////console.log($(evt).find('tr').attr('dataId'));
        }
    }
);