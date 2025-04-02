import { Type } from '@sinclair/typebox';

// Product-related schemas
export const ProductSchema = Type.Object({
  id: Type.String({ description: 'Unique identifier for the product' }),
  name: Type.String({ description: 'Name of the product' }),
  description: Type.String({
    description: 'Detailed description of the product',
  }),
  price: Type.Number({ description: 'Current price of the product in EUR' }),
  stock: Type.Number({ description: 'Current stock level of the product' }),
  category: Type.String({ description: 'Category the product belongs to' }),
  brand: Type.String({ description: 'Brand of the product' }),
  imageUrl: Type.String({ description: 'URL to the product image' }),
  createdAt: Type.String({
    description: 'Creation date of the product record',
  }),
  updatedAt: Type.String({
    description: 'Last update date of the product record',
  }),
});

export const ProductListResponseSchema = Type.Object({
  products: Type.Array(ProductSchema, { description: 'List of products' }),
  total: Type.Number({ description: 'Total number of products available' }),
  page: Type.Number({ description: 'Current page number' }),
  limit: Type.Number({ description: 'Number of items per page' }),
});

// Category-related schemas
export const CategorySchema = Type.Object({
  id: Type.String({ description: 'Unique identifier for the category' }),
  name: Type.String({ description: 'Name of the category' }),
  description: Type.String({
    description: 'Detailed description of the category',
  }),
  parentId: Type.Optional(
    Type.String({ description: 'Parent category ID if this is a subcategory' }),
  ),
  createdAt: Type.String({
    description: 'Creation date of the category record',
  }),
  updatedAt: Type.String({
    description: 'Last update date of the category record',
  }),
});

export const CategoryListResponseSchema = Type.Object({
  categories: Type.Array(CategorySchema, { description: 'List of categories' }),
  total: Type.Number({ description: 'Total number of categories available' }),
  page: Type.Number({ description: 'Current page number' }),
  limit: Type.Number({ description: 'Number of items per page' }),
});

export const CategoryDetailResponseSchema = CategorySchema;

// Brand-related schemas
export const BrandSchema = Type.Object({
  id: Type.String({ description: 'Unique identifier for the brand' }),
  name: Type.String({ description: 'Name of the brand' }),
  description: Type.String({
    description: 'Detailed description of the brand',
  }),
  logoUrl: Type.String({ description: 'URL to the brand logo' }),
  createdAt: Type.String({ description: 'Creation date of the brand record' }),
  updatedAt: Type.String({
    description: 'Last update date of the brand record',
  }),
});

export const BrandListResponseSchema = Type.Object({
  brands: Type.Array(BrandSchema, { description: 'List of brands' }),
  total: Type.Number({ description: 'Total number of brands available' }),
  page: Type.Number({ description: 'Current page number' }),
  limit: Type.Number({ description: 'Number of items per page' }),
});

export const BrandDetailResponseSchema = BrandSchema;

// Order-related schemas
export const OrderItemSchema = Type.Object({
  productId: Type.String({ description: 'ID of the ordered product' }),
  quantity: Type.Number({ description: 'Quantity of items ordered' }),
  price: Type.Number({ description: 'Price per item at the time of order' }),
});

export const AddressSchema = Type.Object({
  street: Type.String({ description: 'Street address including house number' }),
  city: Type.String({ description: 'City name' }),
  postalCode: Type.String({ description: 'Postal code' }),
  country: Type.String({ description: 'Country name' }),
});

export const OrderSchema = Type.Object({
  id: Type.String({ description: 'Unique identifier for the order' }),
  customerId: Type.String({
    description: 'ID of the customer who placed the order',
  }),
  status: Type.String({
    description:
      'Current status of the order (pending, processing, shipped, delivered, canceled)',
  }),
  totalAmount: Type.Number({ description: 'Total amount of the order in EUR' }),
  items: Type.Array(OrderItemSchema, { description: 'List of ordered items' }),
  shippingAddress: AddressSchema,
  createdAt: Type.String({ description: 'Creation date of the order' }),
  updatedAt: Type.String({ description: 'Last update date of the order' }),
});

export const OrderListResponseSchema = Type.Object({
  orders: Type.Array(OrderSchema, { description: 'List of orders' }),
  total: Type.Number({ description: 'Total number of orders available' }),
  page: Type.Number({ description: 'Current page number' }),
  limit: Type.Number({ description: 'Number of items per page' }),
});

export const OrderDetailResponseSchema = OrderSchema;

// Customer-related schemas
export const CustomerSchema = Type.Object({
  id: Type.String({ description: 'Unique identifier for the customer' }),
  firstName: Type.String({ description: 'First name of the customer' }),
  lastName: Type.String({ description: 'Last name of the customer' }),
  email: Type.String({ description: 'Email address of the customer' }),
  phone: Type.String({ description: 'Phone number of the customer' }),
  address: AddressSchema,
  createdAt: Type.String({
    description: 'Creation date of the customer record',
  }),
  updatedAt: Type.String({
    description: 'Last update date of the customer record',
  }),
});

