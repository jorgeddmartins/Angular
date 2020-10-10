
$(function() {

	"use strict";

    $.fn.LoadCamera = function(cameraData) {

    	let PluginName = 'WebCamAccess';

    	let camSettings = $.extend({

    		width: 120, 
		    height: 0, 

		    streaming: false,

		    video: null,
		    canvas: null,
		    photo: null,
		    startbutton: null,

		    topTxt: $('<span>', { class: 'warning' }).text('WebCam Warning Msg')

    	}, cameraData);


    	function runWebCam() {

    		this._pugin = PluginName;

    		this.newCamWeb();
    	}

    	$.extend( runWebCam.prototype, {

    		newCamWeb: function() {

    			window.addEventListener('load', startup);

		    	function startup() {

			        camSettings.video = document.getElementById('TakeYourSelfie');
			        camSettings.canvas = document.getElementById('results');
			        camSettings.photo = document.getElementById('photo');
			        camSettings.startbutton = document.getElementById('startbutton');


			        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
			            .then(function(stream) {

			                camSettings.video.srcObject = stream;
			                camSettings.video.play();

			                $('.warning').css({ display: 'flex'}).addClass('warnSuccess').text('A WebCam was Found');

			                setTimeout(function() {

			                	$('.warnSuccess').fadeOut(200);

			                }, 3000);
			            })

			            .catch(function(err) {

			                $('.StartVideo').addClass('startVBlock');

			                $('.warning').css({ display: 'flex'}).addClass('warnError').text('An error occurred: ' + err + ' WebCam Not Found');

			                setTimeout(function() {

			                	$('.warnError').fadeOut(200);

			                }, 3000);

			            });

			        camSettings.video.addEventListener('canplay', function(ev) {

			            if(!camSettings.streaming) {

			                camSettings.height = camSettings.video.videoHeight / (camSettings.video.videoWidth / camSettings.width);

			                if(isNaN(camSettings.height)) {

			                    camSettings.height = camSettings.width / (4 / 3);
			                }
			                
			                camSettings.video.setAttribute('width', camSettings.width);
			                camSettings.video.setAttribute('height', camSettings.height);
			                camSettings.canvas.setAttribute('width', camSettings.width);
			                camSettings.canvas.setAttribute('height', camSettings.height);
			                camSettings.streaming = true;
			            }

			        }, false);
			   

			        camSettings.startbutton.addEventListener('click', function(ev) {

			            takepicture();
			            ev.preventDefault();

			        }, false);


			        clearphoto();
			    }

			    function clearphoto() {

			        let context = camSettings.canvas.getContext('2d');
			        context.fillStyle = "#AAA";
			        context.fillRect(0, 0, camSettings.canvas.width, camSettings.canvas.height);

			        let data = camSettings.canvas.toDataURL('image/png');
			       	// photo.setAttribute('src', data);
			    }

			    function takepicture() {

			        let context = camSettings.canvas.getContext('2d');
			        if(camSettings.width && camSettings.height) {

			            camSettings.canvas.width = camSettings.width;
			            camSettings.canvas.height = camSettings.height;
			            context.drawImage(camSettings.video, 0, 0, camSettings.width, camSettings.height);

			            let data = camSettings.canvas.toDataURL('image/png');
			            // photo.setAttribute('src', data);

			        } else { clearphoto(); }
			    }

			    this.CamEvents();
			},

			CamEvents: function() {

			    $.fn.PictureCk = function() {
			    	return this.on('click', '*', function() {

			    		let tCl = $(this)[0].className;

			    		if(tCl.indexOf('takePicture') != -1) {

			    			let image = document.getElementById('results').toDataURL('image/png');
				            image = image.replace('data:image/png;base64,', '');

			    			$('#results').css({ 'z-index': '100'});
					    	$('.VideoBox').hide();

					    	$('.StartVideo').removeClass('startVBlock');

					    	$(this).addClass('startVBlock');

				            $('.dataUrlImg').attr({ src: 'data:image/png;base64,' + image });

				            $('.EditUserImg, .avatar img').attr({ src: 'data:image/png;base64,' + image });

				            $('.k-upload-files .k-i-close').click();
			    		}

			    		else if(tCl.indexOf('StartVideo') != -1) {

			    			$('#results').css({ 'z-index': ''});
					    	$('.VideoBox').show();

					    	$(this).addClass('startVBlock');

					    	$('.VideoBox span').hide();

					    	$('.takePicture').removeClass('startVBlock');

					    	$('.SubmitSett').addClass('addImgVd');
			    		}

			    		else if(tCl.indexOf('OpenToChange') != -1) {

			    			$('.FormProfile').show();
			    			$(this).detach();
			    		}


						// Send the canvas image to the server.
			    		else if(tCl.indexOf('addImgVd') != -1) {

			    			let image = document.getElementById('results').toDataURL('image/png');
				            image = image.replace('data:image/png;base64,', '');


				            $(this).removeClass('addImgVd');
				        
				           	$.ajax({

				                type: 'POST',
				                url: 'GetCanvasFromClientToServer.aspx/UploadImage',
				                url: '@Url.Action("UpdateCanvasUpload")',
				                data: '{ "imageData" : "' + image + '" }',
				                contentType: 'application/json; charset=utf-8',
				                dataType: 'json',
				                success: function(result) {

				                    if(result == "success") {

				                    	alert('Image saved successfully!'); 

				                    } else {

				                    	alert('Something Went Wrong! Try Again');
				                    }
				                }

				            });
			    		}

			    	});
			    }

			    $(document).PictureCk();

			    $(camSettings.topTxt).appendTo('.SnapShot');
			}

	    });

	    let runWebCamWeb = new runWebCam();

    }

    $(document).LoadCamera();



    $("#files").kendoUpload({

    	multiple: false,

    	select: function(e) {
            let fileInfo = e.files[0];
            let wrapper = this.wrapper;

            setTimeout(function() { addPreview(fileInfo, wrapper); });
        }

    });

    function addPreview(file, wrapper) {

	    let raw = file.rawFile;
	    let reader = new FileReader();

	    if (raw) {
	        reader.onloadend = function() {


	            $('.EditUserImg, .avatar img').attr({ src: this.result });

	            $('.VideoBox, .VideoBox span').show();

	            $('#results').css({ 'z-index': '' });

	        };

	        reader.readAsDataURL(raw);
	    }
	}

    $('.k-upload .k-upload-button span').text('Upload a profile picture');

});