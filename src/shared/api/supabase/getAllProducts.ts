import { useEffect, useState } from 'react';

import { supabase } from '../../config/supabase';

interface getAllProductsRes {
    loading: boolean;
    error: string;
    products: Product[];
}

export const getAllProducts = (): getAllProductsRes => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [fetchError, setFetchError] = useState<string>('');

    useEffect(() => {
        const fetching = async (): Promise<void> => {
            const { data, error } = await supabase.from('Products').select('imagearray');

            if (!error && !data) {
                setLoading(true);
            }

            if (error) {
                setLoading(false);
                setProducts([]);
                setFetchError('Something wrong with fetching on products');
            }

            if (data) {
                setLoading(false);
                setFetchError('');
                setProducts(data);
            }
        };

        fetching();
    }, []);

    return {
        loading,
        error: fetchError,
        products
    };
};