export const CustomerListResponseSchema = Type.Object({
  customers: Type.Array(CustomerSchema, { description: 'List of customers' }),
  total: Type.Number({ description: 'Total number of customers available' }),
  page: Type.Number({ description: 'Current page number' }),
  limit: Type.Number({ description: 'Number of items per page' }),
});

export const CustomerDetailResponseSchema = CustomerSchema;

// Pagination query parameters schema
export const PaginationQuerySchema = Type.Object({
  page: Type.Optional(
    Type.Number({
      description: 'Page number to retrieve',
      default: 1,
      minimum: 1,
    }),
  ),
  limit: Type.Optional(
    Type.Number({
      description: 'Number of items per page',
      default: 10,
      minimum: 1,
      maximum: 100,
    }),
  ),
});

// Search query parameters schema
export const SearchQuerySchema = Type.Object({
  q: Type.Optional(Type.String({ description: 'Search query string' })),
  ...PaginationQuerySchema.properties,
});

// Filter query parameters schemas
export const ProductFilterQuerySchema = Type.Object({
  category: Type.Optional(
    Type.String({ description: 'Filter products by category' }),
  ),
  brand: Type.Optional(
    Type.String({ description: 'Filter products by brand' }),
  ),
  minPrice: Type.Optional(Type.Number({ description: 'Minimum price filter' })),
  maxPrice: Type.Optional(Type.Number({ description: 'Maximum price filter' })),
  inStock: Type.Optional(
    Type.Boolean({ description: 'Filter by stock availability' }),
  ),
  ...SearchQuerySchema.properties,
});

export const OrderFilterQuerySchema = Type.Object({
  status: Type.Optional(
    Type.String({ description: 'Filter orders by status' }),
  ),
  customerId: Type.Optional(
    Type.String({ description: 'Filter orders by customer ID' }),
  ),
  fromDate: Type.Optional(
    Type.String({ description: 'Filter orders created after this date' }),
  ),
  toDate: Type.Optional(
    Type.String({ description: 'Filter orders created before this date' }),
  ),
  ...PaginationQuerySchema.properties,
});

// Order creation schemas
export const CreateOrderProductSchema = Type.Object({
  products_id: Type.Integer({
    description: 'Product ID (can be found using search_product endpoint)',
    minimum: 1,
  }),
  quantity: Type.Integer({
    description: 'Quantity to order',
    minimum: 1,
  }),
});

export const CreateOrderRequestSchema = Type.Object({
  customer_name: Type.String({
    description: 'Full name of the customer',
  }),
  email_address: Type.String({
    description: "Customer's email address",
    format: 'email',
  }),
  street_address: Type.String({
    description: 'Full street address including house number and any additions',
    examples: ['Example Street 123A'],
  }),
  city: Type.String({
    description: 'City name',
  }),
  postcode: Type.String({
    description: 'Postal code (spaces will be removed)',
    examples: ['1234 AB'],
  }),
  company: Type.Optional(
    Type.String({
      description: 'Optional company name',
    }),
  ),
  telephone: Type.Optional(
    Type.String({
      description: 'Optional telephone number',
    }),
  ),
  country: Type.Optional(
    Type.String({
      description:
        "Country name (must exist in our database), defaults to 'Netherlands' if not provided",
      default: 'Netherlands',
      examples: ['Netherlands'],
    }),
  ),
  products: Type.Array(CreateOrderProductSchema, {
    description: 'List of products to order',
    minItems: 1,
  }),
});

export const CreateOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Order created successfully'],
  }),
  orders_id: Type.Integer({
    description: 'ID of the created order',
  }),
  total: Type.Number({
    description: 'Total order amount including shipping',
    format: 'float',
  }),
  shipping_cost: Type.Number({
    description: 'Applied shipping cost based on country and order total',
    format: 'float',
  }),
  payment_request_created: Type.Boolean({
    description: 'Indicates if the payment request was successfully created',
  }),
});

export const CreateOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Missing required field: customer_name'],
  }),
});

// Product details schema
export const ProductDetailsSchema = Type.Object({
  products_id: Type.Integer({
    description: 'Unique product identifier',
  }),
  products_name: Type.String({
    description: 'Name of the product',
  }),
  products_description: Type.String({
    description: 'Detailed product description',
  }),
  products_inhoud: Type.String({
    description: "Content/amount of the product (e.g. '100ml')",
  }),
  products_url: Type.String({
    description: 'URL of the product page',
  }),
  artnr_up: Type.String({
    description: 'Unipharma article number',
  }),
  ean_code: Type.String({
    description: 'European Article Number (EAN/barcode)',
  }),
  stock: Type.Integer({
    description: 'Current stock level of the product',
  }),
  tht: Type.Optional(
    Type.String({
      description: 'Best before date (if applicable)',
      format: 'date',
    }),
  ),
  products_price: Type.Number({
    description: 'Current selling price including VAT',
    format: 'float',
  }),
  date_available_again: Type.Optional(
    Type.String({
      description:
        'Expected date or text indicating when the product will be back in stock (only if stock is 0)',
    }),
  ),
  is_hygiene_product: Type.Boolean({
    description: 'Indicates if this is a hygiene product',
  }),
  can_be_returned: Type.Boolean({
    description:
      'Indicates if the product can be returned. Hygiene products cannot be returned.',
  }),
});

