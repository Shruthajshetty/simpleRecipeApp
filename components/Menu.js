import { Outlet } from "react-router-dom";
const Menu = () => {
    return ( 
        <>
       
      <div className="container">
      <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=1024x1024&w=is&k=20&c=ikpY4uMwkstungCvhwXoWV125bwnc4uvZT5FVaeOwb0=" />
        <div class="card-body">
          <h5 class="card-title">Biriyani</h5>
          <p class="card-text">IHurry Up!    $150</p>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1314611845/photo/krpice-sa-zeljem-croatian-pasta-with-caramelized-cabbage.jpg?s=1024x1024&w=is&k=20&c=cLa4slvJt2EFYnpOM2AFn_2Wc8JUdeaC5aDA1tr4f1I=" />
          <h5 class="card-title">Pasta </h5>
          <p class="card-text">Hurry Up! $100</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=1024x1024&w=is&k=20&c=0RM7yJSu5IRjWLEOD2CO_9GOkNiNy_sEH0lGCAwduQ8=" />
        <div class="card-body">
          <h5 class="card-title">Noodles</h5>
          <p class="card-text">Hurry Up! $120</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/172789635/photo/asian-chinese-fried-rice-with-vegetable-and-egg-with-chopsticks.jpg?s=1024x1024&w=is&k=20&c=QiDqfvUjHIYGyGNrWgIeRrwg5_q5vGeysNpV230SByI=
      " />
        <div class="card-body">
          <h5 class="card-title">Fried Rice</h5>
          <p class="card-text">Hurry Up! $110.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://media.istockphoto.com/id/172789635/photo/asian-chinese-fried-rice-with-vegetable-and-egg-with-chopsticks.jpg?s=1024x1024&w=is&k=20&c=QiDqfvUjHIYGyGNrWgIeRrwg5_q5vGeysNpV230SByI=" />
        <div class="card-body">
          <h5 class="card-title">Tiramisu </h5>
          <p class="card-text">Hurry Up! $115</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     </div>

     <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://plus.unsplash.com/premium_photo-1661757251071-624639a288a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
      <div class="card-body">
          <h5 class="card-title">Special Juice</h5>
          <p class="card-text">Hurry Up! $70.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     </div>
        </div>
        <Outlet />
      </>
     );
  }
  
  export default Menu;