
$.fn.allKendo = function(options) {

	let settings = $.extend({

		gridElement: true

	}, options);

	function kGrid(options) { 

		this.allLeadgrid(); 

		this.gridLogic();
	}

	$.extend( kGrid.prototype, {
		
		allLeadgrid: function() {
			$("#AllLeadsGrid").kendoGrid({
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
			    groupable: true,
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
				        title: "POS"
				    }, 
				    {
				        width: 30
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Alert"
				    }, 
				    {
				        field: "Country",
				        title: "LeadId"
				    },
				    {
				        field: "ContactTitle",
				        title: "DisId"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Source",
				    }, 
				    {
				        field: "Country",
				        title: "Tracking Summary"
				    },
				    {
				        field: "Country",
				        title: "Pix"
				    },
				    {
				        field: "ContactTitle",
				        title: "Product"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "First Name"
				    }, 
				    {
				        field: "Country",
				        title: "Last Name"
				    },
				    {
				        field: "ContactTitle",
				        title: "Land Line"
				    }, 
				    {
				        field: "Country",
				        title: "Email"
				    }, 
				    {
				        field: "Country",
				        title: "Created On"
				    },
				    {
				        field: "Country",
				        title: "Website Url"
				    },
				    {
				        field: "ContactName",
				        title: "Transferred To"
				    }
			    ]
			});

			this.RequiresGrid();

			this.QueuedGrid();

			this.TransferedGrid();

			this.RejectedGrid();

			this.DelectedGrid();

			this.RetainedGrid();
		},

		RequiresGrid: function() {
			$("#RequiresGrid").kendoGrid({
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
			    groupable: true,
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
				        width: 27
				    }, 
				    {
				        width: 27
				    }, 
				    {
				        width: 27
				    }, 
				    {
				        field: "Country",
				        title: "Alert"
				    },
				    {
				        field: "ContactTitle",
				        title: "LeadId"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Created On"
				    }, 
				    {
				        field: "Country",
				        title: "Source"
				    },
				    {
				        field: "Country",
				        title: "Product"
				    },
				    {
				        field: "ContactTitle",
				        title: "Tracking Summary"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Pix"
				    }, 
				    {
				        field: "Country",
				        title: "First Name"
				    },
				    {
				        field: "ContactTitle",
				        title: "Last Name"
				    }, 
				    {
				        field: "Country",
				        title: "Landline"
				    }, 
				    {
				        field: "Country",
				        title: "Mobile"
				    },
				    {
				        width: 27
				    },
				    {
				        width: 27
				    },
				    {
				        width: ""
				    },
				    {
				        field: "Country",
				        title: "Email"
				    },
				    {
				        field: "ContactName",
				        title: "Transfer to"
				    }
			    ]
			});
		},

		QueuedGrid: function() {
			$("#QueuedGrid").kendoGrid({
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
			    groupable: true,
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
				        title: "POS"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "LeadId"

				    }, 
				    {
				        field: "ContactTitle",
				        title: "LegId"
				    }, 
				    {
				        field: "Country",
				        title: "Created On"
				    },
				    {
				        field: "ContactTitle",
				        title: "Transferring To"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Transfer By"
				    }, 
				    {
				        field: "Country",
				        title: "Available From"
				    },
				    {
				        field: "Country",
				        title: "Source"
				    },
				    {
				        field: "ContactTitle",
				        title: "Tracking Summary"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Pix"
				    }, 
				    {
				        field: "Country",
				        title: "First Name"
				    },
				    {
				        field: "ContactTitle",
				        title: "Last Name"
				    }, 
				    {
				        field: "Country",
				        title: "Landline"
				    }, 
				    {
				        field: "Country",
				        title: "Email"
				    },
				    {
				        field: "Country",
				        title: "Product Type Name"
				    },
				    {
				        field: "ContactName",
				        title: "Website Url"
				    }
			    ]
			});
		},

		TransferedGrid: function() {
			$("#TransferedGrid").kendoGrid({
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
			    groupable: true,
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
				        title: "Lead Position"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Alert"

				    }, 
				    {
				        field: "ContactTitle",
				        title: "LeadId"
				    }, 
				    {
				        field: "Country",
				        title: "DisId"
				    },
				    {
				        field: "ContactTitle",
				        title: "Product"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "XFER To"
				    }, 
				    {
				        field: "Country",
				        title: "XFER On"
				    },
				    {
				        field: "Country",
				        title: "Created On"
				    },
				    {
				        field: "ContactTitle",
				        title: "Del time(min)"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Source"
				    }, 
				    {
				        field: "Country",
				        title: "Tracking Summary"
				    },
				    {
				        field: "ContactTitle",
				        title: "Pix"
				    }, 
				    {
				        field: "Country",
				        title: "Landline"
				    }, 
				    {
				        field: "Country",
				        title: "Mobile"
				    },
				    {
				        field: "Country",
				        title: "First Name"
				    },
				    {
				        field: "ContactName",
				        title: "Last Name"
				    },
				    {
				        field: "ContactName",
				        title: "Email"
				    }
			    ]
			});
		},

		RejectedGrid: function() {
			$("#RejectedGrid").kendoGrid({
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
			    groupable: true,
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
				        width: 60
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Alert"

				    }, 
				    {
				        field: "ContactTitle",
				        title: "LeadId"
				    }, 
				    {
				        field: "Country",
				        title: "LegId"
				    },
				    {
				        field: "CompanyName",
				        title: "Created On"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Product"
				    }, 
				    {
				        field: "Country",
				        title: "Source"
				    },
				    {
				        field: "Country",
				        title: "Tracking Summary"
				    },
				    {
				        field: "ContactTitle",
				        title: "Pix"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "First Name"
				    }, 
				    {
				        field: "Country",
				        title: "Last Name"
				    },
				    {
				        field: "ContactTitle",
				        title: "Landline"
				    }, 
				    {
				        field: "Country",
				        title: "Mobile"
				    }, 
				    {
				        field: "Country",
				        title: "Calls"
				    },
				    {
				        field: "Country",
				        title: "Outcome"
				    },
				    {
				        field: "ContactName",
				        title: "Email"
				    },
				    {
				        field: "ContactName",
				        title: "Affiliate Id"
				    },
				    {
				        field: "ContactName",
				        title: "Website Url"
				    },
				    {
				        field: "ContactName",
				        title: "Rejection Reason"
				    }
			    ]
			});
		},

		DelectedGrid: function() {
			$("#DelectedGrid").kendoGrid({
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
			    groupable: true,
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
				        width: 60
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Alert"

				    }, 
				    {
				        field: "ContactTitle",
				        title: "LeadId"
				    }, 
				    {
				        field: "Country",
				        title: "LegId"
				    },
				    {
				        field: "CompanyName",
				        title: "Created On"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "First Name"
				    }, 
				    {
				        field: "Country",
				        title: "Last Name"
				    },
				    {
				        field: "Country",
				        title: "Landline"
				    },
				    {
				        field: "ContactTitle",
				        title: "Mobile"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Calls"
				    }, 
				    {
				        field: "Country",
				        title: "Call Outcome Id"
				    },
				    {
				        field: "ContactTitle",
				        title: "Email"
				    }, 
				    {
				        field: "Country",
				        title: "Product"
				    }, 
				    {
				        field: "Country",
				        title: "Tracking Summary"
				    },
				    {
				        field: "Country",
				        title: "Pix"
				    },
				    {
				        field: "ContactName",
				        title: "Source"
				    },
				    {
				        field: "ContactName",
				        title: "Website Url"
				    }
			    ]
			});
		},

		RetainedGrid: function() {
			$("#RetainedGrid").kendoGrid({
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
			    groupable: true,
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
				        field: "ContactTitle",
				        title: "Alert"

				    }, 
				    {
				        field: "ContactTitle",
				        title: "LeadId"
				    }, 
				    {
				        field: "Country",
				        title: "LegId"
				    },
				    {
				        field: "CompanyName",
				        title: "Created On"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "First Name"
				    }, 
				    {
				        field: "Country",
				        title: "Last Name"
				    },
				    {
				        field: "Country",
				        title: "Landline"
				    },
				    {
				        field: "ContactTitle",
				        title: "Mobile"
				    }, 
				    {
				        field: "ContactTitle",
				        title: "Calls"
				    }, 
				    {
				        field: "Country",
				        title: "Call Outcome Id"
				    },
				    {
				        field: "ContactTitle",
				        title: "Retain Reason"
				    }, 
				    {
				        field: "Country",
				        title: "Email"
				    }, 
				    {
				        field: "Country",
				        title: "Tracking Summary"
				    },
				    {
				        field: "Country",
				        title: "Pix"
				    },
				    {
				        field: "ContactName",
				        title: "Product"
				    },
				    {
				        field: "ContactName",
				        title: "Source"
				    },
				    {
				        field: "ContactName",
				        title: "Website Url"
				    }
			    ]
			});
		},

		gridLogic: function() {

			var grid = $('#AllLeadsGrid, #RequiresGrid, #QueuedGrid, #TransferedGrid, #RejectedGrid, #DelectedGrid, #RetainedGrid').data("kendoGrid");

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

			$('.' + settings.gridElement).removeClass('k-auto-scrollable').css({ overflow: 'hidden' }).attr({ id: 'k-grid-content'});

			$('.k-grid-header').css({ 'padding-right': 0 });

			$('.k-grid.k-widget').removeClass('k-display-block');

			// Displays Scroll Bar
			$('#' + settings.gridElement).mCustomScrollbar({ theme:"dark-3", scrollInertia: 50 });

			$('#' + settings.gridElement).css({ overflow: 'hidden', height: '670px'});


			// Grid Tabs Effect 
			$("#tabstrip").kendoTabStrip({
				animation:  {
					open: {
						effects: "fadeIn"
					}
				}
			});
		}

	});

	let kgr = new kGrid();
}

$(document).allKendo();



// Settings Overrides
$('.k-grid').allKendo({

	gridElement: 'k-grid-content'
});