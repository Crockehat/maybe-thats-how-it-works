////////////////////////////////////////_ПЕРВЫЙ_СЛАЙДЕР_//////////////////////////////////////////////////////////////

let slider_iguess_slide = document.querySelector('.slider_iguess_slide')

let first_counter = -1

const arrPost = [
    {
        big_text: 'Промо-код "RoundTable"',
        text_1: 'Скидка 10% по промо-коду',
        text_2: 'при бронировании через сайт.'
    },
    {
        big_text: 'Люкс по цене полулюкса?',
        text_1: 'Оплатите проживание на месяц и получите скидку на каждый день',
        text_2: 'проживания в наших номерах люкс'
    },
    {
        big_text: 'Погрузитесь в сказку!',
        text_1: 'романтический уикенд скидкой 20%, романтическим ужином и бесплатным',
        text_2: 'спа-уходом для двоих.'
    },
    {
        big_text: 'Скидка 15% на проживание',
        text_1: 'Зарегистрируйтесь в нашей программе лояльности и получите скидку',
        text_2: '15% на весь период проживания!'
    },
]

let first_back = document.querySelector('#first_slider_button_back')
let first_forth = document.querySelector('#first_slider_button_forth')

first_back.addEventListener('click', () => {
    decreaseProgress()
    first_counter--
    if(first_counter < 0){
        first_counter = 3
    }
    slider_iguess_slide.innerHTML = `
        <p class="slide_big_text">${arrPost[first_counter].big_text}</p>
        <div>
        <p>${arrPost[first_counter].text_1}</p>
        <p>${arrPost[first_counter].text_2}</p>
        </div>
        <button class="rent_btn">Забронировать сейчас</button>
        `
})

first_forth.addEventListener('click', () => {
    increaseProgress()
    first_counter++
    if(first_counter === 4){
        first_counter = 0
    }
    slider_iguess_slide.innerHTML = `
        <p class="slide_big_text">${arrPost[first_counter].big_text}</p>
        <div>
        <p>${arrPost[first_counter].text_1}</p>
        <p>${arrPost[first_counter].text_2}</p>
        </div>
        <button class="rent_btn">Забронировать сейчас</button>
        `
})

let progres = document.querySelector('.progres')

let progresbar = document.querySelector('.progresbar')

let currentProgress = 19.75;

        function increaseProgress() {
                currentProgress += 19.75;
                progresbar.style.width = currentProgress + 'px';
                if (currentProgress > 79) {
                currentProgress = 19.75;
                progresbar.style.width = currentProgress + 'px';
                }
        }
        function decreaseProgress() {
                currentProgress -= 19.75;
                progresbar.style.width = currentProgress + 'px';
                if (currentProgress < 19.75) {
                currentProgress = 79;
                progresbar.style.width = currentProgress + 'px';
                }
        }

const first_interval = setInterval(function() {
    increaseProgress()
    first_counter++
    if(first_counter === 4){
        first_counter = 0
    }
    slider_iguess_slide.innerHTML = `
        <p class="slide_big_text">${arrPost[first_counter].big_text}</p>
        <div>
        <p>${arrPost[first_counter].text_1}</p>
        <p>${arrPost[first_counter].text_2}</p>
        </div>
        <button class="rent_btn">Забронировать сейчас</button>
        `
}, 10000)
////////////////////////////////////////_СПЕЦ_ПРЕДЛОЖЕНИЯ_СЛАЙДЕР_//////////////////////////////////////////////////////////////

const special_slides = Array.from(document.querySelectorAll('.special_slider_slide'))
const special_slide_texts = Array.from(document.querySelectorAll('.special_slider_slide_text'))

const special_slider_button_back = document.querySelector('#special_slider_button_back')
const special_slider_button_forth = document.querySelector('#special_slider_button_forth')

let special_counter = 3

let special_slide = special_slides[special_counter]
    special_slide.classList.toggle("special_slider_slide_fake_hover")
let special_slide_text = special_slide_texts[special_counter]
    special_slide_text.classList.toggle("special_slider_slide_text_fake_hover")

