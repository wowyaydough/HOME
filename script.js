// mode change (dark <-> light)
let modeChangeBtn = document.querySelector('.gnb-mode-change-btn')

modeChangeBtn.addEventListener('click', function () {
  const containDark = modeChangeBtn.classList.contains('to-dark')

  if (containDark === false) {
    modeChangeBtn.classList.add('to-dark')
    modeChangeBtn.innerHTML = 'Light'
  } else {
    modeChangeBtn.classList.remove('to-dark')
    modeChangeBtn.innerHTML = 'Dark'
  }
})

// slide

let pagingNumber = 1
let portfolioWidth = 0
let tabNumber = 0

// tab-page
function tabHide() {
  const tabPage = document.querySelectorAll('.tab-page')
  const tabControl = (tabNumber) => {
    if (tabPage[tabNumber].classList.contains('hide') === true) {
      tabPage[tabNumber].classList.remove('hide')
    } else {
      tabPage[tabNumber].classList.add('hide')
    }
  }
}

const tabBtn = document.querySelectorAll('.tab-btn')
tabBtn[0].addEventListener('click', function () {
  tabNumber = 0
  tabHide(0)
  console.log('0')
})
tabBtn[1].addEventListener('click', function () {
  tabNumber = 1
  tabHide(1)
  console.log('2')
})

// 슬라이드
const slideFn = () => {
  const btnName = document.querySelector('.portfolio-pagination-btn-list')

  btnName.addEventListener('click', function (e) {
    let targetTxT = e.target.innerHTML

    // prev & next
    if (targetTxT === 'prev') {
      if (pagingNumber > 1) {
        pagingNumber = pagingNumber - 1
        targetTxT = pagingNumber
      } else {
        pagingNumber = 1
      }
    } else if (targetTxT === 'next') {
      if (pagingNumber < 6) {
        pagingNumber = pagingNumber + 1
        targetTxT = pagingNumber
      } else {
        pagingNumber = 6
      }
    }

    // 반응형 슬라이드 크기
    if (window.outerWidth < 768) {
      portfolioWidth = 50
    } else if (window.outerWidth > 1199) {
      portfolioWidth = 30
    } else {
      portfolioWidth = 40
    }

    // pagination
    pagingNumber = Number(targetTxT)
    let startWidth = portfolioWidth / 2 + portfolioWidth * 2
    let calWidth = startWidth - (pagingNumber - 1) * portfolioWidth
    document.querySelector(
      '.portfolio-list'
    ).style.transform = `translate(${calWidth}vw, 0)`
  })
}

slideFn()

// auto slide

// window resize, slide start
const resize = () => {
  document.querySelector(window).addEventListener('change', function () {
    if (window.outerWidth < 768) {
      portfolioWidth = 50
    } else if (window.outerWidth > 1199) {
      portfolioWidth = 30
    } else {
      portfolioWidth = 40
    }
    let startWidth = portfolioWidth / 2 + portfolioWidth * 2
    document.querySelector(
      '.portfolio-list'
    ).style.transform = `translate(${startWidth}vw, 0)`
  })
}

//  click to open github
document.querySelector('.show-code').addEventListener('click', function () {
  if (pagingNumber < 2) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/Asty'
  }
  if (pagingNumber === 2) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/BaskinRobbins'
  }
  if (pagingNumber === 3) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/Etude'
  }
  if (pagingNumber === 4) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/gjcity'
  }
  if (pagingNumber === 5) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/ISTEC'
  }
  if (pagingNumber === 6) {
    document.querySelector('.show-code').href =
      'https://github.com/wowyaydough/pf4_hitejinro'
  }
})
