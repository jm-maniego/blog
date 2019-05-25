import React, { Component } from "react";
import Layout from "./Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <ol className="list-group list-group-flush article-list">
          <li className="list-group-item article-list-item">
            <article>
              <div className="mb-2">
                <a href="#">
                  <h1 className="mb-0">Hello World</h1>
                </a>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="article-list-item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum diam, consequat vitae ipsum pellentesque, varius
                pellentesque velit. Etiam mollis ex nec cursus gravida. Ut
                imperdiet posuere nisl, at hendrerit quam vehicula a. In et
                faucibus nibh, ut varius ante. Nunc sodales vehicula elit in
                fermentum. Vestibulum condimentum malesuada tortor in malesuada.
                Curabitur ut finibus turpis, sed maximus ex. Donec viverra
                rutrum lacus. <a href="#">Read more...</a>
              </p>
            </article>
          </li>
          <li className="list-group-item article-list-item">
            <article>
              <div className="mb-2">
                <a href="#">
                  <h1 className="mb-0">Hello World</h1>
                </a>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="article-list-item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum diam, consequat vitae ipsum pellentesque, varius
                pellentesque velit. Etiam mollis ex nec cursus gravida. Ut
                imperdiet posuere nisl, at hendrerit quam vehicula a. In et
                faucibus nibh, ut varius ante. Nunc sodales vehicula elit in
                fermentum. Vestibulum condimentum malesuada tortor in malesuada.
                Curabitur ut finibus turpis, sed maximus ex. Donec viverra
                rutrum lacus. <a href="#">Read more...</a>
              </p>
            </article>
          </li>
          <li className="list-group-item article-list-item">
            <article>
              <div className="mb-2">
                <a href="#">
                  <h1 className="mb-0">Hello World</h1>
                </a>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="article-list-item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum diam, consequat vitae ipsum pellentesque, varius
                pellentesque velit. Etiam mollis ex nec cursus gravida. Ut
                imperdiet posuere nisl, at hendrerit quam vehicula a. In et
                faucibus nibh, ut varius ante. Nunc sodales vehicula elit in
                fermentum. Vestibulum condimentum malesuada tortor in malesuada.
                Curabitur ut finibus turpis, sed maximus ex. Donec viverra
                rutrum lacus. <a href="#">Read more...</a>
              </p>
            </article>
          </li>
        </ol>
      </Layout>
    );
  }
}

export default Home;