special_slider_button_back.addEventListener('click', (e) => {
    special_counter--
    if(special_counter < 0){
        special_counter = 3
    }
    let prev_special_slide
    if(special_counter === 3){
        prev_special_slide = special_slides[0]
    }else{
        prev_special_slide = special_slides[special_counter + 1]
    }
    let special_slide = special_slides[special_counter]
    special_slide.classList.toggle("special_slider_slide_fake_hover")
    prev_special_slide.classList.remove("special_slider_slide_fake_hover")

    let prev_special_slide_text
    if(special_counter === 3){
        prev_special_slide_text = special_slide_texts[0]
    }else{
        prev_special_slide_text = special_slide_texts[special_counter + 1]
    }
    let special_slide_text = special_slide_texts[special_counter]
    special_slide_text.classList.toggle("special_slider_slide_text_fake_hover")
    prev_special_slide_text.classList.remove("special_slider_slide_text_fake_hover")
})

special_slider_button_forth.addEventListener('click', (e) => {
    special_counter++
    if(special_counter === 4){
        special_counter = 0
    }
    let prev_special_slide
    if(special_counter === 0){
        prev_special_slide = special_slides[3]
    }else{
        prev_special_slide = special_slides[special_counter - 1]
    }
    let special_slide = special_slides[special_counter]
    special_slide.classList.toggle("special_slider_slide_fake_hover")
    prev_special_slide.classList.remove("special_slider_slide_fake_hover")

    let prev_special_slide_text
    if(special_counter === 0){
        prev_special_slide_text = special_slide_texts[3]
    }else{
        prev_special_slide_text = special_slide_texts[special_counter - 1]
    }
    let special_slide_text = special_slide_texts[special_counter]
    special_slide_text.classList.toggle("special_slider_slide_text_fake_hover")
    prev_special_slide_text.classList.remove("special_slider_slide_text_fake_hover")
})

const intervalId = setInterval(function() {
    special_counter++
    if(special_counter === 4){
        special_counter = 0
    }
    let prev_special_slide
    if(special_counter === 0){
        prev_special_slide = special_slides[3]
    }else{
        prev_special_slide = special_slides[special_counter - 1]
    }
    let special_slide = special_slides[special_counter]
    special_slide.classList.toggle("special_slider_slide_fake_hover")
    prev_special_slide.classList.remove("special_slider_slide_fake_hover")

    let prev_special_slide_text
    if(special_counter === 0){
        prev_special_slide_text = special_slide_texts[3]
    }else{
        prev_special_slide_text = special_slide_texts[special_counter - 1]
    }
    let special_slide_text = special_slide_texts[special_counter]
    special_slide_text.classList.toggle("special_slider_slide_text_fake_hover")
    prev_special_slide_text.classList.remove("special_slider_slide_text_fake_hover")
}, 10000)

////////////////////////////////////////_КОММЕНТАРИИ_//////////////////////////////////////////////////////////////
let progres_1 = document.querySelector('.progres_1')

let currentProgress_1 = 20;

        function increaseProgress_1() {
          if(currentProgress_1 < 160){
                currentProgress_1 += 20;
                progres_1.style.width = currentProgress_1 + 'px';
          }
        }

        function decreaseProgress_1() {
          if(currentProgress_1 > 20){
                currentProgress_1 -= 20;
                progres_1.style.width = currentProgress_1 + 'px';
          }
        }

