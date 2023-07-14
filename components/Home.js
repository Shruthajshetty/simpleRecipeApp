import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://ca-times.brightspotcdn.com/dims4/default/dd2a38c/2147483647/strip/true/crop/2048x1365+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2F2a%2F3491f04c4c8aa01a92daf39ffb71%2Fwolfies-08-jamestran.jpg" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Are you New Here</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&w=1000&q=80" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Login here for Better experience</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
     
      </div>
      <div className="container">
      <div class="row">
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        <div class="card-body">
          <h5 class="card-title">Breakfast</h5>
          <p class="card-text">If you want breakfast in bed, eat it in the kitchen!</p>
          <a href="/Menu" class="btn" style={{backgroundColor:"#FFA500"}}>Menu</a>
        </div>
      </div>
     </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80
      
      
      
      " />
          <h5 class="card-title">Lunch</h5>
          <p class="card-text">Ask not what you can do for your country, ask what's for lunch.</p>
          <a href="/Menu" class="btn" style={{backgroundColor:"#FFA500"}}>Menu</a>
        </div>
      </div>
    </div>
    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
        <div class="card-body">
          <h5 class="card-title">Dinner</h5>
          <p class="card-text">Dinner is better when we eat together.</p>
          <a href="/Menu" class="btn" style={{backgroundColor:"#FFA500"}}>Menu</a>
        </div>
      </div>
    </div>

    <div class="col col-md-6 col-sm-12">
      <div class="card" >
      <img src="https://plus.unsplash.com/premium_photo-1684629279315-c4ebcfe56e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" />
        <div class="card-body">
          <h5 class="card-title">Snacks</h5>
          <p class="card-text">Snack time heals all wounds.</p>
          <a href="/Menu" class="btn" style={{backgroundColor:"#FFA500"}}>Menu</a>
        </div>
      </div>
    </div>
  
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row" style={{backgroundColor:"#FFA500"}}>
            
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
           
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted">
                  &copy; 2023 My Kitchen Website
                </span>
              </div>
              
            </div>
          </div>
        </div>
      </footer>





      <Outlet />
    </>
  );
};

export default Home;
