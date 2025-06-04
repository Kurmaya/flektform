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
hair.forEach(h=>{
    h.addEventListener('change',()=>{
        if(!h.checked  && hairCon.includes(h.value)){
            
            var newArray = hairCon.filter(n=> n != h.value)
            hairCon= [];
            hairCon=[...newArray];

            
            
        }
        else if(h.checked){
            hairCon.push(h.value);
            document.getElementById('hairDislike').textContent= hairCon.join(", ");
            document.getElementById('hairDislike').value= hairCon.join(", ");
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
               JSON.parse(h.attributes[9].value).forEach(at=>{
                useArr.push(at);
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
            document.getElementById('scalpDislike').textContent= scalpCon.join(", ");
            document.getElementById('scalpDislike').value= scalpCon.join(", ");
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
            JSON.parse(s.attributes[9].value).forEach(v=>{
                useArr.push(v);
            })
        }
        console.log(scalpProds);
        
    })
})



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

function prodHold(){
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('prod-holder');
    const prodImg= document.createElement('img');
    const prodTitle = document.createElement('h3');
    prodTitle.classList.add('prod-name');
    const prodPrice = document.createElement('p');
    prodPrice.classList.add('prod-price');
    
        document.querySelector('.img-holder').appendChild(parentDiv);
        parentDiv.appendChild(prodImg);
        parentDiv.appendChild(prodImg);
        parentDiv.appendChild(prodTitle);
        parentDiv.appendChild(prodPrice);
    
}

function renderImages(){
    for(let i =0;i<prodsImagesArr.length;i++){
        prodsImages[i].src=prodsImagesArr[i];
        document.querySelectorAll('.prod-holder')[i].classList.add('active');
    }
}

function renderNames(){
    for(let i =0;i<prodsNameArr.length;i++){
        prodsNames[i].textContent=prodsNameArr[i];
    }
}
function renderPrices(){
    for(let i =0;i<prodsNameArr.length;i++){
        prodsPrice[i].innerHTML=prodsPriceArr[i]+'<sup>#</sup>';
    }
    
}
function renderUse(){
    for(let i=0;i<useArr.length;i++){
        document.querySelectorAll('.prodUse')[i].textContent=useArr[i];
    }
}
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
  renderImages();
  renderNames();
  renderPrices();
  renderUse();
})
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
  renderImages();
  renderNames();
  renderPrices();
  renderUse();
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