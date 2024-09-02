const but = document.querySelector('button');
const rads=document.querySelectorAll('.control input');
const optsHold = document.querySelectorAll('.opts-hold');
let arr = [];
let arr2 = [];
// but.addEventListener('click',()=>{
//     for(let i=0;i<rads.length;i++){

//     }
// })
let a=0;
const opts = document.querySelectorAll('.opt');
optsHold[0].classList.add('active');
opts.forEach(o=>{
    
    
   

        
        if(a<optsHold.length){
            o.addEventListener('click',()=>{
                if(a==optsHold.length-1){
                   but.classList.add('active');
                }
                arr2.push(o.id)
                document.querySelector('.disp').textContent=arr2;
                a++;
                optsHold.forEach(h=>{
                    h.classList.remove('active');
                })
                optsHold[a].classList.add('active');
            })
        }
  
            
        
    
});
let result;
function re(){
    setTimeout(()=>{
        location.reload();
    },2000)
    
}
but.addEventListener('click',()=>{
    result= arr2.toString();
    switch (result) {
        case "a,a,a,a,a":
            alert('product 1');
            re();
            break;
            case 'a,b,a,b,a':
                alert('product 2');
                re();
                break;
                case 'b,a,a,c,c':
                alert('product 3');
                re();
                break;
        default:
            alert('unspecified result');
            re();
            break;
    }
    
})