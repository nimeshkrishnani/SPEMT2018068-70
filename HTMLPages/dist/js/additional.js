$(document).ready(function(){

  $(document).on('click',"#submitSubEventInfo",function(e){
    e.preventDefault();
    //alert("oye");
    /*var id = $("#workerid").val();
    if(id.length==0){
      alert("Enter Worker Id");
      return;
    }*/
    alert("aao");
    alert($("#eventName").val());
    $("#returnData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/insertSubEvent',
      contentType: "application/json",
      data: JSON.stringify({
                eventName:$("#eventName").val(),
                subEventName:$("#subEventName").val(),
                subEventInfo:$("#subEventInfo").val(),
                contactName1:$("#contactName1").val(),
                contactNum1:$("#contactNum1").val(),
                contactName2:$("#contactName2").val(),
                contactNum2:$("#contactNum2").val(),
                subEventLocation:$("#subEventLocation").val(),

                
      }),
      dataType: "json",
      
      success: function(data){
        $('#returnData').html("");
        if(data.msg=='successfull'){
          content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%">SubEvent Inserted with that name</div>';
             $('#returnData').html(content);
        }
        else{
          content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Event Exists with that name</div>';
             $('#returnData').html(content);
        }
    }
  })
    
  })


  $(document).on('click',"#submitWorkerId",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#workerid").val();
    if(id.length==0){
      alert("Enter Worker Id");
      return;
    }
    $("#workerData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/workerDetails',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title">Name of Worker: &nbsp;&nbsp<b>  '+data.name+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Date</th>';
          content2 +='<th>Rooms Cleaned</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          $.each(data.data, function(index,value){
            //alert(index);
            var date = new Date(value.date);
            var newDate = date.toString('dd-MM-yy');
            content2 += '<tr>';
            content2 += '<td>' + date.toString().substring(4,15) + '</td>';
            content2 += '<td>' + value.rooms+ '</td>';
            content2 += '<tr>';
          })
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#workerData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Worker Exists with that ID</div>';
             $('#workerData').html(content);
          }

      }

    });
    
  })


  $(document).on('click',"#submitRoomNo",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#roomno").val();
    if(id.length==0){
      alert("Enter Room Number");
      return;
    }
    $("#roomData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/roomDetails',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title">Email of Student: &nbsp;&nbsp<b>  '+data.email+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Date</th>';
          content2 +='<th>Type</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          $.each(data.data, function(index,value){
            //alert(index);
            var date = new Date(value.date);
            var newDate = date.toString('dd-MM-yy');
            content2 += '<tr>';
            content2 += '<td>' + date.toString().substring(4,15) + '</td>';
            if(value.type==0){
             content2 += '<td>' +'Mop'+ '</td>' 
            }
            else{
              content2 += '<td>' +'Sweep'+ '</td>' 
            }
            //content2 += '<td>' + value.rooms+ '</td>';
            content2 += '<tr>';
          })
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#roomData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Student Exists with that Roll Number</div>';
             $('#roomData').html(content);
          }

      }

    });
    
  })


  $(document).on('click',"#submitDate",function(e){
    e.preventDefault();
    //alert("oye");
    var id = $("#date2").val();
    //alert(id);
    if(id.length==0){
      alert("Enter Date");
      return;
    }
    $("#dateData").html("");
    var content = "";
    $.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/dateFetch',
      contentType: "application/json",
      data: JSON.stringify({
                id:id,
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title"><b>  '+'Total Rooms Cleaned'+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Type</th>';
          content2 +='<th>Rooms Cleaned</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          
            //alert(index);
            content2 += '<tr>';
            content2 += '<td>' + 'Mop'+ '</td>';
            content2 += '<td>' + data.counts+ '</td>';
            content2 += '<tr>';
            content2 += '<tr>';
            content2 += '<td>' + 'Sweep'+ '</td>';
            content2 += '<td>' + data.counts2+ '</td>';
            content2 += '<tr>';
          
          content2 +='</tbody>';
          content2 +='</table></div></div></div></div></section>';
          content2 +='</div>';
          $("#dateData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Worker Exists with that ID</div>';
             $('#dateData').html(content);
          }

      }

    });
    
  })

})



$('#submit').click(function(e) {   /* The form of validation and checking of credentials entered for login by Admin */
      e.preventDefault();
   // Initializing Variables With Form Element Values
//alert("aye");
var email = $('#email').val();
var password =$("#password").val();
// To Check Empty Form Fields.

// Validating Email Field.
if ( email.length == 0) {
$('#head').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
$("#email").focus();
return false;
}
else if (password.length == 0) {
    $('#head').text("* Please Enter password *"); // This Segment Displays The Validation Rule For Password
    $("#password").focus();
    return false;
}
else {
setdata();
}
});




