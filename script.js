var homebody = document.getElementById('home-body')
var textareabody = document.getElementById('textarea-body')
var homebutton = document.getElementById('homebutton')

var headding_1 = document.getElementById('headding-1')
var letter_o_1 = document.getElementById('letter-o-1')
var nav_text_home_1 = document.getElementById('nav-text-home-1')
var nav_text_title_1 = document.getElementById('nav-text-title-1')
var nav_text_categery_1 = document.getElementById('nav-text-categery-1')
var theems_1 = document.getElementById('theems-1')
var headding_2 = document.getElementById('headding-2')
var letter_o_2 = document.getElementById('letter-o-2')
var nav_text_home_2 = document.getElementById('nav-text-home-2')
var nav_text_title_2 = document.getElementById('nav-text-title-2')
var nav_text_categery_2 = document.getElementById('nav-text-categery-2')
var theems_2 = document.getElementById('theems-2')


var textareabutton = document.getElementById('textareabutton')
var overall = document.getElementById('overall')
var card = document.getElementById('card')
var overallcol = document.getElementById('iconcardheader')
var firstrow = document.getElementById('iconheaderfirst-row')
var cardbodyfirstrow = document.getElementById('cardbodyfirstrow')
var human = document.getElementById('human')
var animal = document.getElementById('animal')
var office = document.getElementById('office')
var symbols = document.getElementById('symbols')
var smilyfaceh = document.getElementById('smilyfaceh')
var humanh = document.getElementById('humanh')
var animalh = document.getElementById('animalh')
var officeh = document.getElementById('officeh')
var symbolh = document.getElementById('symbolh')
var textarea = document.getElementById('textarea')
var filterleft = document.getElementById('filterleft')
var filtercenter = document.getElementById('filtercenter')
var filterright = document.getElementById('filterright')
var h1a = document.getElementById('h1')
var h3a = document.getElementById('h3')
var h6a = document.getElementById('h6')
var wellcome = document.getElementById('wellcome')
var textstyleoverall = document.getElementById('textstyleoverall')
var t_icon = document.getElementById('t')
var savebutton = document.getElementById('save-button')
// offcanvas variables
var offcanvasoverall = document.getElementById('offcanvas-overall')
var carouseldiv_1 = document.getElementById('carouseldiv-1')
var carouseldiv_2 = document.getElementById('carouseldiv-2')
var carouseldiv_3 = document.getElementById('carouseldiv-3')

var gradientheading = document.getElementById('gradient-heading')
var liteheading = document.getElementById('lite-heading')
var darkheading = document.getElementById('dark-heading')
var gradientrow = document.getElementById('gradient-row')
var literow = document.getElementById('lite-row')
var darkrow = document.getElementById('dark-row')
var heading = document.getElementById('headding')
var nav_text = document.getElementById('nav-texts')
var cancel_button = document.getElementById('cancel-button')
var side_nav = document.getElementById('side-nav')
var textarea_title = document.getElementById('textarea-title')
var iconcardbody = document.getElementById('iconcarbody')
var text_align_box = document.getElementById('text-align-box')
var tex_size_box = document.getElementById('text-size-box')
var date = document.getElementById('date')
var nav_text_home = document.getElementById('nav-text-home')
var nextbutton_icon = document.getElementById('nextbutton-icon')


// register page

// var registrationpage = document.getElementById('registration-page')
// var loginpage = document.getElementById('login-page')
// var registrationpageoverall = document.getElementById('registrationpage-overall')
// var registrationrow = document.getElementById('registration-row')
// var registrationbody = document.getElementById('registration-body')

// var registrationbody=document.getElementById('registration-body')
// var registration_page=document.getElementById('registration-page')
// var login_page=document.getElementById('login-page')


// html pages connections
textareabody.style.display = "none"

function textarearvisible() {
    homebody.style.display = "none"
    textareabody.style.display = "block"
}

function homevisible() {
    textareabody.style.display = "none"
    homebody.style.display = "block"
}


// registrationbody.style.display = "none"

// function registrationbodys() {
//     textareabody.style.display = "none"
//     registrationbody.style.display = "block"
// }


fetch("file.json")
    .then((res) => res.json())
    .then((ab) => {
        ab.smilyface.map((ab) => {
            cardbodyfirstrow.innerHTML += `<button class="btn col-2 border-0" onclick="abc('${ab.name}')">${ab.name}</button>`
        })
    })

fetch("file.json")
    .then((res) => res.json())
    .then((ac) => {
        ac.human.map((ac) => {
            human.innerHTML += `<button class="btn col-2 border-0" id="facebutton" onclick="abc('${ac.name}')">${ac.name}</button>`
        })
    })

