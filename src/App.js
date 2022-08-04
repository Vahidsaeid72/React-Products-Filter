import Categories from "./productsFilter/Categories";
import Menu from "./productsFilter/Menu";
import './productsFilter/index.css';
import items from './productsFilter/data';
import { useState } from "react";

const App = () => {
  const [menuItems , setMenuItems] = useState(items);

  const filteritem = (category)=>{
    if(category === "همه"){
      setMenuItems(items);
    }else{
      const newItem =items.filter((item)=> item.category === category);
      setMenuItems(newItem);
    }

  }

  return ( 
  <main>
      <section className="menu section">
        <div className="title">
          <h2>محصولات ما</h2>
          <div className="underline">
          </div>
        </div>
        <Categories filteritem={filteritem}/>
        <Menu items={menuItems}/>
      </section>
   </main> 
  );
}
 
export default App;