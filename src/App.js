import React from 'react';

import './App.css';

function App() {
  return (
    <div>
     <h1 class = "center">Добро пожаловать на мою персональную страничку!!!</h1>
     <div class="row">
     <div class="card col-md-6" >
     <div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img class="d-block w-100" data-src="holder.js/900x300?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [900x300]" src="https://avatars.mds.yandex.net/get-pdb/805781/39df4407-45e8-4cef-be56-35b0ac923387/s1200" data-holder-rendered="true"></img>
        <div class="carousel-caption d-none d-md-block">
          <h3>Первый любимый питомец</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" data-src="holder.js/900x300?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [900x300]" src="https://s1.1zoom.ru/big3/876/Parrots_Birds_Ara_444399.jpg" data-holder-rendered="true"></img>
        <div class="carousel-caption d-none d-md-block">
          <h3>Второй любимый питомец</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
<div class="card col-md-6" >
<lu>
  <li>моя почта - 1@mail.ru </li>
  <li>мой телефон - +7923 923 9231 </li>
</lu>
</div>

</div>
</div>

  );
}

export default App;
