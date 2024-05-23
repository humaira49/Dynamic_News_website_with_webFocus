  $(document).ready(function(){
	  //______HOME_________
    $("#index").click(function() {
    var data
     data = {
      "IBIF_ex":"index"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______AFGHANISTAN_________
        $("#AFG").click(function() {
    var data
     data = {
      "IBIF_ex":"AFGHANISTAN"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
 //______WORLD_________
     $("#WRD").click(function() {
    var data
     data = {
      "IBIF_ex":"WORLD"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______SPORT_________
     $("#SPORT").click(function() {
    var data
     data = {
      "IBIF_ex":"SPORT"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______ABOUT_________
          $("#ABOUT").click(function() {
    var data
     data = {
      "IBIF_ex":"ABOUT"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______SIGNIN_________
          $("#SIGNIN").click(function() {
    var data
     data = {
      "IBIF_ex":"SIGNIN"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
      
       //______NOT_FOUND_________
          $("#NOT_FOUND").click(function() {
    var data
     data = {
      "IBIF_ex":"404"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______NOT_FOUND2_________
          $("#NOT_FOUND2").click(function() {
    var data
     data = {
      "IBIF_ex":"404"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______AFGHANISTAN2_________
        $("#AFG2").click(function() {
    var data
     data = {
      "IBIF_ex":"AFGHANISTAN"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
 //______WORLD2_________
     $("#WRD2").click(function() {
    var data
     data = {
      "IBIF_ex":"WORLD"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______SPORT2_________
     $("#SPORT2").click(function() {
    var data
     data = {
      "IBIF_ex":"SPORT"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //______ABOUT2_________
          $("#ABOUT2").click(function() {
    var data
     data = {
      "IBIF_ex":"ABOUT"
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
      
    
  //______________________________GETTING ID________________________________
   //     _________________this is for Latest news page, card 1
 
$("#w-node-_51cf9611-c21f-d510-e537-c194f50fe151-0f16fe9c").click(function() {
    var get_id = $(this).attr('data-ID');
    var data;
    data = {
        "IBIF_ex": "DESCRIPTION",  
      "GET_ID":get_id
    };
    $.post(gc_RpcType, data, function(resp) {
        $("#body").html(resp);
    });
});
 //     _________________this is for Latest news page, card 2
          $("#one").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
 //     _________________this is for Latest news page, card 3
          $("#TWO").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _________________this is for Latest news page, card 4
          $("#THREE").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _________________this is for Latest news page, card 5
          $("#four").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _________________this is for Latest news page, card 6
          $("#five").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _________________this is for Latest news page, card 7
          $("#SIX").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _________________this is for Afghanistan news page, card 1
          $("#afg1").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _________________this is for Afghanistan news page, card 2
          $("#afg2").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
   //     _________________this is for Afghanistan news page, card 3
          $("#afg3").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
  //     _________________this is for Afghanistan news page, card 4
          $("#afg4").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
 //     _________________this is for Afghanistan news page, card 5
          $("#afg5").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
//     _________________this is for Afghanistan news page, card 6
          $("#afg6").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _________________this is for Afghanistan news page, card 7
         $("#afg7").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _________________this is for Afghanistan news page, card 8
         $("#afg8").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _________________this is for Afghanistan news page, card 9
         $("#afg9").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //       _________________this is for world news page, card 1
          $("#w-node-a6600b0d-fb83-3554-c468-7da1b7a2614a-c5a9e2a3").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
       //       _________________this is for world news page, card 2
          $(".WRD2").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //       _________________this is for world news page, card 3
          $(".WRD3").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //       _________________this is for world news page, card 4
          $(".WRD4").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //       _________________this is for world news page, card 5
          $(".WRD5").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
//       _________________this is for world news page, card 6
          $(".WRD6").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
     //     _____________ this is for sport page, card 1 
          $("#S1").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _____________ this is for sport page, card 2 
          $("#S2").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //     _____________ this is for sport page, card 3
          $("#S3").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
//     _____________ this is for sport page, card 4 
          $("#S4").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
        // this is the .ready function End
 });
// ______________________________________this is for Authentication , Sign in________________________
    $("#ADMIN").click(function() {
	    VALIDATE();
    });
function VALIDATE() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username or password is empty
    if (username === "" || password === "") {
        $("#error-message").text("Username and password must not be empty.");
        return; // Exit the function if either field is empty
    }

    var data = {
        "IBIF_ex": "SIGNIN",
        "TAG": "VALIDATE",
        "USERNAME": username,
        "PASSWORD": password
    };

    $.post(gc_RpcType, data, function(response) {
        if (response.includes(data.USERNAME) && response.includes(data.PASSWORD)) {
            validate();
        } else {
            $("#error-message").text("Invalid email or password. Please try again.");
        }
    });
}

function validate() {
    var data = {
        "IBIF_ex": "ADMIN"
    };
    $.post(gc_RpcType, data, function (response) {
        $("#body").html(response);
    });

}
// ______________this is for reload and response ________________table news_______________________________
function table() {
    var data = {
        "IBIF_ex": "ADMIN",
        "TAG":"REPORT",
        "RELOAD":"Y"
       
    };
    $.post(gc_RpcType, data, function (response) {
        $("#news_table").html(response);
    });

}
// _________________this is for deleting a record______________news table___________________________
function deletefunc(ID){
 alert("Are you sure do you want to delete this record?");
	var data={
	"IBIF_ex":"ADMIN",
	"TAG":"DELETERECORD",
	"ID": parseInt(ID)

	};
		$.post(gc_RpcType, data, function(resp){
			alert("Record deleted!");
			table();
	});
}
// ________________this is for getting data for edit________________________news table_______________________
function editfunc(ID){
	var data={
	"IBIF_ex":"ADMIN",
	"TAG":"EDITRECORD",
	"ID":  parseInt(ID)
	};
	$.post(gc_RpcType, data, function(resp){
			$('#myModal').modal('show');
			$("#myModal").html(resp);
	});
}
// this is for editing a record______________________news table__________________________________
function EDIT() {
    var data = {
        "IBIF_ex": "ADMIN",
        "TAG": "EDIT_RECORD",
        "ID": $("#ID").val(),
        "NEWS_TITLE": $("#NT").val(),
        "NEWS": $("#N").val(), 
        "COUNTRY": $("#C").val(),
        "NEWS_DATE": $("#ND").val(),
        "NEWS_TYPE": $("#NT2").val(),
        "NEWS_IMAGE": $("#NI").val() 
    };
    $.post(gc_RpcType, data, function (response) {
	    alert("Record updated!");
        table();
    });
}
// _________________________________THIS IS FOR INSERTING A RECORD__________news table_____
 function ADD_RECORD(){
	 var data = {
        "IBIF_ex": "ADMIN",
        "TAG": "ADD_RECORD",
        "NEWS_TITLE": $("#NT_M").val(),
        "NEWS": $("#N_M").val(), 
        "COUNTRY": $("#C_M").val(),
        "NEWS_DATE": $("#ND_M").val(),
        "NEWS_TYPE": $("#NT2_M").val(),
        "NEWS_IMAGE": $("#NI_M").val() 
    };
	     $.post(gc_RpcType, data, function (response) {
	    alert("Record added!");
        table();
    });
}

// _________________this is for deleting a record_________________users table_____________
function deletefuncA(ID){
 alert("Are you sure do you want to delete this record?");
	var data={
	"IBIF_ex":"ADMIN2",
	"TAG":"DELETERECORD",
	"ID": parseInt(ID)

	};
		$.post(gc_RpcType, data, function(resp){
			alert("Record deleted!");
			tableA();
	});
}
// ______________this is for reload and response ____________________users table______________________
function tableA() {
    var data = {
        "IBIF_ex": "ADMIN2",
        "TAG":"REPORT",
        "RELOAD":"Y"
       
    };
    $.post(gc_RpcType, data, function (response) {
        $("#usersTable").html(response);
    });

}
// _________________________________THIS IS FOR INSERTING A RECORD_______users table___________
 function ADD_RECORD_A(){
	 var data = {
        "IBIF_ex": "ADMIN2",
        "TAG": "ADD_RECORD_A",
        "ID": $("#ID").val(),
        "USERNAME": $("#username").val(), 
        "PASSWORD": $("#password").val() 
    };
	     $.post(gc_RpcType, data, function (response) {
	    alert("Record added!");
        tableA();
    });
}
//_____________________________________________EDIT_____________________users table_______
// ________________this is for getting data for edit 
function editfuncA(ID){
	var data={
	"IBIF_ex":"ADMIN2",
	"TAG":"EDITRECORD_A",
	"ID": parseInt(ID)
	};
	$.post(gc_RpcType, data, function(resp){
			$('#myModal4').modal('show');
			$("#myModal4").html(resp);
	});
}
// this is for updating a record____________________________________users table____________
function EDIT_A() {
    var data = {
        "IBIF_ex": "ADMIN2",
        "TAG": "EDIT_RECORD_A",
        "ID": $("#id_a").val(),
        "USERNAME": $("#user_name").val(),
        "PASSWORD":$("#pass_word").val()
    };
    $.post(gc_RpcType, data, function (response) {
	    console.log($("#id_a").val()+$("#user_name").val()+$("#pass_word").val());
	    alert("Record updated!");
        tableA();
    });
}
// this is for clicking menu item from sidebar to show the table ____________________________
 $("#usersLink").click(function(){
       var data = {
        "IBIF_ex": "ADMIN2",
        "TAG":"REPORT",
        "RELOAD":"Y"
    };
    $.post(gc_RpcType, data, function (response) {
        $("#usersTable").html(response);
    });
    });
// this is to hide the text in admin panel when table appears_______________
    $(document).ready(function() {
  $('.menu-item').click(function() {
    $('#menuMessage').hide();
  });

//       _________________this is for latest news page, card 7
          $("#haft").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    
    //       _________________this is for latest news page, card 8
          $("#hasht").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //       _________________this is for latest news page, card 9
          $("#nine").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //       _________________this is for latest news page, card 10
          $("#ten").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //       _________________this is for latest news page, card 11
          $("#yazda").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    
    //       _________________this is for latest news page, card 12
          $("#twelve").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    //       _________________this is for latest news page, card 13
          $("#sez10").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    
    //       _________________this is for latest news page, card 14
          $("#char10").click(function() {
	            var get_id = $(this).attr('data-ID');
    var data
     data = {
      "IBIF_ex":"DESCRIPTION",
       "GET_ID":get_id
     };
     $.post(gc_RpcType, data, function(resp){
      $("#body").html(resp);
     });
    });
    
    //      ________________________________________this is for search, Browse__________________________
$("#search_btn").click(function() {
    var data = {
        "IBIF_ex": "SEARCH",
        "TAG": "HO_ME",
        "SEARCH_VAL": $('#search').val()
    };
    
    $.post(gc_RpcType, data, function(resp) {
        if(resp.includes("No results found!")) {
            alert("No results found!");
        } else {
            $("#body").html(resp);
        }
    });
});

});