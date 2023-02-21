import { getAllProducts } from '@shared/api/supabase/getAllProducts';
import { Navbar } from '@widgets/Navbar';

const MainPage = () => {
    const { products, loading, error } = getAllProducts();

    console.log(loading);

    console.log(error);

    console.log(products);

    return (
        <div>
            <Navbar />
            <div>MainPage</div>
        </div>
    );
};

export default MainPage;
