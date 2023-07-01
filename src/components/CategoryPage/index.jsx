import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

function CategoryPage({ categories }) {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? categories : categories.slice(0, 6);
  const hasMoreProducts = categories.length > visibleProducts.length;
  return (
    <div className="container">
      <div className = "p-flex">
        <h4 className="hh4">CATEGORIES</h4>
        <div className="viewall"> 
          {hasMoreProducts && !showAll && (
            <h5 onClick={() => setShowAll(true)}>View All</h5>
          )}
        </div>
      </div>
      <hr/>
      <div class="flexbox_container">
        {visibleProducts && visibleProducts.map((p) => (
              <div key={p._id} class="images image1">
                <img src={p.photo}  height={'90px'} className="card-img-top" alt="..."/>
              <div className='name_p'>
                <p >
                  <Link href={`/categories/${p._id}`}><p>{p.name}</p></Link>
                </p>
              </div>
            </div>
            ))}
      </div>

      {/* {
          <div className='d-flex flex-wrap row g-2'>
            {categories && categories.map((p) => (
              <div key={p._id} className="card col-2">
                <img src={p.photo} width={'100px'} height={'150px'} className="card-img-top" alt="..."/>
              <div className="card-body">
                <p className="card-text">
                  <Link href={`/categories/${p._id}`}><p>{p.name}</p></Link>
                </p>
              </div>
            </div>
            ))}
          </div>
      } */}
    </div>
  );
}


export default CategoryPage;



