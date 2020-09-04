import React, { Component } from "react";

import Cat from "../category/cat-block/cat.componenet";
import "./category.style.scss";

class Category extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          element: "<FontAwesomeIcon icon={faBookOpen} />",
          title: "News",
          color: "grey",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 2,
          element: "<FontAwesomeIcon icon={faGamepad} />",
          title: "Sport",
          color: "orangered",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 3,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Game",
          color: "darkblue",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 4,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "News",
          color: "tomato",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 5,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Polictics",
          color: "indigo",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 6,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Coding",
          color: "saddlebrown",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 7,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Technology",
          color: "firebrick",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 8,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Fashion",
          color: "khaki",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
        {
          id: 9,
          element: "<FontAwesomeIcon icon={faCoins} />",
          title: "Music",
          color: "skyblue",
          details:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius accusantium quos debitis doloribus distinctio.",
        },
      ],
    };
  }

  render() {
    return (

      <div className='category-box'>
        <h4>CATEGORY</h4>
      <div className='category'>
        {this.state.categories
          .filter((categories, idx) => idx < 5)
          .map(({ id, title, element, details }) => (
            <Cat key={id} title={title} element={element} />
          ))}
        <button>view all</button>
      </div>

      </div>
    );
  }
}

export default Category;
