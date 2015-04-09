
  
  // Autocomplete Factory
    jQuery(function() {
      var availableTags = [
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews",
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews",
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews",
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews",
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews",
            "John Smith",
            "Jane Doe",
            "Sarah Smith",
            "Isabelle Mathews"
          ];
      $( "#auto" ).autocomplete({
        source: availableTags
        });
    });
    
// Function for move Categories
    jQuery(function() {
          $( "#category" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
          $( "#subcategory-core" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
          $( "#subcategory-visual" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
          $( "#subcategory-sub" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
      });

    // Function for Appeareance
    jQuery(document).ready(function(){
            $("#catg-core").click(function(){
            $("#subcategory-core").show();
            $("#catg-core-select").show();
            $(".actite-btncatg").show();
        });
            $("#catg-visual").click(function(){
            $("#subcategory-visual").show();
            $("#catg-visual-select").show();
            $(".actite-btncatg").show();
        });
            $("#catg-core-select").click(function(){
            $(".sub-catg").hide();
        });
            $("#catg-intro").click(function(){
            $("#catg-core-select").hide();
            $("#catg-visual-select").hide();
            $(".sub-catg").hide();
            $(".disp-none").hide();
        });
            $("#catg-visual").click(function(){
            $("#subcategory-core").hide();
            $("#catg-intro-select").hide();
            $("#catg-core-select").hide();
            $(".no-sub").hide();
        });
            $("#catg-core").click(function(){
            $("#subcategory-visual").hide();
            $("#catg-intro-select").hide();
            $("#catg-visual-select").hide();
            $(".no-sub").hide();
        });
            $(".newsubcatg").click(function(){
            $(".newcatg-focus").hide();
        });
            $(".newcatg").click(function(){
            $(".newsubcatg-focus").hide();
        });
            $(".close").click(function(){
            $(".newsubcatg-focus").hide();
            $(".newcatg-focus").hide();
            $(".suspendcatg-focus").hide();
            $(".deletecatg-focus").hide();
        });
            $(".modal").click(function(){
            $(".newsubcatg-focus").hide();
            $(".newcatg-focus").hide();
            $(".suspendcatg-focus").hide();
            $(".deletecatg-focus").hide();
        });
            $("#catg-intro").click(function(){
            $("#catg-intro-select").show();
            $(".no-sub").show();
        });
            $(".newcatg").click(function(){
            $(".newcatg-focus").show();
        });
            $(".newsubcatg").click(function(){
            $(".newsubcatg-focus").show();
        });
            $(".suspendcatg").click(function(){
            $(".suspendcatg-focus").show();
        });
            $(".deletecatg").click(function(){
            $(".deletecatg-focus").show();
        });
            $(".dropdownvisible").click(function(){
            $(".btnactive-btncatg").show();
        });
        
        	$("#hide").click(function(){
			$(".tohide").hide();
		});
			$("#hide2").click(function(){
			$(".tohidesmall").hide();
		});
        
    });

    // ScrollBars
    (function(jQuery){
     jQuery(window).load(function(){
            $("#toedit .panel-user").mCustomScrollbar({
                setHeight:300,
                theme:"uel-uefa"
            });
                    
            $("#nav-usern .panel-nav-group").mCustomScrollbar({
                setHeight:300,
                theme:"uel-uefa"
            });

            $("#downl-panel-user .scroll-thumbs").mCustomScrollbar({
                 setHeight:300,
                 theme:"uel-uefa"
            });
                    
        });
     })(jQuery);

     // Menu Accordion
    jQuery(function() {
      var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      
      // Variables privadas
      var links = this.el.find('.link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
      Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
     $this = $(this),
      $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
      }
      var accordion = new Accordion(jQuery('#accordion'), false);
      });












  