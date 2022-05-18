// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')
// MESSAGE
const messagesNotifications = document.getElementById('messages-notifications');
const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// THEME 
const theme = document.querySelector('#theme');
const themeModal  = document.querySelector('.customize-theme');
const card  = themeModal.querySelector('.card');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

    /// color
const colorPalette = document.querySelectorAll('.choose-color span');
    /// background
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



// ======================= SIDEBAR =======================
// remove active class from all items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach( item =>{
    item.addEventListener('click', ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('.notification-count').style.display = 'none';
        }
    })
})


// ======================= MESSAGE =======================
    // search chat
    const searchMessage = ()=>{
        const val = messageSearch.value.toLowerCase();

        message.forEach( user =>{
            let userName = user.querySelector('h5').textContent.toLowerCase();
            if(userName.indexOf(val) != -1){
                user.style.display = 'flex';
            }else{
                user.style.display = 'none';
            }
        })
    }
    // search chat
    messageSearch.addEventListener('keyup', searchMessage);


/// hightlight messages card when messages menu item is clicked 
messagesNotifications.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display = 'none';
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000);
})


// THEME/DISPLAY customize-theme
// openModal
const openModalTheme = () =>{
    themeModal.style.display = 'grid';
}

// coloseModel( click vào themeModal sẽ đóng nhưng click vào card thì không )
// Cách 1:
    // const closeModalTheme = () =>{
    //     themeModal.style.display = 'none';
    // } 
    // card.addEventListener('click', e => {
    //     e.stopPropagation();
    // })
// Cách 2:
const closeModalTheme = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


themeModal.addEventListener('click', closeModalTheme)
theme.addEventListener('click', openModalTheme)



// font size

// Remove active class from font size
const changeActiveFontSize = () => {
    fontSizes.forEach( size =>{
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    size.addEventListener('click', () =>{
        let fontSize;
        changeActiveFontSize();
        size.classList.add('active')
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    })

})



// change Color primary

        // remove active class from color
const changeActiveColor = () =>{
    colorPalette.forEach( color =>{
        color.classList.remove('active');
    })

}
colorPalette.forEach( color => {
    color.addEventListener('click', () => {

        let primaryHue;
        changeActiveColor();
        color.classList.add('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--color-primary-hue', primaryHue);

        
    })
})



// Change Background
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


bg2.addEventListener('click', () =>{
    lightColorLightness = '15%';
    whiteColorLightness = '20%';
    darkColorLightness = '95%';
    
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg1.addEventListener('click', () =>{
    lightColorLightness = '95%';
    whiteColorLightness = '100%';
    darkColorLightness = '17%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () =>{
    lightColorLightness = '0%';
    whiteColorLightness = '10%';
    darkColorLightness = '95%';

    bg3.classList.add('active');
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBG();
})