fetch("file.json")
    .then((res) => res.json())
    .then((ad) => {
        ad.animal.map((ad) => {
            animal.innerHTML += `<button class="btn col-2 border-0 " onclick="abc('${ad.name}')">${ad.name}</button>`
        })
    })

fetch("file.json")
    .then((res) => res.json())
    .then((ae) => {
        ae.office.map((ae) => {
            office.innerHTML += `<button class="btn btn col-2 border-0 " onclick="abc('${ae.name}')">${ae.name}</button>`
        })
    })

fetch("file.json")
    .then((res) => res.json())
    .then((ad) => {
        ad.symbols.map((ae) => {
            symbols.innerHTML += `<button class="btn col-2 border-0" onclick="abc('${ae.name}')">${ae.name}</button>`
        })
    })




function abc(num) {
    textarea.value += num
}

cardbodyfirstrow.style.display = "none"
human.style.display = "none"
animal.style.display = "none"
office.style.display = "none"
symbols.style.display = "none"

humanh.addEventListener('click', () => {
    humanh.style.width = "fit-content"
})
smilyfaceh.addEventListener('click', () => {
    smilyfaceh.style.width = "fit-content"
})
animalh.addEventListener('click', () => {
    animalh.style.width = "fit-content"
})
officeh.addEventListener('click', () => {
    officeh.style.width = "fit-content"
})
symbolh.addEventListener('click', () => {
    symbolh.style.width = "fit-content"
})

var smilyfaceh = document.getElementById('smilyfaceh')
var humanh = document.getElementById('humanh')
var animalh = document.getElementById('animalh')
var officeh = document.getElementById('officeh')
var symbolh = document.getElementById('symbolh')

smilyfaceh.style.textShadow = "0px 0px 10px black"

function cardbodyfirstrowa() {
    cardbodyfirstrow.style.display = "block"
    human.style.display = "none"
    animal.style.display = "none"
    office.style.display = "none"
    symbols.style.display = "none"
    smilyfaceh.style.textShadow = "0px 0px 10px black"
    humanh.style.textShadow = "none"
    animalh.style.textShadow = "none"
    officeh.style.textShadow = "none"
    symbolh.style.textShadow = "none"

}

function humanicon() {
    human.style.display = "block"
    cardbodyfirstrow.style.display = "none"
    animal.style.display = "none"
    office.style.display = "none"
    symbols.style.display = "none"
    smilyfaceh.style.textShadow = "none"
    humanh.style.textShadow = "0px 0px 10px black"
    animalh.style.textShadow = "none"
    animalh.style.textShadow = "none"
    officeh.style.textShadow = "none"
    symbolh.style.textShadow = "none"
}

function animalicon() {
    human.style.display = "none"
    cardbodyfirstrow.style.display = "none"
    animal.style.display = "block"
    office.style.display = "none"
    symbols.style.display = "none"
    smilyfaceh.style.textShadow = "none"
    humanh.style.textShadow = "none"
    animalh.style.textShadow = "0px 0px 10px salmon"
    officeh.style.textShadow = "none"
    symbolh.style.textShadow = "none"
}

function officeicon() {
    human.style.display = "none"
    cardbodyfirstrow.style.display = "none"
    animal.style.display = "none"
    office.style.display = "block"
    symbols.style.display = "none"
    smilyfaceh.style.textShadow = "none"
    humanh.style.textShadow = "none"
    animalh.style.textShadow = "none"
    officeh.style.textShadow = "0px 0px 10px black"
    symbolh.style.textShadow = "none"
}

function symbolicon() {
    human.style.display = "none"
    cardbodyfirstrow.style.display = "none"
    animal.style.display = "none"
    office.style.display = "none"
    symbols.style.display = "block"
    smilyfaceh.style.textShadow = "none"
    humanh.style.textShadow = "none"
    animalh.style.textShadow = "none"
    officeh.style.textShadow = "none"
    symbolh.style.textShadow = "2px 2px 10px black"
}

overall.style.display = "none"
count = 0
function overalla() {
    wellcome.style.display = "none"
    textstyleoverall.style.display = "none"
    overall.style.display = "block"
    cardbodyfirstrow.style.display = "block"
    human.style.display = "none"
    animal.style.display = "none"
    office.style.display = "none"
    symbols.style.display = "none"
}

function textalign(style) {
    textarea.style.textAlign += style
}



filterleft.addEventListener('click', () => {
    textarea.style.textAlign = "left"
})

