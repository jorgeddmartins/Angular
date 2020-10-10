
// Load Document
let d = $(document);

// Load Click event
let ck = 'click';


$(function() {

	"use strict";

	$.fn.TSalesData = function(dataOptions) {

		let dataDefault = {

			delCalss: 'DetachElm',

			teleBlk: true,

			// HTML Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				// Span Tag
				spanTag: '<span>',

				// Icon Tag
				iconTag: '<i>',

				// Html Tag
				htmlTag: 'html',

				// Input Tag
				inputTag: '<input>',

				// label Tag
				labelTag: '<label>'
			},
			telesalesGrid: 'TSalesGrid',
			clGrid: 'TGrid',
			clCloseDp: 'closeDrops',
			hovProd: '.ProdForm .k-input',
			dropPCl: 'dropProd',
			ckItems: '.CoverInput, .TermInput, .SmokeInput, .MuchcoverInput, #CallOut',
			select: 'Select',
			boxlight: 'boxHilight',
			CGrid: 'CGrid_',

			// Flying Drop Downs
			drops: {
				tCover: 'thisCover',
				tCoverT: 'thisCoverTerm',
				tSmoke: 'thisSmoke',
				tMuch: 'thisMuch'
			},
			dropSpeed: 200,
			poundSign: '£',
			delaySpeed: 700,

			// Product Answers Drop downs
			tinput: '.thisCover .k-input',
			tinput2: '.thisCoverTerm .k-input',
			tinput3: '.thisSmoke .k-input',
			tinput4: '.thisMuch .k-input',

			// Json Injection
			urljson: 'assets/js/teleSales.json'
		};
		let setiingsData = $.extend( true, {}, dataDefault, dataOptions );


		// Switches
		let Swi = $(setiingsData.tags.divTag, { class: 'switch_prod dropToolTip'}).appendTo('.switchBlock')
			.append($(setiingsData.tags.labelTag, { class: 'switch'})
				.append( $(setiingsData.tags.inputTag, { type: 'checkbox' }) )
				.append( $(setiingsData.tags.divTag, { class: 'slider round'}) )
			)
			.append( $(setiingsData.tags.spanTag, { class: 'right_title searchTip'}) );


		$('.switch').css({ height: '18px'});

		$('.switch_1 .right_title').html('Rejectable Affiliate');

		$('.switch_2 .right_title').html('Inside Rejection Period');

		// Right Header & Right Body Injectios
		let RSle = $(setiingsData.tags.divTag, { class: 'right-sales'}).appendTo('.rightMini .header-sales, .rightMini .body-sales');

		// TeleSales Screen Security 
		const TeleBlk = setiingsData.teleBlk == false ? $('.TeleSBlk').detach() : '';
		
		// Promise Ajax Call
		$.ajax({
			type: 'GET',
			url: setiingsData.urljson,
			datatype: 'json',

			success: function(teleData) { 
				d.loadGrid(teleData) 
			}
		});

		// Data Injection Json
		$.fn.loadGrid = function(teleData) {
			let headerHead = '';
			for( let h in teleData.teleHeader) {
				headerHead  += 	'<div class="Thead">' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null1 + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null2 + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null3 + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].userid + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].alert + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].leadid + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].created + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].source + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].product + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].tracksummary + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].pix + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].firstname + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].lastname + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].landline + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].mobile + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null4 + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null5 + '</span>' +
							        '<span class="TheadGrdi">' + teleData.teleHeader[h].null6 + '</span>' +
							    '</div>' +

							    // Head Grid Bottom
							    '<div class="Thead">' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null1 + '</span>' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null2 + '</span>' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null3 + '</span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 144.34px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 63.06px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 67.55px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 99.11px;"></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 74.86px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 82.19px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 143.72px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 45.53px;"></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 91.36px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 87.09px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 81.59px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0; width: 69.38px;"><input type="text" class="headGridInput" /></span>' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null4 + '</span>' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null5 + '</span>' +
							        '<span class="TheadGrdi" style="border-top: 0">' + teleData.teleHeader[h].null6 + '</span>' +
							    '</div>';
			}
			$(headerHead).appendTo('.HeaderGrid');

			// To Check Content In the Grid
			$('.TheadGrdi:contains("Allocation User Id")').addClass('HuserId');
			$('.TheadGrdi:contains("Alert")').addClass('alert');
			$('.TheadGrdi:contains("LeadId")').addClass('LeadId');
			$('.TheadGrdi:contains("Created On")').addClass('Created');
			$('.TheadGrdi:contains("Source")').addClass('Source');
			$('.TheadGrdi:contains("Product")').addClass('Product');
			$('.TheadGrdi:contains("Tracking Summary")').addClass('TrackSummary');
			$('.TheadGrdi:contains("Pix")').addClass('Pix');
			$('.TheadGrdi:contains("Firstname")').addClass('Fname');
			$('.TheadGrdi:contains("Lastname")').addClass('Lname');
			$('.TheadGrdi:contains("Landline")').addClass('Landline');
			$('.TheadGrdi:contains("Mobile")').addClass('Mobile');

			let GridTbody = '';
			for( let t in teleData.teleBody) {
				GridTbody += '<div class="TBody">' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null1 + '<i class="fa fa-remove gridDelete"></i></span>' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null2 + '</span>' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null3 + '</span>' +
						        '<span class="TbodyGr" style="width: 144.34px">' + teleData.teleBody[t].userid + '</span>' +
						        '<span class="TbodyGr" style="width: 63.06px">' + teleData.teleBody[t].alert + '</span>' +
						        '<span class="TbodyGr" style="width: 67.55px">' + teleData.teleBody[t].leadid + '</span>' +
						        '<span class="TbodyGr" style="width: 99.11px">' + teleData.teleBody[t].created + '</span>' +
						        '<span class="TbodyGr" style="width: 74.86px">' + teleData.teleBody[t].source + '</span>' +
						        '<span class="TbodyGr" style="width: 82.19px">' + teleData.teleBody[t].product + '</span>' +
						        '<span class="TbodyGr" style="width: 143.72px">' + teleData.teleBody[t].tracksummary + '</span>' +
						        '<span class="TbodyGr" style="width: 45.53px">' + teleData.teleBody[t].pix + '</span>' +
						        '<span class="TbodyGr" style="width: 91.36px">' + teleData.teleBody[t].firstname + '</span>' +
						        '<span class="TbodyGr" style="width: 87.09px">' + teleData.teleBody[t].lastname + '</span>' +
						        '<span class="TbodyGr" style="width: 81.59px">' + teleData.teleBody[t].landline + '</span>' +
						        '<span class="TbodyGr" style="width: 69.38px">' + teleData.teleBody[t].mobile + '</span>' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null4 + '</span>' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null5 + '</span>' +
						        '<span class="TbodyGr">' + teleData.teleBody[t].null6 + '</span>' +
						    '</div>';
			}
			$(GridTbody).appendTo('.BodyGrid');

			// Reject Lead Options
			let RejectL = '';
			for( let r in teleData.rejectLead) {

				RejectL += '<li class="Leaddrop rejDrop">' + teleData.rejectLead[r].value + '</li>';
			}
			$(RejectL).appendTo('.RejectLeadDrop');

			// Retain Lead Options
			let RetainL = '';
			for( let t in teleData.retainLead) {

				RetainL += '<li class="Leaddrop retDrop">' + teleData.retainLead[t].value + '</li>';
			}
			$(RetainL).appendTo('.RetainLeadDrop');

			// Background Odd Elements
			$('.rejDrop:odd, .retDrop:odd').css({ background: '#f9f9f9' });

			//Product Drops
			let ThisCover = '';
			for( let c in teleData.thisCoverDrop ) {

				ThisCover += '<li class="' + teleData.thisCoverDrop[c].Tclass + '">' + teleData.thisCoverDrop[c].value + '</li>';
			}

			// Data Clicks Events
			$.fn.ThisData = function() {
				return this.on(ck, '*', function() {

					// Check For a Class(IndexOf)
					let classes = $(this)[0].className;

					if(classes.indexOf('CoverInput') != -1) {

					 	$('.' + setiingsData.dropPCl).animate({ left: '2px', top: '61px', width: '179.13px' }, setiingsData.dropSpeed);
						$(setiingsData.tags.htmlTag).toggleClass(setiingsData.clCloseDp);

						ThisCoverData();
						$('.CoverTerm, .YesNo, .MuchCover, .callout').detach();
						$('.Cover:nth-child(n4)').remove();
						$('.' + setiingsData.dropPCl).removeClass('CoverTermDrop');

					} else if(classes.indexOf('TermInput') != -1) {

						$('.' + setiingsData.dropPCl).animate({ left: '184px', top: '61px', width: '179.13px' }, setiingsData.dropSpeed);
						$(setiingsData.tags.htmlTag).toggleClass(setiingsData.clCloseDp);

						ThisCoverData();
						$('.Cover, .YesNo, .MuchCover, .callout').detach();
						$('.CoverTerm:nth-child(n37)').remove();
						$('.' + setiingsData.dropPCl).addClass('CoverTermDrop');

					} else if(classes.indexOf('SmokeInput') != -1) {

						$('.' + setiingsData.dropPCl).animate({ left: '367px', top: '61px', width: '179.13px' }, setiingsData.dropSpeed);
						$(setiingsData.tags.htmlTag).toggleClass(setiingsData.clCloseDp);

						ThisCoverData();
						$('.Cover, .CoverTerm, .MuchCover,.callout').detach();
						$('.YesNo:nth-child(n4)').remove();
						$('.' + setiingsData.dropPCl).removeClass('CoverTermDrop');

					} else if(classes.indexOf('MuchcoverInput') != -1) {

						$('.' + setiingsData.dropPCl).animate({ left: '2px', top: '122px', width: '179.13px' }, setiingsData.dropSpeed);
						$(setiingsData.tags.htmlTag).toggleClass(setiingsData.clCloseDp);

						ThisCoverData();
						$('.Cover, .CoverTerm, .YesNo, .callout').detach();
						$('.MuchCover:nth-child(n23)').remove();
						$('.' + setiingsData.dropPCl).addClass('CoverTermDrop');
					
					} else if($(this).attr('id') == 'CallOut') {

						$('.' + setiingsData.dropPCl).animate({ left: '371px', top: '-251px', width: '179px' }, setiingsData.dropSpeed);
						$(setiingsData.tags.htmlTag).toggleClass(setiingsData.clCloseDp);

						ThisCoverData();
						$('.Cover, .CoverTerm, .YesNo, .MuchCover').detach();
						$('.callout:nth-child(n12)').remove();
						$('.' + setiingsData.dropPCl).removeClass('CoverTermDrop');

					} else if(classes.indexOf('clock-selectTime') != -1) {

						$('.time_Flash').fadeIn(200).delay(500).fadeOut(200);
						$('.clockDrop').slideUp(100);
					}

					// Rejection & Retain Drop Downs
					if(classes.indexOf('rejDrop') != -1) {
						$('.ddlRejection').val($(this).html())
						$('.RejectLeadDrop').slideUp(100)

					} else if(classes.indexOf('retDrop') != -1) {

						$('.ddlRetain').val($(this).html())
						$('.RetainLeadDrop').slideUp(100)
					}

				});
			}
			d.ThisData();

			$('.TBody:odd').css({ background: '#f9f9f9'});
			$('.TBody:even').css({ background: '#fff'});

			$("#BodyGrid").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

			function ThisCoverData() {

				$(ThisCover).appendTo('#Prod_dropProd .dropProd');
				$('.dropItem:odd, .callout:odd').css({ background: 'rgba(245, 248, 247, 0.7)' });
			}
		}


		// Cloning Grid
		//$('.' + setiingsData.clGrid).clone().appendTo('.' + setiingsData.telesalesGrid);

		// Removing Aditional Classes
		$('.TSalesGrid div').removeClass(setiingsData.clGrid);

		// Cloning Notifications
		$('.notifiT').clone().appendTo('.header-sales .right-sales');

		// Removing Class from Notifications
		$('.header-sales .topNotification').removeClass('notifiT');

		// Cloning EditLead
		$('.editLead').clone().appendTo('.body-sales .right-sales');

		// Removing Class From Editlead
		$('.edit-lead').removeClass('editLead');

		// Clean Doc
		$('.' + setiingsData.delCalss).remove();


		// Close Clock Tasks
		$.fn.moverG = function() {

			return this.on('mouseover', '.clockDrop', function() { $(setiingsData.tags.htmlTag).removeClass('clockClose') });
		}
		d.moverG();

		$.fn.moveLG = function() {

			return this.on('mouseleave', '.clockDrop', function() { $(setiingsData.tags.htmlTag).addClass('clockClose') });
		}
		d.moveLG();

		// Logic For ThisCover Input
		let kInput = $(setiingsData.tinput);

		// Logic For ThisCoverTerm Input
		let kInput2 = $(setiingsData.tinput2);

		// Logic For ThisSmoke Input
		let kInput3 = $(setiingsData.tinput3);

		// Logic For ThisMuch Input
		let kInput4 = $(setiingsData.tinput4);

		// Logic For the Flying Drop Down Box Light
		$.fn.DomTree = function() {
			return this.bind('DOMSubtreeModified', function(event) {

				// ThisCover Input RemoveClass boxHilight
				const CoverIn = !kInput.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tCover).removeClass(setiingsData.boxlight) : '';

				// ThisCover Input AddClass boxHilight
				const CoverOut = kInput.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tCover).addClass(setiingsData.boxlight) : '';

				// ThisCoverTerm Input RemoveClass boxHilight	
				const TermIn = !kInput2.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tCoverT).removeClass(setiingsData.boxlight) : '';

				// ThisCoverTerm Input AddClass boxHilight
				const TermOut = kInput2.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tCoverT).addClass(setiingsData.boxlight) : '';

				// ThisSmoke Input RemoverClass boxHilight
				const SmokeIn = !kInput3.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tSmoke).removeClass(setiingsData.boxlight) : '';

				// ThisSmoke Input AddClass boxHilight
				const SmokeOut = kInput3.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tSmoke).addClass(setiingsData.boxlight) : '';

				// ThisMuch Input RemoveClass boxHilight
				const MuchIn = !kInput4.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tMuch).removeClass(setiingsData.boxlight) : '';

				// ThisMuch Input AddClass boxHilight
				const MuchOut = kInput4.html().match(setiingsData.select) ? $('.' + setiingsData.drops.tMuch).addClass(setiingsData.boxlight) : '';

			});
		}
		d.DomTree();


		// On Change Function for Product Drops
		$.fn.HouseIn = function() {
			return this.on('input', '.thisHouse .k-input', function() {

				// RemoveClass boxHilight From thisHouse Input
				const HouseIn = $(this).val().length >= 1 ? $('.thisHouse').removeClass(setiingsData.boxlight) : '';

				// AddClass boxHilight In thisHouse Input
				const HouseOut = $(this).val().length <= 0 ? $('.thisHouse').addClass(setiingsData.boxlight) : '';
			});
		}
		d.HouseIn();


		$('.productList_Floor .form-article').addClass('ProdForm');

		$.fn.ProdForm = function() {
			return this.on('mouseover', setiingsData.hovProd, function() {

				$(setiingsData.hovProd).removeClass('Titem');
				$(this).addClass('Titem');
			});
		}
		d.ProdForm();

		$.fn.CkItems = function() {
			return this.on(ck, setiingsData.ckItems, function(e) {

				e.stopPropagation();

				$('.' + setiingsData.dropPCl).toggle();

				$('.clockDrop').slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass('clockClose');
			});
		}
		d.CkItems();

		// UserDrop MouseOver To prevent Closing
		$.fn.userHover = function() {
			return this.on('mouseover', '.userDrop', function() {

				$(setiingsData.tags.htmlTag).removeClass('flagClose');
			});
		}
		d.userHover();

		// UserDrop MouseLeave To allow Closing
		$.fn.userLeave = function() {
			return this.on('mouseleave', '.userDrop', function() {

				$(setiingsData.tags.htmlTag).addClass('flagClose');
			});
		}
		d.userLeave();

		// Remove Close Event From Reject Drop down
		$.fn.RejectDropOver = function() {
			return this.on('mouseover', '.RejectLeadDrop', function() {

				$(setiingsData.tags.htmlTag).removeClass('CloseRejDrop')
			});
		}
		d.RejectDropOver();
		$.fn.RejectDropLeave = function() { 
			return this.on('mouseleave', '.RejectLeadDrop', function() {

				$(setiingsData.tags.htmlTag).addClass('CloseRejDrop')
			});
		}
		d.RejectDropLeave();

		// Remove Close Event From Retain Drop down
		$.fn.RetainDropOver = function() {
			return this.on('mouseover', '.RetainLeadDrop', function() {

				$(setiingsData.tags.htmlTag).removeClass('CloseRetDrop')
			});
		}
		d.RetainDropOver();
		$.fn.RetainDropLeave = function() { 
			return this.on('mouseleave', '.RetainLeadDrop', function() {

				$(setiingsData.tags.htmlTag).addClass('CloseRetDrop')
			});
		}
		d.RetainDropLeave();


		// Global Click
		return this.on(ck, '*', function(event) {

			// Check For a Class(IndexOf)
			let AddClass = $(this)[0].className;

			// Check For an Id
			let id = $(this).attr('id');

			if(AddClass.indexOf('clockBtn') != -1) {
				event.stopPropagation();

				$('.clockDrop').slideToggle(100);
				$(setiingsData.tags.htmlTag).toggleClass('clockClose');

				$(setiingsData.tags.htmlTag).removeClass('closeDrops');
				$('.' + setiingsData.dropPCl).slideUp(100);

				$('.userDrop').slideUp(100);

			} else if(AddClass.indexOf('clockClose') != -1) {

				$('.clockDrop').slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass('clockClose');

			} else if(AddClass.indexOf('TBody') != -1) {

				$('.caseTRflag').removeClass('btnFlagDesable');
				$('.TBody').removeClass('backGridColor');
				$(this).addClass('backGridColor');
				$('.openEditLead i, .openEditLead').fadeIn(100).delay(setiingsData.delaySpeed).fadeOut(100);
				$('.AllProduct').fadeIn(300);
			} 

			if(AddClass.indexOf('dropItem') != -1) {

				$('.Titem').html($(this).html());
				$(setiingsData.hovProd).removeClass('Titem');
				$('.' + setiingsData.dropPCl).slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass(setiingsData.clCloseDp);

			} else if(AddClass.indexOf('closeDrops') != -1) {
				
				$('.' + setiingsData.dropPCl).slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass(setiingsData.clCloseDp);

			} else if(AddClass.indexOf('callout') != -1) { $('#CallOut').val($(this).html()) }

			if(id == 'datetimepicker2') {

				setiingsData.CGrid

				$('.' + setiingsData.CGrid + 0).addClass('DatePickerVal');
				$('input[type="hidden"]').val('')

			} else if(id == 'datetimepickerHour') {

				$('.' + setiingsData.CGrid + 0).removeClass('DatePickerVal');
				$('input[type="hidden"]').val('')
			}

			if(AddClass.indexOf('flagBtn') != -1) {

				event.stopPropagation();

				$('.userDrop').slideToggle(100);
				$(setiingsData.tags.htmlTag).toggleClass('flagClose');

				$('.clockDrop').slideUp(100);

			} else if(AddClass.indexOf('flagClose') != -1) {

				$('.userDrop').slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass('flagClose');
			}

			if(AddClass.indexOf('ddlRejection') != -1) {

				event.stopPropagation();

				// Open Rejection Lead Drop Down 
				$('.RejectLeadDrop').slideToggle(100);
				$('.RetainLeadDrop').slideUp(100);

				$(setiingsData.tags.htmlTag).toggleClass('CloseRejDrop');

			} else if(AddClass.indexOf('ddlRetain') != -1) {

				event.stopPropagation();

				$('.RetainLeadDrop').slideToggle(100);
				$('.RejectLeadDrop').slideUp(100);

				$(setiingsData.tags.htmlTag).toggleClass('CloseRetDrop');
			}

			if(AddClass.indexOf('CloseRejDrop') != -1) {

				$('.RejectLeadDrop').slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass('CloseRejDrop');
			}

			if(AddClass.indexOf('CloseRetDrop') != -1) {

				$('.RetainLeadDrop').slideUp(100);
				$(setiingsData.tags.htmlTag).removeClass('CloseRetDrop');
			}

		});

	}
	d.TSalesData();


	$.fn.telSTtips = function() {

		// Flip Tool Tips( MouseOver Event )
		$.fn.flipImgOver = function() {
			return this.on('mouseover', '.flipImg', function() {

				$('.flipImgToolTip', this).show();

			}).on('mouseleave', '.flipImg', function() { $('.flipImgToolTip').hide(); });
		}
		d.flipImgOver();

		// Flips Select( Click Event )
		$.fn.clkFlip = function() {
			return this.on(ck, '.Top-UserCont', function() {

				$('.Top-UserCont').removeClass('btnEnable');
				$(this).addClass('btnEnable');
			});
		}
		d.clkFlip();

		// Switches Tool Tips( MouseOver Event )
		$.fn.overTipsTeleSaleSwitch = function() {
			return this.on('mouseover', '.switch_prod', function() {
				
				$('.right_title', this).css({ display: 'flex' });
				
			}).on('mouseleave', '.switch_prod', function() { $('.right_title').hide(); });
		}
		d.overTipsTeleSaleSwitch();
		
	}
	d.telSTtips();


	$.fn.GridKendoTeleSales =  function() {
		return this.on('click', '.bodyTaleSales tbody tr', function() {

			$('.bodyTaleSales tbody tr').removeClass('selected');
			$(this).addClass('selected');

			$('.caseTRflag').removeClass('btnFlagDesable');

			$('.openEditLead').css({ display: 'flex' });

			setTimeout(function() { $('.openEditLead').hide(); }, 500);
		});
	}
	d.GridKendoTeleSales();

});