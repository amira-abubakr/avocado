export default async function CreateNewUser(data)
{
    let req = await fetch("",
        {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({data})

    })
    if(!req.ok){throw new Error("Failed to create user")}
     console.log("req",req);
    return req.json();
} 
