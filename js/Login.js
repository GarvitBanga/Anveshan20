$(()=>{
    $('#submitbtn').click(async ()=>{
      const email = $("#email").val();
      const pwd = $("#pwd").val();
      if(!email){
        $("#errors").html("<strong>Plz Enter a valid email</strong>");
        return;
    }
    if(!pwd){
        $("#errors").html("<strong>Plz Enter a password</strong>");
        return;
    }
     const data = {
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
    
        const res = await fetch('https://anveshanauthentication.herokuapp.com/api/user/login',config);
        const json = await res.json();
        const {msg} = json
        if(msg){
            $("#errors").html(`<strong>${msg}</strong>`);
            return;
        }
        localStorage.setItem("token",json.tkn);
        console.log(localStorage.getItem("token"));
        $("#errors").html(`<strong>Login Successfull</strong>`);
       $("#email").val('');
       $("#pwd").val('');


    } catch (error) {
        console.error(error);
    }

    })
})