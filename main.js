let data=document.getElementById("data")
 function result(){
if(data.value==''){
document.getElementById('valid').style.visibility='visible'

}

    else{
        document.getElementById('valid').style.visibility='hidden'
        if(  document.getElementById('cars').value=="Kilograms"){

            let kg=data.value*0.001
            kg=Math.round(kg)
          
             document.getElementById("outputs").innerHTML=` <p>${data.value} grams= ${kg}Kg</p>`
             clear()
          }
       
          else if(  document.getElementById('cars').value=="Pounds"){
       
            let p=data.value*0.0022
            p=Math.round(p)
          
             document.getElementById("outputs").innerHTML=` <p>${data.value} grams= ${p} Pound</p>`
             clear()
          }
       
          else if(  document.getElementById('cars').value=="Ounces"){
        
            let o=data.value*0.035274
            o=Math.round(o)
          
             document.getElementById("outputs").innerHTML=` <p>${data.value} grams= ${o} Ounces</p>`
             clear()
          }
       
          else if(  document.getElementById('cars').value=="Stones"){
       
            let d=data.value*0.000157
            d=Math.round(d)
          
             document.getElementById("outputs").innerHTML=` <p>${data.value} grams= ${d} Stones</p>`
             clear()
          }
       
        }
    }

  

 function clear(){
    data.value=''
 }
 function deletes(){
    document.getElementById("outputs").innerHTML=''
    document.getElementById('valid').style.visibility='hidden'
 }