
// Document Element
let d = $(document);

// Click Event 
let ck = 'click';

$(function() {

	"use strict";

	$.fn.ACharts = function(chartOpt) {

		let dfC = $.extend({

			// Data Injection
			data: {

				// Right Charts Json Data
				url: 'assets/js/rightNav/rnCharts.json'
			},

			// Templates To Inject
			temp: {

				// Columns Chart Template
				cBoxT: '<div class="bltr"><div class="mh"></div></div>',

				// Lines Chart Template
				trT: '<span class="trr"></span>',

				// Bullets Template
				bullTm: '<span class="CBullet"></span>',

                // Bullets Lines Template
				svgTe: '<span class="svgLine"></span>',
                
                // Each Color Template
                usd: '<div class="UserDok"></div>'
			},

			// Data Values
			values: {

				// Number of Columns Value
				cbV: 0
			},

			// Html Tags
			tags: {

				// Tag Span
				spanTag: '<span>'
			},

			// Bullets Element
			cbElm: 'cbV_',

			// Chart Displays none Class
			chdn: 'chartDN',

			// Line Opcity Class
			liop: 'linOpc',

			// Chart Column Tool Tip
			chTT: 'blTrTip',

			// Chart ToolTip Template
			chTTemp: '<div class="blTrTip"><span class="tipDate"></span></div>',

			// Chart Dates Templates
			dtTemp: $('<div>', { class: 'datesCh', id: 'datesCh'}),

			// Date Prefix Id
			dtElm: 'dat_',

			// Tool Tip Date Element
			tDtCl: '.blTrTip .tipDate',

			// Actions Element
			pAct: 'ProAc'

		}, chartOpt);

		let sttC = $.extend( true, {

			// To Remove Elements 1
			toRem: '.UserBlue .redBlt, .UserBlue .blackBlt, .UserRed .blackBlt, .UserRed .orangeBlt, .UserGreen .purpleBlt',

			// To Remove Elements 2
			toRem2: '.UserBlue .greenBlt, .UserRed .greenBlt, .UserBlack .greenBlt, .UserBlue .orangeBlt, .UserOrange .purpleBlt',

			// To Remove Elements 3
			toRem3: '.UserBlack .orangeBlt, .UserGreen .orangeBlt, .UserBlue .purpleBlt, .UserRed .purpleBlt, .UserBlack .purpleBlt',

			// Blue Chart Element
			Ubl: 'UserBlue',

			// Red Chart Element
			Urd: 'UserRed',

			// Green Chart Element
			Ugr: 'UserGreen',

			// Black Chart Element
			Ublc: 'UserBlack',

			// Orange Chart Element
			Uorg: 'UserOrange',

			// Purple Chart Element
			Upup: 'UserPurple',

			// Blue Chart Bullet
			UblBll: '.UserBlue .CBullet',

			// Blue Chart Svg Line
			UblSvg: '.UserBlue .svgLine',

			// Red Chart Bullet
			UrdBll: '.UserRed .CBullet',

			// Red Chart Svg line
			UrdSvg: '.UserRed .svgLine',

			// Black Chart Bullet
			UblcBll: '.UserBlack .CBullet',

			// Black Chart Svg Line
			UblcSvg: '.UserBlack .svgLine',

			// Green Chart Bullet
			UgrBll: '.UserGreen .CBullet',

			// Green Chart Svg Line
			UgrSvg: '.UserGreen .svgLine',

			// Orange Chart Bullet
			UorgBll: '.UserOrange .CBullet',

			// Orange Chart Svg Line
			UorgSvg: '.UserOrange .svgLine',

			// Purple Chart Bullet
			UpupBll: '.UserPurple .CBullet',

			// Purple Chart Svg Line
			UpupSvg: '.UserPurple .svgLine'

		}, dfC, chartOpt );


		function rnCht() {

			this._default = dfC; 

			this.ajaxChart();

			this.contChart();
		}


		$.extend( rnCht.prototype, {

			ajaxChart: function() {

				// Ajax Call For Charts Data
				$.ajax({

					type: 'GET',
					url: sttC.data.url,
					datatype: 'json',

					success: function(cdata) { d.ChartsInj(cdata); }

				});
			},

			contChart: function() {

				// Data Injection Function
				$.fn.ChartsInj = function(cdata) {

					// Adds User Report Users Template
					let userT = '';
					for( let i in cdata.users) {

						userT += '<span class="ReportSmallBtn">' + cdata.users[i].name + '</span>'
					}

					// userT Template appends To User Report Element
					$(userT).appendTo('.UserReportBtns');

					// Adding Eight Columns In Chart Platform
					for( let i = 0; i < 8; i++ ) { $(sttC.temp.cBoxT).appendTo('#nChartPl'); }

					// Adding Dynamical Id's To Each Column
					$.fn.cbVRun = function() {
						return this.each(function() {

							$(this).attr({ id: 'cbV_' + sttC.values.cbV });
							sttC.values.cbV++;
						});
					}
					$('.bltr').cbVRun();

					// Adding Four Rows In Chart Platform
					for( let t = 0; t < 4; t++ ) { $('.nChartPl').before(sttC.temp.trT); }

					// Adds Options User Prod Template
					let produsr = '';
		            for( let p in cdata.userProd) {

		            	produsr += '<span class="ProAc ' + cdata.userProd[p].color + '">' + cdata.userProd[p].name + '</span>';
		            }

		            // Options User Prod Appends To ActP_In Element 
		            $(produsr).appendTo('.ActP_In');

		            $('#cbV_7').after(sttC.dtTemp);

		            // User Dates Injection 
		            let dateUser = '';
		            for(let d in cdata.userDates) {

		            	dateUser += '<span class="datChCon" id="dat_' + cdata.userDates[d].id + '" data-date="' + cdata.userDates[d].date + '">' +  cdata.userDates[d].date + '</span>';
		            }

		            // Chart Dates Injection
		            $(dateUser).appendTo('#datesCh');

		            // Chart Toot Tip Injection
		            $(sttC.chTTemp).appendTo('.bltr');

		            // Adds Date For ToolTip 1
		            $('#cbV_0 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 0).html());

		            // Adds Date For ToolTip 2
					$('#cbV_1 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 1).html());

					// Adds Date For ToolTip 3
		        	$('#cbV_2 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 2).html());

		        	// Adds Date For ToolTip 4
		        	$('#cbV_3 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 3).html());

		        	// Adds Date For ToolTip 5
					$('#cbV_4 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 4).html());

					// Adds Date For ToolTip 6
		        	$('#cbV_5 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 5).html());

		        	// Adds Date For ToolTipv 7
					$('#cbV_6 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 6).html());

					// Adds Date For ToolTip 8
		        	$('#cbV_7 ' + sttC.tDtCl).html($('#' + sttC.dtElm + 7).html());


		        	// Cloning Actions
		        	$('.ProAc').clone().appendTo('.blTrTip');

		        	$($(sttC.tags.spanTag, { class: 'ttVal'}).html(0)).appendTo('.blTrTip .ProAc');

					// Adds The Blue Line Chart
		            if($('.' + sttC.pAct).length >= 1) {

		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserBlue');

		            	// Blue Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('blueBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserBlue .blueBlt').css({ bottom: 0 });

		                // Column 1 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 0 + ' .UserBlue .blueBlt').css({ bottom: '22%' }).after(sttC.temp.svgTe);

		                // Column 1 For Blue Trace Class
		                $('#' + sttC.cbElm + + 0 + ' .UserBlue .svgLine').addClass('b0');


		                $('#' + sttC.cbElm + + 0 + ' .blTrTip .trsCl .ttVal').html(520);

		                // Column 2 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 1 + ' .UserBlue .blueBlt').css({ bottom: '33%' }).after(sttC.temp.svgTe);

		                // Column 2 For Blue Trace Class
		                $('#' + sttC.cbElm + + 1 + ' .UserBlue .svgLine').addClass('b1');

		                // Column 3 For B;ue Bullets Animation
		                $('#' + sttC.cbElm + + 2 + ' .UserBlue .blueBlt').css({ bottom: '44.6%' }).after(sttC.temp.svgTe);

		                // Column 3 For Blue Trace Class
						$('#' + sttC.cbElm + + 2 + ' .UserBlue .svgLine').addClass('b2');

		                // Column 4 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 3 + ' .UserBlue .blueBlt').css({ bottom: '17%' }).after(sttC.temp.svgTe);

		                // Column 4 For Blue Trace Class
		                $('#' + sttC.cbElm + + 3 + ' .UserBlue .svgLine').addClass('b3');

		                // Column 5 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 4 + ' .UserBlue .blueBlt').css({ bottom: '60%' }).after(sttC.temp.svgTe);

		                // Column 5 For Blue Trace Class 
		                $('#' + sttC.cbElm + + 4 + ' .UserBlue .svgLine').addClass('b4');

		                // Column 6 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 5 + ' .UserBlue .blueBlt').css({ bottom: '57%' }).after(sttC.temp.svgTe);

		                // Column 6 For Blue Trace ClaSS
		                $('#' + sttC.cbElm + + 5 + ' .UserBlue .svgLine').addClass('b5');

		                // Column 7 For Blue Bullets Aniamtion
		                $('#' + sttC.cbElm + + 6 + ' .UserBlue .blueBlt').css({ bottom: '73%' }).after(sttC.temp.svgTe);

		                // Column 7 For Blue Trace Class
		                $('#' + sttC.cbElm + + 6 + ' .UserBlue .svgLine').addClass('b6');

		                // Column 8 For Blue Bullets Animation
		                $('#' + sttC.cbElm + + 7 + ' .UserBlue .blueBlt').css({ bottom: '19%' });
		           	}
		            
		            // Adds The Red Line Chart
		           	if($('.' + sttC.pAct).length >= 2) {
		                
		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserRed');
		                
		                // Red Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('redBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserRed .redBlt').css({ bottom: 0 });

						// Column 1 For Red Bullets Animation
						$('#' + sttC.cbElm + + 0 + ' .UserRed .redBlt').css({ bottom: '32%' }).after(sttC.temp.svgTe);

						// Column 1 For Red Trace Class
						$('#' + sttC.cbElm + + 0 + ' .UserRed .svgLine').addClass('r0');


						$('#' + sttC.cbElm + + 0 + ' .blTrTip .delCl .ttVal').html(760);

						// Column 2 For Red Bullets Animation
						$('#' + sttC.cbElm + + 1 + ' .UserRed .redBlt').css({ bottom: '15%' }).after(sttC.temp.svgTe);

						// Column 2 For Red Trace Class
						$('#' + sttC.cbElm + + 1 + ' .UserRed .svgLine').addClass('r1');

						// Column 3 Red Bullets Animation
						$('#' + sttC.cbElm + + 2 + ' .UserRed .redBlt').css({ bottom: '69%' }).after(sttC.temp.svgTe);

						// Column 3 For Red Trace Class
						$('#' + sttC.cbElm + + 2 + ' .UserRed .svgLine').addClass('r2');

						// Column 4 Red Bullets Animation
						$('#' + sttC.cbElm + + 3 + ' .UserRed .redBlt').css({ bottom: '10%' }).after(sttC.temp.svgTe);

						// Column 4 Red Trace Class
						$('#' + sttC.cbElm + + 3 + ' .UserRed .svgLine').addClass('r3');

						// Column 5 Red Bullets Animation
						$('#' + sttC.cbElm + + 4 + ' .UserRed .redBlt').css({ bottom: '7%' }).after(sttC.temp.svgTe);

						// Column 5 Red Trace Class
						$('#' + sttC.cbElm + + 4 + ' .UserRed .svgLine').addClass('r4');

						// Column 6 Red Bullets Animation
						$('#' + sttC.cbElm + + 5 + ' .UserRed .redBlt').css({ bottom: '46%' }).after(sttC.temp.svgTe);

						// Column 6 Red Trace Class
						$('#' + sttC.cbElm + + 5 + ' .UserRed .svgLine').addClass('r5');

						// Column 7 Red Bullets Animation
						$('#' + sttC.cbElm + + 6 + ' .UserRed .redBlt').css({ bottom: '32%' }).after(sttC.temp.svgTe);

						// Column 7 Red Trace Class
						$('#' + sttC.cbElm + + 6 + ' .UserRed .svgLine').addClass('r6');

						// Column 8 Red Bullets Animation
						$('#' + sttC.cbElm + + 7 + ' .UserRed .redBlt').css({ bottom: '77%' }).after(sttC.temp.svgTe);
		            }

		            // Adds The Black Line Chart
		            if($('.' + sttC.pAct).length >= 3) {
		                
		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserBlack');
		                
		                // Red Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('blackBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserBlack .blackBlt').css({ bottom: 0 });

						// Column 1 Black Bullets Animation
						$('#' + sttC.cbElm + + 0 + ' .UserBlack .blackBlt').css({ bottom: '80%' }).after(sttC.temp.svgTe);

						// Column 1 Black Trace Class
						$('#' + sttC.cbElm + + 0 + ' .UserBlack .svgLine').addClass('bl0');


						$('#' + sttC.cbElm + + 0 + ' .blTrTip .rejCl .ttVal').html('2,010');

						// Column 2 Black Bullets Animation
						$('#' + sttC.cbElm + + 1 + ' .UserBlack .blackBlt').css({ bottom: '25%' }).after(sttC.temp.svgTe);

						// Column 2 Trace Black Class
						$('#' + sttC.cbElm + + 1 + ' .UserBlack .svgLine').addClass('bl1');

						// Column 3 Black Bullets Animation
						$('#' + sttC.cbElm + + 2 + ' .UserBlack .blackBlt').css({ bottom: '55%' }).after(sttC.temp.svgTe);

						// Column 3 Trace Black Class
						$('#' + sttC.cbElm + + 2 + ' .UserBlack .svgLine').addClass('bl2');

						// Column 4 Black Bullets Aniamtion
						$('#' + sttC.cbElm + + 3 + ' .UserBlack .blackBlt').css({ bottom: '29%' }).after(sttC.temp.svgTe);

						// Column 4 Trace Black Class
						$('#' + sttC.cbElm + + 3 + ' .UserBlack .svgLine').addClass('bl3');

						// Column 5 Black Bullets Animation
						$('#' + sttC.cbElm + + 4 + ' .UserBlack .blackBlt').css({ bottom: '13%' }).after(sttC.temp.svgTe);

						// Column 5 Trace Black Class
						$('#' + sttC.cbElm + + 4 + ' .UserBlack .svgLine').addClass('bl4');

						// Column 6 Black Bullets Animation
						$('#' + sttC.cbElm + + 5 + ' .UserBlack .blackBlt').css({ bottom: '52%' }).after(sttC.temp.svgTe);

						// Column 6 Trace Black Class
						$('#' + sttC.cbElm + + 5 + ' .UserBlack .svgLine').addClass('bl5');

						// Column 7 Black Bullets Animation
						$('#' + sttC.cbElm + + 6 + ' .UserBlack .blackBlt').css({ bottom: '88%' }).after(sttC.temp.svgTe);

						// Column 7 Trace Black Class
						$('#' + sttC.cbElm + + 6 + ' .UserBlack .svgLine').addClass('bl6');

						// Column 8 Black Bullets Animation
						$('#' + sttC.cbElm + + 7 + ' .UserBlack .blackBlt').css({ bottom: '7%' }).after(sttC.temp.svgTe);
		            }

		            // Adds The Green Line Chart
		            if($('.' + sttC.pAct).length >= 4) {
		                
		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserGreen');
		                
		                // Red Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('greenBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserGreen .greenBlt').css({ bottom: 0 });

						// Column 1 Green Bullets Animation
						$('#' + sttC.cbElm + + 0 + ' .UserGreen .greenBlt').css({ bottom: '4%' }).after(sttC.temp.svgTe); // 4%

						// Column 1 Trace Green Class
						$('#' + sttC.cbElm + + 0 + ' .UserGreen .svgLine').addClass('g0');


						$('#' + sttC.cbElm + + 0 + ' .blTrTip .retCl .ttVal').html(122);

						// Column 2 Green Bullets Animation
						$('#' + sttC.cbElm + + 1 + ' .UserGreen .greenBlt').css({ bottom: '50%' }).after(sttC.temp.svgTe);

						// Column 2 Trace Green Class
						$('#' + sttC.cbElm + + 1 + ' .UserGreen .svgLine').addClass('g1');

						// Column 3 Green Bullets Animation
						$('#' + sttC.cbElm + + 2 + ' .UserGreen .greenBlt').css({ bottom: '12%' }).after(sttC.temp.svgTe);

						// Column 3 Trace Green Class
						$('#' + sttC.cbElm + + 2 + ' .UserGreen .svgLine').addClass('g2');

						// Column 4 Green Bullets Animation
						$('#' + sttC.cbElm + + 3 + ' .UserGreen .greenBlt').css({ bottom: '2%' }).after(sttC.temp.svgTe);

						// Column 4 Trace Green Class
						$('#' + sttC.cbElm + + 3 + ' .UserGreen .svgLine').addClass('g3');

						// Column 5 Green Bullets Animation
						$('#' + sttC.cbElm + + 4 + ' .UserGreen .greenBlt').css({ bottom: '66%' }).after(sttC.temp.svgTe);

						// Column 5 Trace Green Class
						$('#' + sttC.cbElm + + 4 + ' .UserGreen .svgLine').addClass('g4');

						// Column 6 Green Bullets Animation
						$('#' + sttC.cbElm + + 5 + ' .UserGreen .greenBlt').css({ bottom: '1%' }).after(sttC.temp.svgTe);

						// Column 6 Trace Green Class
						$('#' + sttC.cbElm + + 5 + ' .UserGreen .svgLine').addClass('g5');

						// Column 7 Green Bullets Animation
						$('#' + sttC.cbElm + + 6 + ' .UserGreen .greenBlt').css({ bottom: '43%' }).after(sttC.temp.svgTe);

						// Column 7 Trace Green Class
						$('#' + sttC.cbElm + + 6 + ' .UserGreen .svgLine').addClass('g6');

						// Column 8 Green Bullets Animation
						$('#' + sttC.cbElm + + 7 + ' .UserGreen .greenBlt').css({ bottom: '53%' }).after(sttC.temp.svgTe);
		            }

		            // Adds The Orange Line Chart
		            if($('.' + sttC.pAct).length >= 5) {
		                
		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserOrange');
		                
		                // Red Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('orangeBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserOrange .orangeBlt').css({ bottom: 0 });

						// Column 1 Orange Bullets Animation
						$('#' + sttC.cbElm + + 0 + ' .UserOrange .orangeBlt').css({ bottom: '54%' }).after(sttC.temp.svgTe);

						// Column 1 Trace Orange Class
						$('#' + sttC.cbElm + + 0 + ' .UserOrange .svgLine').addClass('org0');


						$('#' + sttC.cbElm + + 0 + ' .blTrTip .trPQCl .ttVal').html('1,440');

						// Column 2 Orange Bullets Animation
						$('#' + sttC.cbElm + + 1 + ' .UserOrange .orangeBlt').css({ bottom: '8%' }).after(sttC.temp.svgTe);

						// Column 2 Trace Orange Class
						$('#' + sttC.cbElm + + 1 + ' .UserOrange .svgLine').addClass('org1');

						// Column 3 Orange Bullets Animation
						$('#' + sttC.cbElm + + 2 + ' .UserOrange .orangeBlt').css({ bottom: '24%' }).after(sttC.temp.svgTe);

						// Column 3 Trace Orange Class
						$('#' + sttC.cbElm + + 2 + ' .UserOrange .svgLine').addClass('org2');

						// Column 4 Orange Bullets Animation
						$('#' + sttC.cbElm + + 3 + ' .UserOrange .orangeBlt').css({ bottom: '79%' }).after(sttC.temp.svgTe);

						// Column 4 Trace Orange Class
						$('#' + sttC.cbElm + + 3 + ' .UserOrange .svgLine').addClass('org3');

						// Column 5 Orange Bullets Animation
						$('#' + sttC.cbElm + + 4 + ' .UserOrange .orangeBlt').css({ bottom: '32%' }).after(sttC.temp.svgTe);

						// Column 5 Trace Orange Class
						$('#' + sttC.cbElm + + 4 + ' .UserOrange .svgLine').addClass('org4');

						// Column 6 Orange Bullets Animation
						$('#' + sttC.cbElm + + 5 + ' .UserOrange .orangeBlt').css({ bottom: '36%' }).after(sttC.temp.svgTe);

						// Column 6 Trace Orange Class
						$('#' + sttC.cbElm + + 5 + ' .UserOrange .svgLine').addClass('org5');

						// Column 7 Orange Bullets Animation
						$('#' + sttC.cbElm + + 6 + ' .UserOrange .orangeBlt').css({ bottom: '1%' }).after(sttC.temp.svgTe);

						// Column 7 Trace Orange Class
						$('#' + sttC.cbElm + + 6 + ' .UserOrange .svgLine').addClass('org6');

						// Column 8 Orange Bullets Animation
						$('#' + sttC.cbElm + + 7 + ' .UserOrange .orangeBlt').css({ bottom: '41%' }).after(sttC.temp.svgTe);
		            }

		            // Adds The Purple Line Chart
		            if($('.' + sttC.pAct).length >= 6) {
		                
		                // User Element add Attr Id UserBlue
		                $(sttC.temp.usd).appendTo('.mh').addClass('UserPurple');
		                
		                // Red Bullets appends in All .mh Elements
						$(sttC.temp.bullTm).appendTo('.UserDok').addClass('purpleBlt');
		                
		                // CSS For Default Bullet
						$('.mh .UserPurple .purpleBlt').css({ bottom: 0 });

						// Column 1 Purple Bullets Animation
						$('#' + sttC.cbElm + + 0 + ' .UserPurple .purpleBlt').css({ bottom: '95%' }).after(sttC.temp.svgTe);

						// Column 1 Trace Purple Class
						$('#' + sttC.cbElm + + 0 + ' .UserPurple .svgLine').addClass('pr0');


						$('#' + sttC.cbElm + + 0 + ' .blTrTip .trxCl .ttVal').html('2,470');

						// Column 2 Purple Bullets Animation
						$('#' + sttC.cbElm + + 1 + ' .UserPurple .purpleBlt').css({ bottom: '63%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 1 + ' .UserPurple .svgLine').addClass('pr1');

						// Column 3 Purple Bullets Animation
						$('#' + sttC.cbElm + + 2 + ' .UserPurple .purpleBlt').css({ bottom: '79%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 2 + ' .UserPurple .svgLine').addClass('pr2');

						// Column 4 Purple Bullets Animation
						$('#' + sttC.cbElm + + 3 + ' .UserPurple .purpleBlt').css({ bottom: '45%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 3 + ' .UserPurple .svgLine').addClass('pr3');

						// Column 5 Purple Bullets Animation
						$('#' + sttC.cbElm + + 4 + ' .UserPurple .purpleBlt').css({ bottom: '38%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 4 + ' .UserPurple .svgLine').addClass('pr4');

						// Column 6 Purple Bullets Animation
						$('#' + sttC.cbElm + + 5 + ' .UserPurple .purpleBlt').css({ bottom: '88%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 5 + ' .UserPurple .svgLine').addClass('pr5');

						// Column 7 Purple Bullets Animation
						$('#' + sttC.cbElm + + 6 + ' .UserPurple .purpleBlt').css({ bottom: '19%' }).after(sttC.temp.svgTe);

						$('#' + sttC.cbElm + + 6 + ' .UserPurple .svgLine').addClass('pr6');

						// Column 8 Purple Bullets Animation
						$('#' + sttC.cbElm + + 7 + ' .UserPurple .purpleBlt').css({ bottom: '62%' }).after(sttC.temp.svgTe);
		            }

		            // Cleans Document
		            $(sttC.toRem).add(sttC.toRem2).add(sttC.toRem3).remove(); 

		            // Global Mouseover / MouseLeave Event
					$.fn.OverM = function() {
						return this.on('mouseover', '.ActP_In .trsCl', function() {

							$(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .trsCl', function() {

							$(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: ''});
							$(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.ActP_In .delCl', function() {

							$(sttC.UblBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UblSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .delCl', function() {

							$(sttC.UblBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: ''});
							$(sttC.UblSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.ActP_In .rejCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .rejCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UgrBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: ''});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.ActP_In .retCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .retCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UorgBll).add(sttC.UpupBll).css({ background: ''});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UorgSvg).add(sttC.UpupSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.ActP_In .trPQCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UpupBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UpupSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .trPQCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UpupBll).css({ background: ''});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UpupSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.ActP_In .trxCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).css({ background: 'rgba(238, 238, 238, .5)'});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).css({ 'border-bottom': '2px solid rgba(238, 238, 238, .5)'});

						}).on('mouseleave', '.ActP_In .trxCl', function() {

							$(sttC.UblBll).add(sttC.UrdBll).add(sttC.UblcBll).add(sttC.UgrBll).add(sttC.UorgBll).css({ background: ''});
							$(sttC.UblSvg).add(sttC.UrdSvg).add(sttC.UblcSvg).add(sttC.UgrSvg).add(sttC.UorgSvg).css({ 'border-bottom': ''});

						}).on('mouseover', '.bltr', function() {

							$('.' + sttC.chTT).hide();
							$('.' + sttC.chTT, this).show();

						})

						.on('mouseleave', '.bltr', function() { 

							$('.' + sttC.chTT).hide(); 

						})

						.on('mouseover', '#cbV_' + 0, function() {

							$('.' + sttC.chTT).hide();
							$('.' + sttC.chTT, this).show().css({ right: 0, left: '77px'});

						})

						.on('mouseleave', '#cbV_' + 0, function() {

							$('.' + sttC.chTT, this).show().css({ right: '', left: '', display: 'none'});

						});
					}

					d.OverM();


					// Global Click
					$.fn.chartGCl = function() {
						return this.on(ck, '*', function() {

							let cClass = $(this)[0].className;

							if(cClass.indexOf('trsCl') != -1) {

								$('.' + sttC.Ubl).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

							else if(cClass.indexOf('delCl') != -1) {

								$('.' + sttC.Urd).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

							else if(cClass.indexOf('rejCl') != -1) {

								$('.' + sttC.Ublc).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

							else if(cClass.indexOf('retCl') != -1) {

								$('.' + sttC.Ugr).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

							else if(cClass.indexOf('trPQCl') != -1) {

								$('.' + sttC.Uorg).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

							else if(cClass.indexOf('trxCl') != -1) {

								$('.' + sttC.Upup).toggleClass(sttC.chdn);
								$(this).toggleClass(sttC.liop);
							}

						});
					}

					d.chartGCl();
				}

			}

		});

		let rnc = new rnCht();

	}

	d.ACharts();

});