export const ProductDetailResponseSchema = Type.Object({
  product: ProductDetailsSchema,
});

export const SearchProductResponseSchema = Type.Object({
  products: Type.Array(ProductDetailsSchema, {
    description: 'List of products matching the search query',
  }),
});

export const SearchProductErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Invalid search query'],
  }),
});

// Stock notification schemas
export const NotifyStockRequestSchema = Type.Object({
  products_id: Type.Integer({
    description:
      'The product ID to notify the user about. Call the search_product endpoint to get it.',
  }),
  email_address: Type.String({
    description: 'Email address where the notification should be sent',
    format: 'email',
  }),
});

export const NotifyStockResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Notification registration successful'],
  }),
});

export const NotifyStockErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Product not found or invalid email address'],
  }),
});

// Return label request schemas
export const ReturnLabelByEmailSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a return label is requested',
  }),
  email_address: Type.String({
    description: 'Email address of the customer',
    format: 'email',
  }),
  return_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for the return',
      examples: ['Wrong size'],
    }),
  ),
  return_details: Type.Optional(
    Type.String({
      description: 'Optional additional details about the return',
      examples: ['Received size L but ordered size M'],
    }),
  ),
});

export const ReturnLabelByAddressSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a return label is requested',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address',
  }),
  return_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for the return',
      examples: ['Wrong size'],
    }),
  ),
  return_details: Type.Optional(
    Type.String({
      description: 'Optional additional details about the return',
      examples: ['Received size L but ordered size M'],
    }),
  ),
});

export const ReturnLabelRequestSchema = Type.Union([
  ReturnLabelByEmailSchema,
  ReturnLabelByAddressSchema,
]);

export const ReturnLabelDetailsSchema = Type.Object({
  orders_id: Type.String({
    description: 'Order ID for which the return label has been sent',
  }),
  days_since_shipping: Type.Integer({
    description: 'Number of days since the order was shipped',
  }),
});

export const ReturnLabelResponseSchema = Type.Object({
  success: Type.String({
    description:
      'Success message indicating that the return label has been sent',
  }),
  details: ReturnLabelDetailsSchema,
});

export const ReturnLabelErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Returns are only possible within 30 days after shipping'],
  }),
});

// Resend shipping mail schemas
export const ResendShippingMailRequestSchema = Type.Object({
  email_address: Type.String({
    description:
      'Email address of the customer where the shipping confirmation should be resent',
    format: 'email',
  }),
});

export const ResendShippingMailResponseSchema = Type.Object({
  success: Type.String({
    description:
      'Success message indicating that the shipping confirmation has been resent',
    examples: ['Shipping confirmation email resent successfully'],
  }),
});

export const ResendShippingMailErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No shipping confirmations found for this email address'],
  }),
});

// Resend shipping mail to different email schemas
export const ResendShippingMailToDifferentEmailRequestSchema = Type.Object({
  orders_id: Type.Optional(
    Type.String({
      description:
        'Optional unique identifier for the order. If not provided, the most recent shipping confirmation for the email address will be used',
    }),
  ),
  email_address: Type.String({
    description:
      'Original email address where the shipping confirmation was sent',
    format: 'email',
  }),
  new_email_address: Type.String({
    description:
      'New email address where the shipping confirmation should be sent. If no orders_id is provided, this email must be similar to the original one',
    format: 'email',
  }),
});

export const ResendShippingMailToDifferentEmailResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message when the email has been resent',
    examples: ['Shipping mail resent to new email address'],
  }),
});

export const ResendShippingMailToDifferentEmailErrorResponseSchema =
  Type.Object({
    error: Type.String({
      description: 'Error message',
      examples: [
        'The new email address is too different from the original email address. For security reasons, we can only send to similar email addresses (e.g. fixing typos like hotmal.com to hotmail.com)',
      ],
    }),
  });

// Resend order confirmation schemas
export const ResendOrderConfirmationRequestSchema = Type.Object({
  email_address: Type.String({
    description:
      'Email address of the customer where the order confirmation should be resent',
    format: 'email',
  }),
});

export const ResendOrderConfirmationResponseSchema = Type.Object({
  success: Type.String({
    description:
      'Success message indicating that the order confirmation has been resent',
    examples: ['Order confirmation email resent successfully'],
  }),
});

export const ResendOrderConfirmationErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No order confirmations found for this email address'],
  }),
});

// Resend order confirmation to different email schemas
export const ResendOrderConfirmationToDifferentEmailRequestSchema = Type.Object(
  {
    orders_id: Type.Optional(
      Type.String({
        description:
          'Optional unique identifier for the order. If not provided, the most recent order confirmation for the email address will be used',
      }),
    ),
    email_address: Type.String({
      description:
        'Original email address where the order confirmation was sent',
      format: 'email',
    }),
    new_email_address: Type.String({
      description:
        'New email address where the order confirmation should be sent. If no orders_id is provided, this email must be similar to the original one',
      format: 'email',
    }),
  },
);

