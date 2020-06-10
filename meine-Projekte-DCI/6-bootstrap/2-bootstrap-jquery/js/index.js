$(document).ready(function () {
    $("#btn").click(function (e) { 
        e.preventDefault();
        let ckeckData= true
        let email = $("#InputEmail").val();
        let passworde=$("#InputPassword").val()
        if (!email.trim()) {
            $("#alertDiv").removeClass("d-none");
            ckeckData=false
            
        }
        if (!passworde.trim()) {
            $("#alertDiv").removeClass("d-none");
            ckeckData=false
        }
        if (ckeckData) {

            let sendDataObj={
                emailAddress:email,
                passWord :passworde
            }
        $.ajax({
        type: "GET",
        url: "./usercheck.json",
        data:JSON.stringify(sendDataObj),
        dataType:"json",
        success: function (response) {
            console.log(response);
            
             if (response.result==false) {
                $('#errorModel').modal('show')
             } else{ alert('success')}
            
        }
    });
        }
        
    });
   
});