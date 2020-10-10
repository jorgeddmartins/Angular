
$.fn.allKendo = function(options) {

	let settings = $.extend({

		gridElement: true

	}, options);

	function kGrid(options) { 

		this.RequiresGrid(); 

		this.gridLogic();
	}

	$.extend( kGrid.prototype, {
		
		RequiresGrid: function() {

			$("#TelesalesGrid").kendoGrid({

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

		gridLogic: function() {

			var grid = $('#TelesalesGrid').data("kendoGrid");

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

			$('#' + settings.gridElement).css({ overflow: 'hidden', height: '710px' });

			$('.k-grid-header').css({ height: '56px', overflow: 'hidden' });

			//TbodyGr
			$('.k-alt').addClass('TbodyGr');

		}

	});

	let kgr = new kGrid();

}
$(document).allKendo();


// Settings Overrides
$('.k-grid').allKendo({

	gridElement: 'k-grid-content'
});