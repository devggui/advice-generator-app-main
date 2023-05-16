const content = document.getElementById('content')
const loaders = document.getElementById('loaders')

async function getAdvice() {
  showLoader()

  try {    
    const id = document.getElementById('id')
    const advice = document.getElementById('advice')

    const response = await axios.get('https://api.adviceslip.com/advice')  
  
    id.innerText = response.data.slip.id  
    advice.innerText = response.data.slip.advice  
    
    hideLoader()
  } catch (error) {
    console.log(error)
  }
}

function showLoader() {
  loaders.classList.remove('hidden')
  loaders.classList.add('flex')

  content.classList.remove('flex')
  content.classList.add('hidden')
}

function hideLoader() {
  loaders.classList.remove('flex')
  loaders.classList.add('hidden')

  content.classList.remove('hidden')
  content.classList.add('flex')
}