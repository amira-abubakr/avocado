// login 

export  async function GenerateToken(data){

    let req = await fetch('',{
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    console.log("req", req);
    return req.json();
} 