function setdata(){    // This function checks the validity of the credentials
    var email = $('#email').val();
    var password =$("#password").val();
    $.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/adminLogin',
      contentType: "application/json",
      data: JSON.stringify({
                email:email,
                password:password
            }),
      dataType: "json",
      success: function(data){
         if(data.msg=="successfull"){
          window.location="index_my.html";
          alert("Ballw");
          }
          else if(data=="Error"){
           $('#head').text("Could NOT Send SMS Right Now , Try again Later");
          }
          else{
              $('#head').text("Either Incorrect username or password");
          }

      }
    });
 //alert(a);
    }

$('#worker').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content='';
content +='<form class="form-horizontal">';
content +='<div class="box-body">';
content +='<div class="form-group" style="margin-left:-10%">';
content +='<label for="workerid" class="col-sm-2 control-label">Worker Id</label>';

content +='<div class="col-sm-2">';
content +='<input type="text" class="form-control" id="workerid" placeholder="Worker Id">';
content +='</div>';
content +='<div class="col-sm-2">';
content +='<button type="submit" id = "submitWorkerId" class="btn btn-info pull-left">Search</button>';
content +='</div>';
content +='</div>';
content +='</div>';
content +='</form>';
content +='<div id="workerData">';
$("#parent").html(content);



    });
$('#enter_events').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content2='';
content2 +='<form class="form-horizontal">';
content2 +='<div class="box-body">';
content2 +='<div class="form-group" style="margin-left:-10%">';
content2 +='<label for="event_name" class="col-sm-2 control-label">Event Name</label>';

content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="eventName" placeholder="Default Event">';
content2 +='</div>';
content2 +='<div class="col-sm-2">';
content2 +='<button type="submit" id = "submitWorkerId" class="btn btn-info pull-left">Search</button>';
content2 +='</div>';
content2 +='</div>';
content2 +='</div>';
content2 +='</form>';
content2 +='<div id="workerData">';
$("#parent").html(content2);



    });
$('#enter_sub_events').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content2='';
content2 +='<form class="form-horizontal">';
content2 +='<div class="box-body">';
content2 +='<div class="form-group" style="margin-left:-1%">';
content2 +='<br/>'
content2 +='<label for="event_name" class="col-sm-2 control-label">Event Name</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="eventName" placeholder="Default Event">';
content2 +='</div>';

content2 +='<label for="sub_event_name" class="col-sm-2 control-label">Sub Event Name</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="subEventName" placeholder="Sub Event">';
content2 +='</div>';

content2 +='<label for="sub_event_info" class="col-sm-2 control-label">Sub Event Info</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="subEventInfo" placeholder="Sub Event Info">';
content2 +='</div>';

content2 +='<label for="contact_name_one" class="col-sm-2 control-label">First Contact Person Name</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="contactName1" placeholder="Contact Name 1">';
content2 +='</div>';

content2 +='<label for="contact_num_one" class="col-sm-2 control-label">First Contact Person Number</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="contactnum1" placeholder="Contact Number 1">';
content2 +='</div>';


content2 +='<label for="contact_name_two" class="col-sm-2 control-label">Second Contact Person Name</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="contactName2" placeholder="Contact Name 2">';
content2 +='</div>';

content2 +='<label for="contact_num_two" class="col-sm-2 control-label">Second Contact Person Number</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="contactnum2" placeholder="Contact Number 2">';
content2 +='</div>';

content2 +='<label for="sub_event_location" class="col-sm-2 control-label">Sub Event Location</label>';
content2 +='<div class="col-sm-2">';
content2 +='<input type="text" class="form-control" id="subEventLocation" placeholder="Sub Event Location">';
content2 +='</div>';

content2 +='<div class="col-sm-2">';
content2 +='<button type="submit" id = "submitSubEventInfo" class="btn btn-info pull-left">Submit</button>';
content2 +='</div>';
content2 +='</div>';
content2 +='</div>';
content2 +='</form>';
content2 +='<div id="returnData">';
$("#parent").html(content2);

  /*$.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/insertSubEvent',
      data: JSON.stringify({
                eventName:$("#eventName").val(),
                subEventName:$("#subEventName").val(),
                subEventInfo:$("#subEventInfo").val(),
                contactName1:$("#contactName1").val(),
                contactNum1:$("#contactNum1").val(),
                contactName2:$("#contactName2").val(),
                contactNum2:$("#contactNum2").val(),
                subEventLocation:$("#subEventLocation").val(),

                
      }),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
        $('#returnData').html("");
        if(data.msg=='successfull'){
          content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%">SubEvent Inserted with that name</div>';
             $('#returnData').html(content);
        }
        else{
          content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Event Exists with that name</div>';
             $('#returnData').html(content);
        }
    }
  })*/


    });

