import React from 'react';
import './Category.scss';

function Category({
  categories,
  setFilter,
  setcurrentPage,
  setmaxPageNumberLimit,
  setminPageNumberLimit,
}) {
  const newCategory = categories.map((category, index) => {
    return category.categories;
  });
  function uniqBy(a, key) {
    const seen = {};
    return a.filter(function (item) {
      const k = key(item);
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
          <button
            key={index}
            className={`btn ${colors[index]}`}
            onClick={() => {
              setFilter(`${category == '' ? 'uncategorized' : category}`);
              setcurrentPage(1); // to reset the pagination current page
              setmaxPageNumberLimit(5); // to render the right amount of page numbers
              setminPageNumberLimit(0);
            }}
          >
            {category == '' ? 'Uncategorized' : category}
          </button>
        ))}
        <button
          className="btn gold"
          onClick={() => {
            setFilter('all');
            setcurrentPage(1);
          }}
        >
          View All
        </button>
      </div>
    </>
  );
}

export default Category;
