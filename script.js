// slide variables
let pagingNumber = 1
let portfolioWidth = 0
let tabNumber = 0

// responsive
const responsiveSize = () => {
  if (window.outerWidth < 768) {
    portfolioWidth = 50
  } else if (window.outerWidth > 1199) {
    portfolioWidth = 30
  } else {
    portfolioWidth = 40
  }
}

const responsiveAdjust = () => {
  let startWidth = portfolioWidth / 2 + portfolioWidth * 2
  let calWidth = startWidth - (pagingNumber - 1) * portfolioWidth
  document.querySelector(
    '.portfolio-list'
  ).style.transform = `translate(${calWidth}vw, 0)`
}

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

    responsiveSize()

    // pagination
    pagingNumber = Number(targetTxT)

    responsiveAdjust()
  })
}

slideFn()

// auto slide

// window resize, slide start
const resize = () => {
  responsiveSize()

  pagingNumber = 1
  responsiveAdjust()
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