let slider = document.querySelector('.slider'),
  rewiews_scroller = document.querySelector('.rewiews_scroller'),
  sliderTrack = document.querySelector('.slider_track'),
  rewiews = document.querySelectorAll('.rewiew'),
  rewiews_scroller_controls_button_back = document.querySelector('#rewiews_scroller_controls_button_back'),
  rewiews_scroller_controls_button_forth = document.querySelector('#rewiews_scroller_controls_button_forth'),
  slideWidth = rewiews[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --rewiews.length * slideWidth,
  posThreshold = rewiews[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    rewiews_scroller_controls_button_back.classList.toggle('disabled', slideIndex === 0);
    rewiews_scroller_controls_button_forth.classList.toggle('disabled', slideIndex === --rewiews.length);
  },
  swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      rewiews_scroller.classList.remove('grab');
      rewiews_scroller.classList.add('grabbing');
    }
  },
  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --rewiews.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    rewiews_scroller.classList.add('grab');
    rewiews_scroller.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          if (slideIndex > 0){
            slideIndex--;
          }
          decreaseProgress_1()
        } else if (posInit > posX1) {
          if (slideIndex < 7){
            slideIndex++;
          }
          increaseProgress_1()
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
rewiews_scroller.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

rewiews_scroller_controls_button_forth.addEventListener('click', function() {
          if (slideIndex < 7){
            slideIndex++;
          }
    slide();
    increaseProgress_1()
});

rewiews_scroller_controls_button_back.addEventListener('click', function() {
          if (slideIndex > 0){
            slideIndex--;
          }
    slide();
    decreaseProgress_1()
});

let read_all = document.querySelectorAll('.read_all')

let bunch_of_text = document.querySelectorAll('.bunch_of_text')

read_all.forEach((el, index) => el.addEventListener('click', (e) => {
    bunch_of_text[index].classList.toggle('hidden')
    el.classList.toggle('hidden')
}))

////////////////////////////////////////_ СЛАЙДЕР_"СТАНДАРТ"_//////////////////////////////////////////////////////////////

let room_slider_info_progress_1 = document.querySelector('#room_slider_info_progress_1')

let room_slider_info_currentProgress_1 = 20;

        function increase_room_slider_info_Progress_1() {
          if(room_slider_info_currentProgress_1 < 160){
                room_slider_info_currentProgress_1 += 20;
                room_slider_info_progress_1.style.width = room_slider_info_currentProgress_1 + 'px';
          }
        }

        function decrease_room_slider_info_Progress_1() {
          if(room_slider_info_currentProgress_1 > 20){
                room_slider_info_currentProgress_1 -= 20;
                room_slider_info_progress_1.style.width = room_slider_info_currentProgress_1 + 'px';
          }
        }

let room_slider_1 = document.querySelector('#room_slider_1'),
  room_slider_list_1 = document.querySelector('#room_slider_list_1'),
  sliderTrack_1 = document.querySelector('#room_slider_track_1'),
  room_slider_slides_1 = document.querySelectorAll('#room_slider_slide_1'),
  room_slider_cont_button_back_1 = document.querySelector('#room_slider_cont_button_back_1'),
  room_slider_cont_button_forth_1 = document.querySelector('#room_slider_cont_button_forth_1'),
  slideWidth_1 = room_slider_slides_1[0].offsetWidth,
  slideIndex_1 = 0,
  posInit_1 = 0,
  posX1_1 = 0,
  posX2_1 = 0,
  posY1_1 = 0,
  posY2_1 = 0,
  posFinal_1 = 0,
  isSwipe_1 = false,
  isScroll_1 = false,
  allowSwipe_1 = true,
  transition_1 = true,
  nextTrf_1 = 0,
  prevTrf_1 = 0,
  lastTrf_1 = --room_slider_slides_1.length * slideWidth_1,
  posThreshold_1 = room_slider_slides_1[0].offsetWidth * 0.35,
  trfRegExp_1 = /([-0-9.]+(?=px))/,
  
  getEvent_1 = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide_1 = function() {
    if (transition_1) {
      sliderTrack_1.style.transition_1 = 'transform .5s';
    }
    sliderTrack_1.style.transform = `translate3d(-${slideIndex_1 * slideWidth_1}px, 0px, 0px)`;

    room_slider_cont_button_back_1.classList.toggle('disabled', slideIndex_1 === 0);
    room_slider_cont_button_forth_1.classList.toggle('disabled', slideIndex_1 === --room_slider_slides_1.length);
  },
  swipeStart_1 = function() {
    let evt = getEvent_1();

    if (allowSwipe_1) {

      transition_1 = true;

      nextTrf_1 = (slideIndex_1 + 1) * -slideWidth_1;
      prevTrf_1 = (slideIndex_1 - 1) * -slideWidth_1;

      posInit_1 = posX1_1 = evt.clientX;
      posY1_1 = evt.clientY;

      sliderTrack_1.style.transition_1 = '';

      document.addEventListener('touchmove', swipeAction_1);
      document.addEventListener('mousemove', swipeAction_1);
      document.addEventListener('touchend', swipeEnd_1);
      document.addEventListener('mouseup', swipeEnd_1);

      room_slider_list_1.classList.remove('grab');
      room_slider_list_1.classList.add('grabbing');
    }
  },
  swipeAction_1 = function() {

    let evt = getEvent_1(),
      style = sliderTrack_1.style.transform,
      transform = +style.match(trfRegExp_1)[0];

    posX2_1 = posX1_1 - evt.clientX;
    posX1_1 = evt.clientX;

    posY2_1 = posY1_1 - evt.clientY;
    posY1_1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe_1 && !isScroll_1) {
      let posY = Math.abs(posY2_1);
      if (posY > 7 || posX2_1 === 0) {
        isScroll_1 = true;
        allowSwipe_1 = false;
      } else if (posY < 7) {
        isSwipe_1 = true;
      }
    }

    if (isSwipe_1) {
      // запрет ухода влево на первом слайде
      if (slideIndex_1 === 0) {
        if (posInit_1 < posX1_1) {
          setTransform_1(transform, 0);
          return;
        } else {
          allowSwipe_1 = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex_1 === --room_slider_slides_1.length) {
        if (posInit_1 > posX1_1) {
          setTransform_1(transform, lastTrf_1);
          return;
        } else {
          allowSwipe_1 = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit_1 > posX1_1 && transform < nextTrf_1 || posInit_1 < posX1_1 && transform > prevTrf_1) {
        reachEdge_1();
        return;
      }

      // двигаем слайд
      sliderTrack_1.style.transform = `translate3d(${transform - posX2_1}px, 0px, 0px)`;
    }

  },
  swipeEnd_1 = function() {
    posFinal_1 = posInit_1 - posX1_1;

    isScroll_1 = false;
    isSwipe_1 = false;

    document.removeEventListener('touchmove', swipeAction_1);
    document.removeEventListener('mousemove', swipeAction_1);
    document.removeEventListener('touchend', swipeEnd_1);
    document.removeEventListener('mouseup', swipeEnd_1);

    room_slider_list_1.classList.add('grab');
    room_slider_list_1.classList.remove('grabbing');

    if (allowSwipe_1) {
      if (Math.abs(posFinal_1) > posThreshold_1) {
        if (posInit_1 < posX1_1) {
          if (slideIndex_1 > 0){
            slideIndex_1--;
          }
          decrease_room_slider_info_Progress_1()
        } else if (posInit_1 > posX1_1) {
          if (slideIndex_1 < 5){
            slideIndex_1++;
          }
          increase_room_slider_info_Progress_1()
        }
      }

      if (posInit_1 !== posX1_1) {
        allowSwipe_1 = false;
        slide_1();
      } else {
        allowSwipe_1 = true;
      }

    } else {
      allowSwipe_1 = true;
    }

  },
  setTransform_1 = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack_1.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe_1 = false;
  },
  reachEdge_1 = function() {
    transition_1 = false;
    swipeEnd_1();
    allowSwipe_1 = true;
  };

sliderTrack_1.style.transform = 'translate3d(0px, 0px, 0px)';
room_slider_list_1.classList.add('grab');

sliderTrack_1.addEventListener('transitionend', () => allowSwipe_1 = true);
room_slider_1.addEventListener('touchstart', swipeStart_1);
room_slider_1.addEventListener('mousedown', swipeStart_1);

room_slider_cont_button_forth_1.addEventListener('click', function() {
          if (slideIndex_1 < 5){
            slideIndex_1++;
          }
    slide_1();
    increase_room_slider_info_Progress_1()
});

room_slider_cont_button_back_1.addEventListener('click', function() {
          if (slideIndex_1 > 0){
            slideIndex_1--;
          }
    slide_1();
    decrease_room_slider_info_Progress_1()
});