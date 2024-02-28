
import { Product } from '@/components/store/features/utils/type';

import CategoryPage from './categoryPage';
const Category = ({params}:{params:{category:string}}) => {

 
   return (
 
         <div className='body-font mb-[100px] mt-[50px]'>
        <CategoryPage params={params}/>
              
      </div>
   )
}
export default Category