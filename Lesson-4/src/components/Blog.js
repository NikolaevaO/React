import React from "react";

export default class Blog extends React.Component {
  constructor (props) {
    super(props);
    this.blogItems = [
      { id: "1",
        title: "Post 1",
        postBody: <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias hic maxime perspiciatis cumque, tenetur beatae,
                  quas adipisci id fuga voluptatum omnis,<br />
                  voluptatem at.
                  Iure temporibus et illum molestias nesciunt sed."
                  </p>},
      { id: "2",
        title: "Post 2",
        postBody: <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias hic maxime perspiciatis cumque, tenetur beatae,<br />
                  quas adipisci id fuga voluptatum omnis,
                  voluptatem at.
                  Iure temporibus et illum molestias nesciunt sed."
                  </p>},
      { id: "3",
        title: "Post 3",
        postBody: <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias hic maxime perspiciatis cumque, <br /> tenetur beatae,
                  quas adipisci id fuga voluptatum omnis,
                  voluptatem at.
                  Iure temporibus et illum molestias nesciunt sed."
                  </p>}
    ]
  }
  render() {
    const posts = this.blogItems.map((item, id)=> {
      return (
      <div key={id}><h2>{item.title}</h2>{item.postBody}</div>
      );
    })
    return (
        <div className="blog">
            {posts}
        </div>
        );
    };
}


