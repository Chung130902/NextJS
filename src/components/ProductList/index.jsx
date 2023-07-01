import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import Pagination from '../Pagination';
import { useRouter } from 'next/router';

function ProductList({ products }) {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = showAll ? products : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
     <div className = "p-flex">
        <h4 className="hh4">PRODUCTS LIST</h4>
      </div>
      <hr/>
      {/* {
          <div className='d-flex flex-wrap row g-2'>
            {products && products.map((p) => (
              <div key={p._id} className="card col-2 m-1">
                <img src={p.photo} width={'100px'} height={'150px'} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-text">
                  <Link href={`/products/${p._id}`}><p>{p.name}</p></Link>
                </h5>
                <p>
                    <strong>price:</strong> {p.price}
                </p>
                <p>
                    <strong></strong> {p.sold} đã bán
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
          {currentProducts && currentProducts.map((p) => (
              <div key={p._id} class="item">
                  <div class="label-fixed">
                      <span class="badge">HOT</span>
                      <span class="badge badge-discount">{p.discount}%</span>
                  </div>
                  <div class="thumb1">
                    <img src={p.photo} height={'150px'} className="card-img-top" alt="..."/>
                  </div>
                  <div class="cate"> </div>
                  <h3 className='hh3'>
                  <Link href={`/products/${p._id}`}><p>{p.name}</p></Link>
                  </h3>
                  <span class="star"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                  <div class="price">
                      {/* <del>${p.price}</del> */}
                      <strong>${p.price}</strong>
                  </div>
              </div>
            ))}
            <Pagination
               productsPerPage={productsPerPage}
               totalProducts={products.length}
               paginate={paginate}
               currentPage={currentPage}
            />
          </div>
        }
        
      </section>


    </div>
  );
}

export default ProductList;

