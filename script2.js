const holders= document.querySelectorAll('.question-holder');
const prev = document.querySelector('.prev'), next = document.querySelector('.next');
const report = document.querySelector('.report');
const result = document.querySelector('.result');
// const scalpServ = document.querySelector('.scalpRec');
const hairServ =document.querySelector('.hairRec');
const servPrice = document.querySelector('.servPrice');
const prodsRec = document.querySelector('.hairProd');
const genderOptions = document.querySelectorAll('.gender');
const prodsImages = document.querySelectorAll('.products img');
const prodsNames = document.querySelectorAll('.prod-name');
const prodsPrice = document.querySelectorAll('.prod-price');
const concernOptions = document.querySelectorAll('.concern-select');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radios = document.querySelectorAll('input[type="radio"]');
const done = document.querySelector('.done');
const semiSubmit = document.querySelector('.semi-flow');

let purchaseArr=[];
document.querySelectorAll('.prod-holder').forEach(p=>{
    p.addEventListener('click',()=>{
        let purchase = p.querySelector('.prod-name').textContent;
        p.classList.add('clicked');
        console.log(purchase);
        if(!purchaseArr.includes(purchase)){
            purchaseArr.push(purchase);
            document.getElementById('purchase').value=purchaseArr;
        }else if(purchaseArr.includes(purchase)){
            console.log('already purchased');
            purchaseArr.pop(purchase);
            p.classList.remove('clicked');
            document.getElementById('purchase').value=purchaseArr;
        }
    })
})


done.addEventListener('click',()=>{
    document.querySelector('#send').click();

})
let scalpCon = [];
let hairCon = [];
let prodsArr = [];
let gender = '';
// let scalpServ ='', hairServ='';
let prods = '';
let hairProds = '', scalpProds= '';
let prodsImagesArr= [];
let prodsNameArr = [];
let prodsPriceArr = [];
let useArr = [];



//concern selection 
concernOptions.forEach(c=>{
    
    c.addEventListener('click',()=>{
        if(c.checked){
            document.getElementById('concern').textContent=c.value;
            document.getElementById('concern').value=c.value;
            switch (c.value) {
                case 'Hair':
                    document.querySelectorAll('.hair-opts').forEach(s=>{
                        s.classList.remove('hide');
                    });
                    document.querySelectorAll('.scalp-opts').forEach(s=>{
                        s.classList.add('hide');
                        s.setAttribute('data-check','true');
                    });
                    break;
            case 'Scalp':
                document.querySelectorAll('.hair-opts').forEach(s=>{
                    s.classList.add('hide');
                    s.setAttribute('data-check','true');
                    document.querySelectorAll('.scalp-opts').forEach(s=>{
                        s.classList.remove('hide');
                    });
                });
                break;
                case 'Both(Hair & Scalp)':
                    document.querySelectorAll('.scalp-opts').forEach(s=>{
                        s.classList.remove('hide');
                    });
                    document.querySelectorAll('.hair-opts').forEach(s=>{
                        s.classList.remove('hide');
                    });
                break;
            
                default:
                    break;
            }
        }
        
    })
})

//checkbox press handling
checkboxes.forEach(box=>{
    box.addEventListener('change',()=>{
        
        box.parentElement.classList.toggle('active');
    })
})

//gender handling
genderOptions.forEach(g=>{
    g.addEventListener('click',()=>{
gender=g.value;
document.getElementById('gender').value=g.value;
document.getElementById('gender').textContent=g.value;
console.log(document.getElementById('gender').value);
    })
})



const hair = document.querySelectorAll('.hairCa') , scalp = document.querySelectorAll('.scalpCa');
let pN , pPrice , pImg;
 pN = JSON.parse(hair[4].getAttribute('data-name'));
 pPrice =JSON.parse(hair[4].getAttribute('data-price'));
 pImg = JSON.parse(hair[4].getAttribute('data-img'));
