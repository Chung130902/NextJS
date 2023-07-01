const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <button
                onClick={() => paginate(pageNumber)}
                className={`/products ${currentPage === pageNumber ? 'active' : ''}`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;