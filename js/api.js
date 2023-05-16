async function getAdvice() {
  try {
    const id = document.getElementById('id')
    const advice = document.getElementById('advice')

    const response = await axios.get('https://api.adviceslip.com/advice')

    id.innerText = response.data.slip.id  
    advice.innerText = response.data.slip.advice  
  } catch (error) {
    console.log(error)
  }
}
