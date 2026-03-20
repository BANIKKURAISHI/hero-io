

const getAppsButton=()=>{
    const getApps=localStorage.getItem("installApp")
    if(getApps){
        const getAppsCon=JSON.parse(getApps)
        return getAppsCon
    }
    else {
        return []
    }

}


const saveAppsButton=(id)=>{
    const getApps=getAppsButton() || []
    
    if(!getApps.includes(id)){
        getApps.push(id)
    const getAppsConvert=JSON.stringify(getApps)
    localStorage.setItem("installApp",getAppsConvert)
    }
    
  
}


const removeFromStoreg=(id)=>{
    console.log(id)
const getApps=getAppsButton()
const update =getApps.filter(getApp=>getApp !== id)
localStorage.setItem("installApp",JSON.stringify(update) )
}


export {getAppsButton, saveAppsButton ,removeFromStoreg as remove }