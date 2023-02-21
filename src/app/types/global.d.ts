interface Product {
    id: number;
    title: string;
    created_at: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: 120;
    };
}
