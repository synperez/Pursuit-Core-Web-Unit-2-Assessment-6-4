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
          let res = await axios.get("https://ghibliapi.herokuapp.com/film")
          let title = res.data
          title.forEach(movie=>{
              let option = document.createElement("option")
              option.innerText = movie.title
              select.appendChild(option)
                // console.log(title);
                
          })
      }catch(error){
          console.log(error)
    }
    select.addEventListener("change", (event) => {
      movieName.innerText = movie.title
      movieDate.innerText = movie.release_date
      moviePlot.innerText = movie.description
      event.currentTarget.value
    })
  
  
  }
  
  
  
    getMovie()
  })