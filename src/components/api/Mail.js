export const sendMail = (data) => {
    return fetch('http://cl8lqrgqf00013b6cpumpr1xb.demo.coolify.io/api/sendmail', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        console.log("response", response); return response.json();
    }).catch(err => console.log(err))
}


// https://emailodejs.herokuapp.com