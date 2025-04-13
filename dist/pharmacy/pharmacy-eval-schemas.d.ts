export declare const ProductSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    price: import("@sinclair/typebox").TNumber;
    stock: import("@sinclair/typebox").TNumber;
    category: import("@sinclair/typebox").TString;
    brand: import("@sinclair/typebox").TString;
    imageUrl: import("@sinclair/typebox").TString;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const ProductListResponseSchema: import("@sinclair/typebox").TObject<{
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        price: import("@sinclair/typebox").TNumber;
        stock: import("@sinclair/typebox").TNumber;
        category: import("@sinclair/typebox").TString;
        brand: import("@sinclair/typebox").TString;
        imageUrl: import("@sinclair/typebox").TString;
        createdAt: import("@sinclair/typebox").TString;
        updatedAt: import("@sinclair/typebox").TString;
    }>>;
    total: import("@sinclair/typebox").TNumber;
    page: import("@sinclair/typebox").TNumber;
    limit: import("@sinclair/typebox").TNumber;
}>;
export declare const CategorySchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const CategoryListResponseSchema: import("@sinclair/typebox").TObject<{
    categories: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        createdAt: import("@sinclair/typebox").TString;
        updatedAt: import("@sinclair/typebox").TString;
    }>>;
    total: import("@sinclair/typebox").TNumber;
    page: import("@sinclair/typebox").TNumber;
    limit: import("@sinclair/typebox").TNumber;
}>;
export declare const CategoryDetailResponseSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    parentId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const BrandSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    logoUrl: import("@sinclair/typebox").TString;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const BrandListResponseSchema: import("@sinclair/typebox").TObject<{
    brands: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        logoUrl: import("@sinclair/typebox").TString;
        createdAt: import("@sinclair/typebox").TString;
        updatedAt: import("@sinclair/typebox").TString;
    }>>;
    total: import("@sinclair/typebox").TNumber;
    page: import("@sinclair/typebox").TNumber;
    limit: import("@sinclair/typebox").TNumber;
}>;
export declare const BrandDetailResponseSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    logoUrl: import("@sinclair/typebox").TString;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const OrderItemSchema: import("@sinclair/typebox").TObject<{
    productId: import("@sinclair/typebox").TString;
    quantity: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TNumber;
}>;
export declare const AddressSchema: import("@sinclair/typebox").TObject<{
    street: import("@sinclair/typebox").TString;
    city: import("@sinclair/typebox").TString;
    postalCode: import("@sinclair/typebox").TString;
    country: import("@sinclair/typebox").TString;
}>;
export declare const OrderSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    customerId: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
    totalAmount: import("@sinclair/typebox").TNumber;
    items: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        productId: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    shippingAddress: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        postalCode: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
    }>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const OrderListResponseSchema: import("@sinclair/typebox").TObject<{
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        customerId: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TString;
        totalAmount: import("@sinclair/typebox").TNumber;
        items: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            productId: import("@sinclair/typebox").TString;
            quantity: import("@sinclair/typebox").TNumber;
            price: import("@sinclair/typebox").TNumber;
        }>>;
        shippingAddress: import("@sinclair/typebox").TObject<{
            street: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
            postalCode: import("@sinclair/typebox").TString;
            country: import("@sinclair/typebox").TString;
        }>;
        createdAt: import("@sinclair/typebox").TString;
        updatedAt: import("@sinclair/typebox").TString;
    }>>;
    total: import("@sinclair/typebox").TNumber;
    page: import("@sinclair/typebox").TNumber;
    limit: import("@sinclair/typebox").TNumber;
}>;
export declare const OrderDetailResponseSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    customerId: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
    totalAmount: import("@sinclair/typebox").TNumber;
    items: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        productId: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TNumber;
        price: import("@sinclair/typebox").TNumber;
    }>>;
    shippingAddress: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        postalCode: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
    }>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const CustomerSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    firstName: import("@sinclair/typebox").TString;
    lastName: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    phone: import("@sinclair/typebox").TString;
    address: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        postalCode: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
    }>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const CustomerListResponseSchema: import("@sinclair/typebox").TObject<{
    customers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        firstName: import("@sinclair/typebox").TString;
        lastName: import("@sinclair/typebox").TString;
        email: import("@sinclair/typebox").TString;
        phone: import("@sinclair/typebox").TString;
        address: import("@sinclair/typebox").TObject<{
            street: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
            postalCode: import("@sinclair/typebox").TString;
            country: import("@sinclair/typebox").TString;
        }>;
        createdAt: import("@sinclair/typebox").TString;
        updatedAt: import("@sinclair/typebox").TString;
    }>>;
    total: import("@sinclair/typebox").TNumber;
    page: import("@sinclair/typebox").TNumber;
    limit: import("@sinclair/typebox").TNumber;
}>;
export declare const CustomerDetailResponseSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString;
    firstName: import("@sinclair/typebox").TString;
    lastName: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    phone: import("@sinclair/typebox").TString;
    address: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
        postalCode: import("@sinclair/typebox").TString;
        country: import("@sinclair/typebox").TString;
    }>;
    createdAt: import("@sinclair/typebox").TString;
    updatedAt: import("@sinclair/typebox").TString;
}>;
export declare const PaginationQuerySchema: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const SearchQuerySchema: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ProductFilterQuerySchema: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    q: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    category: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    brand: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    minPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    maxPrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    inStock: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export declare const OrderFilterQuerySchema: import("@sinclair/typebox").TObject<{
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    customerId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    fromDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    toDate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CreateOrderProductSchema: import("@sinclair/typebox").TObject<{
    products_id: import("@sinclair/typebox").TInteger;
    quantity: import("@sinclair/typebox").TInteger;
}>;
export declare const CreateOrderRequestSchema: import("@sinclair/typebox").TObject<{
    customer_name: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    street_address: import("@sinclair/typebox").TString;
    city: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    company: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    telephone: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    country: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TInteger;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>;
export declare const CreateOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    orders_id: import("@sinclair/typebox").TInteger;
    total: import("@sinclair/typebox").TNumber;
    shipping_cost: import("@sinclair/typebox").TNumber;
    payment_request_created: import("@sinclair/typebox").TBoolean;
}>;
export declare const CreateOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ProductDetailsSchema: import("@sinclair/typebox").TObject<{
    products_id: import("@sinclair/typebox").TInteger;
    products_name: import("@sinclair/typebox").TString;
    products_description: import("@sinclair/typebox").TString;
    products_inhoud: import("@sinclair/typebox").TString;
    products_url: import("@sinclair/typebox").TString;
    artnr_up: import("@sinclair/typebox").TString;
    ean_code: import("@sinclair/typebox").TString;
    stock: import("@sinclair/typebox").TInteger;
    tht: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products_price: import("@sinclair/typebox").TNumber;
    date_available_again: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    is_hygiene_product: import("@sinclair/typebox").TBoolean;
    can_be_returned: import("@sinclair/typebox").TBoolean;
}>;
export declare const ProductDetailResponseSchema: import("@sinclair/typebox").TObject<{
    product: import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TInteger;
        products_name: import("@sinclair/typebox").TString;
        products_description: import("@sinclair/typebox").TString;
        products_inhoud: import("@sinclair/typebox").TString;
        products_url: import("@sinclair/typebox").TString;
        artnr_up: import("@sinclair/typebox").TString;
        ean_code: import("@sinclair/typebox").TString;
        stock: import("@sinclair/typebox").TInteger;
        tht: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        products_price: import("@sinclair/typebox").TNumber;
        date_available_again: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        is_hygiene_product: import("@sinclair/typebox").TBoolean;
        can_be_returned: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const SearchProductResponseSchema: import("@sinclair/typebox").TObject<{
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TInteger;
        products_name: import("@sinclair/typebox").TString;
        products_description: import("@sinclair/typebox").TString;
        products_inhoud: import("@sinclair/typebox").TString;
        products_url: import("@sinclair/typebox").TString;
        artnr_up: import("@sinclair/typebox").TString;
        ean_code: import("@sinclair/typebox").TString;
        stock: import("@sinclair/typebox").TInteger;
        tht: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        products_price: import("@sinclair/typebox").TNumber;
        date_available_again: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        is_hygiene_product: import("@sinclair/typebox").TBoolean;
        can_be_returned: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export declare const SearchProductErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const NotifyStockRequestSchema: import("@sinclair/typebox").TObject<{
    products_id: import("@sinclair/typebox").TInteger;
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const NotifyStockResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const NotifyStockErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ReturnLabelByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    return_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    return_details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ReturnLabelByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    return_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    return_details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ReturnLabelRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    return_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    return_details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    return_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    return_details: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const ReturnLabelDetailsSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    days_since_shipping: import("@sinclair/typebox").TInteger;
}>;
export declare const ReturnLabelResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    details: import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        days_since_shipping: import("@sinclair/typebox").TInteger;
    }>;
}>;
export declare const ReturnLabelErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailToDifferentEmailRequestSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email_address: import("@sinclair/typebox").TString;
    new_email_address: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailToDifferentEmailResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ResendShippingMailToDifferentEmailErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationToDifferentEmailRequestSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email_address: import("@sinclair/typebox").TString;
    new_email_address: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationToDifferentEmailResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ResendOrderConfirmationToDifferentEmailErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendCompleteOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ResendCompleteOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ResendCompleteOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const ResendCompleteOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    resend_order_id: import("@sinclair/typebox").TInteger;
    products_count: import("@sinclair/typebox").TInteger;
}>;
export declare const ResendCompleteOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ContactProductManagementRequestSchema: import("@sinclair/typebox").TObject<{
    request: import("@sinclair/typebox").TString;
}>;
export declare const ContactProductManagementResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ContactProductManagementErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ResendPartOfOrderProductSchema: import("@sinclair/typebox").TObject<{
    products_id: import("@sinclair/typebox").TString;
    quantity: import("@sinclair/typebox").TInteger;
}>;
export declare const ResendPartOfOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    resend_description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>;
export declare const ResendPartOfOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    resend_description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>;
export declare const ResendPartOfOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    resend_description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    resend_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    resend_description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>]>;
export declare const ResendPartOfOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    resend_order_id: import("@sinclair/typebox").TInteger;
    products_count: import("@sinclair/typebox").TInteger;
}>;
export declare const ResendPartOfOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const CancelOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    cancel_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CancelOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    cancel_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const CancelOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    cancel_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    cancel_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const CancelOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
}>;
export declare const CancelOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const RefundOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    refund_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const RefundOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    refund_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const RefundOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    refund_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    refund_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const RefundOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    refund_order_id: import("@sinclair/typebox").TInteger;
}>;
export declare const RefundOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ContactSupplierRequestSchema: import("@sinclair/typebox").TObject<{
    request: import("@sinclair/typebox").TString;
}>;
export declare const ContactSupplierResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ContactSupplierErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const ContactPostNLRequestSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    request: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const ContactPostNLResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const ContactPostNLErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const RefundPartOfOrderProductSchema: import("@sinclair/typebox").TObject<{
    products_id: import("@sinclair/typebox").TString;
    quantity: import("@sinclair/typebox").TInteger;
}>;
export declare const RefundPartOfOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>;
export declare const RefundPartOfOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>;
export declare const RefundPartOfOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        products_id: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
    }>>;
}>]>;
export declare const RefundPartOfOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
    refund_order_id: import("@sinclair/typebox").TInteger;
    refund_amount: import("@sinclair/typebox").TNumber;
    status: import("@sinclair/typebox").TInteger;
}>;
export declare const RefundPartOfOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const PauseOrderByEmailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    pause_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const PauseOrderByAddressSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    pause_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const PauseOrderRequestSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    email_address: import("@sinclair/typebox").TString;
    pause_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
    pause_reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
