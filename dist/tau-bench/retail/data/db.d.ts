import { type Static, type StaticDecode } from "@sinclair/typebox";
export type User = Static<typeof UserSchema>;
export declare const UserSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TObject<{
        first_name: import("@sinclair/typebox").TString;
        last_name: import("@sinclair/typebox").TString;
    }>;
    address: import("@sinclair/typebox").TObject<{
        address1: import("@sinclair/typebox").TString;
        address2: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
        state: import("@sinclair/typebox").TString;
        zip: import("@sinclair/typebox").TString;
    }>;
    email: import("@sinclair/typebox").TString;
    payment_methods: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        source: import("@sinclair/typebox").TLiteral<"paypal">;
        id: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TObject<{
        source: import("@sinclair/typebox").TLiteral<"credit_card">;
        brand: import("@sinclair/typebox").TString;
        last_four: import("@sinclair/typebox").TString;
        id: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TObject<{
        source: import("@sinclair/typebox").TLiteral<"gift_card">;
        balance: import("@sinclair/typebox").TNumber;
        id: import("@sinclair/typebox").TString;
    }>]>>;
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export type Product = Static<typeof ProductSchema>;
export declare const ProductSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    product_id: import("@sinclair/typebox").TString;
    variants: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        item_id: import("@sinclair/typebox").TString;
        options: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        available: import("@sinclair/typebox").TBoolean;
        price: import("@sinclair/typebox").TNumber;
    }>>;
}>;
export type Order = Static<typeof OrdersSchema>;
export declare const OrdersSchema: import("@sinclair/typebox").TObject<{
    order_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TString;
    address: import("@sinclair/typebox").TObject<{
        address1: import("@sinclair/typebox").TString;
        address2: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
        state: import("@sinclair/typebox").TString;
        zip: import("@sinclair/typebox").TString;
    }>;
    items: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        product_id: import("@sinclair/typebox").TString;
        item_id: import("@sinclair/typebox").TString;
        price: import("@sinclair/typebox").TNumber;
        options: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    }>>;
    fulfillments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        tracking_id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        item_ids: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>>;
    status: import("@sinclair/typebox").TString;
    payment_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        transaction_type: import("@sinclair/typebox").TString;
        amount: import("@sinclair/typebox").TNumber;
        payment_method_id: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const DBSchema: import("@sinclair/typebox").TObject<{
    users: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TObject<{
            first_name: import("@sinclair/typebox").TString;
            last_name: import("@sinclair/typebox").TString;
        }>;
        address: import("@sinclair/typebox").TObject<{
            address1: import("@sinclair/typebox").TString;
            address2: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
            country: import("@sinclair/typebox").TString;
            state: import("@sinclair/typebox").TString;
            zip: import("@sinclair/typebox").TString;
        }>;
        email: import("@sinclair/typebox").TString;
        payment_methods: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            source: import("@sinclair/typebox").TLiteral<"paypal">;
            id: import("@sinclair/typebox").TString;
        }>, import("@sinclair/typebox").TObject<{
            source: import("@sinclair/typebox").TLiteral<"credit_card">;
            brand: import("@sinclair/typebox").TString;
            last_four: import("@sinclair/typebox").TString;
            id: import("@sinclair/typebox").TString;
        }>, import("@sinclair/typebox").TObject<{
            source: import("@sinclair/typebox").TLiteral<"gift_card">;
            balance: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TString;
        }>]>>;
        orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>>;
    orders: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        order_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TString;
        address: import("@sinclair/typebox").TObject<{
            address1: import("@sinclair/typebox").TString;
            address2: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
            country: import("@sinclair/typebox").TString;
            state: import("@sinclair/typebox").TString;
            zip: import("@sinclair/typebox").TString;
        }>;
        items: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            product_id: import("@sinclair/typebox").TString;
            item_id: import("@sinclair/typebox").TString;
            price: import("@sinclair/typebox").TNumber;
            options: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
        }>>;
        fulfillments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            tracking_id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            item_ids: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TString;
        payment_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            transaction_type: import("@sinclair/typebox").TString;
            amount: import("@sinclair/typebox").TNumber;
            payment_method_id: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    products: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        product_id: import("@sinclair/typebox").TString;
        variants: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
            item_id: import("@sinclair/typebox").TString;
            options: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            available: import("@sinclair/typebox").TBoolean;
            price: import("@sinclair/typebox").TNumber;
        }>>;
    }>>;
}>;
export declare function buildRetailDB(): Promise<StaticDecode<typeof DBSchema>>;
