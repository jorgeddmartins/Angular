
$(function() {

	rightNavUsers = {

		jsonCallUser: function() {

			infoUsers = $('#infoUsers .Ubody');

			$.ajax({
                type: "GET",
                url: "/assets/js/Telesales/teleSalesJson/userReport.json",
                success: function(result) {
                   
                    //Info Charts
                    var infousers = result.infousers.map(function (infouser) {

                        return '<span class="UbodyElm width10">' + infouser.id + '</span>' + '<span class="UbodyElm width55">' + infouser.name + '</span>' + '<div class="UbodyElm width35"><label class="switch"><input type="checkbox"><div class="slider round"><span class="switchBtn"></span></div></label></div>';
                    });

                    infoUsers.empty();

                    if (infousers.length) {

                        contentLead = '<div class="UTbody">' + infousers.join('</div><div class="UTbody">') + '</div>';

                        $(contentLead).appendTo(infoUsers);
                    }
                }

            });

		    infoUsers.text('Data not Found.');

		}

	}

	rightNavUsers.jsonCallUser();

});