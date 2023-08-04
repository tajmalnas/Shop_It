import CategoryCard from '../../CategoryCard/CategoryCard';
import './CategoryDisplay.css'
import Carousel from 'react-elastic-carousel';
const CategoryDisplay = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 }
      ];
      const categoriesArray = [
        {
          id: 1,
          name: 'Electronics',
          img: 'https://cdn.mos.cms.futurecdn.net/BwSR4PFK3i5ZyhFEmZUBMS-1200-80.jpg',
        },
        {
            id: 2,
            name: 'Tech',
            img: 'https://media.wired.com/photos/631bb97dd884b4dcc94164e3/master/w_2560%2Cc_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg',
        },
        {
          id: 3,
          name: 'Clothing',
          img: 'https://static01.nyt.com/images/2019/09/25/world/25cli-clothes-still-promo/25cli-clothes-still-promo-superJumbo-v2.jpg',
        },
        {
          id: 4,
          name: 'Furniture',
          img: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/6358e-rental-bangalore.jpg?fit=1000%2C750&ssl=1',
        },
        {
          id: 5,
          name: 'Grocery',
          img: 'https://entrackr.com/storage/2020/03/grocery-store.jpg',
        },
        {
          id: 6,
          name: 'Beauty',
          img: 'https://tlc.sndimg.com/content/dam/images/tlc/tlcme/fullset/2022/april/rx_eco%20friendly%20cosmetics.jpg.rend.hgtvcom.406.271.suffix/1650386135910.jpeg',
        },
        {
          id: 7,
          name: 'Books',
          img: 'https://static.toiimg.com/photo/msid-80383465/80383465.jpg',
        },
        {
          id: 8,
          name: 'Sports',
          img: 'https://images2.minutemediacdn.com/image/fetch/https%3A%2F%2Fwritingillini.com%2Fwp-content%2Fuploads%2Fimagn-images%2F2017%2F07%2F7737369.jpeg',
        },
        {
          id: 9,
          name: 'Toys',
          img: 'https://thememo.com.au/cdn/shop/collections/Toys_1200x1200.jpg?v=1637713653',
        },
        
      ];

  return (
    <div>
      <div className='text11'>
        Our Top Category
      </div>
      <div className='carousel'>
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          
          renderPagination={({ pages, activePage, onClick }) => (
            <div className="custom-dots">
              {pages.map((page) => (
                <div
                  key={page}
                  onClick={() => onClick(page)}
                  className={`custom-dot ${activePage === page ? "active" : ""}`}
                ></div>
              ))}
            </div>
          )}
        >
          {categoriesArray.map((item) => (
            <CategoryCard key={item.id} text={item.name} url={item.img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};


export default CategoryDisplay