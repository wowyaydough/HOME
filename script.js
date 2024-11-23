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

const slideFn = () => {
  // portfolio-slide.scss variable adapt
  const portfoliowidth = 50
  let startwidth = portfoliowidth / 2 + portfoliowidth * 2
  const btnName = document.querySelector('.portfolio-pagination-btn-list')

  btnName.addEventListener('click', function (e) {
    let targetTxT = e.target.innerHTML

    if (targetTxT === 'prev') {
      if (1 < pagingNumber && pagingNumber < 7) {
        targetTxT = pagingNumber - 1
        console.log('prev - targetTxT : ', targetTxT)
      } else if (pagingNumber === 1) targetTxT = 1
    }

    if (targetTxT === 'next') {
      if (0 < pagingNumber && pagingNumber < 6) {
        targetTxT = pagingNumber + 1

        console.log('next - targetTxT : ', targetTxT)
      } else if (pagingNumber === 6) targetTxT = 6
    }

    let calWidth = startwidth - (Number(targetTxT) - 1) * portfoliowidth

    document.querySelector(
      '.portfolio-list'
    ).style.transform = `translate(${calWidth}vw, 0)`
    pagingNumber = Number(targetTxT)
  })
}

slideFn()

// auto slide

//  open github
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
