const mainSliderArr = [
    {
        'img':"./assets/img/Rectangle125.png",
        'title':"Взыскание дебиторской задолженности",
        'subtitle':"Индивидуальный подход и нацеленность на достижение результата",
        'link':'',
    },
    {
        'img':"./assets/img/Rectangle126.png",
        'title':"Регистрация ООО",
        'subtitle':"Гарантируем минимальные сроки регистрации под ключ ",
        'link':'',
    },
    {
        'img':"./assets/img/Rectangle127.png",
        'title':"Ликвидация предприятия",
        'subtitle':"Эффективное решение сложных задач",
        'link':'',
    },
    {
        'img':"./assets/img/Rectangle128.png",
        'title':"Юридическая консультация",
        'subtitle':"Детальные разъяснения вопросов по ведению бизнеса от профессионалов",
        'link':'',
    },
    {
        'img':"./assets/img/Rectangle129.png",
        'title':"Юридический аутсорсинг",
        'subtitle':"Гарантия своевременности и качества услуг",
        'link':'',
    },
]
const mainDirectionCardArr =[
    {
        'title':'Взыскание долгов',
        'img':'./assets/svg/directionCard/dept-money.png',
        'link':'',
    },
    {
        'title':'Реорганизация бизнеса',
        'img':'./assets/svg/directionCard/price-ticket.png',
        'link':'',
    },
    {
        'title':'Продажа бизнеса',
        'img':'./assets/svg/directionCard/support.png',
        'link':'',
    },
    {
        'title':'Юридические консультации',
        'img':'./assets/svg/directionCard/support.png',
        'link':'',
    },
    {
        'title':'Ликвидация организаций',
        'img':'./assets/svg/directionCard/liquidation-box-down.png',
        'link':'',
    },
    {
        'title':'Разработка договоров',
        'img':'./assets/svg/directionCard/documents.png',
        'link':'',
    },
    {
        'title':'Регистрация бизнеса',
        'img':'./assets/svg/directionCard/stamp.png',
        'link':'',
    },
    {
        'title':'Юридический аутсорсинг',
        'img':'./assets/svg/directionCard/outsource-cup.png',
        'link':'',
    },
    {
        'title':'Аттестация в строительстве',
        'img':'./assets/svg/directionCard/dollar-house.png',
        'link':'',
    },
]
const mainDirectionSliderArr = [
    {'img':"./assets/img/Rectangle107.png"},
    {'img':"./assets/img/Rectangle111.png"},
    {'img':"./assets/img/Rectangle110.png"},
    {'img':"./assets/img/Rectangle109.png"},
    {'img':"./assets/img/Rectangle108.png"},
]
let startMovePosition = 0;
let mainSliderCounter = 0;
let mainDirectionSliderCounter = 0;
let isAutoSlider = false;

function setSlider(arr, auto){
    document.querySelector('.first-section').style.background = `url(${arr[mainSliderCounter].img})`
    document.querySelector('.first-section').style.backgroundRepeat = `no-repeat`;
    document.querySelector('.first-section').style.backgroundPosition = `center center`;
    document.querySelector('.first-section').style.backgroundSize = `cover`;
    document.querySelector('.first-section__text-title').innerHTML = `${arr[mainSliderCounter].title}`
    document.querySelector('.first-section__text-sub-title').innerHTML = `${arr[mainSliderCounter].subtitle}`
    document.querySelector('.slider-btn-link').href = `${arr[mainSliderCounter].link}`
    if(auto){
        mainSliderCounter == 4?mainSliderCounter=0:mainSliderCounter++
    }
}
function drawDirectionCars(arr, i){
    return `<div class="main-direction__card flex-column">
      <div class="h5">${arr[i].title}</div>
      <div class="card-img">
        <img src="${arr[i].img}" alt="">
      </div>
      <a href="${arr[i].link}" class="btn-additional">ПОДРОБНЕЕ</a>              
    </div>`
}
document.querySelector('.to-left').addEventListener('click', function(){
    mainSliderCounter == 0?mainSliderCounter=4:mainSliderCounter--
    setSlider(mainSliderArr)
})
document.querySelector('.to-right').addEventListener('click', function(){
    mainSliderCounter == 4?mainSliderCounter=0:mainSliderCounter++
    setSlider(mainSliderArr)
})
document.querySelector('.main-direction-slider__to-left').addEventListener('click', function(){
    mainDirectionSliderCounter == 0?mainDirectionSliderCounter=4:mainDirectionSliderCounter--
    mainDirectionSlider(mainDirectionSliderArr)
})
document.querySelector('.main-direction-slider__to-right').addEventListener('click', function(){
    mainDirectionSliderCounter == 4?mainDirectionSliderCounter=0:mainDirectionSliderCounter++
    mainDirectionSlider(mainDirectionSliderArr)
})

window.onload = function(){
    for(let i = 0; i<9; i++){
        document.querySelector('.main-direction__card-wrapper').insertAdjacentHTML('beforeend', drawDirectionCars(mainDirectionCardArr, i))
    }
}

document.querySelector('.main-direction-slider__content').addEventListener('touchstart', function(e){
    startMovePosition = e.changedTouches[0].clientX
})
document.querySelector('.main-direction-slider__content').addEventListener('touchend', function(e){
    mainDirectionSliderSmallWindows(startMovePosition, e.changedTouches[0].clientX)
})
function mainDirectionSliderSmallWindows(val1, val2){
    if(val1>val2){
        mainDirectionSliderCounter == 0?mainDirectionSliderCounter=4:mainDirectionSliderCounter--
        mainDirectionSlider(mainDirectionSliderArr)
    }else{
        mainDirectionSliderCounter == 4?mainDirectionSliderCounter=0:mainDirectionSliderCounter++
        mainDirectionSlider(mainDirectionSliderArr)
    }
}
function mainDirectionSlider(arr, auto){
    console.log(mainDirectionSliderCounter)
    document.querySelector('.main-direction-slider__content').style.background = `url(${arr[mainDirectionSliderCounter].img})`   
    document.querySelector('.main-direction-slider__content').style.backgroundRepeat = `no-repeat`;
    document.querySelector('.main-direction-slider__content').style.backgroundPosition = `center center`;
    document.querySelector('.main-direction-slider__content').style.backgroundSize = `cover`;
    if(auto){
        mainDirectionSliderCounter ==4?mainDirectionSliderCounter=0:mainDirectionSliderCounter++
    }
}
setSlider(mainSliderArr)
