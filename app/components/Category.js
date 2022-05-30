import React from 'react';
import './Category.scss';

function Category({ categories }) {
  const newCategory = categories.map((category, index) => {
    return category.categories;
  });
  function uniqBy(a, key) {
    var seen = {};
    return a.filter(function (item) {
      var k = key(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
  }
  const uniqueCategory = uniqBy(newCategory, JSON.stringify);

  const colors = [
    'red',
    'pink',
    'orange',
    'yellow',
    'light-green',
    'green',
    'light-blue',
    'dark-blue',
    'fuschia',
    'purple',
    'aqua',
    'chartreuse',
    'blueviolet',
    'darksalmon',
    'aliceblue',
    'darkseagreen',
  ];
  return (
    <>
      <div className="container">
        {uniqueCategory.map((category, index) => (
          <button key={index} className={`btn ${colors[index]}`}>
            {category == '' ? 'Uncategorized' : category}
          </button>
        ))}
        <button className="btn gold">View All</button>
      </div>
    </>
  );
}

export default Category;
