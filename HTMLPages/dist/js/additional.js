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