export const ResendOrderConfirmationToDifferentEmailResponseSchema =
  Type.Object({
    success: Type.String({
      description: 'Success message when the email has been resent',
      examples: ['Order confirmation mail resent to new email address'],
    }),
  });

export const ResendOrderConfirmationToDifferentEmailErrorResponseSchema =
  Type.Object({
    error: Type.String({
      description: 'Error message',
      examples: [
        'The new email address is too different from the original email address. For security reasons, we can only send to similar email addresses (e.g. fixing typos like hotmal.com to hotmail.com)',
      ],
    }),
  });

// Resend complete order route
export const ResendCompleteOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order that needs to be resent',
  }),
  email_address: Type.String({
    description: 'Email address of the customer',
    format: 'email',
  }),
  resend_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for resending the order',
    }),
  ),
});

export const ResendCompleteOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order that needs to be resent',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address',
  }),
  resend_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for resending the order',
    }),
  ),
});

export const ResendCompleteOrderRequestSchema = Type.Union([
  ResendCompleteOrderByEmailSchema,
  ResendCompleteOrderByAddressSchema,
]);

export const ResendCompleteOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Created complete resend for orders_id 123456'],
  }),
  resend_order_id: Type.Integer({
    description: 'ID of the newly created resend order',
  }),
  products_count: Type.Integer({
    description: 'Number of products in the resend',
  }),
});

export const ResendCompleteOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Order not found'],
  }),
});

// Contact product management route
export const ContactProductManagementRequestSchema = Type.Object({
  request: Type.String({
    description:
      'Detailed description of the issue with the product data. Please mention:\n- Product ID or EAN if applicable\n- Specific issue with the product data\n- Expected correct information if known\n- Any relevant background information',
  }),
});

export const ContactProductManagementResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: [
      'Request sent to the product management department. If a response is needed, we will respond within 3 business days',
    ],
  }),
});

export const ContactProductManagementErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No request defined'],
  }),
});

// Resend part of order schemas
export const ResendPartOfOrderProductSchema = Type.Object({
  products_id: Type.String({
    description:
      'Unique identifier for the product to be resent (must be from the original order)',
  }),
  quantity: Type.Integer({
    description:
      'Quantity to resend (cannot be higher than original order quantity)',
    minimum: 1,
  }),
});

export const ResendPartOfOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order',
  }),
  email_address: Type.String({
    description: 'Email address of the customer',
    format: 'email',
  }),
  resend_reason: Type.Optional(
    Type.String({
      description: 'Reason for the resend',
      enum: [
        'Delivery - Picking error (wrong item)',
        'Delivery - Missing item (too few)',
        'Delivery - Too many delivered',
        'Delivery - Sent unlabeled',
        'Delivery - Wrong address on label',
        'Delivery - Own order + order of another customer',
        'Item - Item defective (battery empty etc.)',
        'Item - Too short expiration date / Expired',
        'Item - No wrapping paper / poorly wrapped',
        'Item - Recall',
        'Damage - Incorrectly packed',
        'Damage - Item has leaked',
        'Damage - No/insufficient filling material',
        'Damage - Too small/large box used',
      ],
    }),
  ),
  resend_description: Type.Optional(
    Type.String({
      description: 'Optional additional details about the resend',
    }),
  ),
  products: Type.Array(ResendPartOfOrderProductSchema, {
    description: 'List of products to resend with their quantities',
    minItems: 1,
  }),
});

export const ResendPartOfOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address',
  }),
  resend_reason: Type.Optional(
    Type.String({
      description: 'Reason for the resend',
      enum: [
        'Delivery - Picking error (wrong item)',
        'Delivery - Missing item (too few)',
        'Delivery - Too many delivered',
        'Delivery - Sent unlabeled',
        'Delivery - Wrong address on label',
        'Delivery - Own order + order of another customer',
        'Item - Item defective (battery empty etc.)',
        'Item - Too short expiration date / Expired',
        'Item - No wrapping paper / poorly wrapped',
        'Item - Recall',
        'Damage - Incorrectly packed',
        'Damage - Item has leaked',
        'Damage - No/insufficient filling material',
        'Damage - Too small/large box used',
      ],
    }),
  ),
  resend_description: Type.Optional(
    Type.String({
      description: 'Optional additional details about the resend',
    }),
  ),
  products: Type.Array(ResendPartOfOrderProductSchema, {
    description: 'List of products to resend with their quantities',
    minItems: 1,
  }),
});

export const ResendPartOfOrderRequestSchema = Type.Union([
  ResendPartOfOrderByEmailSchema,
  ResendPartOfOrderByAddressSchema,
]);

export const ResendPartOfOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Created partial resend for orders_id 123456'],
  }),
  resend_order_id: Type.Integer({
    description: 'ID of the newly created resend order',
  }),
  products_count: Type.Integer({
    description: 'Number of products in the resend',
  }),
});

