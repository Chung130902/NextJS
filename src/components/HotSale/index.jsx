import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";

function HotSale({ hotsale }) {

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? hotsale : hotsale.slice(0, 4);
  const hasMoreProducts = hotsale.length > visibleProducts.length;

  return (
    <div className="container">
      <div className = "p-flex">
        <h4 className="hh4">HOT SALE</h4>
        <div className="viewall"> 
          {hasMoreProducts && !showAll && (
            <h5 onClick={() => setShowAll(true)}>View All</h5>
          )}
        </div>
      </div>
      {/* {
          <div className='d-flex flex-wrap row g-2'>
            {hotsale && hotsale.map((p) => (
              <div key={p._id} className="card col-2 m-1">
                <img src={p.photo} width={'100px'} height={'150px'} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-text">
                  <Link href={`/questions/29/${p._id}`}><p>{p.name}</p></Link>
                </h5>
                <p>
                    <strong>price:</strong> {p.price}
                </p>
                <p>
                    <strong></strong> {p.quantity} đã bán
                </p>
                <a href="#" class="btn btn-primary">Add to cart</a>
        
              </div>
            </div>
            ))}
          </div>
      } */}

      <section class="section section-product">
        {
          <div class="product-list">
          {visibleProducts && visibleProducts.map((p) => (
              <div key={p._id} class="item">
                  <div class="label-fixed">
                      <span class="badge">HOT</span>
                      <span class="badge badge-discount">{p.discount}%</span>
                  </div>
                  <div class="thumb1">
                    <img src={p.photo} width={'100px'} height={'150px'} className="card-img-top" alt="..."/>
                  </div>
                  <div class="cate"> </div>
                  <h3 className='hh3'>
                  <Link href={`/questions/29/${p._id}`}><p>{p.name}</p></Link>
                  </h3>
                  <span class="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  <div class="price">
                      {/* <del>${p.price}</del> */}
                      <strong>${p.price}</strong>
                  </div>
                  <p>
                    <strong></strong> {p.quantity} đã bán
                </p>
              </div>
            ))}
          </div>
        }
        
      </section>

    </div>
  );
}

export default HotSale;