//  console.log(j);
 function renderDry(){
    document.querySelector('.dryness').classList.remove('hide');
for(let i=0;i<pN.length;i++){
     document.querySelectorAll('.dryness .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dryness .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dryness img')[i].src= pImg[i];
document.querySelectorAll('.dryness .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
 }
 function renderDryness(){
    pN = JSON.parse(hair[0].getAttribute('data-name'));
 pPrice =JSON.parse(hair[0].getAttribute('data-price'));
 pImg = JSON.parse(hair[0].getAttribute('data-img'));
 document.querySelector('.dryness').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.dryness .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dryness .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dryness img')[i].src= pImg[i];
document.querySelectorAll('.dryness .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 } 
}
 function renderDamage(){
pN = JSON.parse(hair[5].getAttribute('data-name'));
 pPrice =JSON.parse(hair[5].getAttribute('data-price'));
 pImg = JSON.parse(hair[5].getAttribute('data-img'));
 document.querySelector('.damage').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.damage .prod-holder')[i].classList.add('active');
document.querySelectorAll('.damage .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.damage img')[i].src= pImg[i];
document.querySelectorAll('.damage .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
 }
 function renderDamage2(){
  pN = JSON.parse(hair[1].getAttribute('data-name'));
 pPrice =JSON.parse(hair[1].getAttribute('data-price'));
 pImg = JSON.parse(hair[1].getAttribute('data-img'));
 document.querySelector('.damage').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.damage .prod-holder')[i].classList.add('active');
document.querySelectorAll('.damage .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.damage img')[i].src= pImg[i];
document.querySelectorAll('.damage .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }  
 }
 
 function renderLimp(){
    pN = JSON.parse(hair[9].getAttribute('data-name'));
 pPrice =JSON.parse(hair[9].getAttribute('data-price'));
 pImg = JSON.parse(hair[9].getAttribute('data-img'));
 document.querySelector('.limp').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.limp .prod-holder')[i].classList.add('active');
document.querySelectorAll('.limp .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.limp img')[i].src= pImg[i];
document.querySelectorAll('.limp .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
 }
 function renderFrizzy(){
    pN = JSON.parse(hair[10].getAttribute('data-name'));
 pPrice =JSON.parse(hair[10].getAttribute('data-price'));
 pImg = JSON.parse(hair[10].getAttribute('data-img'));
 document.querySelector('.frizzy').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.frizzy .prod-holder')[i].classList.add('active');
document.querySelectorAll('.frizzy .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.frizzy img')[i].src= pImg[i];
document.querySelectorAll('.frizzy .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
 }
 function renderFrizzy2(){
    pN = JSON.parse(hair[2].getAttribute('data-name'));
 pPrice =JSON.parse(hair[2].getAttribute('data-price'));
 pImg = JSON.parse(hair[2].getAttribute('data-img'));
 document.querySelector('.frizzy').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.frizzy .prod-holder')[i].classList.add('active');
document.querySelectorAll('.frizzy .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.frizzy img')[i].src= pImg[i];
document.querySelectorAll('.frizzy .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
 }
 function renderDull(){
   pN = JSON.parse(hair[11].getAttribute('data-name'));
 pPrice =JSON.parse(hair[11].getAttribute('data-price'));
 pImg = JSON.parse(hair[11].getAttribute('data-img'));
 document.querySelector('.dull').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.dull .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dull .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dull img')[i].src= pImg[i];
document.querySelectorAll('.dull .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }  
 }
 function renderDull2(){
   pN = JSON.parse(hair[3].getAttribute('data-name'));
 pPrice =JSON.parse(hair[3].getAttribute('data-price'));
 pImg = JSON.parse(hair[3].getAttribute('data-img'));
 document.querySelector('.dull').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.dull .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dull .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dull img')[i].src= pImg[i];
document.querySelectorAll('.dull .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }  
 }
 function renderColored(){
       pN = JSON.parse(hair[12].getAttribute('data-name'));
 pPrice =JSON.parse(hair[12].getAttribute('data-price'));
 pImg = JSON.parse(hair[12].getAttribute('data-img'));
 document.querySelector('.colored').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.colored .prod-holder')[i].classList.add('active');
document.querySelectorAll('.colored .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.colored img')[i].src= pImg[i];
document.querySelectorAll('.colored .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }  
 }
 let store ;
hair.forEach(h=>{
    h.addEventListener('change',()=>{
        if(!h.checked  && hairCon.includes(h.value)){
            
            var newArray = hairCon.filter(n=> n != h.value)
            hairCon= [];
            hairCon=[...newArray];

            
            
        }
        if(h.checked){
            hairCon.push(h.value);
            document.getElementById('hairDislike').textContent= hairCon.join(", ");
            document.getElementById('hairDislike').value= hairCon.join(", ");
         switch (h.id) {
            case 'dryness':
                renderDry();
                break;
                 case 'Dryness':
                renderDryness();
                break;
            case 'limp':
                renderLimp();
                break;
                case 'frizzy':
                renderFrizzy();
                break;
                case 'Frizzy':
                renderFrizzy2();
                break;
                case 'dull':
                renderDull();
                break;
                case 'Dull':
                renderDull2();
                break;
                case 'colored':
                renderColored();
                break;
            case 'envdamage':
                renderDamage();
                break;    
            case 'mechdamage':
                renderDamage();
                break;    
            case 'chemdamage':
                renderDamage();
                break;   
            case 'breakage':
                renderDamage();
                break;
                case 'Damage':
                renderDamage2();
                break;      
            default:
                break;
         }
}
if(!h.checked){
    store=h.id;
    console.log(h.id);
    if((h.id==='Damage')||(h.id==='Dull')||(h.id==='Frizzy')||(h.id==='Dryness')){
        switch (h.id) {
            case 'Damage':
                document.querySelector('.damage').classList.add('hide')
                break;
        case 'Dull':
                document.querySelector('.dull').classList.add('hide')
                break;
        case 'Frizzy':
                document.querySelector('.frizzy').classList.add('hide')
                break;      
        case 'Dryness':
                document.querySelector('.dryness').classList.add('hide')
                break;          
            default:
                break;
        }
    }
    document.querySelector(`.${store}`).classList.add('hide');
    // document.querySelector(h.id).classList.add('hide');
}
    })
})
function renderSensitive(){
    pN = JSON.parse(scalp[2].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[2].getAttribute('data-price'));
 pImg = JSON.parse(scalp[2].getAttribute('data-img'));
 document.querySelector('.sensitive').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.sensitive .prod-holder')[i].classList.add('active');
document.querySelectorAll('.sensitive .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.sensitive img')[i].src= pImg[i];
document.querySelectorAll('.sensitive .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 } 
}

function renderHairFall(){
    pN = JSON.parse(scalp[3].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[3].getAttribute('data-price'));
 pImg = JSON.parse(scalp[3].getAttribute('data-img'));
 document.querySelector('.hairfall').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.hairfall .prod-holder')[i].classList.add('active');
document.querySelectorAll('.hairfall .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.hairfall img')[i].src= pImg[i];
document.querySelectorAll('.hairfall .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 } 
}
function renderHairFall2(){
   pN = JSON.parse(scalp[0].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[0].getAttribute('data-price'));
 pImg = JSON.parse(scalp[0].getAttribute('data-img'));
 document.querySelector('.hairfall').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.hairfall .prod-holder')[i].classList.add('active');
document.querySelectorAll('.hairfall .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.hairfall img')[i].src= pImg[i];
document.querySelectorAll('.hairfall .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }  
}
function renderDandruff(){
    pN = JSON.parse(scalp[5].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[5].getAttribute('data-price'));
 pImg = JSON.parse(scalp[5].getAttribute('data-img'));
 document.querySelector('.dandruff').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.dandruff .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dandruff .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dandruff img')[i].src= pImg[i];
document.querySelectorAll('.dandruff .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 } 
}
function renderDandruff2(){
      pN = JSON.parse(scalp[1].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[1].getAttribute('data-price'));
 pImg = JSON.parse(scalp[1].getAttribute('data-img'));
 document.querySelector('.dandruff').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.dandruff .prod-holder')[i].classList.add('active');
document.querySelectorAll('.dandruff .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.dandruff img')[i].src= pImg[i];
document.querySelectorAll('.dandruff .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 }
}
function renderOily(){
    pN = JSON.parse(scalp[4].getAttribute('data-name'));
 pPrice =JSON.parse(scalp[4].getAttribute('data-price'));
 pImg = JSON.parse(scalp[4].getAttribute('data-img'));
 document.querySelector('.oily').classList.remove('hide');
 for(let i =0; i<pN.length; i++){
     document.querySelectorAll('.oily .prod-holder')[i].classList.add('active');
document.querySelectorAll('.oily .prod-name')[i].textContent= pN[i];
document.querySelectorAll('.oily img')[i].src= pImg[i];
document.querySelectorAll('.oily .prod-price')[i].innerHTML= pPrice[i]+'<sup>#</sup>';
 } 
}

scalp.forEach(s=>{
    
    s.addEventListener('change',()=>{
         if(!s.checked  && scalpCon.includes(s.value)){
            
            var newArray = scalpCon.filter(n=> n != s.value)
            scalpCon= [];
            scalpCon=[...newArray];
            
        }
        if(s.checked){
             scalpCon.push(s.value);
            document.getElementById('scalpDislike').textContent= scalpCon.join(", ");
            document.getElementById('scalpDislike').value= scalpCon.join(", ");
            switch (s.id) {
                case 'dandruff':
                    renderDandruff()
                    break;
            case 'oily':
                    renderOily()
                    break;
            case 'sensitive':
                    renderSensitive()
                    break;
            case 'hairfall':
                    renderHairFall()
                    break;   
            case 'hairFall':
                    renderHairFall2()
                    break;
            case 'Dandruff':
                    renderDandruff2()
                    break;                               
                default:
                    break;
            }
        }
        else if(!s.checked){
            switch (s.id) {
                case 'hairFall':
                    document.querySelector('.hairfall').classList.add('hide');
                    break;
                case 'Dandruff':
                    document.querySelector('.dandruff').classList.add('hide');
                    break;
                default:
                    document.querySelector(s.id).classList.add('hide');
                    break;
            }
            

        }
    })
})
// scalp.forEach(s=>{
//     s.addEventListener('change',()=>{
//         if(!s.checked  && scalpCon.includes(s.value)){
            
//             var newArray = scalpCon.filter(n=> n != s.value)
//             scalpCon= [];
//             scalpCon=[...newArray];
            
//         }
//         else if(s.checked){
//             scalpCon.push(s.value);
//             document.getElementById('scalpDislike').textContent= scalpCon.join(", ");
//             document.getElementById('scalpDislike').value= scalpCon.join(", ");
//             scalpProds += s.attributes[5].value;
//             prodsArr.push(s.attributes[6].value);
//             JSON.parse(s.attributes[6].value).forEach(v=>{
//                 if(!prodsImagesArr.includes(v)){
//                     prodsImagesArr.push(v);
//                 }
//             })
//             JSON.parse(s.attributes[8].value).forEach(v=>{
//                 if(!prodsNameArr.includes(v)){
//                     prodsNameArr.push(v);
//                 }
//             })
//              JSON.parse(s.attributes[7].value).forEach(v=>{
                
//                     prodsPriceArr.push(v);
                
//             })
//             JSON.parse(s.attributes[9].value).forEach(v=>{
//                 useArr.push(v);
//             })
//         }
//         console.log(scalpProds);
        
//     })
// })



//previous and next button handling
let qCount = 0;
next.addEventListener('click',()=>{
   if(document.getElementById('semi').checked){
        
        holders.forEach(hold=>{
            hold.classList.add('hide');
        })
        document.querySelector('.holder-semi').classList.remove('hide');
    }
 else if(qCount >= 0){
        holders.forEach(hold=>{
            hold.classList.add('hide');
        })
        qCount++;
        prev.classList.remove('hide');
        report.classList.add('hide');
        holders[qCount].classList.remove('hide');
        next.classList.add('hide');
        checkArr=[];
    }
    if(qCount == holders.length-1){
        // qCount++;
        prev.classList.remove('hide');
        next.classList.add('hide');
        report.classList.remove('hide');
    }
 
})

prev.addEventListener('click',()=>{
    if(qCount <= 1){
        qCount--;
        prev.classList.add('hide');
        holders.forEach(hold=>{
            hold.classList.add('hide');
        })
        holders[qCount].classList.remove('hide');
    }
    else if(qCount<holders.length){
        qCount--;
        holders.forEach(hold=>{
            hold.classList.add('hide');
        })
        holders[qCount].classList.remove('hide');
        next.classList.remove('hide');
        report.classList.add('hide');
    }
   
    
   
    
});


//semi flow gen 
semiSubmit.addEventListener('click',()=>{
    holders.forEach(h=>{
        h.classList.add('hide');
    }); 
    for(let i =0;i<prodsArr.length;i++){
    prodsImages[i].src= prodsArr[i];
}
if(scalpCon.includes('Hair Fall')||scalpCon.includes('Dandruff')){
    document.querySelector('.servImg').src='./assets/images/compressed/sp-serv.png';
}
else{
    document.querySelector('.servImg').src='./assets/images/compressed/3tenx-serv.png';
}
   result.classList.add('active');
    prev.classList.add('hide');
    next.classList.add('hide');
  report.classList.add('hide');
//   renderImages();
//   renderNames();
//   renderPrices();
//   renderUse();
})
// report gen 2
report.addEventListener('click',()=>{
    holders.forEach(h=>{
        h.classList.add('hide');
    })
// for(let i =0;i<prodsArr.length;i++){
//     prodsImages[i].src= prodsArr[i];
// }
    result.classList.add('active');
    prev.classList.add('hide');
    next.classList.add('hide');
  report.classList.add('hide');
  
  if((hairCon.length >= 1 && scalpCon.length >= 1) || (hairCon.length > 1))  {
    // scalpServ.textContent = 'Reborn';
    hairServ.textContent = 'Reborn';
    document.querySelector('.servImg').src='./assets/images/compressed/sp-serv.png'
    servPrice.innerHTML = 'Rs.1950/-<sup>*</sup> onwards<br> <sub> *All service prices are exclusive of Tax</sub>';
    
  }
 else if(scalpCon.length>=1){
    hairServ.textContent='Reborn';
    document.querySelector('.servImg').src='./assets/images/compressed/sp-serv.png'
    servPrice.innerHTML = 'Rs.1950/-<sup>*</sup> onwards <br><sub> *All service prices are exclusive of Tax</sub>';
    if(gender === 'Female'){
        if(scalpCon.includes('Dandruff')|| scalpCon.includes('Oily')){
            // prodsRec.textContent = 'Purify';
            
    
        }
        else if(scalpCon.includes('Sensitive (Dryness/ Weakness / Rashes)')|| scalpCon.includes('Hair Fall')){
            // prodsRec.textContent = 'Balance';
            
        }
    }
    
  }
  else if(hairCon.includes('Fine/ Lack of volume') || hairCon.includes('Frizzy/ Unmanageable')){
    hairServ.textContent = 'Reborn';
    document.querySelector('.servImg').src='./assets/images/compressed/sp-serv.png'
    servPrice.innerHTML = 'Rs.1950/-<sup>*</sup> onwards <br><sub> *All service prices are exclusive of Tax</sub>';
    if(gender === 'Female'){
        if(hairCon.includes('Fine/ Lack of volume')){
            // prodsRec.textContent = 'Volupt';
            
        }
        else if(hairCon.includes('Frizzy/ Unmanageable')){
            // prodsRec.textContent ='SP SMOOTHEN + 3tenx HYDRA REVIVE +SB PENETRAITT + FMC Protein powered deep /  Moisture Melt Deep';
            
        }
    }
  }
 else if(hairCon.includes('Environment Damage (Like sun bleach)') || hairCon.includes('Mechanical Damage (Ironing, tonging)') || hairCon.includes('Chemical Damaged Hair (Permanent Smoothening, Over bleached hair)')|| hairCon.includes('Breakage / Split Ends')){
    hairServ.textContent = 'Plex';
    servPrice.innerHTML = 'Rs.2000/-<sup>*</sup> onwards<br> <sub> *All service prices are exclusive of Tax</sub>';
    document.querySelector('.servImg').src='./assets/images/compressed/olapex-serv.png'
    if(gender === 'Female'){
        // prodsRec.textContent='SP REPAIR , Plex , 3tenx ULTIMATE REVITALIZE , SB PENETRAITT';
        
    }
  }
 else if(hairCon.includes('Colored Hair')){
    hairServ.textContent = 'Reborn/3tenx';
    servPrice.innerHTML = 'Rs.1950 / Rs.2500<sup>*</sup> onwards <br><sub> *All service prices are exclusive of Tax</sub>';
    document.querySelector('.servImg').src='./assets/images/compressed/3tenx-serv.png'
    if(gender === 'Female'){
        if(hairCon.includes('Colored Hair')){
            // prodsRec.textContent = 'SP COLOR SAVE';
            
        }
    }
  }
  else if(hairCon.includes('Dull/ Lack of Shine')|| hairCon.includes('Dryness')){
    hairServ.textContent = '3tenx';
    servPrice.innerHTML = 'Rs.2500/-<sup>*</sup> onwards <br><sub> *All service prices are exclusive of Tax</sub>';
    document.querySelector('.servImg').src='./assets/images/compressed/3tenx-serv.png'
    if(gender == 'Female'){
        if(hairCon.includes('Dryness')){
            // prodsRec.textContent = 'SP HYDRATE , 3tenx HYDRA REVIVE , SB HYDRE';
            
        }
        else if(hairCon.includes('Dull/ Lack of Shine')){
            // prodsRec.textContent = 'SP KERATIN LUXE , 3tenx HYDRA REVIVE';
            

        }
    }
  }
//   renderImages();
//   renderNames();
//   renderPrices();
//   renderUse();
  })

  

const quest = document.querySelectorAll('.question');
quest.forEach(q=>{
    q.querySelectorAll('input').forEach(i=>{
      i.addEventListener('change',()=>{
        if(i.id==='phNum'){
            if(i.value.length>9){
                q.setAttribute('data-check',true)
            }
            else if(i.value.length<10){
                q.setAttribute('data-check',false)
        }
        }else{

            q.setAttribute('data-check','true');
        }
      })
    })
})
let b = holders[0].querySelectorAll('.question');
let checkArr = [],checkArr2 =[], checkArr3 = [], checkArr4 = [],checkArr5=[];
b.forEach(br=> checkArr.push(br));
holders[1].querySelectorAll('.question').forEach(q=>checkArr2.push(q));
holders[2].querySelectorAll('.question').forEach(q=>checkArr3.push(q));
holders[3].querySelectorAll('.question').forEach(q=>checkArr4.push(q));
holders[4].querySelectorAll('.question').forEach(q=>checkArr5.push(q));

// if(b.forEach(c.getAttribute('data-check'))==='true'){
// holder[0].setAttribute('data-check','true');
// }

function check(e){
return e.getAttribute('data-check')==='true';
}
holders[0].addEventListener('change',()=>{
    // checkArr=[];
    // checkArr.push(holders[0].querySelectorAll('.question'));
    let  tr =checkArr.every(x=> x.getAttribute('data-check')==='true');
    if(tr){
holders[0].setAttribute('data-check','true');
document.querySelector('.next').classList.remove('hide');
    }
})
holders[1].addEventListener('change',()=>{
    // checkArr.push(holders[0].querySelectorAll('.question'));
    let  tr =checkArr2.every(x=> x.getAttribute('data-check')==='true');
    if(tr){
holders[1].setAttribute('data-check','true');
document.querySelector('.next').classList.remove('hide');
    }
})
holders[2].addEventListener('change',()=>{
    // checkArr.push(holders[0].querySelectorAll('.question'));
    let  tr =checkArr3.every(x=> x.getAttribute('data-check')==='true');
    if(tr){
holders[2].setAttribute('data-check','true');
document.querySelector('.next').classList.remove('hide');
    }
})
holders[3].addEventListener('change',()=>{
    // checkArr.push(holders[0].querySelectorAll('.question'));
    let  tr =checkArr4.every(x=> x.getAttribute('data-check')==='true');
    if(tr){
holders[3].setAttribute('data-check','true');
document.querySelector('.next').classList.remove('hide');
    }
})
holders[4].addEventListener('change',()=>{
    // checkArr=[];
    // checkArr.push(holders[0].querySelectorAll('.question'));
    let  tr =checkArr.every(x=> x.getAttribute('data-check')==='true');
    if(tr){
holders[4].setAttribute('data-check','true');
document.querySelector('.next').classList.remove('hide');
    }
})
// let tr = holders.every(check);
// console.log(tr);
const heatStyle = document.querySelector('.heat-yes');
const chemStyle = document.querySelector('.chem-yes');
heatStyle.addEventListener('change',()=>{
    if(heatStyle.checked){
        document.querySelectorAll('.hold')[0].classList.remove('hide');
    }
})
chemStyle.addEventListener('change',()=>{
    if(chemStyle.checked){
        document.querySelectorAll('.hold')[1].classList.remove('hide');
    }
})

//html data to form push

document.querySelector('.brnch').addEventListener('change',()=>{
    document.getElementById('branch').value= document.querySelector('.brnch').value;
})

document.querySelector('.hFrq').addEventListener('change',()=>{
    document.getElementById('heatStyleFreq').value= document.querySelector('.hFrq').value;
})
let nameArr,snameArr ,phoneArr,ecmHair=[],ecmScalp=[],hcare;

// push name into nameArr
document.getElementById('yourname').addEventListener('change',()=>{
// nameArr.push(document.getElementById('yourname').value);
nameArr = document.getElementById('yourname').value;
document.getElementById('clientname').value=nameArr;
document.getElementById('clientname').textContent=nameArr;
console.log(document.getElementById('yourname').textContent);
});
document.getElementById('stylistname').addEventListener('change',()=>{
// nameArr.push(document.getElementById('yourname').value);
snameArr = document.getElementById('stylistname').value;
document.getElementById('stylistSname').value=snameArr;
document.getElementById('stylistSname').textContent=snameArr;
console.log(document.getElementById('stylistname').textContent);
});
// push phone numberinto phoneArr
document.getElementById('phNum').addEventListener('change',()=>{
phoneArr= document.getElementById('phNum').value;
document.getElementById('contactNumber').value=phoneArr;
document.getElementById('contactNumber').textContent=phoneArr;
console.log(phoneArr);
});
//ECM push into form
document.querySelector('.ecm-ha').addEventListener('change',(e)=>{
ecmHair.push(e.target.value);
document.getElementById('ecm-hair').textContent = ecmHair.join(", ");
document.getElementById('ecm-hair').value = ecmHair.join(", ");
    console.log(ecmHair);
});
document.querySelector('.ecm-sc').addEventListener('change',(e)=>{
ecmScalp.push(e.target.value);
document.getElementById('ecm-scalp').textContent = ecmScalp.join(", ");
document.getElementById('ecm-scalp').value = ecmScalp.join(", ");
    console.log(ecmScalp);
});

//semi perm into form

document.querySelector('.semi').addEventListener('change',(e)=>{
document.getElementById('semi-perm').textContent=e.target.value;
document.getElementById('semi-perm').value=e.target.value;
console.log(e.target.value);
})

//homeproducts into form
document.querySelector('.homecare').addEventListener('change',()=>{
    hcare= document.querySelector('.homecare').value;
    document.getElementById('homeProds').textContent=hcare;
    document.getElementById('homeProds').value=hcare;
    console.log(document.getElementById('homeProds').textContent);
})

//hair likes , scalp likes push

const hLike = document.querySelectorAll('.hairLike'),sLike = document.querySelectorAll('.scalpLike');
let hlike=[],slike=[];
hLike.forEach(h=>{
    h.addEventListener('click',()=>{
        if(h.checked){
            hlike.push(h.value);
            
        }
        document.getElementById('hairLike').textContent= hlike.join(", ");
        document.getElementById('hairLike').value= hlike.join(", ");
    })
})

sLike.forEach(s=>{
    s.addEventListener('click',()=>{
        if(s.checked){
            slike.push(s.value);
        }
        document.getElementById('scalpLike').textContent= slike.join(", ");
        document.getElementById('scalpLike').value= slike.join(", ");
    })
    
})

//heat style push
const heat =document.querySelectorAll('input[name="Do you heatstyle?"]');

heat.forEach(h=>{
    h.addEventListener('click',()=>{
        if(h.checked){
            document.getElementById('heatStyle').textContent= h.value;
            document.getElementById('heatStyle').value= h.value;
        }
    })
})

// document.getElementById('hairFreqText').addEventListener('change',()=>{
//     document.getElementById('heatStyleFreq').textContent=document.getElementById('hairFreqText').value;
//     document.getElementById('heatStyleFreq').value=document.getElementById('hairFreqText').value;
// })


//chem push

const chem = document.querySelectorAll('input[name="Do you do chemical treatments ?"]');

chem.forEach(c=>{
    c.addEventListener('click',()=>{
        if(c.checked){
            document.getElementById('chemTreat').textContent= c.value;
            document.getElementById('chemTreat').value= c.value;
        }
    })
});

document.getElementById('chemText').addEventListener('change',()=>{
    document.getElementById('chemTreatName').textContent= document.getElementById('chemText').value;
    document.getElementById('chemTreatName').value= document.getElementById('chemText').value;
})


//spa push

document.querySelectorAll('#spa input[type="radio"]').forEach(s=>{
    s.addEventListener('click',()=>{
        if(s.checked){
            document.getElementById('firstSpa').textContent=s.value;
            document.getElementById('firstSpa').value=s.value;
        }
    })
})

document.querySelectorAll('#wash input[type="radio"]').forEach(s=>{
    s.addEventListener('click',()=>{
        if(s.checked){
            document.getElementById('lastWash').textContent=s.value;
            document.getElementById('lastWash').value=s.value;
        }
    })
})

document.querySelectorAll('#wash-freq input[type="radio"]').forEach(s=>{
    s.addEventListener('click',()=>{
        if(s.checked){
            document.getElementById('washFreq').textContent=s.value;
            document.getElementById('washFreq').value=s.value;
        }
    })
})
if (window.performance) {
     var navEntries = window.performance.getEntriesByType('navigation');
     if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
       
          window.location.reload();
     } 
}