export const ResendPartOfOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Product 12345 was not part of the original order'],
  }),
});

// Cancel order schemas
export const CancelOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order to be canceled',
  }),
  email_address: Type.String({
    description: 'Email address of the customer',
    format: 'email',
  }),
  cancel_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for canceling the order',
    }),
  ),
});

export const CancelOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order to be canceled',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address',
  }),
  cancel_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for canceling the order',
    }),
  ),
});

export const CancelOrderRequestSchema = Type.Union([
  CancelOrderByEmailSchema,
  CancelOrderByAddressSchema,
]);

export const CancelOrderResponseSchema = Type.Object({
  success: Type.String({
    description:
      'Response message based on the order status and payment method',
    examples: ['We have canceled your order'],
  }),
  reason: Type.Optional(
    Type.Union([
      Type.String({
        description: 'The provided reason for cancellation, if applicable',
      }),
      Type.Null(),
    ]),
  ),
});

export const CancelOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['An error occurred while canceling your order'],
  }),
});

// Refund order schemas
export const RefundOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a refund is requested',
  }),
  email_address: Type.String({
    description: 'Email address of the customer',
    format: 'email',
  }),
  refund_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for the refund',
      examples: ['Customer is returning all items'],
    }),
  ),
});

export const RefundOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a refund is requested',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address',
  }),
  refund_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for the refund',
      examples: ['Customer is returning all items'],
    }),
  ),
});

export const RefundOrderRequestSchema = Type.Union([
  RefundOrderByEmailSchema,
  RefundOrderByAddressSchema,
]);

export const RefundOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Created full refund for order 16392857'],
  }),
  refund_order_id: Type.Integer({
    description: 'ID of the newly created refund order',
  }),
});

export const RefundOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Order not found'],
  }),
});

// Contact supplier schemas
export const ContactSupplierRequestSchema = Type.Object({
  request: Type.String({
    description:
      'Detailed description of the supplier-related issue or question. Please include:\n- Product details if applicable\n- Specific questions or concerns\n- Any relevant background information',
  }),
});

export const ContactSupplierResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: [
      'Request sent to the supplier department. We will respond to the customer within 3 business days',
    ],
  }),
});

export const ContactSupplierErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No request defined'],
  }),
});

// Contact PostNL schemas
export const ContactPostNLRequestSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order. This must match an existing order with a tracking number.',
  }),
  email_address: Type.String({
    description: 'Email address of the customer associated with the order.',
    format: 'email',
  }),
  request: Type.Optional(
    Type.String({
      description:
        'Optional additional information about what happened with the package.',
      examples: [
        'Package was marked as delivered on Monday but I have not received it',
      ],
    }),
  ),
});

export const ContactPostNLResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: [
      'Request sent to PostNL. We will contact the customer once we have received a response from PostNL',
    ],
  }),
});

export const ContactPostNLErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Order not found or no tracking information available'],
  }),
});

// Refund part of order schemas
export const RefundPartOfOrderProductSchema = Type.Object({
  products_id: Type.String({
    description:
      'Unique identifier for the product to be refunded (must be from the original order).',
  }),
  quantity: Type.Integer({
    description:
      'Quantity to refund (cannot be higher than original order quantity).',
    minimum: 1,
  }),
});

export const RefundPartOfOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a partial refund is requested.',
  }),
  email_address: Type.String({
    description: 'Email address of the customer.',
    format: 'email',
  }),
  products: Type.Array(RefundPartOfOrderProductSchema, {
    description: 'List of products to refund with their quantities.',
    minItems: 1,
  }),
});

export const RefundPartOfOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description:
      'Unique identifier for the order for which a partial refund is requested.',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address.',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address.',
  }),
  products: Type.Array(RefundPartOfOrderProductSchema, {
    description: 'List of products to refund with their quantities.',
    minItems: 1,
  }),
});

export const RefundPartOfOrderRequestSchema = Type.Union([
  RefundPartOfOrderByEmailSchema,
  RefundPartOfOrderByAddressSchema,
]);

export const RefundPartOfOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Partial refund created for order 123456'],
  }),
  refund_order_id: Type.Integer({
    description: 'ID of the newly created refund order',
  }),
  refund_amount: Type.Number({
    description: 'Total refunded amount',
    format: 'float',
  }),
  status: Type.Integer({
    description: 'Status code of the refund order',
  }),
});

export const RefundPartOfOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Product 12345 was not part of the original order'],
  }),
});

// Pause order schemas
export const PauseOrderByEmailSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order to be paused.',
  }),
  email_address: Type.String({
    description: 'Email address of the customer.',
    format: 'email',
  }),
  pause_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for pausing the order',
    }),
  ),
});

export const PauseOrderByAddressSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identifier for the order to be paused.',
  }),
  postcode: Type.String({
    description: 'Postal code of the delivery address.',
  }),
  housenumber: Type.String({
    description: 'House number of the delivery address.',
  }),
  pause_reason: Type.Optional(
    Type.String({
      description: 'Optional reason for pausing the order',
    }),
  ),
});

