const holders= document.querySelectorAll('.question-holder');
const prev = document.querySelector('.prev'), next = document.querySelector('.next');
const report = document.querySelector('.report');
const result = document.querySelector('.result');
const scalpServ = document.querySelector('.scalpRec');
const hairServ =document.querySelector('.hairRec');
const prodsRec = document.querySelector('.hairProd');
const genderOptions = document.querySelectorAll('.gender');
const prodsImages = document.querySelectorAll('.products img');
let scalpCon = [];
let hairCon = [];
let prodsArr = [];
let gender = '';
// let scalpServ ='', hairServ='';
let prods = '';
let hairProds = '', scalpProds= '';



//gender handling
genderOptions.forEach(g=>{
    g.addEventListener('click',()=>{
gender=g.value
    })
})

const hair = document.querySelectorAll('.hairCa') , scalp = document.querySelectorAll('.scalpCa');
hair.forEach(h=>{
    h.addEventListener('change',()=>{
        if(!h.checked  && hairCon.includes(h.value)){
            
            var newArray = hairCon.filter(n=> n != h.value)
            hairCon= [];
            hairCon=[...newArray];
            
        }
        else if(h.checked){
            hairCon.push(h.value);
            if(h.value.includes('Environment Damage (Like sun bleach)'|| 'Mechanical Damage (Ironing, tonging)' || 'Chemical Damaged Hair (Permanent Smoothening, Over bleached hair)'|| 'Breakage / Split Ends') ){
                hairProds = hairProds += ' ' + 'SP REPAIR , 3tenx ULTIMATE REVITALIZE , SB PENETRAITT ';
            }else{
                hairProds +=  h.attributes[5].value;
                prodsArr.push(h.attributes[6].value);
                
            }
            console.log(hairProds);
        }
        
    })
})
scalp.forEach(s=>{
    s.addEventListener('change',()=>{
        if(!s.checked  && scalpCon.includes(s.value)){
            
            var newArray = scalpCon.filter(n=> n != s.value)
            scalpCon= [];
            scalpCon=[...newArray];
            
        }
        else if(s.checked){
            scalpCon.push(s.value);
            scalpProds += s.attributes[5].value;
            prodsArr.push(s.attributes[6].value);
        }
        console.log(scalpProds);
        
    })
})



