
let d = $(document);
let ck = 'click';


$(function() {

	"use strict";


	let tasksUrl = 'assets/js/tasks.json';

	$.ajax({

		type: 'GET',
		url: tasksUrl,

		success: function(tasksdata) { d.TasksHeader(tasksdata) }

	});


	$.fn.TasksHeader = function(tasksdata) {

		let tasksHeader = '';
		for( let t in tasksdata.tasksHeader ) {

			tasksHeader += '<span class="ThHeader headerInput10">' + tasksdata.tasksHeader[t].name + '</span>';
		}
		$(tasksHeader).appendTo('.tasksTemp .AllPolHeader');


		let taskHeaderEdit = '';
		for( let e in tasksdata.tasksHeaderEdit ) {

			taskHeaderEdit += '<span class="headerInpBox ' + tasksdata.tasksHeaderEdit[e].topClass + '" id="taskEdit_' + tasksdata.tasksHeaderEdit[e].id + '">' +
									'<input class="gridSearchIn ' + tasksdata.tasksHeaderEdit[e].editClass + '" type="text" id="' + tasksdata.tasksHeaderEdit[e].editId + '" />' +
							  '</span>';
		}
		$(taskHeaderEdit).appendTo('.tasksTemp .HeaderSearch');


		let SalePers = '';
		for( let s in tasksdata.salesDrop ) {

			SalePers += '<li class="DropSearchOPt">' + tasksdata.salesDrop[s].name + '</li>';
		}
		$(SalePers).appendTo('.DropSalesPerson')


		let dropTasksDt = '';
		for( let i in tasksdata.tasksDropData ) {

			dropTasksDt += '<li class="DropSearchOPt">' + tasksdata.tasksDropData[i].nameTask + '</li>';
		}
		$(dropTasksDt).appendTo('.DropTasks');


		$('.DropSalesPerson .DropSearchOPt:odd, .DropTasks .DropSearchOPt:odd').css({ background: '#f8f8f8' })

	}


	$.fn.GlobalDrop = function() {
		return this.on(ck, '*', function() {

			const DropDownSalesPerdon = $(this).hasClass('DropDownSalesPerdon') ? $('.DropSalesPerson').slideToggle(200) : '';

			const DropDownTask = $(this).hasClass('DropDownTasks') ? $('.DropTasks').slideToggle(200) : '';

		});
	}
	d.GlobalDrop();


	$.fn.SalesItemDrop = function() {
		return this.on(ck, '.DropSalesPerson .DropSearchOPt', function() {

			$('.DropDownSalesPerdon').val($(this).html());
			$('.DropSalesPerson').slideUp(100)
		});
	}
	d.SalesItemDrop();

	$.fn.TasksItemDrop = function() {
		return this.on(ck, '.DropTasks .DropSearchOPt', function() {

			$('.DropDownTasks').val($(this).html());
			$('.DropTasks').slideUp(100)
		});
	}
	d.TasksItemDrop();

});