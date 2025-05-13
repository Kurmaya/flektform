const holders= document.querySelectorAll('.question-holder');
const prev = document.querySelector('.prev'), next = document.querySelector('.next');
const report = document.querySelector('.report');
const result = document.querySelector('.result');
// const scalpServ = document.querySelector('.scalpRec');
const hairServ =document.querySelector('.hairRec');
const prodsRec = document.querySelector('.hairProd');
const genderOptions = document.querySelectorAll('.gender');
const prodsImages = document.querySelectorAll('.products img');
const prodsNames = document.querySelectorAll('.prod-name');
const prodsPrice = document.querySelectorAll('.prod-price');
const concernOptions = document.querySelectorAll('.concern-select');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radios = document.querySelectorAll('input[type="radio"]');
const done = document.querySelector('.done');

done.addEventListener('click',()=>{
    location.reload();
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



//concern selection 
concernOptions.forEach(c=>{
    c.addEventListener('click',()=>{
        if(c.checked){
            switch (c.value) {
                case 'Hair':
                    document.querySelectorAll('.hair-opts').forEach(s=>{
                        s.classList.remove('hide');
                    });
                    document.querySelectorAll('.scalp-opts').forEach(s=>{
                        s.classList.add('hide');
                    });
                    break;
            case 'Scalp':
                document.querySelectorAll('.hair-opts').forEach(s=>{
                    s.classList.add('hide');
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
                // hairProds = hairProds += ' ' + 'SP REPAIR , 3tenx ULTIMATE REVITALIZE , SB PENETRAITT ';
                // hairProds +=  h.attributes[5].value;
                prodsArr.push(h.attributes[6].value);
                JSON.parse(h.attributes[6].value).forEach(at=>{
                    if(prodsImagesArr.includes(at)){
                        
                        prodsImagesArr.pop(at);
                    }
                    // console.log(b);
                    
                })
                JSON.parse(h.attributes[8].value).forEach(at=>{
                    if(prodsNameArr.includes(at)){
                        
                        prodsNameArr.pop(at);
                    }
                    // console.log(b);
                    
                })
                
            }else{
                // hairProds +=  h.attributes[5].value;
                prodsArr.push(h.attributes[6].value);
                
                JSON.parse(h.attributes[6].value).forEach(at=>{
                    if(!prodsImagesArr.includes(at)){
                        
                        prodsImagesArr.push(at);
                    }
                    // console.log(b);
                    
                })
                JSON.parse(h.attributes[8].value).forEach(at=>{
                    if(!prodsNameArr.includes(at)){
                        
                        prodsNameArr.push(at);
                    }
                    // console.log(b);
                    
                })
                 JSON.parse(h.attributes[7].value).forEach(at=>{
                    
                        
                        prodsPriceArr.push(at);
                    
                    // console.log(b);
                    
                })
                console.log(prodsImagesArr);
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
            JSON.parse(s.attributes[6].value).forEach(v=>{
                if(!prodsImagesArr.includes(v)){
                    prodsImagesArr.push(v);
                }
            })
            JSON.parse(s.attributes[8].value).forEach(v=>{
                if(!prodsNameArr.includes(v)){
                    prodsNameArr.push(v);
                }
            })
             JSON.parse(s.attributes[7].value).forEach(v=>{
                
                    prodsPriceArr.push(v);
                
            })
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



function renderImages(){
    for(let i =0;i<prodsImagesArr.length;i++){
        prodsImages[i].src=prodsImagesArr[i];
    }
}

function renderNames(){
    for(let i =0;i<prodsNameArr.length;i++){
        prodsNames[i].textContent=prodsNameArr[i];
    }
}
function renderPrices(){
    for(let i =0;i<prodsNameArr.length;i++){
        prodsPrice[i].textContent=prodsPriceArr[i];
    }
    
}

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
  if(hairCon.length >= 1 && scalpCon.length >= 1){
    // scalpServ.textContent = 'Reborn';
    hairServ.textContent = 'Reborn';
    
    
  }
 else if(scalpCon.length>=1){
    hairServ.textContent='Reborn';
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
    if(gender === 'Female'){
        // prodsRec.textContent='SP REPAIR , Plex , 3tenx ULTIMATE REVITALIZE , SB PENETRAITT';
        
    }
  }
 else if(hairCon.includes('Colored Hair')){
    hairServ.textContent = 'Reborn/3tenx';
    if(gender === 'Female'){
        if(hairCon.includes('Colored Hair')){
            // prodsRec.textContent = 'SP COLOR SAVE';
            
        }
    }
  }
  else if(hairCon.includes('Dull/ Lack of Shine')|| hairCon.includes('Dryness')){
    hairServ.textContent = '3tenx'
    if(gender == 'Female'){
        if(hairCon.includes('Dryness')){
            // prodsRec.textContent = 'SP HYDRATE , 3tenx HYDRA REVIVE , SB HYDRE';
            
        }
        else if(hairCon.includes('Dull/ Lack of Shine')){
            // prodsRec.textContent = 'SP KERATIN LUXE , 3tenx HYDRA REVIVE';
            

        }
    }
  }
  renderImages();
  renderNames();
  renderPrices();
  })

const quest = document.querySelectorAll('.question');
quest.forEach(q=>{
    q.querySelectorAll('input').forEach(i=>{
      i.addEventListener('change',()=>{
        q.setAttribute('data-check','true');
      })
    })
})
let b = holders[0].querySelectorAll('.question');
let checkArr = [],checkArr2 =[], checkArr3 = [], checkArr4 = [];
b.forEach(br=> checkArr.push(br));
holders[1].querySelectorAll('.question').forEach(q=>checkArr2.push(q));
holders[2].querySelectorAll('.question').forEach(q=>checkArr3.push(q));
holders[3].querySelectorAll('.question').forEach(q=>checkArr4.push(q));

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
// let tr = holders.every(check);
// console.log(tr);