//previous and next button handling
let qCount = 0;
next.addEventListener('click',()=>{
    if(qCount >= 0){
        holders.forEach(hold=>{
            hold.classList.add('hide');
        })
        qCount++;
        prev.classList.remove('hide');
        report.classList.add('hide');
        holders[qCount].classList.remove('hide');
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


//report generation
// report.addEventListener('click',()=>{
//     if((hairCon.length >1 && scalpCon.length>1)||hairCon.includes('Fine/ Lack of volume','Frizzy/ Unmanageable')) {
//         if(gender === 'Female'){
//             if(hairCon.includes('Fine/ Lack of volume','Frizzy/ Unmanageable')){
//                 hairServ='Hair Service : Reborn';
//                if(hairCon.includes('Frizzy/ Unmanageable' && !hairCon.includes('Fine/ Lack of volume'))){
//                 prods ='SP Smoothen , 3tenx HYDRA REVIVE , SB PENETRAITT';
//                prodsRec.textContent = prodsRec.textContent + prods;
//                }
//                else if(!hairCon.includes('Frizzy/ Unmanageable' && hairCon.includes('Fine/ Lack of volume'))){
//                 prods ='SB VOLUPT';
//                 prodsRec.textContent = prodsRec.textContent + prods;
//                }
    
//             }
//         }
      
//         scalpServ ='Scalp Service : Reborn';
//         result.classList.add('active');
//         serv.textContent=scalpServ + " \n" + hairServ;
//     }
//     else if(scalpCon.length>0){
//         if(gender === 'Female'){
//             if(scalpCon.includes('Sensitive (Dryness/ Weakness / Rashes)')||scalpCon.includes('Hair Fall')){
//                 prods='SP Balance';
//                 prodsRec.textContent= prodsRec.textContent + prods;
//             }
//             else if(scalpCon.includes('Oily','Dandruff')){
//                 prods='SP Purify';
//                 prodsRec.textContent= prodsRec.textContent + prods;
//             }
//         } 
        
//         result.classList.add('active');
//         serv.textContent= serv.textContent + 'Reborn';
//     }
//     else if(hairCon.includes('Breakage / Split Ends')||hairCon.includes('Environment Damage (Like sun bleach)')||hairCon.includes('Mechanical Damage (Ironing, tonging)')||hairCon.includes('Chemical Damaged Hair (Permanent Smoothening, Over bleached hair)')){
//         result.classList.add('active');
//         serv.textContent=serv.textContent + 'Plex';
//     }
//     else if(hairCon.includes('Dryness')||hairCon.includes('Dull/ Lack of Shine')){
//         if(gender === 'Female'){
//             if(hairCon.includes('Dryness')){
//                 prods='Hydra Revive';
//                 prodsRec.textContent= prodsRec.textContent + prods;
//             }
//         }
//         result.classList.add('active');
//         serv.textContent=serv.textContent + '3tenx';
//     }
//     else if(hairCon.includes('Color Fadage')){
//         if(gender === 'Female'){
//     prods='SP Color Save';
//     prodsRec.textContent= prodsRec.textContent + prods;
//         }
        
//         result.classList.add('active');
//         serv.textContent=serv.textContent+ 'Reborn/3tenx';
//     }
// })







// report gen 2
report.addEventListener('click',()=>{
    holders.forEach(h=>{
        h.classList.add('hide');
    })
for(let i =0;i<prodsArr.length;i++){
    prodsImages[i].src= prodsArr[i];
}
    result.classList.add('active');
    prev.classList.add('hide');
    next.classList.add('hide');
  report.classList.add('hide');
  if(hairCon.length > 1 && scalpCon.length > 1){
    scalpServ.textContent = 'Reborn';
    hairServ.textContent = 'Reborn';
  }
  if(scalpCon.length>=1){
    scalpServ.textContent='Reborn';
    if(gender === 'Female'){
        if(scalpCon.includes('Dandruff')|| scalpCon.includes('Oily')){
            // prodsRec.textContent = 'Purify';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
    
        }
        else if(scalpCon.includes('Sensitive (Dryness/ Weakness / Rashes)')|| scalpCon.includes('Hair Fall')){
            // prodsRec.textContent = 'Balance';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
        }
    }
    
  }
  if(hairCon.length>1 || hairCon.includes('Fine/ Lack of volume') || hairCon.includes('Frizzy/ Unmanageable')){
    hairServ.textContent = 'Reborn';
    if(gender === 'Female'){
        if(hairCon.includes('Fine/ Lack of volume')){
            // prodsRec.textContent = 'Volupt';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
        }
        else if(hairCon.includes('Frizzy/ Unmanageable')){
            // prodsRec.textContent ='SP SMOOTHEN + 3tenx HYDRA REVIVE +SB PENETRAITT + FMC Protein powered deep /  Moisture Melt Deep';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
        }
    }
  }
  if(hairCon.includes('Environment Damage (Like sun bleach)') || hairCon.includes('Mechanical Damage (Ironing, tonging)') || hairCon.includes('Chemical Damaged Hair (Permanent Smoothening, Over bleached hair)')|| hairCon.includes('Breakage / Split Ends')){
    hairServ.textContent = 'Plex';
    if(gender === 'Female'){
        // prodsRec.textContent='SP REPAIR , Plex , 3tenx ULTIMATE REVITALIZE , SB PENETRAITT';
        prodsRec.textContent = hairProds + ' , ' + scalpProds;
    }
  }
  if(hairCon.includes('Color Fadage')){
    hairServ.textContent = 'Reborn/3tenx';
    if(gender === 'Female'){
        if(hairCon.includes('Color Fadage')){
            // prodsRec.textContent = 'SP COLOR SAVE';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
        }
    }
  }
  if(hairCon.includes('Dull/ Lack of Shine')|| hairCon.includes('Dryness')){
    hairServ.textContent = '3tenx'
    if(gender == 'Female'){
        if(hairCon.includes('Dryness')){
            // prodsRec.textContent = 'SP HYDRATE , 3tenx HYDRA REVIVE , SB HYDRE';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;
        }
        else if(hairCon.includes('Dull/ Lack of Shine')){
            // prodsRec.textContent = 'SP KERATIN LUXE , 3tenx HYDRA REVIVE';
            prodsRec.textContent = hairProds + ' , ' + scalpProds;

        }
    }
  }
  })

