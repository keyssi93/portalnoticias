import React, {  Fragment } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Noticias: [],
      filteredHotels: [],
      isAllLoaded: false
    };
  }
  componentDidMount() {
    fetch('https://api.canillitapp.com/news/category/1')
            .then(Noticias => Noticias.json())
            .then(Noticias => this.setState({ Noticias: Noticias, isAllLoaded: true, filteredNoticias: Noticias }))
            .catch(() => console.log('Error en la petición...'));
  }
  
  render() {
    console.log('API de Hoteles: ', this.state.Noticias)
    return(
      <Fragment>
      <Titulo/>
      <Categorias/>
      <UltimaNoticia/>
      <Card/>
      </Fragment>
    )
  }
}
 class Titulo extends React.Component{
   render(){
     return(
      <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="text-muted" href="#!">Subscribe</a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#!">Large</a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="text-muted" href="#!" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
          </a>

        </div>
      </div>
    </header>

     )
   }
 }
 class Categorias extends React.Component{
  render(){
    return(
      <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" href="#!">World</a>
        <a class="p-2 text-muted" href="#!">U.S.</a>
        <a class="p-2 text-muted" href="#!">Technology</a>
        <a class="p-2 text-muted" href="#!">Design</a>
        <a class="p-2 text-muted" href="#!">Culture</a>
        <a class="p-2 text-muted" href="#!">Business</a>
        <a class="p-2 text-muted" href="#!">Politics</a>
        <a class="p-2 text-muted" href="#!">Opinion</a>
        <a class="p-2 text-muted" href="#!">Science</a>
        <a class="p-2 text-muted" href="#!">Health</a>
        <a class="p-2 text-muted" href="#!">Style</a>
        <a class="p-2 text-muted" href="#!">Travel</a>
      </nav>
    </div>

    )
  }
}
class UltimaNoticia extends React.Component{
  render(){
    return(
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#!" class="text-white font-weight-bold">Continue reading...</a></p>
      </div>
    </div>

    )
  }
}

class Card extends React.Component{
  render(){
    
    return(
<div class="row mb-2">
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#!" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
   
  </div>

    )
  }
}
export default App;