export declare const PauseOrderResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const PauseOrderErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const OrderEmailNoticeSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<"email_mismatch">;
    orders_id: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TString;
    details: import("@sinclair/typebox").TObject<{
        provided: import("@sinclair/typebox").TString;
        actual: import("@sinclair/typebox").TString;
        similarity: import("@sinclair/typebox").TNumber;
    }>;
}>;
export declare const OrderTrackTraceTimeframeSchema: import("@sinclair/typebox").TObject<{
    from: import("@sinclair/typebox").TString;
    to: import("@sinclair/typebox").TString;
}>;
export declare const OrderTrackTraceStatusSchema: import("@sinclair/typebox").TObject<{
    timestamp: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
}>;
export declare const OrderShipmentSchema: import("@sinclair/typebox").TObject<{
    tracktrace: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
    track_trace_link: import("@sinclair/typebox").TString;
    returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        from: import("@sinclair/typebox").TString;
        to: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TNull]>;
    status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        timestamp: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const OrderAddressSchema: import("@sinclair/typebox").TObject<{
    street: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    city: import("@sinclair/typebox").TString;
}>;
export declare const OrderProductSchema: import("@sinclair/typebox").TObject<{
    product_id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    artnr_up: import("@sinclair/typebox").TString;
    eancode: import("@sinclair/typebox").TString;
    quantity: import("@sinclair/typebox").TInteger;
    quantity_delivered: import("@sinclair/typebox").TInteger;
    products_price: import("@sinclair/typebox").TNumber;
}>;
export declare const OrderConnectedOrderSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TString;
    created: import("@sinclair/typebox").TString;
    orders_status: import("@sinclair/typebox").TString;
    created_by: import("@sinclair/typebox").TString;
    total: import("@sinclair/typebox").TNumber;
    refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
}>;
export declare const OrderEmailSchema: import("@sinclair/typebox").TObject<{
    recipient_name: import("@sinclair/typebox").TString;
    recipient_email: import("@sinclair/typebox").TString;
    subject: import("@sinclair/typebox").TString;
    date: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
}>;
export declare const OrderContactHistorySchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
    date: import("@sinclair/typebox").TString;
    timestamp: import("@sinclair/typebox").TInteger;
    user: import("@sinclair/typebox").TString;
    summary: import("@sinclair/typebox").TString;
}>;
export declare const OrderDetailSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    orders_status: import("@sinclair/typebox").TString;
    address_can_be_changed: import("@sinclair/typebox").TString;
    can_cancel: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"maybe">]>;
    shipments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        tracktrace: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TString;
        track_trace_link: import("@sinclair/typebox").TString;
        returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            from: import("@sinclair/typebox").TString;
            to: import("@sinclair/typebox").TString;
        }>, import("@sinclair/typebox").TNull]>;
        status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            timestamp: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    date_purchased: import("@sinclair/typebox").TString;
    payment_method: import("@sinclair/typebox").TString;
    total: import("@sinclair/typebox").TNumber;
    delivery_address: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        postcode: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
    }>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        product_id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        artnr_up: import("@sinclair/typebox").TString;
        eancode: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
        quantity_delivered: import("@sinclair/typebox").TInteger;
        products_price: import("@sinclair/typebox").TNumber;
    }>>;
    connected_orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TString;
        created: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
        created_by: import("@sinclair/typebox").TString;
        total: import("@sinclair/typebox").TNumber;
        refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    }>>;
    emails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        recipient_name: import("@sinclair/typebox").TString;
        recipient_email: import("@sinclair/typebox").TString;
        subject: import("@sinclair/typebox").TString;
        date: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TString;
    }>>;
    contact_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
        date: import("@sinclair/typebox").TString;
        timestamp: import("@sinclair/typebox").TInteger;
        user: import("@sinclair/typebox").TString;
        summary: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const GetOrderDetailsByOrderIdAndEmailResponseSchema: import("@sinclair/typebox").TObject<{
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
        address_can_be_changed: import("@sinclair/typebox").TString;
        can_cancel: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"maybe">]>;
        shipments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            tracktrace: import("@sinclair/typebox").TString;
            status: import("@sinclair/typebox").TString;
            track_trace_link: import("@sinclair/typebox").TString;
            returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                from: import("@sinclair/typebox").TString;
                to: import("@sinclair/typebox").TString;
            }>, import("@sinclair/typebox").TNull]>;
            status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                timestamp: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TString;
            }>>;
        }>>;
        date_purchased: import("@sinclair/typebox").TString;
        payment_method: import("@sinclair/typebox").TString;
        total: import("@sinclair/typebox").TNumber;
        delivery_address: import("@sinclair/typebox").TObject<{
            street: import("@sinclair/typebox").TString;
            postcode: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
        }>;
        products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            product_id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            artnr_up: import("@sinclair/typebox").TString;
            eancode: import("@sinclair/typebox").TString;
            quantity: import("@sinclair/typebox").TInteger;
            quantity_delivered: import("@sinclair/typebox").TInteger;
            products_price: import("@sinclair/typebox").TNumber;
        }>>;
        connected_orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            orders_id: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TString;
            created: import("@sinclair/typebox").TString;
            orders_status: import("@sinclair/typebox").TString;
            created_by: import("@sinclair/typebox").TString;
            total: import("@sinclair/typebox").TNumber;
            refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        }>>;
        emails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            recipient_name: import("@sinclair/typebox").TString;
            recipient_email: import("@sinclair/typebox").TString;
            subject: import("@sinclair/typebox").TString;
            date: import("@sinclair/typebox").TString;
            status: import("@sinclair/typebox").TString;
        }>>;
        contact_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
            date: import("@sinclair/typebox").TString;
            timestamp: import("@sinclair/typebox").TInteger;
            user: import("@sinclair/typebox").TString;
            summary: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    notices: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<"email_mismatch">;
        orders_id: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TString;
        details: import("@sinclair/typebox").TObject<{
            provided: import("@sinclair/typebox").TString;
            actual: import("@sinclair/typebox").TString;
            similarity: import("@sinclair/typebox").TNumber;
        }>;
    }>>>;
}>;
export declare const GetOrderDetailsByOrderIdAndEmailErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const GetOrderDetailsByOrderIdAndPostcodeRequestSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    postcode: import("@sinclair/typebox").TString;
    housenumber: import("@sinclair/typebox").TString;
}>;
export declare const GetOrderDetailsByOrderIdAndPostcodeResponseSchema: import("@sinclair/typebox").TObject<{
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
        address_can_be_changed: import("@sinclair/typebox").TString;
        can_cancel: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"maybe">]>;
        shipments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            tracktrace: import("@sinclair/typebox").TString;
            status: import("@sinclair/typebox").TString;
            track_trace_link: import("@sinclair/typebox").TString;
            returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                from: import("@sinclair/typebox").TString;
                to: import("@sinclair/typebox").TString;
            }>, import("@sinclair/typebox").TNull]>;
            status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                timestamp: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TString;
            }>>;
        }>>;
        date_purchased: import("@sinclair/typebox").TString;
        payment_method: import("@sinclair/typebox").TString;
        total: import("@sinclair/typebox").TNumber;
        delivery_address: import("@sinclair/typebox").TObject<{
            street: import("@sinclair/typebox").TString;
            postcode: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
        }>;
        products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            product_id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            artnr_up: import("@sinclair/typebox").TString;
            eancode: import("@sinclair/typebox").TString;
            quantity: import("@sinclair/typebox").TInteger;
            quantity_delivered: import("@sinclair/typebox").TInteger;
            products_price: import("@sinclair/typebox").TNumber;
        }>>;
        connected_orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            orders_id: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TString;
            created: import("@sinclair/typebox").TString;
            orders_status: import("@sinclair/typebox").TString;
            created_by: import("@sinclair/typebox").TString;
            total: import("@sinclair/typebox").TNumber;
            refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        }>>;
        emails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            recipient_name: import("@sinclair/typebox").TString;
            recipient_email: import("@sinclair/typebox").TString;
            subject: import("@sinclair/typebox").TString;
            date: import("@sinclair/typebox").TString;
            status: import("@sinclair/typebox").TString;
        }>>;
        contact_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
            date: import("@sinclair/typebox").TString;
            timestamp: import("@sinclair/typebox").TInteger;
            user: import("@sinclair/typebox").TString;
            summary: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    notices: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<"email_mismatch">;
        orders_id: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TString;
        details: import("@sinclair/typebox").TObject<{
            provided: import("@sinclair/typebox").TString;
            actual: import("@sinclair/typebox").TString;
            similarity: import("@sinclair/typebox").TNumber;
        }>;
    }>>>;
}>;
export declare const GetOrderDetailsByOrderIdAndPostcodeErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const GetOrdersForEmailAddressRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const GetOrdersForEmailAddressResponseSchema: import("@sinclair/typebox").TObject<{
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        date_purchased: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const GetOrdersForEmailAddressErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeNewsletterRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeNewsletterResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeNewsletterErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeProductReviewsRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeProductReviewsResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const UnsubscribeProductReviewsErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const CheckAccountRequestSchema: import("@sinclair/typebox").TObject<{
    email_address: import("@sinclair/typebox").TString;
}>;
export declare const CheckAccountResponseSchema: import("@sinclair/typebox").TObject<{
    success: import("@sinclair/typebox").TString;
}>;
export declare const CheckAccountErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
export declare const GetMyOrdersShipmentSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TString;
    returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        from: import("@sinclair/typebox").TString;
        to: import("@sinclair/typebox").TString;
    }>, import("@sinclair/typebox").TNull]>;
    track_trace_link: import("@sinclair/typebox").TString;
    status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        timestamp: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const GetMyOrdersSchema: import("@sinclair/typebox").TObject<{
    orders_id: import("@sinclair/typebox").TString;
    orders_status: import("@sinclair/typebox").TString;
    address_can_be_changed: import("@sinclair/typebox").TBoolean;
    can_cancel: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"maybe">]>;
    shipments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TString;
        returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            from: import("@sinclair/typebox").TString;
            to: import("@sinclair/typebox").TString;
        }>, import("@sinclair/typebox").TNull]>;
        track_trace_link: import("@sinclair/typebox").TString;
        status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            timestamp: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    date_purchased: import("@sinclair/typebox").TString;
    payment_method: import("@sinclair/typebox").TString;
    total: import("@sinclair/typebox").TNumber;
    delivery_address: import("@sinclair/typebox").TObject<{
        street: import("@sinclair/typebox").TString;
        postcode: import("@sinclair/typebox").TString;
        city: import("@sinclair/typebox").TString;
    }>;
    products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        product_id: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        artnr_up: import("@sinclair/typebox").TString;
        eancode: import("@sinclair/typebox").TString;
        quantity: import("@sinclair/typebox").TInteger;
        quantity_delivered: import("@sinclair/typebox").TInteger;
        products_price: import("@sinclair/typebox").TNumber;
    }>>;
    connected_orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TString;
        created: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
        created_by: import("@sinclair/typebox").TString;
        total: import("@sinclair/typebox").TNumber;
        refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    }>>;
    emails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        recipient_name: import("@sinclair/typebox").TString;
        recipient_email: import("@sinclair/typebox").TString;
        subject: import("@sinclair/typebox").TString;
        date: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TString;
    }>>;
    contact_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
        date: import("@sinclair/typebox").TString;
        timestamp: import("@sinclair/typebox").TInteger;
        user: import("@sinclair/typebox").TString;
        summary: import("@sinclair/typebox").TString;
    }>>;
}>;
export declare const GetMyOrdersResponseSchema: import("@sinclair/typebox").TObject<{
    orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        orders_id: import("@sinclair/typebox").TString;
        orders_status: import("@sinclair/typebox").TString;
        address_can_be_changed: import("@sinclair/typebox").TBoolean;
        can_cancel: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"yes">, import("@sinclair/typebox").TLiteral<"no">, import("@sinclair/typebox").TLiteral<"maybe">]>;
        shipments: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            status: import("@sinclair/typebox").TString;
            returned: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            delivery_timeframe: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
                from: import("@sinclair/typebox").TString;
                to: import("@sinclair/typebox").TString;
            }>, import("@sinclair/typebox").TNull]>;
            track_trace_link: import("@sinclair/typebox").TString;
            status_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                timestamp: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TString;
            }>>;
        }>>;
        date_purchased: import("@sinclair/typebox").TString;
        payment_method: import("@sinclair/typebox").TString;
        total: import("@sinclair/typebox").TNumber;
        delivery_address: import("@sinclair/typebox").TObject<{
            street: import("@sinclair/typebox").TString;
            postcode: import("@sinclair/typebox").TString;
            city: import("@sinclair/typebox").TString;
        }>;
        products: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            product_id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            artnr_up: import("@sinclair/typebox").TString;
            eancode: import("@sinclair/typebox").TString;
            quantity: import("@sinclair/typebox").TInteger;
            quantity_delivered: import("@sinclair/typebox").TInteger;
            products_price: import("@sinclair/typebox").TNumber;
        }>>;
        connected_orders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            orders_id: import("@sinclair/typebox").TString;
            type: import("@sinclair/typebox").TString;
            created: import("@sinclair/typebox").TString;
            orders_status: import("@sinclair/typebox").TString;
            created_by: import("@sinclair/typebox").TString;
            total: import("@sinclair/typebox").TNumber;
            refund_details: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            refund_processed_date: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
        }>>;
        emails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            recipient_name: import("@sinclair/typebox").TString;
            recipient_email: import("@sinclair/typebox").TString;
            subject: import("@sinclair/typebox").TString;
            date: import("@sinclair/typebox").TString;
            status: import("@sinclair/typebox").TString;
        }>>;
        contact_history: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"call">, import("@sinclair/typebox").TLiteral<"chat">, import("@sinclair/typebox").TLiteral<"email">]>;
            date: import("@sinclair/typebox").TString;
            timestamp: import("@sinclair/typebox").TInteger;
            user: import("@sinclair/typebox").TString;
            summary: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    context: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"whatsapp">, import("@sinclair/typebox").TLiteral<"chat_authenticated">, import("@sinclair/typebox").TLiteral<"email">]>;
}>;
export declare const GetMyOrdersErrorResponseSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TString;
}>;
