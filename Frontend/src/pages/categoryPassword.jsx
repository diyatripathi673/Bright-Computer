import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import productCategory from '../helpers/productCategory';
import VerticalCard from '../components/VerticalCard';
import { SummaryApi } from '../common/common';

const CategoryProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  const urlCategoryListinArray = urlSearch.getAll("category");

  const urlCategoryListObject = {};
  urlCategoryListinArray.forEach(el => {
    urlCategoryListObject[el] = true;
  });

  const [selectCategory, setSelectCategory] = useState(urlCategoryListObject);
  const [filterCategoryList, setFilterCategoryList] = useState([]);

  // Fetch data from API based on category filter
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.filterProduct.url, {
        method: SummaryApi.filterProduct.method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          category: filterCategoryList
        })
      });

      const dataResponse = await response.json();
      setData(dataResponse?.data || []);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
    setLoading(false);
  };

  // Handle category checkbox change
  const handleSelectCategory = (e) => {
    const { value, checked } = e.target;

    setSelectCategory(prev => ({
      ...prev,
      [value]: checked
    }));
  };

  // Convert selected category object to array and update URL
  useEffect(() => {
    const arrayOfCategory = Object.keys(selectCategory)
      .filter(categoryKey => selectCategory[categoryKey]);

    setFilterCategoryList(arrayOfCategory);

    // Update URL with category filters
    const urlFormat = arrayOfCategory.map(el => `category=${el}`);
    navigate("/product-category?" + urlFormat.join("&&"));
  }, [selectCategory]);

  // Fetch filtered data when category filter list changes
  useEffect(() => {
    fetchData();
  }, [filterCategoryList]);

  // Sort data when sortBy changes
  const handleOnChangeSortBy = (e) => {
    const { value } = e.target;
    setSortBy(value);

    if (value === 'asc') {
      setData(prev => [...prev].sort((a, b) => a.sellingPrice - b.sellingPrice));
    } else if (value === 'dsc') {
      setData(prev => [...prev].sort((a, b) => b.sellingPrice - a.sellingPrice));
    }
  };

  return (
    <div className='container mx-auto p-4'>

      {/* Desktop version */}
      <div className='hidden lg:grid grid-cols-[200px,1fr]'>

        {/* Left Sidebar */}
        <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>

          {/* Sort By */}
          <div>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'asc'}
                  onChange={handleOnChangeSortBy}
                  value="asc"
                />
                <label>Price - Low to High</label>
              </div>

              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='sortBy'
                  checked={sortBy === 'dsc'}
                  onChange={handleOnChangeSortBy}
                  value="dsc"
                />
                <label>Price - High to Low</label>
              </div>
            </form>
          </div>

          {/* Filter By Category */}
          <div>
            <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
            <form className='text-sm flex flex-col gap-2 py-2'>
              {productCategory.map((categoryName, index) => (
                <div className='flex items-center gap-3' key={index}>
                  <input
                    type='checkbox'
                    name="category"
                    id={categoryName?.value}
                    checked={selectCategory[categoryName?.value] || false}
                    value={categoryName?.value}
                    onChange={handleSelectCategory}
                  />
                  <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                </div>
              ))}
            </form>
          </div>

        </div>

        {/* Right Side - Product List */}
        <div className='px-4'>
          <p className='font-medium text-slate-800 text-lg my-2'>
            Search Results: {data.length}
          </p>

          <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
            {!loading && data.length > 0 && (
              <VerticalCard data={data} loading={loading} />
            )}
            {!loading && data.length === 0 && (
              <p className='text-slate-500'>No products found for selected category.</p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default CategoryProduct;