export const PauseOrderRequestSchema = Type.Union([
  PauseOrderByEmailSchema,
  PauseOrderByAddressSchema,
]);

export const PauseOrderResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['We have paused the order'],
  }),
});

export const PauseOrderErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: [
      'We could not pause your order, the order is already too far processed',
    ],
  }),
});

// Get order details schemas
export const OrderEmailNoticeSchema = Type.Object({
  type: Type.Literal('email_mismatch', {
    description: 'Type of notice',
  }),
  orders_id: Type.String({
    description: 'Order ID this notice relates to',
  }),
  message: Type.String({
    description: 'Human-readable message about the email mismatch',
  }),
  details: Type.Object({
    provided: Type.String({
      description: 'Email address provided in the request',
      format: 'email',
    }),
    actual: Type.String({
      description: 'Email address stored with the order',
      format: 'email',
    }),
    similarity: Type.Number({
      description: 'Similarity score between the email addresses (0-100)',
      format: 'float',
    }),
  }),
});

export const OrderTrackTraceTimeframeSchema = Type.Object({
  from: Type.String({
    description: 'Start of the delivery window',
    format: 'time',
  }),
  to: Type.String({
    description: 'End of the delivery window',
    format: 'time',
  }),
});

export const OrderTrackTraceStatusSchema = Type.Object({
  timestamp: Type.String({
    description: 'When this status was recorded',
    format: 'date-time',
  }),
  description: Type.String({
    description: 'Status description',
  }),
});

export const OrderShipmentSchema = Type.Object({
  tracktrace: Type.String({
    description: 'Track & trace number of the shipment',
  }),
  status: Type.String({
    description: 'Current status of the shipment according to PostNL',
  }),
  track_trace_link: Type.String({
    description: 'PostNL track & trace URL for this shipment',
  }),
  returned: Type.Union([
    Type.String({
      description: 'Return status message if the package is being returned',
    }),
    Type.Null(),
  ]),
  delivery_date: Type.Union([
    Type.String({
      description: 'Expected delivery date if available',
      format: 'date',
    }),
    Type.Null(),
  ]),
  delivery_timeframe: Type.Union([OrderTrackTraceTimeframeSchema, Type.Null()]),
  status_history: Type.Array(OrderTrackTraceStatusSchema, {
    description: 'Historical status updates for the shipment from PostNL',
  }),
});

export const OrderAddressSchema = Type.Object({
  street: Type.String({
    description: 'Street name',
  }),
  postcode: Type.String({
    description: 'Postal code',
  }),
  city: Type.String({
    description: 'City',
  }),
});

export const OrderProductSchema = Type.Object({
  product_id: Type.String({
    description: 'Product identification',
  }),
  name: Type.String({
    description: 'Product name',
  }),
  artnr_up: Type.String({
    description: 'Article number',
  }),
  eancode: Type.String({
    description: 'EAN code',
  }),
  quantity: Type.Integer({
    description: 'Ordered quantity',
  }),
  quantity_delivered: Type.Integer({
    description: 'Delivered quantity',
  }),
  products_price: Type.Number({
    description: 'Product price including VAT',
    format: 'float',
  }),
});

export const OrderConnectedOrderSchema = Type.Object({
  orders_id: Type.String({
    description: 'Connected order identification',
  }),
  type: Type.String({
    description: 'Type of connected order',
  }),
  created: Type.String({
    description: 'Creation date of connected order',
    format: 'date-time',
  }),
  orders_status: Type.String({
    description: 'Status of connected order',
  }),
  created_by: Type.String({
    description: 'Employee who created the connected order',
  }),
  total: Type.Number({
    description: 'Total amount of the connected order',
    format: 'float',
  }),
  refund_details: Type.Union([
    Type.String({
      description: 'Refund transaction details (only for status 21)',
    }),
    Type.Null(),
  ]),
  refund_processed_date: Type.Union([
    Type.String({
      description:
        'Date on which the refund was processed (only for status 21)',
      format: 'date',
    }),
    Type.Null(),
  ]),
});

export const OrderEmailSchema = Type.Object({
  recipient_name: Type.String({
    description: 'Name of the email recipient',
  }),
  recipient_email: Type.String({
    description: 'Email address of the recipient',
    format: 'email',
  }),
  subject: Type.String({
    description: 'Subject of the email',
  }),
  date: Type.String({
    description: 'Date and time when the email was sent',
    format: 'date-time',
  }),
  status: Type.String({
    description: 'Status of the email (e.g. sent, delivered, opened, rejected)',
  }),
});

export const OrderContactHistorySchema = Type.Object({
  type: Type.Union(
    [Type.Literal('call'), Type.Literal('chat'), Type.Literal('email')],
    {
      description: 'Type of contact moment',
    },
  ),
  date: Type.String({
    description: 'Date of the contact moment',
    format: 'date',
  }),
  timestamp: Type.Integer({
    description: 'Unix timestamp of the contact moment, used for sorting',
  }),
  user: Type.String({
    description: 'Name of the employee who had the contact',
  }),
  summary: Type.String({
    description:
      'Summary of the contact moment. For emails this also includes a link to the ticket.',
  }),
});

