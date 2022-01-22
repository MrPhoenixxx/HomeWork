const button = document.querySelector('button')
button.addEventListener('click', () => {
  const inputVal = document.querySelector('input').value
  const componentVal = inputVal * 45
  const detailVal = componentVal * 5

  const component = document.querySelector('.component')
  const detail = document.querySelector('.detail')
  const time = document.querySelector('.time')

  component.innerText = `Component: ${componentVal} pieces`
  detail.innerText = `Detail: ${detailVal} pieces`
  time.innerText = `Time: ${detailVal} hours`
})