filtercenter.addEventListener('click', () => {
    textarea.style.textAlign = "center"
})
filterright.addEventListener('click', () => {
    textarea.style.textAlign = "right"
})

h1a.addEventListener('click', () => {
    textarea.style.fontSize = "18px"

})
h3a.addEventListener('click', () => {
    textarea.style.fontSize = "150%"

})
h6a.addEventListener('click', () => {
    textarea.style.fontSize = "180%"

})

function colors(name) {
    textarea.style.color = name
}
function fontstyles(name) {
    textarea.style.fontFamily = name
}

// text style open and close 

var textstyleoverall = document.getElementById('textstyleoverall')
var t_icon = document.getElementById('t')

textstyleoverall.style.display = "none"

function overallb() {
    textstyleoverall.style.display = "block"
    wellcome.style.display = "none"
    overall.style.display = "none"
}


// offcanvas functions

// function offcanvasopen(){
//      offcanvasoverall.style.display="block"
// }

literow.style.display = "none"
darkrow.style.display = "none"
gradientheading.style.backgroundColor = "skyblue"


function gradientheadings() {
    gradientrow.style.display = "block"
    literow.style.display = "none"
    darkrow.style.display = "none"
    gradientheading.style.backgroundColor = "skyblue"
    liteheading.style = "none"
    darkheading.style = "none"
}

function liteheadins() {
    literow.style.display = "block"
    gradientrow.style.display = "none"
    darkrow.style.display = "none"
    liteheading.style.backgroundColor = "skyblue"
    gradientheading.style = "none"
    darkheading.style = "none"
}

function darkheadins() {
    darkrow.style.display = "block"
    gradientrow.style.display = "none"
    literow.style.display = "none"
    darkheading.style.backgroundColor = "skyblue"
    gradientheading.style = "none"
    liteheading.style = "none"
}


// normal style of our diary UI

// textareabody.style.backgroundImage = "linear-gradient(to bottom, #eea849, #f46b45)"
// textstyleoverall.style.backgroundImage = "linear-gradient(to top, #eea849, #f46b45)"
// tex_size_box.style.backgroundColor = "white"
// text_align_box.style.backgroundColor = "white"
// savebutton.style.backgroundColor = "salmon"
// savebutton.style.border = "none"
// savebutton.style.color = "white"
// savebutton.style.boxShadow = "0px 0px 5px black"
// savebutton.style.textShadow = "2px 2px 5px black"
// cancel_button.style.backgroundColor = "salmon"
// cancel_button.style.border = "none"
// cancel_button.style.color = "white"
// cancel_button.style.boxShadow = "0px 0px 5px black"
// side_nav.style.textShadow = "0px 0px 5px black"
// date.style.boxShadow = "0px 0px 5px black"
// date.style.boxShadow = "0px 0px 5px black"
// headding_1.style.color = "greenyellow"
// letter_o_1.style.color = "white"
// letter_o_1.style.fontSize = "200%"
// nav_text_home_1.style.color = "white"
// nav_text_title_1.style.color = "white"
// nav_text_categery_1.style.color = "white"
// theems_1.style.color = "white"
// headding_2.style.color = "greenyellow"
// letter_o_2.style.color = "white"
// letter_o_2.style.fontSize = "200%"
// nav_text_home_2.style.color = "white"
// nav_text_title_2.style.color = "white"
// nav_text_categery_2.style.color = "white"
// theems_2.style.color = "white"

// greadientdiv

function gradient_div_1() {
    textareabody.style.backgroundImage = "linear-gradient(to bottom, #eea849, #f46b45)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to top, #eea849, #f46b45)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "salmon"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "0px 0px 5px black"
    savebutton.style.textShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "0px 0px 5px black"
    side_nav.style.color="white"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}


function gradient_div_2() {
  
    textareabody.style.backgroundImage = "linear-gradient(to right, #57EBDE, #AEFB2A, #AEFB2A)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to left, #57EBDE, #AEFB2A, #AEFB2A)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "#AEFB2A"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "0px 0px 5px black"
    side_nav.style.color="white"
    side_nav.style.textShadow = "0px 0px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "purple"
    letter_o_2.style.color = "white"
}