export const OrderDetailSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identification of the order',
  }),
  orders_status: Type.String({
    description: 'Current status of the order',
  }),
  address_can_be_changed: Type.String({
    description:
      'Indicates if the delivery address can still be changed. This is only possible if the order has not yet been sent to the warehouse.',
    format: 'boolean',
  }),
  can_cancel: Type.Union(
    [Type.Literal('yes'), Type.Literal('no'), Type.Literal('maybe')],
    {
      description:
        'Indicates if the order can still be canceled, or if the order is already too far processed.',
    },
  ),
  shipments: Type.Array(OrderShipmentSchema, {
    description: 'List of shipments for this order',
  }),
  date_purchased: Type.String({
    description: 'Date when the order was placed',
    format: 'date-time',
  }),
  payment_method: Type.String({
    description: 'Payment method used for the order',
  }),
  total: Type.Number({
    description: 'Total amount of the order including VAT',
    format: 'float',
  }),
  delivery_address: OrderAddressSchema,
  products: Type.Array(OrderProductSchema, {
    description: 'Products in the order',
  }),
  connected_orders: Type.Array(OrderConnectedOrderSchema, {
    description: 'Connected orders (like refunds, exchanges, etc.)',
  }),
  emails: Type.Array(OrderEmailSchema, {
    description: 'List of emails sent regarding this order',
  }),
  contact_history: Type.Array(OrderContactHistorySchema, {
    description:
      'History of all contact moments (phone calls, chats, and emails) for this order',
  }),
});

export const GetOrderDetailsByOrderIdAndEmailResponseSchema = Type.Object({
  orders: Type.Array(OrderDetailSchema, {
    description: 'Order details',
  }),
  notices: Type.Optional(
    Type.Array(OrderEmailNoticeSchema, {
      description: 'Optional notices about email mismatches',
    }),
  ),
});

export const GetOrderDetailsByOrderIdAndEmailErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
  }),
});

// Get order details by order id and housenumber/postcode schemas
export const GetOrderDetailsByOrderIdAndPostcodeRequestSchema = Type.Object({
  orders_id: Type.String({
    description: 'Order number',
  }),
  postcode: Type.String({
    description: 'Postal code',
  }),
  housenumber: Type.String({
    description: 'House number',
  }),
});

export const GetOrderDetailsByOrderIdAndPostcodeResponseSchema = Type.Object({
  orders: Type.Array(OrderDetailSchema, {
    description: 'Order details',
  }),
  notices: Type.Optional(
    Type.Array(OrderEmailNoticeSchema, {
      description: 'Optional notices about email mismatches',
    }),
  ),
});

export const GetOrderDetailsByOrderIdAndPostcodeErrorResponseSchema =
  Type.Object({
    error: Type.String({
      description: 'Error message',
    }),
  });

// Get limited order information via email address schema
export const GetOrdersForEmailAddressRequestSchema = Type.Object({
  email_address: Type.String({
    description: 'Email address to search orders for',
    format: 'email',
  }),
});

export const GetOrdersForEmailAddressResponseSchema = Type.Object({
  orders: Type.Array(
    Type.Object({
      date_purchased: Type.String({
        description: 'Date when the order was placed',
        format: 'date-time',
      }),
      orders_status: Type.String({
        description: 'Current status of the order',
      }),
    }),
    {
      description: 'Limited order information',
    },
  ),
});

export const GetOrdersForEmailAddressErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
  }),
});

// Unsubscribe newsletter schemas
export const UnsubscribeNewsletterRequestSchema = Type.Object({
  email_address: Type.String({
    description: 'Email address to unsubscribe from the newsletter',
    format: 'email',
  }),
});

export const UnsubscribeNewsletterResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Successfully unsubscribed from newsletter'],
  }),
});

export const UnsubscribeNewsletterErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Invalid email address'],
  }),
});

// Unsubscribe product reviews schemas
export const UnsubscribeProductReviewsRequestSchema = Type.Object({
  email_address: Type.String({
    description: 'Email address to unsubscribe from product review invitations',
    format: 'email',
  }),
});

export const UnsubscribeProductReviewsResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message',
    examples: ['Successfully unsubscribed from product reviews'],
  }),
});

export const UnsubscribeProductReviewsErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['Invalid email address'],
  }),
});

// Check account schemas
export const CheckAccountRequestSchema = Type.Object({
  email_address: Type.String({
    description: 'Email address to check if a customer account exists',
    format: 'email',
  }),
});

export const CheckAccountResponseSchema = Type.Object({
  success: Type.String({
    description: 'Success message when the account exists',
    examples: ['Customer account exists for the given email address'],
  }),
});

export const CheckAccountErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No customer account found for the given email address'],
  }),
});

