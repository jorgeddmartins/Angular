
function kGrid(options) { 

	this.policygrid(); 

	this.backQueueGrid();

	this.gridLogic();
}

$.extend( kGrid.prototype, {

	policygrid: function() {
		$("#PolicyGrid").kendoGrid({

			toolbar: ["excel"],
		    excel: {
		        fileName: "policies.xlsx",
		        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
		        filterable: true
		    },

		    dataSource: {
		        type: "odata",
		        transport: {
		            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
		        },
		        schema: {
					model: {
						fields: {
							CompanyName: { type: "date" }
						}
					}
				},
		        pageSize: 20
		    },
		    height: "100%",
		    groupable: false,
		    sortable: true,
		    reorderable: true,
		    resizable: true,
		    columnMenu: true,
		    filterable: {
		        mode: "row"
		    },
		    pageable: {
		        refresh: true,
		        pageSizes: true,
		        buttonCount: 5
		    },
		    columns: [
			    {
			        field: "ContactName",
			        title: "Pol Id",
			        width: ""
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Policy Status",
			        width: ""
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Policy No",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "CRM Id",
			        width: ""
			    },
			    {
			        field: "ContactTitle",
			        title: "Client",
			        width: ""
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Post Code",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Insurer Id",
			        width: ""
			    },
			    {
			        field: "CompanyName",
			        title: "Sale Date",
			        width: ""
			    },
			    {
			        field: "CompanyName",
			        title: "Start Date",
			        width: ""
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Application Type",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Cover Type",
			        width: ""
			    },
			    {
			        field: "ContactTitle",
			        title: "Initial Premium",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Gross Comms",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Sales Person",
			        width: ""
			    },
			    {
			        field: "ContactName",
			        title: "Sold By",
			        width: ""
			    }, 
			    {
			        field: "ContactTitle",
			        title: "RET Sold",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Processor",
			        width: ""
			    }, 
			    {
			        field: "Country",
			        title: "Split Commission",
			        width: ""
			    },
			    {
			        field: "CompanyName",
			        title: "Allocation Date",
			        width: ""
			    }, 
			    {
			        field: "CompanyName",
			        title: "Med Dec Received Date",
			        width: ""
			    }
		    ]
		});
	},

	backQueueGrid: function() {
		$("#backQueueGrid").kendoGrid({

			toolbar: ["excel"],
		    excel: {
		        fileName: "backQueue.xlsx",
		        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
		        filterable: true
		    },

		    dataSource: {
		        type: "odata",
		        transport: {
		            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
		        },
		        schema: {
					model: {
						fields: {
							CompanyName: { type: "date" }
						}
					}
				},
		        pageSize: 20
		    },
		    height: "100%",
		    groupable: false,
		    sortable: true,
		    reorderable: true,
		    resizable: true,
		    columnMenu: true,
		    filterable: {
		        mode: "row"
		    },
		    pageable: {
		        refresh: true,
		        pageSizes: true,
		        buttonCount: 5
		    },
		    columns: [
			    {
			        field: "",
			        title: "",
			        width: 50
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Crm ID"
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Policy No"
			    }, 
			    {
			        field: "CompanyName",
			        title: "Sale Date"
			    },
			    {
			        field: "ContactTitle",
			        title: "Policy Status"
			    }, 
			    {
			        field: "ContactTitle",
			        title: "Client"
			    }, 
			    {
			        field: "CompanyName",
			        title: "Pack Sent Date"
			    }
		    ]
		});
	},

	gridLogic: function() {

		var grid = $("#PolicyGrid, #backQueueGrid").data("kendoGrid");

		$("#save").click(function(e) {
		    e.preventDefault();
		    localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions());
		});

		$("#load").click(function(e) {
		    e.preventDefault();
		    var options = localStorage["kendo-grid-options"];
		    if (options) {
		        grid.setOptions(JSON.parse(options));
		    }
		});

		$('.k-grid-content').removeClass('k-auto-scrollable').css({ overflow: 'hidden' }).attr({ id: 'k-grid-content'});

		$('.k-grid-header').css({ 'padding-right': 0 });

		$('.k-grid.k-widget').removeClass('k-display-block');

		// Displays Scroll Bar
		$("#k-grid-content").mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

		// Loads Kendo Grid For My Policies
		let mpoli = $('.mypoliciesTemp').length > 0 ? $('.mypoliciesTemp #backQueueGrid').detach() : '';

		// Loads Kendo Grid For BackQueue
		let bqu = $('.backQueueTemp').length > 0 ? $('.backQueueTemp #PolicyGrid').detach() : '';
	}
});

let kgr = new kGrid();