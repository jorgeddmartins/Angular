
// Document Element
let d = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict"


	$.fn.PolicyMain = function(optPol) {

		let polDefault = $.extend({}, optPol);

		let polSettings = $.extend( true, {}, polDefault, optPol);

		$.fn.globalPolicies = function() {
			return this.on(ck, '.inputDrop', function() {

				$('.inputDrop .CDropDow').addClass('slideUpQuotes');
				$('.CDropDow', this).slideToggle(100).removeClass('slideUpQuotes');

				$('.slideUpQuotes').slideUp(100);

				$('div, html').toggleClass('coloseDrops');
				$('.inputDrop').removeClass('coloseDrops');

			});
		}
		d.globalPolicies();

		$.fn.policiesGlobal = function() {
			return this.on(ck, '*', function(e) {

				let gClass = $(this)[0].className;

				if(gClass.indexOf('providerOpt') != -1) {
					e.stopPropagation();
					$('.provider').val($(this).html());
					$('.dropProvider').slideUp(100);
					$('.coverProvider').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('premiumOpt') != -1) {
					e.stopPropagation();
					$('.premium').val($(this).html());
					$('.dropPremium').slideUp(100);
					$('.coverPremium').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('splitwithOpt') != -1) {
					e.stopPropagation();
					$('.splitwith').val($(this).html());
					$('.dropSpliwith').slideUp(100);
					$('.coverSplitWith').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('startDateOpt') != -1) {
					e.stopPropagation();
					$('.startDate').val($(this).html());
					$('.dropStartDate').slideUp(100);
					$('.coverstartDate').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('SoldStatusOpt') != -1) {
					e.stopPropagation();
					$('.SoldStatus').val($(this).html());
					$('.dropSoldStatus').slideUp(100);
					$('.coverSoldStatus').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('ChooseletterOpt') != -1) {
					e.stopPropagation();
					$('.Chooseletter').val($(this).html());
					$('.dropChooseletter').slideUp(100);
					$('.coverChooseletter').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}

				else if(gClass.indexOf('CurrentstatusOpt') != -1) {
					e.stopPropagation();
					$('.Currentstatus').val($(this).html());
					$('.dropCurrentstatus').slideUp(100);
					$('.coverCurrentstatus').removeClass('coverDropRot0');
					$('div, html').removeClass('coloseDrops');
				}
				
			});
		}
		d.policiesGlobal();

		$('#PoliciesLeadFl').mCustomScrollbar({ theme: "dark-3", scrollInertia: 50 });

		let dateHtml;
		let dateVal = dateHtml = 1;
		
		let nullBefore = function(event) { if( event < 10 ) { event = '0' + event }
			return event;
		}

		let SdateTemp = '<li><span class="optSelect startDateOpt"></span></li>';

		for( var i = 0; i < 31; i++) { $(SdateTemp).appendTo('.dropStartDate'); }

		$.fn.startDate = function() {
			
			return this.each(function() { $(this).html(nullBefore(dateHtml)); dateHtml++; });
		}
		$('li .startDateOpt').startDate();

		$("#dropStartDate").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

		$.fn.closeDrop = function() {
			return this.on('click', '.coloseDrops', function() {

				$('.CDropDow').slideUp(150);
				$('div, html').removeClass('coloseDrops');
			});
		}
		d.closeDrop();

		// File Upload Replace Modal
		let dropRepTem = $('<div>', { class: 'dafaultFl' });

		$.fn.UplFile = function() {
			return this.on('DOMSubtreeModified', function() {

				$(dropRepTem).appendTo('body');

				$('.replacePop').clone().appendTo('.dafaultFl').removeClass('replPoDelete');

				$('.replacePop:nth-child(2n)').remove();

				$('.replNote_Content').draggable({});

			});
		}
		$('.fileBros').UplFile();

		// Click Event To Close Replace Modal
		$.fn.ReplceModal = function() {
			return this.on(ck, '.closeReplace, .Replac_Btn, .closeReplPop', function() {

				$('.dafaultFl').detach();
			});
		}
		d.ReplceModal();


		let PackDrTemp = '<li>' +
	                        '<div class="documenLink">' +
	                            '<a href="" target="_blank">Referred Policy</a>' +
	                        '</div>' +
	                    '</li>';


		$('.selectPack').on('change', function() {

			if($(this).val() == 1) { 

				alert('Are You Sure You Want to continua?')
				setTimeout(function() {

					$(PackDrTemp).appendTo('.Packsdrop .documents');

				}, 1000);
			}

			else if($(this).val() == 2) { alert('Risk'); }

			else if($(this).val() == 3) { alert('Over50'); }

	    });

	}
	d.PolicyMain();


	// let PackDrTemp = '<li>' +
 //                        '<div class="documenLink">' +
 //                            '<a href="" target="_blank">Referred Policy</a>' +
 //                        '</div>' +
 //                    '</li>';


	// $('.selectPack').on('change', function() {

	// 	if($(this).val() == 1) { 

	// 		//alert('Referred')

	// 		$(PackDrTemp).appendTo('.Packsdrop .documents');
	// 	}

	// 	else if($(this).val() == 2) {

	// 		alert('Risk')
	// 	}

	// 	else if($(this).val() == 3) {

	// 		alert('Over50')
	// 	}

 //    });


});