// Get my orders schemas
export const GetMyOrdersShipmentSchema = Type.Object({
  status: Type.String({
    description: 'Current status of the shipment',
  }),
  returned: Type.Union([
    Type.String({
      description: 'Return status message if applicable',
    }),
    Type.Null(),
  ]),
  delivery_date: Type.Union([
    Type.String({
      description: 'Expected delivery date',
      format: 'date',
    }),
    Type.Null(),
  ]),
  delivery_timeframe: Type.Union([
    Type.Object({
      from: Type.String({
        description: 'Start of delivery window',
        format: 'time',
      }),
      to: Type.String({
        description: 'End of delivery window',
        format: 'time',
      }),
    }),
    Type.Null(),
  ]),
  track_trace_link: Type.String({
    description: 'Link to PostNL track & trace page',
  }),
  status_history: Type.Array(
    Type.Object({
      timestamp: Type.String({
        description: 'Time of the status update',
        format: 'date-time',
      }),
      description: Type.String({
        description: 'Description of the status',
      }),
    }),
  ),
});

export const GetMyOrdersSchema = Type.Object({
  orders_id: Type.String({
    description: 'Unique identification of the order',
  }),
  orders_status: Type.String({
    description: 'Current status of the order',
  }),
  address_can_be_changed: Type.Boolean({
    description: 'Indicates if the delivery address can still be changed',
  }),
  can_cancel: Type.Union(
    [Type.Literal('yes'), Type.Literal('no'), Type.Literal('maybe')],
    {
      description: 'Indicates if the order can still be canceled',
    },
  ),
  shipments: Type.Array(GetMyOrdersShipmentSchema, {
    description: 'List of shipments for this order',
  }),
  date_purchased: Type.String({
    description: 'Date of purchase',
    format: 'date-time',
  }),
  payment_method: Type.String({
    description: 'Payment method used',
  }),
  total: Type.Number({
    description: 'Total amount of the order',
    format: 'float',
  }),
  delivery_address: Type.Object({
    street: Type.String({
      description: 'Street name and house number',
    }),
    postcode: Type.String({
      description: 'Postal code',
    }),
    city: Type.String({
      description: 'City',
    }),
  }),
  products: Type.Array(
    Type.Object({
      product_id: Type.String({
        description: 'Product ID',
      }),
      name: Type.String({
        description: 'Product name',
      }),
      artnr_up: Type.String({
        description: 'Article number',
      }),
      eancode: Type.String({
        description: 'EAN code',
      }),
      quantity: Type.Integer({
        description: 'Ordered quantity',
      }),
      quantity_delivered: Type.Integer({
        description: 'Delivered quantity',
      }),
      products_price: Type.Number({
        description: 'Product price',
        format: 'float',
      }),
    }),
  ),
  connected_orders: Type.Array(
    Type.Object({
      orders_id: Type.String({
        description: 'ID of the connected order',
      }),
      type: Type.String({
        description: 'Type of connection (e.g. credit, resend)',
      }),
      created: Type.String({
        description: 'Creation date',
        format: 'date-time',
      }),
      orders_status: Type.String({
        description: 'Status of the connected order',
      }),
      created_by: Type.String({
        description: 'Who created the connection',
      }),
      total: Type.Number({
        description: 'Total amount of the connected order',
        format: 'float',
      }),
      refund_details: Type.Union([
        Type.String({
          description: 'Details about the refund',
        }),
        Type.Null(),
      ]),
      refund_processed_date: Type.Union([
        Type.String({
          description: 'Date of refund',
          format: 'date',
        }),
        Type.Null(),
      ]),
    }),
  ),
  emails: Type.Array(
    Type.Object({
      recipient_name: Type.String({
        description: 'Name of the recipient',
      }),
      recipient_email: Type.String({
        description: 'Email address of the recipient',
        format: 'email',
      }),
      subject: Type.String({
        description: 'Subject of the email',
      }),
      date: Type.String({
        description: 'Send date',
        format: 'date-time',
      }),
      status: Type.String({
        description: 'Status of the email',
      }),
    }),
  ),
  contact_history: Type.Array(
    Type.Object({
      type: Type.Union(
        [Type.Literal('call'), Type.Literal('chat'), Type.Literal('email')],
        {
          description: 'Type of contact',
        },
      ),
      date: Type.String({
        description: 'Date of contact',
        format: 'date',
      }),
      timestamp: Type.Integer({
        description: 'Unix timestamp for sorting',
      }),
      user: Type.String({
        description: 'Name of employee',
      }),
      summary: Type.String({
        description: 'Summary of the contact',
      }),
    }),
  ),
});

export const GetMyOrdersResponseSchema = Type.Object({
  orders: Type.Array(GetMyOrdersSchema, {
    description: 'List of orders',
  }),
  context: Type.Union(
    [
      Type.Literal('whatsapp'),
      Type.Literal('chat_authenticated'),
      Type.Literal('email'),
    ],
    {
      description: 'The authentication channel that was used',
    },
  ),
});

export const GetMyOrdersErrorResponseSchema = Type.Object({
  error: Type.String({
    description: 'Error message',
    examples: ['No valid authentication context found'],
  }),
});
