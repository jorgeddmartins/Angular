
// Document Element
let dr = $(document);

$(function() {

	"use strict";

	$.fn.routingGo = function(routingOpt) {

		let pluginName = 'Routing';

		let dafaultRt = $.extend({

			// Routing For All Screen
			routing: {

				// Host Path
				PathH: 'http://localhost:4232/#/',

				// Window Location
				WinLocation: window.location.href
			}

		}, routingOpt);

		// Routing Settings
		let settRouting = $.extend( true, {}, dafaultRt, routingOpt);


		function RoutingGl(routingOpt) {

			this._defaults = dafaultRt;

			this._name = pluginName;

			this.rGlobal();
		}


		$.extend( RoutingGl.prototype, {

			rGlobal: function() {

				// Loading AddLead Screen
				if(settRouting.routing.WinLocation === settRouting.routing.PathH + 'addlead' 

					// Loading AllPolicies Screen 
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'allpolicies'

					// Loading LeadPot Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'leadpot'

					// Loading News Manager Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'news' 

					// Loading IconModal Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'iconmodal' 

					// Loading MenuSettings Screen 
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'menusettings' 

					// Loading SalesPersonCap Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'salepersoncap' 

					// Loading SalesPersonTypes
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'salepersontypes' 

					// Loading MyLeads Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'myleads' 

					// Loading MyPolicies Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'mypolicies' 

					// Loading PreRiskPolicies Screen 
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'preriskpolicies' 

					// Loading PreSavePolicies Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'presavepolicies' 

					// Loading PreCancellation Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'precancellation' 

					// Loading OnRiskPolicies Screen 
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'onriskpolicies' 

					// Loading Tasks Screen 
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'tasks'

					// Loading PackQueue Screen
					|| settRouting.routing.WinLocation === settRouting.routing.PathH + 'backqueue'

				) { SmarterWith() } 

			}

		});


		let rGl = new RoutingGl();

	}

	// Function to Run Routing Settings
	dr.routingGo();

});