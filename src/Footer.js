function Footer() {
  return (
    <div className="Footer">
      <div>
        <h3>Abstract</h3>
        <p>Branches</p>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h3>Community</h3>
        <ul>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
          <li>Dribble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Legal</li>
          <li>
            <div className="contact">
              <h2>Contact Us</h2>
              <p>info@abstract.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul id="details">
          <li>
            <img
              src={"https://i.postimg.cc/CM6Xfp1d/abstract.png"}
              alt="logo"
              className="config"
            />
          </li>
          <li>&copy; Copyright 2022</li>
          <li>Abstract Studio Design, inc.</li>
          <li>All rights reserved</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
