document.addEventListener('DOMContentLoaded', ()=>{
    let select = document.querySelector("#select")
    let movieName = document.querySelector("#movieName")
    let movieDate = document.querySelector("#movieDate")
    let moviePlot = document.querySelector("#moviePlot")
    let text = document.querySelector("#text")
    let submit = document.querySelector("#submit")
    let review = document.querySelector("#review")
  
    const getMovie = async() =>{
      try{
          let res = await axios.get("https://ghibliapi.herokuapp.com/films")
          let title = res.data
          title.forEach(movie=>{
              let option = document.createElement("option")
              option.innerText = movie.title
              select.appendChild(option)
          })
      }catch(error){
          console.log(error)
    }
  }
    getMovie()
  })