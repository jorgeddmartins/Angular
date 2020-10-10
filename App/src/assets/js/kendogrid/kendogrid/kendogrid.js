
// var pathname = window.location.pathname; // Returns path only (/path/example.html)
// var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
// var origin   = window.location.origin;   // Returns base URL (https://example.com)


// Document Element
let dc = $(document);

$(function() {

	$.fn.allKendo = function(options) {
		
		var pluginName = "KendoOpt";
		
		var dafaultRt = $.extend({

			delElm: '.From_0, .From_2, .From_3, .To_0, .To_2, .To_3, .Pr_0, .Gd_0, .clFrom_0, .clTo_0, .lS_0, .mRc_0, .per_0, .per_2, .per_3, .lid_0, .subm_0, .ag_0, .Adj_0, .subAff_0, .lev_0, .pos_0, .repty_0, .band_0, #MerchantRestrictionConfigTabs-2 .Pr_1, #MerchantRestrictionConfigTabs-3 .Pr_2, #MerchantRestrictionConfigTabs-4 .Pr_3, #MerchantRestrictionConfigTabs-5 .Pr_4, .user_0',
			
			icR: '.periStat:nth-child(+n4), .pickerStat:nth-child(+n3), .prodStat:nth-child(+n4), .merchantStat:nth-child(+n4), .leadsourceStat:nth-child(+n4), .gendStat:nth-child(+n4), .clockFromStat:nth-child(+n4), .clockToStat:nth-child(+n4), .leadIdStat:nth-child(+n6), .submStat:nth-child(+n4), .subAffStat:nth-child(4), .levelStat:nth-child(4), .posiStat:nth-child(4), .reptyStat:nth-child(4), .bandStat:nth-child(4), .userStat:nth-child(4)',
			
			// Routing For All Screen
			routing: {

				// Window Location
				WinLocation: window.location.pathname,
				
				// Search Bar Element
				sTitle: $('#searchbar H4'),
			},
			
			// Templates
			temp: {
				
				// Tool Tips Template
				cFTip: '<span class="searchTip"></span>',
				
				// Icon Drop Down Template
				spanT: '<span class="dropToolTip"></span>'
			},
			
			// Default From Date ToolTip Text
			dateFromTip: 'Date From',
			
			// Default From Date ToolTip BackGround
			dateFromBack: '#ebedf0',
			
			// Default From Date ToolTip Color
			dateFromColor: '#777',
			
			// Default Moves From Date ToolTip To Left 
			FromLeft: '-7px',
			
			// Default To Date ToolTip Text
			dateToTip: 'Date To',
			
			// Default To Date ToolTip BackGround
			dateToBack: '#ebedf0',
			
			// Default To Date ToolTip Color
			dateToColor: '#777',
			
			// Default Moves To Date ToolTip To Left
			ToLeft: '0',
			
			// Default Product ToolTip Text
			prodTip: 'Product',
			
			// Default Product ToolTip BackGround
			prodBack: '#ebedf0',
			
			// Default Product ToolTip Color
			prodColor: '#777',
			
			// Default Moves Product ToolTip To Left
			prodLeft: '0',
			
			// Gender ToolTip Text
			gendTip: 'Gender',
			
			// Gender ToolTip BackGround
			gendBack: '#ebedf0',
			
			// Gender ToolTip Color
			gendColor: '#777',
			
			// Gender ToolTip To Left
			gendLeft: '0',
			
			
			clFromTip: 'Created Hour From',
			
			clFromBack: '#ebedf0',
			
			clFromColor: '#777',
			
			clFromLeft: '0',
			
			
			clToTip: 'Created Hour To',
			
			clToBack: '#ebedf0',
			
			clToColor: '#777',
			
			clToLeft: '0',
			
			
			lSTip: 'Lead Source',
			
			lSBack: '#ebedf0',
			
			lSColor: '#777',
			
			lSLeft: '0',
			
			
			mRcTip: 'Merchant',
			
			mRcBack: '#ebedf0',
			
			mRcColor: '#777',
			
			mRcLeft: '0',
			
			
			periTip: 'Period',
			
			periBack: '#ebedf0',
			
			periColor: '#777',
			
			periLeft: '0',
			
			
			lidTip: 'Lead Id',
			
			lidBack: '#ebedf0',
			
			lidColor: '#777',
			
			lidLeft: '0',
			
			
			submTip: 'Use Creation or Transmition Date for Report',
			
			submBack: '#ebedf0',
			
			submColor: '#777',
			
			submLeft: '0',
			
			
			agTip: 'Age Group',
			
			agBack: '#ebedf0',
			
			agColor: '#777',
			
			agLeft: '0',
			
			
			adjTip: 'Adjusted On',
			
			adjBack: '#ebedf0',
			
			adjColor: '#777',
			
			
			adjLeft: '0',
			
			
			pGpBack: '#ebedf0',
			
			pGpColor: '#777',
			
			pGpLeft: '0',
			
			
			pLeadsBack: '#ebedf0',
			
			pLeadsColor: '#777',
			
			pLeadsLeft: '0',
			
			
			roiBack: '#ebedf0',
			
			roiColor: '#777',
			
			roiLeft: '0',
			
			
			subAffTip: 'Select SubAffiliate ID',
			
			subAffBack: '#ebedf0',
			
			subAffColor: '#777',
			
			subAffLeft: '0',
			
			
			levTip: 'Level',
			
			levBack: '#ebedf0',
			
			levColor: '#777',
			
			levLeft: '0',
			
			
			posTip: 'Level',
			
			posBack: '#ebedf0',
			
			posColor: '#777',
			
			posLeft: '0',
			
			
			reptyTip: 'Time Frame',
			
			reptyBack: '#ebedf0',
			
			reptyColor: '#777',
			
			reptyLeft: '0',
			
			
			bandTip: 'Age Banding',
			
			bandBack: '#ebedf0',
			
			bandColor: '#777',
			
			bandLeft: '0',
			
			
			userTip: 'Age Banding',
			
			userBack: '#ebedf0',
			
			userColor: '#777',
			
			userLeft: '0',
			
			
			// Value To Run From Date
			valFrom: 0,
			
			// Value To Run To Date
			valTo: 0,
			
			// Value To Run Product
			valPrd: 0,
			
			// value To Run Gender
			valGed: 0,
			
			valclF: 0,
			
			valclT: 0,
			
			vallS: 0,
			
			valmRc: 0,
			
			valper: 0,
			
			vallid: 0,
			
			valsub: 0,
			
			valag: 0,
			
			valAdj: 0,
			
			valsubAff: 0,
			
			vallev: 0,
			
			valpos: 0,
			
			valrepty: 0,
			
			valband: 0,
			
			valuser: 0,
			
			color: {
				
				// Default Icon Color
				deft: '#0A9A7A',
				
				// Red Color
				del: '#ff0000',
				
				// Orange Color
				reject: '#e59400',
				
				// Purple Color
				retain: '#800080'
			},
			
			runApp: true,
			
			// Stops Buttons MouseOver
			runBtnOver: true
			
		}, options)
		
		let settings = $.extend( true, {}, dafaultRt, options );

		function kGrid() {
			
			this._name = pluginName;
			
			// Runs the Grid Logic Prototype Function
			this.gridLogic(); 
			
			dc.overTipsFrom();
			
			dc.overTipsTo();
			
			dc.overTipsProd();
			
			dc.overTipsGender();
			
			dc.overTipsClockFrom();
			
			dc.overTipsClockTo();
			
			dc.overTipsLeadSource();
			
			dc.overTipsMerchant();
			
			dc.overTipsPeriod();
			
			dc.overTipsLeadId();
		}

		$.extend( kGrid.prototype, {
			
			gridLogic: function() {
				
				// Period Icon Drop Down Injection
				$(settings.temp.spanT).addClass('periStat fad').appendTo('.periStatH .k-widget.k-dropdown');
				
				// Date Picker Date From Icon Drop Down Injection
				$(settings.temp.spanT).addClass('pickerStat pckFrom fas').appendTo('.pckFromH .k-widget.k-datepicker, .pckFromH .k-widget.k-datetimepicker');
				
				// Date Picker Date To Icon Drop Down Injection
				$(settings.temp.spanT).addClass('pickerStat pckTo fas').appendTo('.pckToH .k-widget.k-datepicker, .pckToH .k-widget.k-datetimepicker');
				
				// Date Picker Adjust On Icon Drop Down
				$(settings.temp.spanT).addClass('pickerStat adjOn fas').appendTo('.adjOnH .k-widget.k-datepicker');
				
				// Product Icon Drop Down Injection
				$(settings.temp.spanT).addClass('prodStat fas').appendTo('.prodStatH .k-widget.k-dropdown');
				
				// Merchant Icon Drop Down Injection
				$(settings.temp.spanT).addClass('merchantStat fad').appendTo('.merchantStatH .k-widget.k-dropdown');
				
				// Lead Source Icon Drop Down Injection
				$(settings.temp.spanT).addClass('leadsourceStat fad').appendTo('.leadsourceStatH .k-widget.k-dropdown');
				
				// Gender Icon Drop Down Injection
				$(settings.temp.spanT).addClass('gendStat fad').appendTo('.gendStatH .k-widget.k-dropdown');
				
				// Clock Time From Icon Drop Down Injection
				$(settings.temp.spanT).addClass('clockFromStat fas').appendTo('.clockFromStatH .k-widget.k-dropdown');
				
				// Clock Time To Icon Drop Down Injection
				$(settings.temp.spanT).addClass('clockToStat far').appendTo('.clockToStatH .k-widget.k-dropdown');
				
				// LeadId Icon Drop Down
				$(settings.temp.spanT).addClass('leadIdStat fad').appendTo('.leadIdStatH .k-widget.k-numerictextbox .k-numeric-wrap');
				
				// Submition Date Icon Drop Down
				$(settings.temp.spanT).addClass('submStat fad').appendTo('.submStatH .k-widget.k-dropdown');
				
				// Sub Affiliate Icon Drop Down
				$(settings.temp.spanT).addClass('subAffStat far').appendTo('.subAffStatH .k-widget.k-dropdown');
				
				// Level Icon Drop Down
				$(settings.temp.spanT).addClass('levelStat fas').appendTo('.levelStatH .k-widget.k-dropdown');
				
				// Position Icon Drop Down
				$(settings.temp.spanT).addClass('posiStat fas').appendTo('.posiStatH .k-widget.k-dropdown');
				
				// Report Type Icon Drop Down
				$(settings.temp.spanT).addClass('reptyStat fas').appendTo('.reptyStatH .k-widget.k-dropdown');
				
				// Band Icon Drop Down
				$(settings.temp.spanT).addClass('bandStat fas').appendTo('.bandStatH .k-widget.k-dropdown');
				
				// User Icon Drop Down
				$(settings.temp.spanT).addClass('userStat fad').appendTo('.userStatH .k-widget.k-dropdown');
				
				// Removes All Elements are not needed from the Doc.
				$(settings.icR).remove();
				
				// Adds Class To Change Icons Colors
				$('.k-datepicker .k-icon, .k-pager-refresh .k-icon, .k-pager-nav .k-icon, .k-datetimepicker .k-link').addClass('chagClr');
				
				$('#id-65').addClass('fStatus');
				
				$('#id-66').addClass('fStatusD');
				
				$('#id-67').addClass('fStatusM');
				
				$('#id-89').addClass('fStatusDM'); 
								
				// From Date ToolTip Injection
				$(settings.temp.cFTip).addClass('tipFrom').html(settings.dateFromTip).css({
					
					//background: settings.dateFromBack, 
					color: settings.dateFromColor,
					left: settings.FromLeft
					
				}).appendTo('.pckFrom');
				$('.tipFrom').each(function() { $(this).addClass('From_' + settings.valFrom); settings.valFrom++; });
				
				// To Date ToolTip Injection
				$(settings.temp.cFTip).addClass('tipTo').html(settings.dateToTip).css({
					
					//background: settings.dateToBack, 
					color: settings.dateToColor,
					left: settings.ToLeft
					
				}).appendTo('.pckTo');
				$('.tipTo').each(function() { $(this).addClass('To_' + settings.valTo); settings.valTo++; });
				
				// Adjusted On ToolTip Injection
				$(settings.temp.cFTip).addClass('tipAdj').html(settings.adjTip).css({
					
					//background: settings.adjBack, 
					color: settings.adjColor,
					left: settings.adjLeft
					
				}).appendTo('.adjOn');
				$('.tipAdj').each(function() { $(this).addClass('Adj_' + settings.valAdj); settings.valAdj++; });
				
				// Product ToolTip Injection
				$(settings.temp.cFTip).addClass('prodTip').html(settings.prodTip).css({
					
					//background: settings.prodBack,
					color: settings.prodColor,
					left: settings.prodLeft
					
				}).appendTo('.prodStat');
				$('.prodTip').each(function() { $(this).addClass('Pr_' + settings.valPrd); settings.valPrd++; });
				
				// Gender ToolTip Inhection
				$(settings.temp.cFTip).addClass('gendTip').html(settings.gendTip).css({ 
				
					//background: settings.gendBack, 
					color: settings.gendColor, 
					left: settings.gendLeft
					
				}).appendTo('.gendStat');
				$('.gendTip').each(function() { $(this).addClass('Gd_' + settings.valGed); settings.valGed++; });
				
				// ClockFrom ToolTip Injection
				$(settings.temp.cFTip).addClass('clockFromTip').html(settings.clFromTip).css({ 
				
					//background: settings.clFromBack, 
					color: settings.clFromColor, 
					left: settings.clFromLeft
					
				}).appendTo('.clockFromStat');
				$('.clockFromTip').each(function() { $(this).addClass('clFrom_' + settings.valclF); settings.valclF++; });
				
				// ClockTo ToolTip Injection
				$(settings.temp.cFTip).addClass('clockToTip').html(settings.clToTip).css({ 
				
					//background: settings.clToBack, 
					color: settings.clToColor, 
					left: settings.clToLeft
					
				}).appendTo('.clockToStat');
				$('.clockToTip').each(function() { $(this).addClass('clTo_' + settings.valclT); settings.valclT++; });
				
				// LeadSource ToolTip Injection
				$(settings.temp.cFTip).addClass('leadSourceTip').html(settings.lSTip).css({ 
				
					//background: settings.lSBack, 
					color: settings.lSColor, 
					left: settings.lSLeft
					
				}).appendTo('.leadsourceStat');
				$('.leadSourceTip').each(function() { $(this).addClass('lS_' + settings.vallS); settings.vallS++; });
				
				// Merchant ToolTip Injection
				$(settings.temp.cFTip).addClass('merchantTip').html(settings.mRcTip).css({ 
				
					//background: settings.mRcBack, 
					color: settings.mRcColor, 
					left: settings.mRcLeft
					
				}).appendTo('.merchantStat');
				$('.merchantTip').each(function() { $(this).addClass('mRc_' + settings.valmRc); settings.valmRc++; });
				
				// Period ToolTip Injection
				$(settings.temp.cFTip).addClass('periTip').html(settings.periTip).css({ 
				
					//background: settings.periBack, 
					color: settings.periColor, 
					left: settings.periLeft
					
				}).appendTo('.periStat');
				$('.periTip').each(function() { $(this).addClass('per_' + settings.valper); settings.valper++; });
				
				// LeadId ToolTip Injection
				$(settings.temp.cFTip).addClass('leadIdTip').html(settings.lidTip).css({ 
				
					//background: settings.lidBack, 
					color: settings.lidColor, 
					left: settings.lidLeft
					
				}).appendTo('.leadIdStat');
				$('.leadIdTip').each(function() { $(this).addClass('lid_' + settings.vallid); settings.vallid++; });
				
				// Submition Date ToolTip Injection
				$(settings.temp.cFTip).addClass('submTip').html(settings.submTip).css({ 
				
					//background: settings.submBack, 
					color: settings.submColor, 
					left: settings.submLeft
					
				}).appendTo('.submStat');
				$('.submTip').each(function() { $(this).addClass('subm_' + settings.valsub); settings.valsub++; });
				
				// Age Group ToolTip Injection
				$('.AgeGroup').after($(settings.temp.cFTip).addClass('agTip').html(settings.agTip).css({ 
				
					//background: settings.agBack, 
					color: settings.agColor, 
					left: settings.agLeft
					
				}))
				$('.agTip').each(function() { $(this).addClass('ag_' + settings.valag); settings.valag++; });
				
				// Sub Affiliate ToolTip Injection
				$(settings.temp.cFTip).addClass('subAffTip').html(settings.subAffTip).css({ 
				
					//background: settings.subAffBack, 
					color: settings.subAffColor, 
					left: settings.subAffLeft
					
				}).appendTo('.subAffStat');
				$('.subAffTip').each(function() { $(this).addClass('subAff_' + settings.valsubAff); settings.valsubAff++; });
				
				// Level ToolTip Injection
				$(settings.temp.cFTip).addClass('levelTip').html(settings.levTip).css({ 
				
					//background: settings.levBack, 
					color: settings.levColor, 
					left: settings.levLeft
					
				}).appendTo('.levelStat');
				$('.levelTip').each(function() { $(this).addClass('lev_' + settings.vallev); settings.vallev++; });
				
				// Position ToolTip Injection
				$(settings.temp.cFTip).addClass('positionTip').html(settings.posTip).css({ 
				
					//background: settings.posBack, 
					color: settings.posColor, 
					left: settings.posLeft
					
				}).appendTo('.posiStat');
				$('.positionTip').each(function() { $(this).addClass('pos_' + settings.valpos); settings.valpos++; });
			
				$(settings.temp.cFTip).addClass('reptyTip').html(settings.reptyTip).css({ 
				
					//background: settings.reptyBack, 
					color: settings.reptyColor, 
					left: settings.reptyLeft
					
				}).appendTo('.reptyStat');
				$('.reptyTip').each(function() { $(this).addClass('repty_' + settings.valrepty); settings.valrepty++; });
				
				$(settings.temp.cFTip).addClass('bandTip').html(settings.bandTip).css({ 
				
					//background: settings.bandBack, 
					color: settings.bandColor, 
					left: settings.bandLeft
					
				}).appendTo('.bandStat');
				$('.bandTip').each(function() { $(this).addClass('band_' + settings.valband); settings.valband++; });
				
				$(settings.temp.cFTip).addClass('userTip').html(settings.userTip).css({ 
				
					//background: settings.userBack, 
					color: settings.userColor, 
					left: settings.userLeft
					
				}).appendTo('.userStat');
				$('.userTip').each(function() { $(this).addClass('user_' + settings.valuser); settings.valuser++; });
				
				// Gp Profit ToolTip Injection
				$(settings.temp.cFTip).addClass('gpTip').html('Gp').css({ 
				
					//background: settings.pGpBack, 
					color: settings.pGpColor, 
					left: 0
					
				}).appendTo('.FinancialsProfitLoss .profitGp, .AccountsSourcePL .profitGp');
				
				// Leads Profit ToolTip Injection
				$(settings.temp.cFTip).addClass('pLeadsTip').html('Leads').css({ 
				
					//background: settings.pLeadsBack, 
					color: settings.pLeadsColor, 
					left: 0
					
				}).appendTo('.FinancialsProfitLoss .profitLeads, .AccountsSourcePL .profitLeads');
				
				// Roi Profit ToolTip Injection
				$(settings.temp.cFTip).addClass('RoiTip').html('Roi').css({ 
				
					//background: settings.roiBack, 
					color: settings.roiColor, 
					//left: settings.roiLeft
					left: 0
					
				}).appendTo('.FinancialsProfitLoss .profitRoi, .AccountsSourcePL .profitRoi');
				
				
				/**********************************************************************************/
				/********************** Start Id's for General Settings ***************************/
				/**********************************************************************************/
				
				$('#GSettings input[name="NavIcons"]').attr({ id: 'leftNavpicker' });
				
				$('#GSettings input[name="SectionTitles"]').attr({ id: 'secTtilespicker' });
				
				$('#GSettings input[name="NavHeading"]').attr({ id: 'navHeading' });
				
				$('#GSettings input[name="NavSubheading"]').attr({ id: 'navSubHeading' });
				
				$('#GSettings input[name="GeneralIcons"]').attr({ id: 'globalpicker' });
				
				$('#GSettings input[name="CalendarIcons"]').attr({ id: 'calpicker' });
				
				$('#GSettings input[name="GridTabs"]').attr({ id: 'tabspicker' });
				
				$('#GSettings input[name="NavBackground"]').attr({ id: 'NavBackground' });
				
				$('#GSettings input[name="IconBackground"]').attr({ id: 'IconBackground' });
				
				$('#GSettings input[name="IconColor"]').attr({ id: 'IconColor' });
				
				$('#GSettings input[name="NavSubBackground"]').attr({ id: 'NavSubBackground' });
				
				$('#GSettings input[name="NavChildSubBackground"]').attr({ id: 'NavChildSubBackground' });
							
				/**********************************************************************************/
				/************************ End Id's for General Settings ***************************/
				/**********************************************************************************/
	
				
				// Runs Search Bar Prototype Function
				this.searchRouting();
				
				// Runs All Mouse Events Prototype Function
				this.mouseEvents();
			},
			
			// Search Bar Routing
			searchRouting: function() {
				
				// Title For Capture Total 
				if(dafaultRt.routing.WinLocation === '/Reports/CaptureTotals' 
					|| dafaultRt.routing.WinLocation === '/reports/capturetotals') {
						
					dafaultRt.routing.sTitle.html( $('#id-16 a').html() + ':' );
					$('html').addClass('CaptureTotals');
					$('.CaptureTotals title').text($('#id-16 a').text());
				}
				
				// Title For Distribution Totals
				else if(dafaultRt.routing.WinLocation === '/Reports/DistributionTotals' 
					|| dafaultRt.routing.WinLocation === '/reports/distributiontotals') {
					
					dafaultRt.routing.sTitle.html( $('#id-17 a').html() + ':' );
					$('html').addClass('DistributionTotals');
					$('.DistributionTotals title').text($('#id-17 a').text());
				}
				
				// Title For Lead Volume Report
				else if(dafaultRt.routing.WinLocation === '/Reports/LeadVolumeReport' 
					|| dafaultRt.routing.WinLocation === '/reports/leadvolumereport') {
					
					dafaultRt.routing.sTitle.html( $('#id-18 a').html() + ':' );
					$('html').addClass('LeadVolumeReport');
					$('.LeadVolumeReport title').text($('#id-18 a').text());
				}
				
				// Title For Distibution Totals And M Queued
				else if(dafaultRt.routing.WinLocation === '/Reports/DistributionTotalsAndMQueued' 
					 || dafaultRt.routing.WinLocation === '/Reports/DistributionTotalsAndMQueued2' 
					 || dafaultRt.routing.WinLocation === '/reports/distributiontotalsandmqueued') {
					
					dafaultRt.routing.sTitle.html( $('#id-128 a').html() + ':' );
					$('html').addClass('DistributionTotalsAndMQueued');
					$('.DistributionTotalsAndMQueued title').text($('#id-128 a').text());
				}
				
				// Title For Affiliate Reconciliation Report
				else if(dafaultRt.routing.WinLocation === '/FinancialAffiliate/AffiliateReconciliationReport' 
					|| dafaultRt.routing.WinLocation === '/financialaffiliate/affiliatereconciliationreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-121 a').html() + ':' );
					$('html').addClass('AffiliateReconciliationReport');
					$('.AffiliateReconciliationReport title').text($('#id-121 a').text());
				}
				
				// Title For Outcode Totals
				else if(dafaultRt.routing.WinLocation === '/Reports/OutcodeTotals' 
					|| dafaultRt.routing.WinLocation === '/reports/outcodetotals') {
					
					dafaultRt.routing.sTitle.html( $('#id-147 a').html() + ':' );
					$('html').addClass('OutcodeTotals');
					$('.OutcodeTotals title').text($('#id-147 a').text());
				}
				
				// Title For Digital Report
				else if(dafaultRt.routing.WinLocation === '/Reports/DigitalReport' 
					|| dafaultRt.routing.WinLocation === '/reports/digitalreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-148 a').html() + ':' );
					$('html').addClass('DigitalReport');
					$('.DigitalReport title').text($('#id-148 a').text());
				}
				
				// Title For Hourly capture Report
				else if(dafaultRt.routing.WinLocation === '/Reports/HourlyCaptureReport' 
					|| dafaultRt.routing.WinLocation === '/reports/hourlycapturereport') {
					
					dafaultRt.routing.sTitle.html( $('#id-123 a').html() + ':' );
					$('html').addClass('HourlyCaptureReport');
					$('.HourlyCaptureReport title').text($('#id-123 a').text());
				}
				
				// Title For Hourly Mini Dashboard
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/MiniDashboard' 
					|| dafaultRt.routing.WinLocation === '/financialsprofitloss/minidashboard') {
					
					dafaultRt.routing.sTitle.html( $('#id-127 a').html());
					$('html').addClass('MiniDashboard');
					$('.MiniDashboard title').text($('#id-127 a').text());
				}
				
				// Title For Merchant Details
				else if(dafaultRt.routing.WinLocation === '/Merchants/Index'
					|| dafaultRt.routing.WinLocation === '/Merchants/index') {
					
					dafaultRt.routing.sTitle.html( $('#id-40 a').html() + ':' );
					$('html').addClass('MerchantDetails');
					$('.MerchantDetails title').text($('#id-40 a').text());
				}
				
				// Title For Delivery Rotation
				else if(dafaultRt.routing.WinLocation === '/Rotation/Index' 
					|| dafaultRt.routing.WinLocation === '/Rotation' 
					|| dafaultRt.routing.WinLocation === '/rotation') {
					
					dafaultRt.routing.sTitle.html( $('#id-41 a').html());
					$('html').addClass('DeliveryRotation');
					$('.DeliveryRotation title').text($('#id-41 a').text());
				}
				
				// Title For Rejection Reasons
				else if(dafaultRt.routing.WinLocation === '/RejectionRetainReasons/index' 
					|| dafaultRt.routing.WinLocation === '/RejectionRetainReasons' 
					|| dafaultRt.routing.WinLocation === '/RejectionRetainReasons/Index' 
					|| dafaultRt.routing.WinLocation === '/rejectionretainreasons') {
					
					dafaultRt.routing.sTitle.html( $('#id-42 a').html());
					$('html').addClass('RejectionReasons');
					$('.RejectionReasons title').text($('#id-42 a').text());
				}
				
				// Title For FeedBack Status
				else if(dafaultRt.routing.WinLocation === '/LeadQFeedbackStatus/Index' 
					|| dafaultRt.routing.WinLocation === '/LeadQFeedbackStatus' 
					|| dafaultRt.routing.WinLocation === '/LeadQFeedbackStatus/index' 
					|| dafaultRt.routing.WinLocation === '/leadqfeedbackstatus') {
					
					dafaultRt.routing.sTitle.html( $('.fStatus a').html() + ':');
					$('html').addClass('fStatusBody');
					$('.fStatusBody title').text($('.fStatus a').text());
				}
				
				// Title For FeedBack Status Details
				else if(dafaultRt.routing.WinLocation === '/LeadQFeedbackStatusDetails/Index' 
					|| dafaultRt.routing.WinLocation === '/LeadQFeedbackStatusDetails' 
					|| dafaultRt.routing.WinLocation === '/LeadQFeedbackStatusDetails/index' 
					|| dafaultRt.routing.WinLocation === '/leadqfeedbackstatusdetails') {
					
					dafaultRt.routing.sTitle.html( $('.fStatusD a').html() + ':');
					$('html').addClass('fStatusDBody');
					$('.fStatusDBody title').text($('.fStatusD a').text());
				}
				
				// Title For Logs
				else if(dafaultRt.routing.WinLocation === '/Logs/LeadsLogs' 
					|| dafaultRt.routing.WinLocation === '/logs/leadslogs') {
					
					dafaultRt.routing.sTitle.html( $('#id-45 a').html() + ':');
					$('html').addClass('Logs');
					$('.Logs title').text($('#id-45 a').text());
				}
				
				// Title For Retain Reasons
				else if(dafaultRt.routing.WinLocation === '/RejectionRetainReasons/RetainReason' 
					|| dafaultRt.routing.WinLocation === '/rejectionretainreasons/retainreason') {
					
					dafaultRt.routing.sTitle.html( $('#id-126 a').html());
					$('html').addClass('RetainReasons');
					$('.RetainReasons title').text($('#id-126 a').text());
				}
				
				// Title For Offer List
				else if(dafaultRt.routing.WinLocation === '/OfferItAffiliate/OfferItOffers' 
					|| dafaultRt.routing.WinLocation === '/offerItaffiliate/offeritOffers') {
					
					dafaultRt.routing.sTitle.html( $('#id-117 a').html());
					$('html').addClass('OfferList');
					$('.OfferList title').text($('#id-117 a').text());
				}
				
				// Title For Native Platform Management
				else if(dafaultRt.routing.WinLocation === '/Financials/ContextualTags' 
					|| dafaultRt.routing.WinLocation === '/financials/contextualtags') {
					
					dafaultRt.routing.sTitle.html( $('#id-49 a').html());
					$('html').addClass('NativePlatform');
					$('.NativePlatform #searchbar .fa.fa-angle-down').detach();
					$('.NativePlatform title').text($('.NativePlatform #searchbar H4').text());
				}
				
				// Title For Social Platform Management
				else if(dafaultRt.routing.WinLocation === '/Financials/SocialTags' 
					|| dafaultRt.routing.WinLocation === '/financials/socialtags') {
					
					dafaultRt.routing.sTitle.html( $('#id-50 a').html());
					$('html').addClass('SocialPlatform');
					$('.SocialPlatform #searchbar .fa.fa-angle-down').detach();
					$('.SocialPlatform title').text($('.SocialPlatform #searchbar H4').text());
				}
				
				// Title For Email Platform Management
				else if(dafaultRt.routing.WinLocation === '/Financials/EmailTags' 
					|| dafaultRt.routing.WinLocation === '/financials/emailtags') {
					
					dafaultRt.routing.sTitle.html( $('#id-51 a').html());
					$('html').addClass('EmailPlatform');
					$('.EmailPlatform #searchbar .fa.fa-angle-down').detach();
					$('.EmailPlatform title').text($('.EmailPlatform #searchbar H4').text());
				}
				
				// Title For Quiality Reports Top Line
				else if(dafaultRt.routing.WinLocation === '/QualityReports/Index' 
					|| dafaultRt.routing.WinLocation === '/QualityReports' 
					|| dafaultRt.routing.WinLocation === '/QualityReports/index' 
					|| dafaultRt.routing.WinLocation === '/qualityreports') {
					
					dafaultRt.routing.sTitle.html( $('#id-21 a').html() + ':');
					$('html').addClass('QualityRTopLine');
					$('.QualityRTopLine title').text($('#id-21 a').text());
				}
				
				// Title For Quality Reports Offer Affiliate Reports
				else if(dafaultRt.routing.WinLocation === '/QualityReports/OfferitAffiliatereports' 
					|| dafaultRt.routing.WinLocation === '/qualityreports/offeritaffiliatereports') {
					
					dafaultRt.routing.sTitle.html( $('#id-23 a').html() + ':');
					$('html').addClass('OfferAffiliate');
					$('.OfferAffiliate title').text($('#id-23 a').text());
				}
				
				// Title For Quality Report Contextual Report
				else if(dafaultRt.routing.WinLocation === '/QualityReports/ContextualReport' 
					|| dafaultRt.routing.WinLocation === '/qualityreports/contextualreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-120 a').html() + ':');
					$('html').addClass('ContextualReport');
					$('.ContextualReport title').text($('#id-120 a').text());
				}
				
				// Title For Quality Report Search Report
				else if(dafaultRt.routing.WinLocation === '/QualityReports/SearchReport' 
					|| dafaultRt.routing.WinLocation === '/qualityreports/searchreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-122 a').html() + ':');
					$('html').addClass('SearchReport');
					$('.SearchReport title').text($('#id-122 a').text());
				}
				
				// Title For Product and Source Summary
				else if(dafaultRt.routing.WinLocation === '/FinancialsProductTypeAndSourceSummary' 
					|| dafaultRt.routing.WinLocation === '/FinancialsProductTypeAndSourceSummary/Index' 
					|| dafaultRt.routing.WinLocation === '/FinancialsProductTypeAndSourceSummary/index') {
					
					dafaultRt.routing.sTitle.html( $('#id-29 a').html() + ':');
					$('html').addClass('ProductSourceSummary');
					$('.ProductSourceSummary title').text($('#id-29 a').text());
				}
				
				// Title For TopLinePLreport 
				else if(dafaultRt.routing.WinLocation === '/FinancialsProductTypeAndSourceSummary/TopLinePLReport' 
					|| dafaultRt.routing.WinLocation === '/financialsproducttypeandsourcesummary/toplineplreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-25 a').html() + ':');
					$('html').addClass('TopLinePLReport');
					$('.TopLinePLReport title').text($('#id-25 a').text());
				}
				
				// Title For Merchant Revenue
				else if(dafaultRt.routing.WinLocation === '/FinancialsMerchant/MerchantRevenues' 
					|| dafaultRt.routing.WinLocation === '/financialsmerchant/merchantrevenues') {
					
					dafaultRt.routing.sTitle.html( $('#id-26 a').html() + ':');
					$('html').addClass('MerchantRevenues');
					$('.MerchantRevenues title').text($('#id-26 a').text());
				}
				
				// Title For Merchant Revenue Summary
				else if(dafaultRt.routing.WinLocation === '/FinancialsMerchant/MerchantRevenueSummary' 
					|| dafaultRt.routing.WinLocation === '/financialsmerchant/merchantrevenuesummary') {
					
					dafaultRt.routing.sTitle.html( $('#id-27 a').html() + ':');
					$('html').addClass('MerchantRevenueSummary');
					$('.MerchantRevenueSummary title').text($('#id-27 a').text());
				}
				
				// Title For Financials Adjustments
				else if(dafaultRt.routing.WinLocation === '/FinancialsAdjustments/Index' 
					|| dafaultRt.routing.WinLocation === '/FinancialsAdjustments' 
					|| dafaultRt.routing.WinLocation === '/FinancialsAdjustments/index' 
					|| dafaultRt.routing.WinLocation === '/financialsadjustments') {
					
					dafaultRt.routing.sTitle.html( $('#id-33 a').html() + ':');
					$('html').addClass('FinancialsAdjustments');
					$('.FinancialsAdjustments title').text($('#id-33 a').text());
				}
				
				// Title For Financials Missing Data
				else if(dafaultRt.routing.WinLocation === '/FinancialsMissingData/Index' 
					|| dafaultRt.routing.WinLocation === '/FinancialsMissingData' 
					|| dafaultRt.routing.WinLocation === '/FinancialsMissingData/index' 
					|| dafaultRt.routing.WinLocation === '/financialsmissingData') {
					
					dafaultRt.routing.sTitle.html( $('#id-34 a').html() + ':');
					$('html').addClass('FinancialsMissingData');
					$('.FinancialsMissingData title').text($('#id-34 a').text());
				}
				
				// Title For Financials Profit Loss
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/Index' 
					|| dafaultRt.routing.WinLocation === '/FinancialsProfitLoss' 
					|| dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/index') {
					
					dafaultRt.routing.sTitle.html( $('#id-116 a').html() + ':');
					$('html').addClass('FinancialsProfitLoss');
					$('.FinancialsProfitLoss title').text($('#id-116 a').text());
				}
				
				// Title For Affiliate ACPL
				else if(dafaultRt.routing.WinLocation === '/FinancialAffiliate/Index' 
					|| dafaultRt.routing.WinLocation === '/FinancialAffiliate' 
					|| dafaultRt.routing.WinLocation === '/FinancialAffiliate/index' 
					|| dafaultRt.routing.WinLocation === '/financialaffiliate') {
					
					dafaultRt.routing.sTitle.html( $('#id-119 a').html() + ':');
					$('html').addClass('AffiliateACPL');
					$('.AffiliateACPL title').text($('#id-119 a').text());
				}
				
				// Title For Contextual PandL
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/ContextualPandL' 
					|| dafaultRt.routing.WinLocation === '/financialsprofitLoss/contextualpandL') {
					
					dafaultRt.routing.sTitle.html( $('#id-129 a').html() + ':');
					$('html').addClass('ContextualPandL');
					$('.ContextualPandL title').text($('#id-129 a').text());
				}
				
				// Title For Gross Profit Product Type By Month
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/GrossProfitProductTypeByMonth' 
					|| dafaultRt.routing.WinLocation === '/financialsprofitloss/grossprofitproducttypebymonth') {
					
					dafaultRt.routing.sTitle.html( $('#id-139 a').html() + ':');
					$('html').addClass('GrossProfitProductTypeByMonth');
					$('.GrossProfitProductTypeByMonth title').text($('#id-139 a').text());
				}
				
				// Title For Gross Profit Lead Source By Month
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/GrossProfitLeadSourceByMonth' 
					|| dafaultRt.routing.WinLocation === '/financialsprofitloss/grossprofitleadsourcebymonth') {
					
					dafaultRt.routing.sTitle.html( $('#id-141 a').html() + ':');
					$('html').addClass('GrossProfitLeadSourceByMonth');
					$('.GrossProfitLeadSourceByMonth title').text($('#id-141 a').text());
				}
				
				// Title For ACPL By Offer
				else if(dafaultRt.routing.WinLocation === '/FinancialAffiliate/ACPLByOffer' 
					|| dafaultRt.routing.WinLocation === '/financialaffiliate/acplbyoffer') {
					
					dafaultRt.routing.sTitle.html( $('#id-138 a').html() + ':');
					$('html').addClass('ACPLByOffer');
					$('.ACPLByOffer title').text($('#id-138 a').text());
				}
				
				// Title For Merchant Profit Loss Break Downs Monthly
				else if(dafaultRt.routing.WinLocation === '/financialsProfitLoss/MerchantProfitLossBreakdownsMonthly' 
					|| dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/MerchantProfitLossBreakdownsMonthly') {
					
					dafaultRt.routing.sTitle.html( $('#id-143 a').html() + ':');
					$('html').addClass('MerchantProfitLossBreakdownsMonthly');
					$('.MerchantProfitLossBreakdownsMonthly title').text($('#id-143 a').text());
				}
				
				else if(dafaultRt.routing.WinLocation === '/FinancialsProductTypeAndSourceSummary/AccountsTopLinePLReport' 
					|| dafaultRt.routing.WinLocation === '/financialsproducttypeandsourcesummary/accountstoplineplreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-30 a').html() + ':');
					$('html').addClass('AccountsTopLinePLReport');
					$('.AccountsTopLinePLReport title').text($('#id-30 a').text());
				}
				
				// Title For Accounts Source P&L
				else if(dafaultRt.routing.WinLocation === '/AccountsFinancialsProfitLoss/Index' 
					|| dafaultRt.routing.WinLocation === '/AccountsFinancialsProfitLoss' 
					|| dafaultRt.routing.WinLocation === '/AccountsFinancialsProfitLoss/index' 
					|| dafaultRt.routing.WinLocation === '/accountsfinancialsprofitloss') {
					
					dafaultRt.routing.sTitle.html( $('#id-124 a').html() + ':');
					$('html').addClass('AccountsSourcePL');
					$('.AccountsSourcePL title').text($('#id-124 a').text());
				}
				
				// Title For Gross Profit Product Type By Month
				else if(dafaultRt.routing.WinLocation === '/AccountsFinancialsProfitLoss/GrossProfitProductTypeByMonth' 
					|| dafaultRt.routing.WinLocation === '/accountsfinancialsprofitloss/grossprofitproducttypebymonth') {
					
					dafaultRt.routing.sTitle.html( $('#id-140 a').html() + ':');
					$('html').addClass('GrossProfitProductTypeByMonth');
					$('.GrossProfitProductTypeByMonth title').text($('#id-140 a').text());
				}
				
				// Title For Gross Profit Lead Source By Month
				else if(dafaultRt.routing.WinLocation === '/AccountsFinancialsProfitLoss/GrossProfitLeadSourceByMonth' 
					|| dafaultRt.routing.WinLocation === '/accountsfinancialsprofitloss/grossprofitleadsourcebymonth') {
					
					dafaultRt.routing.sTitle.html( $('#id-142 a').html() + ':');
					$('html').addClass('GrossProfitLeadSourceByMonth');
					$('.GrossProfitLeadSourceByMonth title').text($('#id-142 a').text());
				}
				
				// Title For Global Rates
				else if(dafaultRt.routing.WinLocation === '/Financials/GlobalRates' 
					|| dafaultRt.routing.WinLocation === '/financials/globalrates') {
					
					dafaultRt.routing.sTitle.html( $('#id-53 a').html());
					$('html').addClass('GlobalRates');
					$('.GlobalRates title').text($('#id-53 a').text());
				}
				
				// Title For Financials Costs
				else if(dafaultRt.routing.WinLocation === '/Financials/Costs' 
					|| dafaultRt.routing.WinLocation === '/financials/costs') {
					
					dafaultRt.routing.sTitle.html( $('#id-54 a').html());
					$('html').addClass('FinancialsCosts');
					$('.FinancialsCosts title').text($('#id-54 a').text());
				}
				
				// Title For Merchant Prices
				else if(dafaultRt.routing.WinLocation === '/Financials/MerchantPrices' 
					|| dafaultRt.routing.WinLocation === '/financials/merchantprices') {
					
					dafaultRt.routing.sTitle.html( $('#id-55 a').html());
					$('html').addClass('MerchantPrices');
					$('.MerchantPrices title').text($('#id-55 a').text());
				}
				
				// Title For Edit Lead Income
				else if(dafaultRt.routing.WinLocation === '/Financials/EditLeadIncome' 
					|| dafaultRt.routing.WinLocation === '/financials/editleadincome') {
					
					dafaultRt.routing.sTitle.html( $('#id-56 a').html() + ':');
					$('html').addClass('EditLeadIncome');
					$('.EditLeadIncome title').text($('#id-56 a').text());
				}
				
				// Title For Product Types
				else if(dafaultRt.routing.WinLocation === '/ProductTypes/Index' 
					|| dafaultRt.routing.WinLocation === '/ProductTypes' 
					|| dafaultRt.routing.WinLocation === '/ProductTypes/index' 
					|| dafaultRt.routing.WinLocation === '/producttypes') {
					
					dafaultRt.routing.sTitle.html( $('#id-58 a').html());
					$('html').addClass('ProductTypes');
					$('.ProductTypes title').text($('#id-58 a').text());
				}
				
				// Title For Websites
				else if(dafaultRt.routing.WinLocation === '/Websites/Index' 
					|| dafaultRt.routing.WinLocation === '/Websites' 
					|| dafaultRt.routing.WinLocation === '/Websites/index' 
					|| dafaultRt.routing.WinLocation === '/websites') {
					
					dafaultRt.routing.sTitle.html( $('#id-59 a').html());
					$('html').addClass('Websites');
					$('.Websites title').text($('#id-59 a').text());
				}
				
				// Title For URL Source Mapping
				else if(dafaultRt.routing.WinLocation === '/SourceIdentifiers/Index' 
					|| dafaultRt.routing.WinLocation === '/SourceIdentifiers' 
					|| dafaultRt.routing.WinLocation === '/SourceIdentifiers/index' 
					|| dafaultRt.routing.WinLocation === '/sourceidentifiers') {
					
					dafaultRt.routing.sTitle.html( $('#id-60 a').html());
					$('html').addClass('URLSourceMapping');
					$('.URLSourceMapping title').text($('#id-60 a').text());
				}
				
				// Title For Restricted
				else if(dafaultRt.routing.WinLocation === '/Restricted/Index' 
					|| dafaultRt.routing.WinLocation === '/Restricted' 
					|| dafaultRt.routing.WinLocation === '/Restricted/index' 
					|| dafaultRt.routing.WinLocation === '/restricted') {
					
					dafaultRt.routing.sTitle.html( $('#id-97 a').html());
					$('html').addClass('RestrictedUrl');
					$('.RestrictedUrl title').text($('#id-97 a').text());
				}
				
				// Title For Black Listed
				else if(dafaultRt.routing.WinLocation === '/Blacklisted/Index' 
					|| dafaultRt.routing.WinLocation === '/Blacklisted' 
					|| dafaultRt.routing.WinLocation === '/Blacklisted/index' 
					|| dafaultRt.routing.WinLocation === '/blacklisted') {
					
					dafaultRt.routing.sTitle.html( $('#id-98 a').html());
					$('html').addClass('BlacklistedUrl');
					$('.BlacklistedUrl title').text($('#id-98 a').text());
				}
				
				// Title For Status Mapping
				else if(dafaultRt.routing.WinLocation === '/LeadQFeedbackStatus/StatusMapping' 
					|| dafaultRt.routing.WinLocation === '/leadqfeedbackstatus/statusmapping') {
					
					dafaultRt.routing.sTitle.html( $('#id-67 a').html() + ':');
					$('html').addClass('StatusMapping');
					$('.StatusMapping title').text($('#id-67 a').text());
				}
				
				// Title For Feed Back Status Detail Mapping
				else if(dafaultRt.routing.WinLocation === '/LeadQFeedbackStatusDetails/FeedbackStatusDetailMapping' 
					|| dafaultRt.routing.WinLocation === '/leadqfeedbackstatusdetails/feedbackstatusdetailmapping') {
					
					dafaultRt.routing.sTitle.html( $('#id-89 a').html() + ':');
					$('html').addClass('FeedbackStatusDetailMapping');
					$('.FeedbackStatusDetailMapping title').text($('#id-89 a').text());
				}
				
				// Title For Affiliate List
				else if(dafaultRt.routing.WinLocation === '/OfferItAffiliate/Index' 
					|| dafaultRt.routing.WinLocation === '/OfferItAffiliate' 
					|| dafaultRt.routing.WinLocation === '/OfferItAffiliate/index' 
					|| dafaultRt.routing.WinLocation === '/offerItaffiliate') {
					
					dafaultRt.routing.sTitle.html( $('#id-91 a').html() + ':');
					$('html').addClass('AffiliateList');
					$('.AffiliateList title').text($('#id-91 a').text());
				}
				
				// Title For Post In Affiliates Cap
				else if(dafaultRt.routing.WinLocation === '/OfferItAffiliate/PostInAffiliatesCap' 
					|| dafaultRt.routing.WinLocation === '/offerItaffiliate/postinaffiliatescap') {
					
					$('html').addClass('PostInAffiliatesCap');
				}
				
				// Title For Gross Profit Cost Revenue By Month
				else if(dafaultRt.routing.WinLocation === '/FinancialsProfitLoss/GrossProfitCostRevenueByMonth' 
					|| dafaultRt.routing.WinLocation === '/financialsprofitloss/grossprofitcostrevenuebymonth') {
					
					dafaultRt.routing.sTitle.html( $('#id-143 a').html() + ':');
					$('html').addClass('GrossProfitCostRevenueByMonth');
					$('.GrossProfitCostRevenueByMonth title').text($('#id-143 a').text());
				}
				
				// Title For Merchants
				else if(dafaultRt.routing.WinLocation === '/Merchants'
					|| dafaultRt.routing.WinLocation === '/merchants') {
					
					dafaultRt.routing.sTitle.html( $('#id-136 a').html() + ':');
					$('html').addClass('MerchantsUrl');
					$('.MerchantsUrl title').text($('#id-136 a').text());
				}
				
				// Title For Application Logs
				else if(dafaultRt.routing.WinLocation === '/Logs/ApplicationLogs' 
					|| dafaultRt.routing.WinLocation === '/logs/applicationlogs') {
					
					dafaultRt.routing.sTitle.html( $('#id-63 a').html() + ':');
					$('html').addClass('ApplicationLogs');
					$('.ApplicationLogs title').text($('#id-63 a').text());
				}
				
				// Title For Main Menu
				else if(dafaultRt.routing.WinLocation === '/Layout/MainMenu' 
					|| dafaultRt.routing.WinLocation === '/layout/mainmenu') {
					
					dafaultRt.routing.sTitle.html( $('#id-109 a').html() + ':');
					$('html').addClass('MainMenu');
					$('.MainMenu title').text($('#id-109 a').text());
				}
				
				// Title For Menu Settings
				else if(dafaultRt.routing.WinLocation === '/Layout/MenuSettings' 
					|| dafaultRt.routing.WinLocation === '/layout/menusettings') {
					
					dafaultRt.routing.sTitle.html( $('#id-115 a').html());
					$('html').addClass('MenuSettings');
					$('.MenuSettings title').text($('#id-115 a').text());
				}
				
				// Title For Menu Settings
				else if(dafaultRt.routing.WinLocation === '/UserManager/Index' 
					|| dafaultRt.routing.WinLocation === '/User/Index' 
					|| dafaultRt.routing.WinLocation === '/UserManager' 
					|| dafaultRt.routing.WinLocation === '/usermanager') {
					
					dafaultRt.routing.sTitle.html( $('#id-62 a').html() + ':');
					$('html').addClass('UserSettings');
					$('.UserSettings title').text($('#id-62 a').text());
				}
				
				// Title For Manage Telesale Users
				else if(dafaultRt.routing.WinLocation === '/User/ManageTelesaleUsers' 
					|| dafaultRt.routing.WinLocation === '/UserManager/ManageTelesaleUsers' 
					|| dafaultRt.routing.WinLocation === '/usermanager/managetelesaleusers') {
					
					dafaultRt.routing.sTitle.html( $('#id-144 a').html());
					$('html').addClass('ManageTelesaleUsers');
					$('.ManageTelesaleUsers title').text($('#id-144 a').text());
				}
				
				// Title For Mortgage Post code Report
				else if(dafaultRt.routing.WinLocation === '/reportsproducttypes/MortgagePostcodeReport' 
					|| dafaultRt.routing.WinLocation === '/reportsproducttypes/mortgagepostcodereport') {
					
					dafaultRt.routing.sTitle.html( $('#id-135 a').html() + ':');
					$('html').addClass('MortgagePostcodeReport');
					$('.MortgagePostcodeReport title').text($('#id-135 a').text());
				}
				
				// Title For Lead With Product Answers
				else if(dafaultRt.routing.WinLocation === '/ReportsProductTypes/LeadWithProductAnswers' 
					|| dafaultRt.routing.WinLocation === '/reportsproducttypes/leadwithproductanswers') {
					
					dafaultRt.routing.sTitle.html( $('#id-150 a').html() + ':');
					$('html').addClass('LeadWithProductAnswers');
					$('.LeadWithProductAnswers title').text($('#id-150 a').text());
				}
				
				// Title For Capture Leads By Age
				else if(dafaultRt.routing.WinLocation === '/reports/capturedleadsbyage') {
					
					dafaultRt.routing.sTitle.html( $('#id-153 a').html() + ':');
					$('html').addClass('capturedleadsbyage');
					$('.capturedleadsbyage title').text($('#id-153 a').text());
				}
				
				// Title For Origin Quality
				else if(dafaultRt.routing.WinLocation === '/qualityreports/OriginQuality' 
					|| dafaultRt.routing.WinLocation === '/qualityreports/originquality') {
					
					dafaultRt.routing.sTitle.html( $('#id-151 a, #id-156 a').html() + ':');
					$('html').addClass('OriginQuality');
					$('.OriginQuality title').text($('#id-151 a, #id-156 a').text());
				}
				
				// Title For Transferred Leads By Age
				else if(dafaultRt.routing.WinLocation === '/reports/transferredleadsbyage') {
					
					dafaultRt.routing.sTitle.html( $('#id-152 a').html() + ':');
					$('html').addClass('transferredleadsbyage');
					$('.transferredleadsbyage title').text($('#id-152 a').text());
				}
				
				// Title For Create User
				else if(dafaultRt.routing.WinLocation === '/UserManager/CreateUser' 
					|| dafaultRt.routing.WinLocation === '/userManager/createuser') {
					
					$('.CreateUser .TIconBtn').load('/UserManager .CrtNewBtn');
					$('html').addClass('CreateUser ScrUser');
				}
				
				// Title For Roles
				else if(dafaultRt.routing.WinLocation === '/Roles/Index' 
					|| dafaultRt.routing.WinLocation === '/Roles' 
					|| dafaultRt.routing.WinLocation === '/Roles/index' 
					|| dafaultRt.routing.WinLocation === '/roles') {
					
					$('.RolesUser .TIconBtn').load('/UserManager .RolesBtn');
					$('html').addClass('RolesUser ScrUser');
				}
				
				// Title For Roles Create
				else if(dafaultRt.routing.WinLocation === '/Roles/Create' 
					|| dafaultRt.routing.WinLocation === '/roles/create') {
					
					$('.RolesCreate .TIconBtn').load('/UserManager .RolesBtn');
					$('html').addClass('RolesCreate ScrUser');
				}
				
				// Title For Role Permissions
				else if(dafaultRt.routing.WinLocation === '/Roles/RoleAndPermissions' 
					|| dafaultRt.routing.WinLocation === '/roles/roleandpermissions') {
					
					$('.RoleAndPermissions .TIconBtn').load('/UserManager .PermissionsBtn');
					$('html').addClass('RoleAndPermissions ScrUser');
				}
				
				// WebSite Whitelistings
				else if(dafaultRt.routing.WinLocation === '/websites/webapiwhitelistcrossdomains') {
					
					dafaultRt.routing.sTitle.html( $('#id-149 a').html());
					$('html').addClass('webapiwhitelistcrossdomains');
					$('.webapiwhitelistcrossdomains title').text($('#id-149 a').text());
				}
				
				// TeleSales - Top Line
				else if(dafaultRt.routing.WinLocation === '/ReportsTeleSales/TeleSaleDailyReport2' 
					|| dafaultRt.routing.WinLocation === '/ReportsTeleSales/TeleSaleDailyReport' 
					|| dafaultRt.routing.WinLocation === '/reportstelesales/telesaledailyreport') {
					
					dafaultRt.routing.sTitle.html( $('#id-36 a').html() + ':');
					$('html').addClass('TeleSaleDailyReport');
					$('.TeleSaleDailyReport title').text($('#id-36 a').text());
				}
				
				// TeleSales - Top Line Additinal
				else if(dafaultRt.routing.WinLocation === '/ReportsTeleSales/TeleSalesLoggedActivities' 
					|| dafaultRt.routing.WinLocation === '/reportstelesales/telesalesloggedactivities') {
					
					dafaultRt.routing.sTitle.html( $('#id-146 a').html() + ':');
					$('html').addClass('TeleSalesLoggedActivities');
					$('.TeleSalesLoggedActivities title').text($('#id-146 a').text());
				}
				
				// TeleSales - Outcomes
				else if(dafaultRt.routing.WinLocation === '/ReportsTeleSales/CallOutcomes' 
					|| dafaultRt.routing.WinLocation === '/reportstelesales/calloutcomes') {
					
					dafaultRt.routing.sTitle.html( $('#id-37 a').html() + ':');
					$('html').addClass('CallOutcomes');
					$('.CallOutcomes title').text($('#id-37 a').text());
				}
				
				// TeleSales - Home
				else if(dafaultRt.routing.WinLocation === '/TeleSalesLeads/index2' 
					|| dafaultRt.routing.WinLocation === '/TeleSalesLeads/index' 
					|| dafaultRt.routing.WinLocation === '/TeleSalesLeads/Index' 
					|| dafaultRt.routing.WinLocation === '/TeleSalesLeads' 
					|| dafaultRt.routing.WinLocation === '/telesalesleads' 
					|| dafaultRt.routing.WinLocation === '/telesalesleads/index' 
					|| dafaultRt.routing.WinLocation === '/telesalesleads/Index') {
					
					// dafaultRt.routing.sTitle.html( $('#id-37 a').html() + ':');
					$('html').addClass('TeleSalesHome');
					// $('.CallOutcomes title').text($('#id-37 a').text());
				}
				
				// Title For Design Settings
				else if(dafaultRt.routing.WinLocation === '/Layout/designsettings' 
					|| dafaultRt.routing.WinLocation === '/Layout/DesignSettings' 
					|| dafaultRt.routing.WinLocation === '/layout/designsettings') {
					
					// dafaultRt.routing.sTitle.html( $('#id-162 a').html());
					$('html').addClass('DesignSettings');
					$('.DesignSettings #searchbar .new-top-item-second').detach();
					$('.DesignSettings #searchbar h4').html('General Settings');
					
					$('<span class="new-right-ico-floor"><i class="fas fa-palette" aria-hidden="true"></i></span>').appendTo('.DesignSettings #searchbar h4');
					// $('.DesignSettings title').text($('#id-162 a .new-top-item').text());
				}
				
				else if(dafaultRt.routing.WinLocation === '/User/UserLoginHistory') {
					
					dafaultRt.routing.sTitle.html( $('#id-132 a').html());
					$('html').addClass('UserLoginHistory');
					$('.CallOutcomes title').text($('#id-132 a').text());
				}
				
				else if(dafaultRt.routing.WinLocation === '/Reports/DistributionTotalsAndOriginId') {
					
					dafaultRt.routing.sTitle.html( $('#id-159 a').html());
					$('html').addClass('DistributionTotalsAndOriginId');
					$('.DistributionTotalsAndOriginId title').text($('#id-159 a').text());
				}
				
				// Title For Edit Merchants
				else if(dafaultRt.routing.WinLocation === '/Merchants/Edit' 
					|| dafaultRt.routing.WinLocation === '/merchants/edit') {
					
					$('html').addClass('MerchantsEdit');
				}
				
				else if(dafaultRt.routing.WinLocation === '/LeadOrigin/index') {
					
					dafaultRt.routing.sTitle.html( $('#id-155 a').html());
					$('html').addClass('LeadOrigin');
					$('.LeadOrigin title').text($('#id-155 a').text());
				}
				
				else if(dafaultRt.routing.WinLocation === '/DomainRegistrations') {
					
					dafaultRt.routing.sTitle.html( $('#id-160 a').html());
					$('html').addClass('DomainRegistrations');
					$('.DomainRegistrations title').text($('#id-160 a').text());
				}
				
				else if(dafaultRt.routing.WinLocation === '/compliance') {
					
					dafaultRt.routing.sTitle.html( $('#id-157 a').html() + ':');
					$('html').addClass('GDPRremoval');
					$('.GDPRremoval title').text($('#id-157 a').text());
				}
			},
			
			mouseEvents: function() {
				
				$.fn.overTipsFrom = function() {
					return this.on('mouseover', '.pckFrom', function() {
						
						$('.tipFrom').css({ display: 'flex'});
						
					}).on('mouseleave', '.pckFrom', function() { $('.tipFrom').hide(); });
				}
				
				$.fn.overTipsTo = function() {
					return this.on('mouseover', '.pckTo', function() {
						
						$('.tipTo').css({ display: 'flex'});
						
					}).on('mouseleave', '.pckTo', function() { $('.tipTo').hide(); });
				}
				
				$.fn.overTipsProd = function() {
					return this.on('mouseover', '.prodStat', function() {
						
						$('.prodTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.prodStat', function() { $('.prodTip').hide(); });
				}
				
				$.fn.overTipsGender = function() {
					return this.on('mouseover', '.gendStat', function() {
						
						$('.gendTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.gendStat', function() { $('.gendTip').hide(); });
				}
				
				$.fn.overTipsClockFrom = function() {
					return this.on('mouseover', '.clockFromStat', function() {
						
						$('.clockFromTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.clockFromStat', function() { $('.clockFromTip').hide(); });
				}
				
				$.fn.overTipsClockTo = function() {
					return this.on('mouseover', '.clockToStat', function() {
						
						$('.clockToTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.clockToStat', function() { $('.clockToTip').hide(); });
				}
				
				$.fn.overTipsLeadSource = function() {
					return this.on('mouseover', '.leadsourceStat', function() {
						
						$('.leadSourceTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.leadsourceStat', function() { $('.leadSourceTip').hide(); });
				}
				
				$.fn.overTipsMerchant = function() {
					return this.on('mouseover', '.merchantStat', function() {
						
						$('.merchantTip').css({ display: 'flex'});
						
					}).on('mouseleave', '.merchantStat', function() { $('.merchantTip').hide(); });
				}
				
				$.fn.overTipsLeadId = function() {
					return this.on('mouseover', '.leadIdStat', function() {
						
						$('.leadIdTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.leadIdStat', function() { $('.leadIdTip').hide(); $(this).css({'z-index': ''}); });
				}
				
				$.fn.overTipsPeriod = function() {
					return this.on('mouseover', '.periStat', function() {
						
						$('.periTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.periStat', function() { $('.periTip').hide(); $(this).css({'z-index': ''}); });
				}
				
				$.fn.overTipsSubm = function() {
					return this.on('mouseover', '.submStat', function() {
						
						$('.submTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.submStat', function() { $('.submTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsSubm();
				
				$.fn.overTipsSubAff = function() {
					return this.on('mouseover', '.subAffStat', function() {
						
						$('.subAffTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.subAffStat', function() { $('.subAffTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsSubAff();
				
				$.fn.overTipsLevel = function() {
					return this.on('mouseover', '.levelStat', function() {
						
						$('.levelTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.levelStat', function() { $('.levelTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsLevel();
				
				$.fn.overTipsPosi = function() {
					return this.on('mouseover', '.posiStat', function() {
						
						$('.positionTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.posiStat', function() { $('.positionTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsPosi();
				
				$.fn.overTipsRepty = function() {
					return this.on('mouseover', '.reptyStat', function() {
						
						$('.reptyTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.reptyStat', function() { $('.reptyTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsRepty();
				
				$.fn.overTipsBand = function() {
					return this.on('mouseover', '.bandStat', function() {
						
						$('.bandTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.bandStat', function() { $('.bandTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsBand();
				
				$.fn.overTipsUser = function() {
					return this.on('mouseover', '.userStat', function() {
						
						$('.userTip').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.userStat', function() { $('.userTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsUser();
				
				$.fn.overTipsAg = function() {
					return this.on('mouseover', '.AgeGroup', function() {
						
						$('.agTip').css({ display: 'flex', height: '22px'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.AgeGroup', function() { $('.agTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsAg();
				
				$.fn.overTipsAdj = function() {
					return this.on('mouseover', '.adjOn', function() {
						
						$('.tipAdj').css({ display: 'flex'});
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.adjOn', function() { $('.tipAdj').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsAdj();
				
				$.fn.overTipsGp = function() {
					return this.on('mouseover', '.profitGp', function() {
						
						$('.gpTip').css({ display: 'flex', top: '-29px', height: '21px', position: 'absolute', 'margin-left': 'auto', 'margin-right': 'auto', right: 0, width: '52px' });
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.profitGp', function() { $('.gpTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipsGp();
				
				$.fn.overTipspLeads = function() {
					return this.on('mouseover', '.profitLeads', function() {
						
						$('.pLeadsTip').css({ display: 'flex', top: '-29px', height: '21px', position: 'absolute', 'margin-left': 'auto', 'margin-right': 'auto', right: 0, width: '52px' });
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.profitLeads', function() { $('.pLeadsTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipspLeads();
				
				$.fn.overTipspRoi = function() {
					return this.on('mouseover', '.profitRoi', function() {
						
						$('.RoiTip').css({ display: 'flex', top: '-29px', height: '21px', position: 'absolute', 'margin-left': 'auto', 'margin-right': 'auto', right: 0, width: '52px' });
						$(this).css({'z-index': '100000000000000'});
						
					}).on('mouseleave', '.profitRoi', function() { $('.RoiTip').hide(); $(this).css({'z-index': ''}); });
				}
				dc.overTipspRoi();
				
				$.fn.clGl = function() {
					return this.on('click', '*', function() {
						
						let cls = $(this)[0].className;
						
						if(cls.indexOf('k-input') != -1) {
							
							$('.k-dropdown-wrap').removeClass('k-state-hover k-state-focused k-state-active');
						}
					});
				}
				dc.clGl();
				
				// New Avatar Drop Down
				$.fn.AvatarTogg = function() {
				
					// Shows Avatar Drop Down
					$.fn.showAvatar = function() {
						return this.on('click', '.showAvatar', function() {
							$('.avatar-modal').show();
							$('.avatar').removeClass('showAvatar').addClass('hideAvatar');
							$('html').addClass('clAvatar');
						});
					}
					dc.showAvatar();
					
					// Hides Avatar Drop Down
					$.fn.hideAvatar = function() {
						return this.on('click', '.hideAvatar', function() {
							$('.avatar-modal').hide();
							$('.avatar').removeClass('hideAvatar').addClass('showAvatar');
							$('html').removeClass('clAvatar');
						});
					}
					dc.hideAvatar();
					
					// Hides Avatar Drop Down Clicking anywhere on the Screen
					$.fn.hideHtmlAv = function() {
						return this.on('click', '.clAvatar', function() {
							$('.avatar-modal').hide();
							$('.avatar').removeClass('hideAvatar').addClass('showAvatar');
							$('html').removeClass('clAvatar');
						});
					}
					dc.hideHtmlAv();
				}
				dc.AvatarTogg();
				
				// Period Icon
				$.fn.overTipsPeriIcon = function() {
					return this.on('mouseover', '.periStatH', function() {
						
						$('.periStat').addClass('periodIcon');
						
					}).on('mouseleave', '.periStatH', function() { $('.periStat').removeClass('periodIcon'); });
				}
				dc.overTipsPeriIcon();
				
				$.fn.overTipsdateFromIcon = function() {
					return this.on('mouseover', '.pckFromH', function() {
						
						$('.pckFrom').addClass('dateFromIcon');
						
					}).on('mouseleave', '.pckFromH', function() { $('.pckFrom').removeClass('dateFromIcon'); });
				}
				dc.overTipsdateFromIcon();
				
				$.fn.overTipsdateFclockIcon = function() {
					return this.on('mouseover', '.clockFromStatH', function() {
						
						$('.clockFromStat').addClass('dateFromIcon');
						
					}).on('mouseleave', '.clockFromStatH', function() { $('.clockFromStat').removeClass('dateFromIcon'); });
				}
				dc.overTipsdateFclockIcon();
				
				$.fn.overTipsSubAffIcon = function() {
					return this.on('mouseover', '.subAffStatH', function() {
						
						$('.subAffStat').addClass('subAffIcon');
						
					}).on('mouseleave', '.subAffStatH', function() { $('.subAffStat').removeClass('subAffIcon'); });
				}
				dc.overTipsSubAffIcon();
				
				$.fn.overTipsLevelIcon = function() {
					return this.on('mouseover', '.levelStatH', function() {
						
						$('.levelStat').addClass('levelIcon');
						
					}).on('mouseleave', '.levelStatH', function() { $('.levelStat').removeClass('levelIcon'); });
				}
				dc.overTipsLevelIcon();
				
				$.fn.overTipsdateToIcon = function() {
					return this.on('mouseover', '.pckToH', function() {
						
						$('.pckTo').addClass('dateToIcon');
						
					}).on('mouseleave', '.pckToH', function() { $('.pckTo').removeClass('dateToIcon'); });
				}
				dc.overTipsdateToIcon();
				
				$.fn.overTipsdateTClockIcon = function() {
					return this.on('mouseover', '.clockToStatH', function() {
						
						$('.clockToStat').addClass('dateToIcon');
						
					}).on('mouseleave', '.clockToStatH', function() { $('.clockToStat').removeClass('dateToIcon'); });
				}
				dc.overTipsdateTClockIcon();
				
				$.fn.overTipsProdIcon = function() {
					return this.on('mouseover', '.prodStatH', function() {
						
						$('.prodStat').addClass('prodIcon');
						
					}).on('mouseleave', '.prodStatH', function() { $('.prodStat').removeClass('prodIcon'); });
				}
				dc.overTipsProdIcon();
				
				$.fn.overTipsMerchantIcon = function() {
					return this.on('mouseover', '.merchantStatH', function() {
						
						$('.merchantStat').addClass('merchandIcon');
						
					}).on('mouseleave', '.merchantStatH', function() { $('.merchantStat').removeClass('merchandIcon'); });
				}
				dc.overTipsMerchantIcon();
				
				$.fn.overTipsLeadSourceIcon = function() {
					return this.on('mouseover', '.leadsourceStatH', function() {
						
						$('.leadsourceStat').addClass('leadsourceIcon');
						
					}).on('mouseleave', '.leadsourceStatH', function() { $('.leadsourceStat').removeClass('leadsourceIcon') });
				}
				dc.overTipsLeadSourceIcon();
				
				$.fn.overTipsgenderIcon = function() {
					return this.on('mouseover', '.gendStatH', function() {
						
						$('.gendStat').addClass('genderIcon');
						
					}).on('mouseleave', '.gendStatH', function() { $('.gendStat').removeClass('genderIcon') });
				}
				dc.overTipsgenderIcon();
				
				
				$.fn.overTipsLeadIdIcon = function() {
					return this.on('mouseover', '.leadIdStatH', function() {
						
						$('.leadIdStat').addClass('leadIdIcon');
						
					}).on('mouseleave', '.leadIdStatH', function() { $('.leadIdStat').removeClass('leadIdIcon') });
				}
				dc.overTipsLeadIdIcon();
				
				$.fn.overTipsSubmIcon = function() {
					return this.on('mouseover', '.submStatH', function() {
						
						$('.submStat').addClass('submIcon');
						
					}).on('mouseleave', '.submStatH', function() { $('.submStat').removeClass('submIcon') });
				}
				dc.overTipsSubmIcon();
				
				$.fn.overTipsPosiIcon = function() {
					return this.on('mouseover', '.posiStatH', function() {
						
						$('.posiStat').addClass('posiIcon');
						
					}).on('mouseleave', '.posiStatH', function() { $('.posiStat').removeClass('posiIcon') });
				}
				dc.overTipsPosiIcon();
				
				$.fn.overTipsRepTyIcon = function() {
					return this.on('mouseover', '.reptyStatH', function() {
						
						$('.reptyStat').addClass('reptyIcon');
						
					}).on('mouseleave', '.reptyStatH', function() { $('.reptyStat').removeClass('reptyIcon') });
				}
				dc.overTipsRepTyIcon();
				
				
				$.fn.overTipsBandIcon = function() {
					return this.on('mouseover', '.bandStatH', function() {
						
						$('.bandStat').addClass('bandIcon');
						
					}).on('mouseleave', '.bandStatH', function() { $('.bandStat').removeClass('bandIcon') });
				}
				dc.overTipsBandIcon();
				
				$.fn.overTipsUserIcon = function() {
					return this.on('mouseover', '.userStatH', function() {
						
						$('.userStat').addClass('userIcon');
						
					}).on('mouseleave', '.userStatH', function() { $('.userStat').removeClass('userIcon') });
				}
				dc.overTipsUserIcon();
				
				$.fn.overTipsAgIcon = function() {
					return this.on('mouseover', '.agGrp', function() {
						
						$('.AgeGroup').addClass('agIcon');
						
					}).on('mouseleave', '.agGrp', function() { $('.AgeGroup').removeClass('agIcon') });
				}
				dc.overTipsAgIcon();
				
				$.fn.overTipsAdjIcon = function() {
					return this.on('mouseover', '.adjOnH', function() {
						
						$('.adjOn').addClass('adjOnColor');
						
					}).on('mouseleave', '.adjOnH', function() { $('.adjOn').removeClass('adjOnColor') });
				}
				dc.overTipsAdjIcon();
				
				// Start Buttons Icons Mouseover
				$.fn.overkbutton = function() {
					return this.on('mouseover', '.k-button-icontext', function() {
						
						if(settings.runBtnOver == true) {
						
							// Default Button Icon Color
							//$('.k-icon', this).css({ color: settings.color.deft });
							
							// Red Button Icon Color
							$('.k-icon.fa-times-square', this).css({ color: settings.color.del });
							$('.k-icon.fa-stop-circle', this).css({ color: settings.color.del });
							
							// Orange Button Icon Color
							$('.k-icon.fa-arrow-square-left', this).css({ color: settings.color.reject });
							
							// Purple Button Icon Color
							$('.k-icon.fa-arrow-square-down', this).css({ color: settings.color.retain });
						}
						
					}).on('mouseleave', '.k-button-icontext', function() { $('.k-icon', this).css({ color: ''}) });
				}
				dc.overkbutton();
				// End Buttons Icons Mouseover

				$.fn.overkbuttonS = function() {
					return this.on('mouseover', '#btnSubmit, #GetLead', function() {
						
						$('.k-icon', this).css({ color: '#fff'});
						
					}).on('mouseleave', '#btnSubmit, #GetLead', function() { $('.k-icon', this).css({ color: ''}) });
				}
				dc.overkbuttonS();
			}
		});
		
		$(settings.delElm).detach();
		
		$('.k-grid-excel .k-icon').addClass('fal fa-file-excel').removeClass('fa fa-file-excel-o');
	
		$('.k-multiselect-wrap, .BackLink').addClass('fad');
		
		$('#SearchLog').attr({ placeholder: 'Search Log Message For'});
		
		$("#PostInAff").mCustomScrollbar({ theme: "minimal", scrollInertia: 200 });
		
		if(settings.runApp == true) { let kgr = new kGrid(); }
	}

	dc.allKendo();
	
});

// Overriding Propreties
$(function() {
	
	$('body').allKendo({

		// From Date ToolTip Text
		dateFromTip: 'Date From',
		
		// From Date ToolTip BackGround
		dateFromBack: '#0A9A7A',
		
		// From Date ToolTip Text Color
		dateFromColor: '#fff',
		
		// Moves From Date ToolTip To left
		FromLeft: '-22px',
		
		// To Date ToolTip Text
		dateToTip: 'Date To',
		
		// To Date ToolTip BackGround
		dateToBack: '#0A9A7A',
		
		// To Date ToolTip Color
		dateToColor: '#fff',
		
		// Moves To Date ToolTip To Left 
		ToLeft: '-12px',
		
		// Product ToolTip Text
		prodTip: 'Product',
		
		// Product ToolTip BackGround
		prodBack: '#0A9A7A',
	    
		// Product ToolTip Color
		prodColor: '#fff',
		
		// Moves Product ToolTip To Left
		prodLeft: '-17px',
		
		// Gender ToolTip Text
		gendTip: 'Gender',
		
		// Gender ToolTip BackGround	
		gendBack: '#0A9A7A',
		
		// Gender ToolTip Color
		gendColor: '#fff',
		
		// Gender ToolTip To Left
		gendLeft: '-13px',
		
		// Created Hour From TootlTip Text
		clFromTip: 'Created Hour From',
		
		// Created Hour From ToolTip BackGround
		clFromBack: '#0A9A7A',
		
		// Created Hour From ToolTip Color
		clFromColor: '#fff',
		
		// Created Hour From ToolTip to Left
		clFromLeft: '-47px',
		
		// Created Hour To ToolTip Text
		clToTip: 'Created Hour To',
		
		// Created Hour To ToolTip BackGround
		clToBack: '#0A9A7A',
		
		// Created Hour To ToolTip Color
		clToColor: '#fff',
		
		// Created Hour To ToolTip to Left
		clToLeft: '-40px',
		
		// Lead Source ToolTip Text
		lSTip: 'Lead Source',
		
		// Lead Source ToolTip BackGround
		lSBack: '#0A9A7A',
		
		// Lead Source ToolTip Color
		lSColor: '#fff',
		
		// Lead Source ToolTip to Left
		lSLeft: '-27px',
		
		// Merchant TooltTip Text
		mRcTip: 'Merchant',
		
		// Merchant ToolTip BackGround
		mRcBack: '#0A9A7A',
		
		// Merchant ToolTip Color
		mRcColor: '#fff',
		
		// Merchant ToolTip to Left
		mRcLeft: '-19px',
		
		// Period ToolTip Text
		periTip: 'Period',
		
		// Period ToolTip BackGround
		periBack: '#0A9A7A',
		
		// Period ToolTip Color
		periColor: '#fff',
		
		// Period ToolTip to Left
		periLeft: '-11px',
		
		// LeadId ToolTip Text 
		lidTip: 'Lead Id',
		
		// LeadId ToolTip BackGround
		lidBack: '#0A9A7A',
		
		// LeadId ToolTip Color
		lidColor: '#fff',
		
		// LeadId toolTip to Left
		lidLeft: '-14px',
		
		
		submTip: 'Use Creation or Transmition Date for Report',
			
		submBack: '#0A9A7A',
		
		submColor: '#fff',
		
		submLeft: '-122px',
		
		
		agTip: 'Age Group',
			
		agBack: '#0A9A7A',
		
		agColor: '#fff',
		
		agLeft: '-26px',
		
		
		adjTip: 'Adjusted On',
			
		adjBack: '#0A9A7A',
		
		adjColor: '#fff',
		
		adjLeft: '-25px',
		
		
		pGpBack: '#0A9A7A',
			
		pGpColor: '#fff',
		
		pGpLeft: '18px',
		
		
		pLeadsBack: '#0A9A7A',
			
		pLeadsColor: '#fff',
		
		pLeadsLeft: '-6px',
		
		
		roiBack: '#0A9A7A',
			
		roiColor: '#fff',
		
		roiLeft: '17px',
		
		
		subAffTip: 'Select SubAffiliate ID',
			
		subAffBack: '#0A9A7A',
		
		subAffColor: '#fff',
		
		subAffLeft: '-54px',
		
		
		levTip: 'Level',
			
		levBack: '#0A9A7A',
		
		levColor: '#fff',
		
		levLeft: '-7px',
		
		
		posTip: 'Position',
			
		posBack: '#0A9A7A',
		
		posColor: '#fff',
		
		posLeft: '-14px',
		
		
		reptyTip: 'Time Frame',
			
		reptyBack: '#0A9A7A',
		
		reptyColor: '#fff',
		
		reptyLeft: '-24px',
		
		
		bandTip: 'Age Banding',
			
		bandBack: '#0A9A7A',
		
		bandColor: '#fff',
		
		bandLeft: '-26px',
		
		
		userTip: 'User',
			
		userBack: '#0A9A7A',
		
		userColor: '#fff',
		
		userLeft: '-6px'
	});
	
	// Design Settings Screen
	let kSettings = {
		
		// Id's Elements to Load Design Settings Screen
		Id: '#leftNavpicker, #globalpicker, #secTtilespicker, #navHeading, #navSubHeading, #tabspicker, #calpicker, #NavBackground, #IconBackground, #IconColor, #NavSubBackground, #NavChildSubBackground'
	}
	
	$(kSettings.Id).kendoColorPicker({
		value: "#f9f9f9",
		buttons: false,
		select: preview
	});
	
	// Browser.Check Propreties Function
	$.fn.LoadWdefault = function(browserOpt) {

		// Plugin Name
		let pluginName = 'BrowserCheckUp';

		// Checkings For Navigators Mobile & Desktop 
		let ua = navigator.userAgent;

		let browDefault = $.extend({
			
			// Window Load
			window: $(window),
			
			// Checking For Browsers
			browser: {
				
				// Chrome Browser
				chromeB: 'Chrome',
				
				// FireFox Browser
				firefoxB: 'Firefox',
				
				// Safari Browser
				safariB: 'Safari',
				
				// Opera Chrome 
				operaB: 'Opera',
				
				// I.E. Browser
				ieB: 'MSIE'
			},
			
			// Checking For Browser Classes
			browserCl: {
				
				// opera Browser Class
				opera: 'Opera',
				
				// Chrome Browser Class
				chrome: 'Chrome',
				
				// Safari Browser Class
				safari: 'Safari',
				
				// FierFox Browser class
				firefox: 'FireFox',
				
				// I.E. Browser Class
				ie: 'Ie'
			},
			
			// Checking For Devices 
			device: {
				
				// Check For an Iphone Device
				iphone: ua.match(/Phone/),
				
				// Check For an Ipad Device
		      	ipad: ua.match(/iPad/),
				
				// Check For an Ipod Device 
		      	ipod: ua.match(/iPod/),
				
				// Check For a BlackBerry Device
		      	blackberry: ua.match(/BlackBerry/),
				
				// Check For an Android Device
		      	android: ua.match(/Android/),
				
				// Check For a Windows Device
				windows: ua.match(/iemobile/),
				
				// Check For a Desktop Device
				desktop: window.innerWidth > 1000
		    },
			
			// Width Template
			winSize: $('<span />', { class: 'WidthResol hidden' }),
			
			// Height Template
			heiSize: $('<span />', { class: 'HeightResol hidden' }),
			
			// Mini Leads TeleSales Tempalte 
			miniLTip: $('<span/>', { class: 'miniLeadtoolTip searchTip' }),
			
			rightBtn: '<span class="rtBtn-Icon"></span>',
			
			value: {
				
				// Mini Leads ToolTips Random Value
				mLtVal: 0
			},
			
			tTipCl: '.mLeadT_',
			
			tooltips: {
				
				mT6: 'Retain selected lead',
				
				mT5: 'Reject selected lead',
				
				mT4: 'Deletes selected lead(s), unless lead falls within retain conditions for affiliate, contextual or social, in which case, the lead will be retained.',
				
				mT3: 'Bulk transfer selected leads. Please make sure you select leads with the SAME product type before attempting to bulk transfer.',
				
				mT2: 'Transfer selected lead',
				
				mT0: 'Allocate lead to a telesales user'
			},
			
			icoVal: $('#globalpicker'),
			
			tbsVal: $('#tabspicker'),
			
			navLVal: $('#leftNavpicker'),
			
			secTle: $('#secTtilespicker'),
			
			navlk: $('#navHeading'),

            navsublk: $('#navSubHeading'),
			
			calblk: $('#calpicker'),
			
			navBackId: $('#NavBackground'),
			
			iconBackId: $('#IconBackground'),
			
			iconColorId: $('#IconColor'),
			
			subBackNav: $('#NavSubBackground'),
			
			subChBackNav: $('#NavChildSubBackground')
			
		}, browserOpt);
		
		// Browser Settings
		let settingsBrow = $.extend( true, {}, browDefault, browserOpt );

		// Main Prototype Function
		function BrowserCheck(browserOpt) {

			// Override Default Propreties
			this.settings = $.extend( {}, browDefault, browserOpt);

			// Plugin Name
			this.name = pluginName;

			// Loads GlobalBrowser Prototype.
			this.GlobalBrowser();
			
			// Media Queries Injection
			this.mediaResize();
		}

		// Plugin Prototype
		$.extend( BrowserCheck.prototype, {
			
			GlobalBrowser: function() {
				
				settingsBrow.window.ready(function() { mobileCheck(); browserCheck(); });

				// Device Check Function
				function mobileCheck() {
					
					// Check For Android Device
				    if (settingsBrow.device.android){ $('html').addClass('Android'); } 
					
					// Check For Iphone Device
					else if (settingsBrow.device.iphone){ $('html').addClass('Iphone'); } 
					
					// Check For Ipad Device
					else if (settingsBrow.device.ipad){ $('html').addClass('Ipad'); } 
					
					// Check For Ipod Device
					else if (settingsBrow.device.ipod){ $('html').addClass('Ipod'); } 
					
					// Check For BlackBerry Device
					else if (settingsBrow.device.blackberry){ $('html').addClass('BlackBerry'); } 
					
					// Check For DeskTop Device
					else { $('html').addClass('Desktop'); }
				}
				
				// Browser Check Function
				function browserCheck() { 
					
					// Check For Opera Browser
				    if((navigator.userAgent.indexOf(settingsBrow.browser.operaB) 
						
						|| navigator.userAgent.indexOf('OPR')) != -1 ) { $('html').addClass(settingsBrow.browserCl.opera); } 
					
					// Check For Chrome Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.chromeB) != -1 ) { $('html').addClass(settingsBrow.browserCl.chrome); } 
					
					// Check For Safari Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.safariB) != -1) { $('html').addClass(settingsBrow.browserCl.safari); } 
					
					// Check For FireFox Browser
					else if(navigator.userAgent.indexOf(settingsBrow.browser.firefoxB) != -1 ) { $('html').addClass(settingsBrow.browserCl.firefox); } 
					
					// Check For I.E. Browser
					else if((navigator.userAgent.indexOf(settingsBrow.browser.ieB) != -1 ) 
						
						|| (!!document.documentMode == true )) { $('html').addClass(settingsBrow.browserCl.ie);
				    
				    }  else { alert('You are running an Unknown Browser') }
				}
			},
			
			mediaResize: function() {
				
				// @Media Queries( Height ) Function
				let getBrowserWidth = function() {
					
					if(window.innerHeight == 1008) {}
				};
				getBrowserWidth();
				
				// Runs Function on Screen Resize
				$(window).on('resize',function() { getBrowserWidth() });
				
				// Checks Window Resolution
				let WinResol = function() {
					
					let h = $(window).height();
					let	w = $(window).width();
						
					$('html').addClass('h_' + h);
					$('html').addClass('w_' + w);
				};
				$(document).ready(WinResol); 
				$(window).resize(WinResol);
			}
		});

		// Runs Main Function
		let TBrowserCheck = new BrowserCheck();
	
		// Mini Leads Tool Tips Injection
		$(settingsBrow.miniLTip).appendTo('.caseTopFlag .miniLeads-Btn');
		
		// Mini Leads ToolTip Random Injection
		$('.miniLeadtoolTip').each(function() {
			
			$(this).addClass('mLeadT_' + settingsBrow.value.mLtVal); 
			settingsBrow.value.mLtVal++;
		});
		
		$(settingsBrow.tTipCl + 6).html(settingsBrow.tooltips.mT6);
		
		$(settingsBrow.tTipCl + 5).html(settingsBrow.tooltips.mT5);
		
		$(settingsBrow.tTipCl + 4).html(settingsBrow.tooltips.mT4);
		
		$(settingsBrow.tTipCl + 3).html(settingsBrow.tooltips.mT3);
		
		$(settingsBrow.tTipCl + 2).html(settingsBrow.tooltips.mT2);
		
		$(settingsBrow.tTipCl + 0).html(settingsBrow.tooltips.mT0);
		
		$.fn.caseFOver =  function() {
			return this.on('mouseover', '.caseTopFlag .miniLeads-Btn', function() {
				
				$('.miniLeadtoolTip', this).show();
				
			}).on('mouseleave', '.caseTopFlag .miniLeads-Btn', function() { $('.miniLeadtoolTip').hide();});	
		}
		$(document).caseFOver();
		
		// Icon to the Right Btn Injection
		$(settingsBrow.rightBtn).appendTo('#button-nav-right, #button-nav-right-1024');
		
		// Design Settings
		$.fn.colorSettings = function() {
            return this.on('click', '.sClo', function() {
				
				$(this).html('Successfully saved').append('<i class="fad fa-spinner-third fa-spin" aria-hidden="true" style="position: absolute; top: 9px; left: -30px;"></i>');
				
				$('.OverLayBtn').css({ 'padding-left': '42px' });

				setTimeout(function() { 
				
					$('.sClo').html('Save and Publish'); 
					$('.OverLayBtn').css({ 'padding-left': '' });
					
				}, 1000);
				
				// Global Icons
				if(settingsBrow.icoVal.val() == '#f9f9f9') {
					
					$('#button-nav-right .rtBtn-Icon').css({ color: '#0BAD86', border: '1px solid #0BAD86' });
					$('.k-widget .k-icon.chagClr').css({ color: '#0A9A7A'});
					
				} else {
					
					$('#button-nav-right .rtBtn-Icon').css({ color: settingsBrow.icoVal.val(), border: '1px solid ' + settingsBrow.icoVal.val() });
					
					$('.k-widget .k-icon.chagClr').css({ color: settingsBrow.icoVal.val()});
					
					//$('.DesignSettings .OverLayBtn .oLayer').css({ background: $('.OverLayIn').val()});
				}
				
				if(settingsBrow.iconColorId.val() == '#f9f9f9') {
					
					$('.new-right-ico-floor i').css({ color: '#fff' });
					
				} else { $('html .new-right-ico-floor i').css({ color: settingsBrow.iconColorId.val()}); }
				
				if(settingsBrow.iconBackId.val() == '#f9f9f9') {
					
					$('main .left-nav .new-right-ico-floor').css({ background: 'rgba(20, 23, 28, 0.45)'});
					
				} else { $('main .left-nav .new-right-ico-floor').css({ background: settingsBrow.iconBackId.val()}); }
				
				if(settingsBrow.navBackId.val() == '#f8f8f8') {
					
					$('main .left-nav').css({ background: '#2b303b' });
					
				} else { $('main .left-nav').css({ background: settingsBrow.navBackId.val() }); }
				
				
				if(settingsBrow.subBackNav.val() == '#f9f9f9') {
					
					$('html main .left-nav .new-drop-qx').css({ background: '#40444e' });
					
				} else { $('html main .left-nav .new-drop-qx').css({ background: settingsBrow.subBackNav.val() }); }
				
				
				if(settingsBrow.subChBackNav.val() == '#f9f9f9') {
					
					$('html main .left-nav .new-drop-sub').css({ background: '#53565f' });
					
				} else { $('html main .left-nav .new-drop-sub').css({ background: settingsBrow.subChBackNav.val() }); }
				
				
				// Grid Tabs
				if(settingsBrow.tbsVal.val() == '#f9f9f9') {
					
					$('.k-tabstrip-items .k-item').css({ color: '#0A9A7A'});
					
				} else { $('.k-tabstrip-items .k-item').css({ color: settingsBrow.tbsVal.val()}); }
				
				// Left Nav Color Icons
				if(settingsBrow.navLVal.val() == '#f9f9f9') {
					
					$('#searchbar .panel-heading i').css({ color: '#0BAD86'});
					
				} else { $('#searchbar .panel-heading i').css({ color: settingsBrow.navLVal.val()}); }
				
				// Section Titles Colors
				if(settingsBrow.secTle.val() == '#f9f9f9') { 
				
					$('.separate-nav .separ-title').css({ color: '#0BAD86'});
				
				} else { $('.separate-nav .separ-title').css({ color: settingsBrow.secTle.val()}); }
				
				// Nav Left Heading Colors
				if(settingsBrow.navlk.val() == '#f9f9f9') { 
				
					$('.new-top-item, .new-sub-url').css({ color: '#fff'});
				
				} else { $('.new-top-item, .new-sub-url').css({ color: settingsBrow.navlk.val()}); }
				
				// Nav Left Sub Heading Colors
				if(settingsBrow.navsublk.val() == '#f9f9f9') { 
				
					$('.new-top-item-second').css({ color: '#999'});
				
				} else { $('.new-top-item-second').css({ color: settingsBrow.navsublk.val()}); }
				
				// Calendar Icons Colors
				if(settingsBrow.calblk.val() == '#f9f9f9') { 
				
					//$('.k-widget .k-icon.chagClr').css({ color: '#0A9A7A'});
					console.log('#0A9A7A');
				
				} else { 
					
					$('.k-widget .k-icon.chagClr').css({ color: settingsBrow.calblk.val()});  
				}
				
			});
		}
		$(document).colorSettings();

		$.fn.ResetClrs = function() {
			return this.on('click', '.sReset', function() {
				
				$('#leftNavpicker').val('#fff');
				$('html .new-right-ico-floor i').css({ color: '#fff'});
				$('html .NavIcons .k-selected-color').css({ 'background-color': '#fff'});
				
				$('#secTtilespicker, #globalpicker, #calpicker, #tabspicker').val('#0BAD86');
				$('.SectionTitles .k-selected-color, .GeneralIcons .k-selected-color, .CalendarIcons .k-selected-color, .GridTabs .k-selected-color').css({ 'background-color': '#0BAD86'});
				
				$('html #button-nav-right .rtBtn-Icon').css({ color: '#0BAD86', 'border-color': '#0BAD86' });
				
				$('#navHeading').val('#ddd');
				$('html .NavHeading .k-selected-color').css({ 'background-color': '#ddd'});
				
				$('#navSubHeading').val('#999');
				$('html .NavSubheading .k-selected-color').css({ 'background-color': '#999'});
				
			});
		}
		$(document).ResetClrs();
	}

	// Runs Browser.Check Propreties Function
	dc.LoadWdefault();
	
	// TOP LINE(TeleSales Show/Hide)
	$.fn.ShowHideText = function() {
		return this.on('click', '.showhide', function() {
			
			$(this).text(function(i, t) { return t === 'Show List' ? 'Hide List' : 'Show List' });
		});
	}
	$(document).ShowHideText();
	
	// Switches TeleSales Mouseover
	$.fn.overTipsTeleSaleSwitch = function() {
		return this.on('mouseover', '.rights-blk', function() {
			
			$('.right_title', this).css({ display: 'flex'});
			
		}).on('mouseleave', '.rights-blk', function() { $('.right_title').hide(); });
	}
	$(document).overTipsTeleSaleSwitch();

	// Flip TollTip Hover
	$.fn.flipImgOver = function() {
		return this.on('mouseover', '.flipImg', function() {

			$('.flipImgToolTip', this).show();

		}).on('mouseleave', '.flipImg', function() { $('.flipImgToolTip').hide(); });
	}
	$(document).flipImgOver();
	
	// Flip Selected Click Event
	$.fn.telSCk = function() {
		return this.on('click', '*', function(e) {
			
			let cls = $(this)[0].className;
			
			if(cls.indexOf('Top-UserCont') != -1) {
				
				$('.Top-UserCont').removeClass('btnEnable');
				$(this).addClass('btnEnable');
			}
			else if(cls.indexOf('teleSales_nav') != -1) {
				
				e.stopPropagation();
				$('html').addClass('clTSales');
			}
			else if(cls.indexOf('clTSales') != -1) {
				
				$('.left-nav').removeClass('teleSalesLN_nav');
				$('.teleSales_nav').removeClass('teleSales_Change');
				$('html').removeClass('clTSales');
			}
		});
	}
	$(document).telSCk();
	
	// Design Settings UpLoad Multiple Files
	$("#files").kendoUpload({

		async: {
			saveUrl: "save",
			removeUrl: "remove",
			autoUpload: false
		},
		multiple: true,

		select: function(e) {
			let fileInfo = e.files[0];
			let wrapper = this.wrapper;

			setTimeout(function() { addPreview(fileInfo, wrapper); });
		}
	});

	$.fn.selFiles = function() {
		return this.on('click', '#files', function() {

			$('#fileUpload .k-upload .k-button.k-clear-selected').text('Clear All');
		}); 
	}
	$(document).selFiles();

	$.fn.upLoadFOver = function() {
		return this.on('mouseover', '.image-preview', function() {

			$(this).css({ transform: 'scale(2.7)', '-webkit-transform': 'scale(2.7)', '-moz-transform': 'scale(2.7)', transition: '.3s', '-webkit-transition': '.3s', '-moz-transition': '.3s', 'z-index': '1000'});

		}).on('mouseleave', '.image-preview', function() { $('.image-preview').css({ transform: '', transition: '.3s', '-webkit-transition': '.3s', '-moz-transition': '.3s', 'z-index': ''});});
	};
	$(document).upLoadFOver();
	
	
	// Right Nav Alphabetic Products
	$('.Life .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.Life');
	
	$('.Health .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.Health');
	
	$('.Mortgages .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.Mortgages');
	
	$('.Equity .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.Equity');
	
	$('.BusinessPMI .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.BusinessPMI');
	
	$('.FuneralPlan .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.FuneralPlan');
	
	$('.IP .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.IP');
	
	$('.FuneralInsurance .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.FuneralInsurance');
	
	$('.FiftyLife .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.FiftyLife');
	
	$('.HomeForCash .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.HomeForCash');
	
	$('.HearingAids .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.HearingAids');
	
	$('.StairLifts .rights-blk').sort(function(a, b) { if(a.textContent < b.textContent) { return -1; } else { return 1; }}).appendTo('.StairLifts');
	
	
	$('#searchbar .new-right-ico-floor').removeAttr('style');
	
	//$('<input class="OverLayIn" type="text" />').appendTo('.DesignSettings .OverLayBtn');
	//$('.OverLayIn').val( $('.thisRgb').val() );
	
	$('#nav-right .gotodr').addClass('fad');
	
});

// Kendo Color Picker
function preview(e) {
	$("#background").css("background-color", e.value);
}

// Preview Image For Kendo Upload ( General Settings )
function addPreview(file, wrapper) {

	let raw = file.rawFile;
	let reader = new FileReader();

	if (raw) {
		reader.onloadend = function() {

			let preview = $("<img class='image-preview'>").attr("src", this.result);

			wrapper.find(".k-file[data-uid='" + file.uid + "'] .k-file-extension-wrapper").replaceWith(preview);
		};

		reader.readAsDataURL(raw);
	}
}