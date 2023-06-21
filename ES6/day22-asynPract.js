function resolveAndReject(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve({
        vaccine: "available",
        price: "free"
      })
    }, 2000)

    setTimeout(()=> {
      reject({
        vaccine: "not availble",
        price: "unknown"
      })
    }, 1000)
  })
}

async function check(){
  await  resolveAndReject().then((data)=>{console.log("data: ", data)}).catch((err)=> {console.log("rejected: ", err)})
}

check();