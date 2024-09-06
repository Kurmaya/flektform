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
// optsHold[0].classList.add('active');
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
// but.addEventListener('click',()=>{
//     result= arr2.toString();
//     switch (result) {
//         case "a,a,a,a,a":
//             alert('product 1');
//             re();
//             break;
//             case 'a,b,a,b,a':
//                 alert('product 2');
//                 re();
//                 break;
//                 case 'b,a,a,c,c':
//                 alert('product 3');
//                 re();
//                 break;
//         default:
//             alert('unspecified result');
//             re();
//             break;
//     }
    
// })
const hairConc = document.querySelectorAll('.hairCa');
const scalpConc = document.querySelectorAll('.scalpCa');
const hairLike = document.querySelectorAll('.hairLike'),
scalpLike = document.querySelectorAll('.scalpLike');
let hairConcArr =[];
let scalpConcArr = [];
let hairLikeArr=[];
let scalpLikeArr= [];
//hair like
hairLike.forEach(hc=>{
    hc.addEventListener('change',()=>{
        if(hc.checked ){
            if(hairLikeArr.includes(hc.value)){
                console.log('already there');
            }
            // else if(hairLikeArr.includes(hc.value) && !hc.checked){
            //     hairLikeArr.forEach(h=>{
                    
            //     })
            // }
            else {
                hairLikeArr.push(hc.value);
            }

        }
        document.querySelectorAll('form input')[4].value=hairLikeArr;
    })
})
scalpLike.forEach(hc=>{
    hc.addEventListener('change',()=>{
        if(hc.checked ){
            if(scalpLikeArr.includes(hc.value)){
                console.log('already there');
            }
            else {
                scalpLikeArr.push(hc.value);
            }

        }
        document.querySelectorAll('form input')[5].value=scalpLikeArr;
    })
})
//hair concerns
hairConc.forEach(hc=>{
    hc.addEventListener('change',()=>{
        if(hc.checked ){
            if(hairConcArr.includes(hc.value)){
                console.log('already there');
            }
            else {
                hairConcArr.push(hc.value);
            }

        }
        document.querySelectorAll('form input')[6].value=hairConcArr;
    })
})
scalpConc.forEach(hc=>{
    hc.addEventListener('change',()=>{
        if(hc.checked ){
            if(scalpConcArr.includes(hc.value)){
                console.log('already there');
            }
            else {
                scalpConcArr.push(hc.value);
            }

        }
        document.querySelectorAll('form input')[7].value=scalpConcArr;
    })
})
const questions= document.querySelectorAll('.question');
questions[0].querySelectorAll('input').forEach(e=>{
e.addEventListener('change',(b)=>{
    document.querySelectorAll('form input')[0].value=e.value;
})
});
questions[1].querySelector('input').addEventListener('change',(e)=>{
    document.querySelectorAll('form input')[1].value=questions[1].querySelector('input').value;
})
questions[2].querySelector('input').addEventListener('change',(e)=>{
    document.querySelectorAll('form input')[2].value=questions[2].querySelector('input').value;
    })
    questions[3].querySelector('input').addEventListener('change',(e)=>{
        document.querySelectorAll('form input')[3].value=questions[3].querySelector('input').value;
        })

questions[6].querySelectorAll('input').forEach(ch=>{
    ch.addEventListener('change',(e)=>{
        document.querySelectorAll('form input')[8].value= ch.value;
        })
})
questions[7].querySelector('input').addEventListener('change',(e)=>{
    document.querySelectorAll('form input')[9].value=questions[7].querySelector('input').value;
    })
  
    questions[8].querySelectorAll('input').forEach(ch=>{
        ch.addEventListener('change',(e)=>{
            document.querySelectorAll('form input')[10].value= ch.value;
            })
    }) 
    questions[9].querySelectorAll('input').forEach(ch=>{
        ch.addEventListener('change',(e)=>{
            document.querySelectorAll('form input')[11].value= ch.value;
            })
    })   
    questions[10].querySelectorAll('input').forEach(ch=>{
        ch.addEventListener('change',(e)=>{
            document.querySelectorAll('form >input')[12].value= ch.value;
            })
    })
const report = document.querySelector('.report');

report.addEventListener('click',()=>{
   if(hairConcArr.length > 1 || scalpConcArr.length > 1   ){
    alert('Professional reborn service for dual benefit.');
   }
   else if(hairConcArr.includes('Dryness')){
alert('3Tenx Hydra Reviver');
   }
   else if(hairConcArr.includes('Damage')){
    alert('Ultimate Revitalize');
   }
   else if(hairConcArr.includes('Breakage / Split Ends') && scalpConcArr.includes('Sensitive (Dryness/ Weakness / Rashes)')){
    alert('Olaplex Intense Standalone service.');
   }
   else if(hairConcArr.includes('Fine/ Lack of volume') || scalpConcArr.includes('Hair Fall')){
    alert('Root deep service.');
   }
})