$('#room').click(function(e) {   
      e.preventDefault();
     // alert('Entered Worker');
      $("#parent").html("");

var content='';
content +='<form class="form-horizontal">';
content +='<div class="box-body">';
content +='<div class="form-group" style="margin-left:-10%">';
content +='<label for="roomno" class="col-sm-2 control-label">Room Number</label>';

content +='<div class="col-sm-2">';
content +='<input type="text" class="form-control" id="roomno" placeholder="Room Number">';
content +='</div>';
content +='<div class="col-sm-2">';
content +='<button type="submit" id = "submitRoomNo" class="btn btn-info pull-left">Search</button>';
content +='</div>';
content +='</div>';
content +='</div>';
content +='</form>';
content +='<div id="roomData">';
$("#parent").html(content);



    });





function myFunction(id,name){
	//alert(id);
	$("#tempData").html("");
	var content ='';
	$.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/subEventFetch',
      data: JSON.stringify({
                id:id
                
	    }),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title">  '+'List of the Sub Events of&nbsp<b>'+data.name+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Sub Event Name</th>';
          content2 +='<th>Sub Event Info</th>';
          content2 +='<th>Contact Name 1</th>';
          content2 +='<th>Contact Number 1</th>';
          content2 +='<th>Contact Name 2</th>';
          content2 +='<th>Contact Number 2</th>';
          content2 +='<th>Sub Event Location</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          
            //alert(index);
        $.each(data.data, function(index,value){
          
            content2 += '<tr>';
            content2 += '<td>' + value.subEventName + '</td>';
            content2 += '<td>' + value.subEventInfo + '</td>';
            content2 += '<td>' + value.contactName1 + '</td>';
            content2 += '<td>' + value.contactNum1 + '</td>';
            content2 += '<td>' + value.contactName2 + '</td>';
            content2 += '<td>' + value.contactNum2 + '</td>';
            content2 += '<td>' + value.subEventLocation + '</td>';
            content2 += '<tr>';
          })
          
          content2 +='</tbody>';
          content2 +='</table></div></div></div><div class="col-xs-12" id = "tempData"></div></div></section>';
          content2 +='</div>';
          $("#tempData").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Sub Events associated with that particular event exists</div>';
             $('#tempData').html(content);
          }

      }

    });
}

$('#events').click(function(e){
	e.preventDefault();
	$('#parent').html('');
	var content ='';
	$.ajax({
      type: "POST",
      url: 'https://testspemysql.herokuapp.com/eventFetch',
      contentType: "application/json",
      success: function(data){
         if(data.msg=="successfull"){
          var content2="";
          content2 += '<section class="content">';
          content2 +='<div class="row">';
          content2 +='<div class="col-xs-12">';
          content2 +='<div class="box">';
          content2 +='<div class="box-header">';
          content2 +='<h3 class="box-title"><b>  '+'List of the Events'+'</b></h3>';
          content2 +='</div>';
          content2 +='<!-- /.box-header -->';
          content2 +='<div class="box-body">';
          content2 +='<table id="example2" class="table table-bordered table-hover">';
          content2 +='<thead>';
          content2 +='<tr>';
          content2 +='<th>Event Name</th>';
          content2 +='</tr>';
          content2 +='</thead>';
          content2 +='<tbody>';
          
            //alert(index);
        $.each(data.data, function(index,value){
          
            content2 += '<tr>';
            content2 += '<td onclick = "myFunction('+value.eventId+')">' + value.eventName + '</td>';
            content2 += '<tr>';
          })
          
          content2 +='</tbody>';
          content2 +='</table></div></div></div><div class="col-xs-12" id = "tempData"></div></div></section>';
          content2 +='</div>';
          $("#parent").html(content2);
          }
          else{
             //alert("phat gaya");
             content = '<div class="alert alert-info" style="margin-left:5%;margin-right:5%"> No Worker Exists with that ID</div>';
             $('#dateData').html(content);
          }

      }

    });
})


/*$("#submitWorkerId").click(function(e) {   
      e.preventDefault();
      alert('Entered Worker');
   });*/