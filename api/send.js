export default async function handler(req,res){

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"})
}

try{

const {name,q1,q2} = req.body

const webhook="https://discord.com/api/webhooks/1482391695113982012/91JZgJVyFM0jG_TRAC7FCZ837GW24jNUVW2xbtNC9uF8zYvdD9zC92uIWDXwmBPmgmzT"

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
content:
"📋 **Bài Thi Support**\n\n"+
"👤 Tên: "+name+"\n\n"+
"**Câu 1:**\n"+q1+"\n\n"+
"**Câu 2:**\n"+q2
})
})

res.status(200).json({success:true})

}catch(err){

res.status(500).json({error:err.message})

}

}