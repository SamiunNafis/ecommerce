import { React } from "react";
import { ProductsCard } from "./ProductsCard";
import '../App.css'

    
export const Products = ({products}) => {
    const myProds = JSON.parse(products)

// alert(JSON.stringify(myProds))
  //alert(JSON.stringify(myProds[0]))
  //alert(myProds)
  //alert(products)
  return (
    <div className="py-10 px-5">
      <div className="py-2 flex flex-col items-center gap-8">
        <h1 className="text-2xl">Shopping Everyday</h1>
        <span className="w-20 h-[5px] bg-black"></span>
      </div>
      <div className="max-w-screen-xl gap-6 mx-auto py-10 prod-card">
        {
    /**/
            myProds.map((items) => {
               // alert(items.id) 
               return(
                    <ProductsCard key={items._id} product={items}/>
               )
            })
            /**/
        }
      </div>
    </div>
  );
};
