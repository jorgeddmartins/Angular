[{
    "id": 1,
    "text": "foo",
    "expanded": true,
    "items": [
        { "id": 2, "text": "foo2", "expanded": false, "checked": false }, {
            "id": 3,
            "text": "foo2-1",
            "expanded": false,
            "items": [
                { "id": 4, "text": "foo3", "expanded": false, "checked": false }
            ],
            "checked": false
        }
    ],
    "checked": true
}]
JS Code:
$(document).ready(function() {
	
        var dataSource = new kendo.data.HierarchicalDataSource({
            transport: {
                read: {
                    url: servlet,
                    datatype: "json",
                    contentType: "application/json"
                }

            },
            schema: {
                model: {
                    children: "items",
                    id: "id"
                },
                data: function(data) {
                    var dataArray = eval(data);
                    return dataArray;
                }
            }
        });

        var treeView = $("#treeView").kendoTreeView({

            dataSource: dataSource,
            dataTextField: "text",
            checkboxes: {
                checkChildren: true
            }
        });
    });
