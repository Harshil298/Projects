const Navigation = () => {
    return (
      <div className="container">
        <nav>
        <div className='logo'>
          <img src="/Images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>   
        </ul>

        <button>Login</button>
      </nav>
    </div>
    )
} 

export default Navigation;