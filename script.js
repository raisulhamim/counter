let heading=document.querySelectorAll(".heading")
let converthd=Array.from(heading)

converthd.map(item=>{
    let count=0 
    function display(){
        item.innerHTML=count 
        if(count<item.dataset.nb){
            count++
        }else if(count<=89){
            item.innerHTML= `${count}%`

        }
        
    }
    let stop=setInterval(()=>{
        display()
    },item.dataset.speed)
})