function gradient_div_3() {
    textareabody.style.backgroundImage = "linear-gradient(to right,#E9D022,#E60B09)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to bottom,#E9D022,#E60B09)"
    savebutton.style.backgroundColor = "orangered"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "0px 0px 5px black"
    side_nav.style.textShadow = "0px 0px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    headding_2.style.color = "purple"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function gradient_div_4() {
    textareabody.style.backgroundImage = "linear-gradient(to right, #6EF195,#00E3FD)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to right, #6EF195,#00E3FD)"
    savebutton.style.backgroundColor = " #00E3FD"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "0px 0px 5px black"
    side_nav.style.textShadow = "0px 0px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    headding_2.style.color = "purple"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

function gradient_div_5() {
    textareabody.style.background = "linear-gradient(89deg, rgb(21, 74, 189) 0.1%, rgb(26, 138, 211) 51.5%, rgb(72, 177, 234) 100.2%)"
    textstyleoverall.style.background = "linear-gradient(to left, white, rgb(21, 74, 189) 0.1%, rgb(26, 138, 211) 51.5%, rgb(72, 177, 234) 100.2%)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = " rgb(72, 177, 234)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "0px 0px 5px navy"
    side_nav.style.color = "white"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "orangered"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function gradient_div_6() {
    textareabody.style.backgroundImage = "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to left, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "#FF99AC"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "purple"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function gradient_div_8() {
    textareabody.style.backgroundImage = "linear-gradient(358.3deg, rgb(255, 82, 168) 12.9%, rgb(177, 118, 240) 134.3%)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to left, rgb(255, 82, 168) 12.9%, rgb(177, 118, 240) 134.3%)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = " rgb(177, 118, 240)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

function gradient_div_9() {
    textareabody.style.backgroundImage = "linear-gradient(137.9deg, rgb(78, 156, 226) 7.8%, rgb(62, 146, 69) 16%, rgb(251, 220, 23) 32.7%, rgb(242, 160, 35) 50.4%, rgb(253, 12, 12) 71.5%, rgb(192, 26, 129) 83.1%)"
    textstyleoverall.style.backgroundImage = "linear-gradient(to right, rgb(78, 156, 226) 7.8%, rgb(62, 146, 69) 16%, rgb(251, 220, 23) 32.7%, rgb(242, 160, 35) 50.4%, rgb(253, 12, 12) 71.5%, rgb(192, 26, 129) 83.1%)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = " rgb(177, 118, 240)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"  
}
function gradient_div_10() {
    textareabody.style.backgroundImage = "radial-gradient(white, yellow, orange, red)"
    textstyleoverall.style.backgroundImage = "radial-gradient(white, yellow, orange, red)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = " orangered"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function gradient_div_11() {
    textareabody.style.backgroundImage = "radial-gradient(navy, navy)"
    textstyleoverall.style.backgroundImage = "radial-gradient(white,navy)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundImage = "radial-gradient(navy, white)"
    savebutton.style.border = "none"
    savebutton.style.color = "black"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

// lite div

// function lite_div_1() {
//     textareabody.style.backgroundColor = "#87CEEB"
//     textstyleoverall.style.backgroundImage = "radial-gradient(white,#87CEEB)"
//     tex_size_box.style.backgroundColor = "white"
//     text_align_box.style.backgroundColor = "white"
//     savebutton.style.backgroundImage = "radial-gradient(#87CEEB, white)"
//     savebutton.style.border = "none"
//     savebutton.style.color = "black"
//     savebutton.style.boxShadow = "2px 2px 5px black"
//     side_nav.style.textShadow = "2px 2px 5px black"
//     date.style.boxShadow = "0px 0px 5px black"
//     headding_2.style.color = "greenyellow"
//     letter_o_2.style.color = "white"
//     letter_o_2.style.fontSize = "200%"
// }

// function lite_div_2() {
//     textareabody.style.backgroundImage = "linear-gradient(to right, plum, plum)"
//     textstyleoverall.style.backgroundImage = "linear-gradient(to left, plum, plum)"
//     tex_size_box.style.backgroundColor = "white"
//     text_align_box.style.backgroundColor = "white"
//     savebutton.style.backgroundColor = "purple"
//     savebutton.style.border = "none"
//     savebutton.style.color = "white"
//     savebutton.style.boxShadow = "0px 0px 5px black"
//     side_nav.style.textShadow = "0px 0px 5px black"
//     date.style.boxShadow = "0px 0px 5px black"
//     headding_2.style.color = "greenyellow"
//     letter_o_2.style.color = "white"
//     letter_o_2.style.fontSize = "200%"
// }

function lite_div_3() {
    textareabody.style.backgroundColor = "mediumpurple"
    textstyleoverall.style.backgroundImage = "radial-gradient(white,mediumpurple)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundImage = "radial-gradient(white, mediumpurple )"
    savebutton.style.border = "none"
    savebutton.style.color = "black"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

function lite_div_4() {
    textareabody.style.backgroundColor = "darkmagenta"
    textstyleoverall.style.backgroundImage = "radial-gradient(white,darkmagenta)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundImage = "radial-gradient(white, darkmagenta )"
    savebutton.style.border = "none"
    savebutton.style.color = "black"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function lite_div_5() {
    textareabody.style.backgroundColor = "hotpink"
    textstyleoverall.style.backgroundImage = "radial-gradient(hotpink, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "purple"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

function lite_div_6() {
    textareabody.style.backgroundColor = "crimson"
    textstyleoverall.style.backgroundImage = "radial-gradient(crimson, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "rgb(95, 32, 45)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

function lite_div_7() {
    textareabody.style.backgroundColor = "rgb(241, 136, 7)"
    textstyleoverall.style.backgroundImage = "radial-gradient(rgb(241, 136, 7), white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = " rgb(95, 61, 19)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "orange"
    letter_o_2.style.fontSize = "200%"
}

function lite_div_8() {
    textareabody.style.backgroundColor = "rosybrown"
    textstyleoverall.style.backgroundImage = "radial-gradient(rosybrown, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "rgb(236, 109, 109)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px black"
    side_nav.style.textShadow = "2px 2px 5px black"
    date.style.boxShadow = "0px 0px 5px black"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}

// dark div

function dark_div_1() {
    textareabody.style.backgroundColor = "black"
    textstyleoverall.style.backgroundImage = "radial-gradient(black, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "rgb(58, 47, 47)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px white"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px gray"
    date.style.boxShadow = "0px 0px 5px gray"
    textarea_title.style.textShadow = "0px 0px 5px white"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function dark_div_2() {
    textareabody.style.backgroundColor = "#2E2E2E"
    textstyleoverall.style.backgroundImage = "radial-gradient(#2E2E2E, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "rgb(58, 47, 47)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px white"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px gray"
    date.style.boxShadow = "0px 0px 5px gray"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}
function dark_div_3() {
    textareabody.style.backgroundColor = "#48515d";
    textstyleoverall.style.backgroundImage = "radial-gradient(#48515d, #48515d, white)"
    tex_size_box.style.backgroundColor = "white"
    text_align_box.style.backgroundColor = "white"
    savebutton.style.backgroundColor = "rgb(58, 47, 47)"
    savebutton.style.border = "none"
    savebutton.style.color = "white"
    savebutton.style.boxShadow = "2px 2px 5px white"
    side_nav.style.color = "white"
    side_nav.style.textShadow = "2px 2px 5px gray"
    date.style.boxShadow = "0px 0px 5px gray"
    headding_2.style.color = "greenyellow"
    letter_o_2.style.color = "white"
    letter_o_2.style.fontSize = "200%"
}




// register page functin

var registration_body=document.getElementById('registration-body')
var registration_page=document.getElementById('registration-page')
var login_page=document.getElementById('login-page')

registration_body.style.display="none"
login_page.style.display="none"

function profiles(){
    homebody.style.display="none"
    textareabody.style.display="none"
    registration_body.style.display="block"
    registration_body.style.display="flex"
}
function registrations(){
    login_page.style.display="none"
    registration_page.style.display="block"
}
function logins(){
    login_page.style.display="block"
    registration_page.style.display="none"
}

var textdivcontainer=document.getElementById('text-div-container')
var textdiv=document.getElementById('text-div')
var titleinput=document.getElementById('title-input')
var categeryinput=document.getElementById('category-title')
// var textarea=document.getElementById('textarea')
var delbutton=document.getElementById('del-butto')


function del(event){
    event.target.parentElement.remove()
}

savebutton.addEventListener('click', function(event){
    alert('h')
    // event.preventDefault()
    // var div=document.createElement("div")
    // div.setAttribute('class','text-div')
    // div.innerHTML=`<div class="text-div-two" <h2>${titleinput.value}</h2>
    //         <h5>${categeryinput.value}</h5>
    //         <p>${textarea.value}</p>
    //         <button onclick="del(event)">Del</button>`
    // textdivcontainer.append(textdiv)
    // popupoverlay.style.display="none"
    // popupbox.style.display="none"
})
function on(){
    var textdiv=document.createElement("div")
    textdiv.setAttribute('class','text-div')
    textdiv.innerHTML=`<div class="text-div-two" <h2>${titleinput.value}</h2>
            <h5>${categeryinput.value}</h5>
            <p>${textarea.value}</p>
            <button onclick="del(event)">Del</button>`
   document.body.textdivcontainer.append(textdiv)
}

var onediv=document.createElement("div")
onediv.textContent="oneeeee"