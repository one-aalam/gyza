export interface IRestaurantBranding {
    image?: string;
    logo?: string;
    color?: string; // primary color
}

export interface IRestaurant extends IRestaurantBranding {
    id: number;
    name: string;
    description: string;
    dealsIn: string[]; // chinese, continental, mughlai, bevarages
    rating: number;

    email: string;
    phone: string;

    costs?: number;
    costsFor?: number;

    serving?: boolean;
    opens?: string;
    closes?: string;

    address?: string;
    state?: string;
    city?: string;
    zip?: string;

    latitude?: string;
    longitude?: string;

    offers?: string[];
    exclusive?: boolean;
    promoted?: boolean;

    menuItems?: number[];
}

export interface IRestaurantMenuItem {
    id: number;
    name: string;
    description: string;

    image?: string; // HQ image
    thumbnail?: string;

    cost: number;

    available: boolean;

    // classification system
    category: number;
    type?: string; // veg/non-veg
    featured?: boolean;
    collection?: string;
    tags?: string[]; // topPick, recommended, bestseller/ must try

    restaurantId?: number;


}