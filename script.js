function setBgcolor(elementId) {
    const eId = document.getElementById(elementId)
    eId.classList.add('bg-orange-400')
}
// buy button
function buyButton() {
    const hiddenSection = document.getElementById('hidden-section')
    hiddenSection.classList.add('hidden')
    const hiddenSection2=document.getElementById('hidden-section2')
    hiddenSection2.classList.add('hidden')
}

// next-button
function nextButton() {
    const selement = document.getElementById('success')
    selement.classList.remove('hidden')


    const mainh = document.getElementById('main-section')
    mainh.classList.add('hidden')
    const headerh = document.getElementById('hidden-section')
    headerh.classList.add('hidden')
    const hFaderh = document.getElementById('footer-Section')
    hFaderh.classList.add('hidden')



}

document.getElementById('cupon-field').addEventListener('keyup', function (event) {
    const text=event.target.value;
    console.log(text)
    const disbutton=document.getElementById('apply-button')
    if(text==='NEW15' || text ==='Couple 20'){
        disbutton.removeAttribute('disabled')
        if (text === 'NEW15') {
            const ticketprice = document.getElementById('ticket-price')
            const price = ticketprice * 15 / 100;
        }
        else if (text === 'Couple 20') {
            const ticketprice = document.getElementById('ticket-price')
            const price = ticketprice * 20 / 100;
        }
    }
    else{
        disbutton.setAttribute('disabled', true)
    }
})

function A3() {
    setBgcolor('seat-add')
    setBgcolor('less-seat')
    setBgcolor('a3')


    const oneSet3 = priceSet('price3-Set')
    
    const setname= setName3('set3-Name')

    // score up/down------------------
    const currentScore = seatAdd('seat-add')
    const eSocre = currentScore + 1;
    getElementbyValue('seat-add', eSocre)

    const sless = seatAdd('less-seat')
    const updateSocree = sless - 1;
    getElementbyValue('less-seat',updateSocree )
}
function A2() {
    setBgcolor('seat-add')
    setBgcolor('less-seat')
    setBgcolor('a2')


    const oneSet2 = priceSet('price2-Set')
    
    const setname= setName2('set2-Name')

    // score up/down------------------
    const currentScore = seatAdd('seat-add')
    const eSocre = currentScore + 1;
    getElementbyValue('seat-add', eSocre)

    const sless = seatAdd('less-seat')
    const updateSocree = sless - 1;
    getElementbyValue('less-seat',updateSocree )
}

function A1() {
    setBgcolor('seat-add')
    setBgcolor('less-seat')
    setBgcolor('a1')


    const oneSet1 = priceSet('price-Set')
    
    const setname= setName('set-Name')

    // score up/down------------------
    const currentScore = seatAdd('seat-add')
    const eSocre = currentScore + 1;
    getElementbyValue('seat-add', eSocre)

    const sless = seatAdd('less-seat')
    const updateSocree = sless - 1;
    getElementbyValue('less-seat', updateSocree)
     totalSum('total-price') 
        
    
}

function totalSum(elementId) {
    const nam = document.getElementById(elementId)
   
 
   nam.innerText= priceSet('price-Set')
    
 
    
}
function A4() {
    setBgcolor('seat-add')
    setBgcolor('less-seat')
    setBgcolor('a4')


    const oneSet4 = priceSet('price4-Set')
    
    const setname= setName('set4-Name')

    // score up/down------------------
    const currentScore = seatAdd('seat-add')
    const eSocre = currentScore + 1;
    getElementbyValue('seat-add', eSocre)

    const sless = seatAdd('less-seat')
    const updateSocree = sless - 1;
    getElementbyValue('less-seat',updateSocree )
}


// utilitis-------------------------------------
function priceSet(elementId) {
    const a = document.getElementById(elementId)
    a.innerText = 550
    
}

function setName(elementId) {
    const ab = document.getElementById(elementId)
    ab.innerText = 'A1'
}
function setName2(elementId) {
    const ab = document.getElementById(elementId)
    ab.innerText = 'A2'
}
function setName3(elementId) {
    const ab = document.getElementById(elementId)
    ab.innerText = 'A3'
}
function setName4(elementId) {
    const ab = document.getElementById(elementId)
    ab.innerText = 'A4'
}


function seatAdd(elementId) {
    const sa = document.getElementById(elementId)
    const sai = sa.innerText;
    const value = parseInt(sai)  
    return value
}

function getElementbyValue(elementId, value) {
    const upScore = document.getElementById(elementId)
    upScore.innerText = value;
}



