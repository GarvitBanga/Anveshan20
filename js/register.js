
$(()=>{
    $('#submitbtn').click(async ()=>{
      const name = $("#name").val();
      const email = $("#email").val();
      const pwd = $("#pwd").val();
      if(!name){
          $("#errors").html("<strong>Plz Enter a name</strong>");
          return;
      }
      if(!email){
        $("#errors").html("<strong>Plz Enter a valid email</strong>");
        return;
    }
    if(!pwd){
        $("#errors").html("<strong>Plz Enter a password</strong>");
        return;
    }
     const data = {
         name,
         email,
         password:pwd
     }

    try {

        const config = {
            method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        }
    
        const res = await fetch('https://anveshanauthentication.herokuapp.com/api/user/register',config);
        const json = await res.json();
        const {msg} = json
        if(msg){
            $("#errors").html(`<strong>${msg}</strong>`);
            return;
        }
        $("#errors").html(`<strong>Registration Successfull</strong>`);
        $("#name").val('');
       $("#email").val('');
       $("#pwd").val('');


    } catch (error) {
        console.error(error);
    }

    })
})
