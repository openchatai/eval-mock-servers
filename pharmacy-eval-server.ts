import FastifySwaggerPlugin from '@fastify/swagger';
import FastifySwaggerUIPlugin from '@fastify/swagger-ui';
import { Type, type TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import {
  BrandDetailResponseSchema,
  BrandListResponseSchema,
  CancelOrderErrorResponseSchema,
  CancelOrderRequestSchema,
  CancelOrderResponseSchema,
  CategoryDetailResponseSchema,
  CategoryListResponseSchema,
  CheckAccountErrorResponseSchema,
  CheckAccountResponseSchema,
  ContactPostNLErrorResponseSchema,
  ContactPostNLRequestSchema,
  ContactPostNLResponseSchema,
  ContactProductManagementErrorResponseSchema,
  ContactProductManagementRequestSchema,
  ContactProductManagementResponseSchema,
  ContactSupplierErrorResponseSchema,
  ContactSupplierRequestSchema,
  ContactSupplierResponseSchema,
  CreateOrderErrorResponseSchema,
  CreateOrderRequestSchema,
  CreateOrderResponseSchema,
  CustomerDetailResponseSchema,
  CustomerListResponseSchema,
  GetMyOrdersErrorResponseSchema,
  GetMyOrdersResponseSchema,
  GetOrderDetailsByOrderIdAndEmailErrorResponseSchema,
  GetOrderDetailsByOrderIdAndEmailResponseSchema,
  GetOrderDetailsByOrderIdAndPostcodeErrorResponseSchema,
  GetOrderDetailsByOrderIdAndPostcodeResponseSchema,
  GetOrdersForEmailAddressErrorResponseSchema,
  GetOrdersForEmailAddressResponseSchema,
  NotifyStockErrorResponseSchema,
  NotifyStockRequestSchema,
  NotifyStockResponseSchema,
  OrderDetailResponseSchema,
  OrderFilterQuerySchema,
  OrderListResponseSchema,
  PaginationQuerySchema,
  PauseOrderErrorResponseSchema,
  PauseOrderRequestSchema,
  PauseOrderResponseSchema,
  ProductDetailResponseSchema,
  ProductFilterQuerySchema,
  ProductListResponseSchema,
  RefundOrderErrorResponseSchema,
  RefundOrderRequestSchema,
  RefundOrderResponseSchema,
  RefundPartOfOrderErrorResponseSchema,
  RefundPartOfOrderRequestSchema,
  RefundPartOfOrderResponseSchema,
  ResendCompleteOrderErrorResponseSchema,
  ResendCompleteOrderRequestSchema,
  ResendCompleteOrderResponseSchema,
  ResendOrderConfirmationErrorResponseSchema,
  ResendOrderConfirmationRequestSchema,
  ResendOrderConfirmationResponseSchema,
  ResendOrderConfirmationToDifferentEmailErrorResponseSchema,
  ResendOrderConfirmationToDifferentEmailRequestSchema,
  ResendOrderConfirmationToDifferentEmailResponseSchema,
  ResendPartOfOrderErrorResponseSchema,
  ResendPartOfOrderRequestSchema,
  ResendPartOfOrderResponseSchema,
  ResendShippingMailErrorResponseSchema,
  ResendShippingMailRequestSchema,
  ResendShippingMailResponseSchema,
  ResendShippingMailToDifferentEmailErrorResponseSchema,
  ResendShippingMailToDifferentEmailRequestSchema,
  ResendShippingMailToDifferentEmailResponseSchema,
  ReturnLabelErrorResponseSchema,
  ReturnLabelRequestSchema,
  ReturnLabelResponseSchema,
  SearchProductErrorResponseSchema,
  SearchProductResponseSchema,
  SearchQuerySchema,
  UnsubscribeNewsletterErrorResponseSchema,
  UnsubscribeNewsletterRequestSchema,
  UnsubscribeNewsletterResponseSchema,
  UnsubscribeProductReviewsErrorResponseSchema,
  UnsubscribeProductReviewsRequestSchema,
  UnsubscribeProductReviewsResponseSchema,
} from './pharmacy-eval-schemas';

export default async function theOnlinePharmacy() {
  const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  const port = 5551;

  await fastify.register(FastifySwaggerPlugin, {
    exposeHeadRoutes: false,
    openapi: {
      openapi: '3.1.0',
      info: {
        title: 'TheOnlinePharmacy API',
        description:
          'API for TheOnlinePharmacy, providing access to products, categories, brands, orders, and customers',
        version: '0.1.0',
      },
      servers: [
        {
          url: `http://localhost:${port}`,
          description: 'Local development server',
        },
      ],
    },
  });

  await fastify.register(FastifySwaggerUIPlugin, {
    routePrefix: '/docs',
  });

  // Products routes
  fastify.get('/products', {
    schema: {
      summary: 'List products with filters',
      description:
        'Retrieves a paginated list of products with optional filtering and search capabilities',
      querystring: ProductFilterQuerySchema,
      response: {
        200: ProductListResponseSchema,
      },
    },
    handler: async ({ query }) => ({
      products: [
        {
          id: '1',
          name: 'Vitamin C 1000mg',
          description: 'High dose vitamin C supplement',
          price: 12.99,
          stock: 100,
          category: 'Vitamins',
          brand: 'HealthPlus',
          imageUrl: 'https://example.com/vitamin-c.jpg',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      total: 1,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    }),
  });

  fastify.get(
    '/products/:id',
    {
      schema: {
        summary: 'Get product by ID',
        description: 'Retrieves detailed information about a specific product',
        params: Type.Object({
          id: Type.Integer({ description: 'Product ID to retrieve' }),
        }),
        response: {
          200: ProductDetailResponseSchema,
          404: Type.Object(
            {
              message: Type.String({ description: 'Error message' }),
            },
            { description: 'Product not found' },
          ),
        },
      },
    },
    async (req, res) => {
      const { params } = req;
      res.code(200).send({
        product: {
          products_id: params.id,
          products_name: 'Vitamin C 1000mg',
          products_description: 'High dose vitamin C supplement',
          products_price: 12.99,
          stock: 100,
          artnr_up: '1234567890',
          ean_code: '1234567890',
          tht: '2025-01-01',
          products_inhoud: '100ml',
          products_url: 'https://example.com/vitamin-c.jpg',
          can_be_returned: true,
          is_hygiene_product: false,
          date_available_again: '2025-01-01',
        },
      });
    },
  );

  // Categories routes
  fastify.get('/categories', {
    schema: {
      summary: 'Get all product categories',
      description: 'Retrieves a paginated list of product categories',
      querystring: PaginationQuerySchema,
      response: {
        200: CategoryListResponseSchema,
      },
    },
    handler: async ({ query }) => ({
      categories: [
        {
          id: '1',
          name: 'Vitamins',
          description: 'All types of vitamins and supplements',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      total: 1,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    }),
  });

  fastify.get('/categories/:id', {
    schema: {
      summary: 'Get category by ID',
      description:
        'Retrieves detailed information about a specific product category',
      params: Type.Object({
        id: Type.String({ description: 'Category ID to retrieve' }),
      }),
      response: {
        200: CategoryDetailResponseSchema,
        404: Type.Object(
          {
            message: Type.String({ description: 'Error message' }),
          },
          { description: 'Category not found' },
        ),
      },
    },
    handler: async ({ params }) => ({
      id: params.id,
      name: 'Vitamins',
      description: 'All types of vitamins and supplements',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  });

  // Brands routes
  fastify.get('/brands', {
    schema: {
      summary: 'Get all brands',
      description: 'Retrieves a paginated list of product brands',
      querystring: PaginationQuerySchema,
      response: {
        200: BrandListResponseSchema,
      },
    },
    handler: async ({ query }) => ({
      brands: [
        {
          id: '1',
          name: 'HealthPlus',
          description: 'Premium health supplements',
          logoUrl: 'https://example.com/healthplus-logo.jpg',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      total: 1,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    }),
  });

  fastify.get('/brands/:id', {
    schema: {
      summary: 'Get brand by ID',
      description: 'Retrieves detailed information about a specific brand',
      params: Type.Object({
        id: Type.String({ description: 'Brand ID to retrieve' }),
      }),
      response: {
        200: BrandDetailResponseSchema,
        404: Type.Object(
          {
            message: Type.String({ description: 'Error message' }),
          },
          { description: 'Brand not found' },
        ),
      },
    },
    handler: async ({ params }) => ({
      id: params.id,
      name: 'HealthPlus',
      description: 'Premium health supplements',
      logoUrl: 'https://example.com/healthplus-logo.jpg',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  });

  // Orders routes
  fastify.get('/orders', {
    schema: {
      summary: 'Get all orders',
      description:
        'Retrieves a paginated list of orders with optional filtering',
      querystring: OrderFilterQuerySchema,
      response: {
        200: OrderListResponseSchema,
      },
    },
    handler: async ({ query }) => ({
      orders: [
        {
          id: '1',
          customerId: '1',
          status: 'pending',
          totalAmount: 25.98,
          items: [
            {
              productId: '1',
              quantity: 2,
              price: 12.99,
            },
          ],
          shippingAddress: {
            street: 'Main Street 123',
            city: 'Amsterdam',
            postalCode: '1012 AB',
            country: 'Netherlands',
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      total: 1,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    }),
  });

  fastify.get('/orders/:id', {
    schema: {
      summary: 'Get order by ID',
      description: 'Retrieves detailed information about a specific order',
      params: Type.Object({
        id: Type.String({ description: 'Order ID to retrieve' }),
      }),
      response: {
        200: OrderDetailResponseSchema,
        404: Type.Object(
          {
            message: Type.String({ description: 'Error message' }),
          },
          { description: 'Order not found' },
        ),
      },
    },
    handler: async ({ params }) => ({
      id: params.id,
      customerId: '1',
      status: 'pending',
      totalAmount: 25.98,
      items: [
        {
          productId: '1',
          quantity: 2,
          price: 12.99,
        },
      ],
      shippingAddress: {
        street: 'Main Street 123',
        city: 'Amsterdam',
        postalCode: '1012 AB',
        country: 'Netherlands',
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  });

  // Customers routes
  fastify.get('/customers', {
    schema: {
      summary: 'Get all customers',
      description: 'Retrieves a paginated list of customers',
      querystring: SearchQuerySchema,
      response: {
        200: CustomerListResponseSchema,
      },
    },
    handler: async ({ query }) => ({
      customers: [
        {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+31612345678',
          address: {
            street: 'Main Street 123',
            city: 'Amsterdam',
            postalCode: '1012 AB',
            country: 'Netherlands',
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      total: 1,
      page: query.page ?? 1,
      limit: query.limit ?? 10,
    }),
  });

  fastify.get('/customers/:id', {
    schema: {
      summary: 'Get customer by ID',
      description: 'Retrieves detailed information about a specific customer',
      params: Type.Object({
        id: Type.String({ description: 'Customer ID to retrieve' }),
      }),
      response: {
        200: CustomerDetailResponseSchema,
        404: Type.Object(
          {
            message: Type.String({ description: 'Error message' }),
          },
          { description: 'Customer not found' },
        ),
      },
    },
    handler: async ({ params }) => ({
      id: params.id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+31612345678',
      address: {
        street: 'Main Street 123',
        city: 'Amsterdam',
        postalCode: '1012 AB',
        country: 'Netherlands',
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }),
  });

  // Create order route
  fastify.post('/create_order', {
    schema: {
      summary: 'Create a new order',
      description:
        "Creates a new order for a customer. The customer will receive an email with order details and a payment request. Before calling this endpoint, use the search_product endpoint to get the product ID. Use the customer's email address to create the order. If you don't have the email address, ask the customer for it.",
      body: CreateOrderRequestSchema,
      response: {
        200: CreateOrderResponseSchema,
        400: CreateOrderErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Check if all required fields are present
      if (
        !body.customer_name ||
        !body.email_address ||
        body.products.length === 0
      ) {
        return {
          error: 'Missing required fields for order creation',
        };
      }

      // Dummy implementation - in a real system this would create an actual order
      return {
        success: 'Order created successfully',
        orders_id: 12345,
        total:
          body.products.reduce(
            (sum, product) => sum + product.quantity * 12.99,
            0,
          ) + 4.95,
        shipping_cost: 4.95,
        payment_request_created: true,
      };
    },
  });

  // Search product route
  fastify.get('/search_product', {
    schema: {
      summary: 'Look up products',
      description:
        "Find product(s) the user is asking about, as when asking about product availability, expiration, or any other product details. Use this endpoint to get products by name or any keywords if you don't have the ID or EAN code. Returns product IDs that can be used with other actions. You can use the product_details action to get more information about the product. If you get no relevant results, ask the user to provide product ID or EAN code.",
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
        query: Type.String({
          description: 'Use product name or any keywords as search query',
        }),
      }),
      response: {
        200: SearchProductResponseSchema,
        400: SearchProductErrorResponseSchema,
      },
    },
    handler: async ({ query }) => {
      if (!query.query || query.query.trim() === '') {
        return {
          error: 'Search query cannot be empty',
        };
      }

      // Dummy implementation with sample products
      return {
        products: [
          {
            products_id: 1001,
            products_name: 'Vitamin C 1000mg',
            products_description:
              'High dose vitamin C supplement with rose hip extract',
            products_inhoud: '100 tablets',
            products_url: 'https://example.com/products/vitamin-c-1000mg',
            artnr_up: 'UP12345',
            ean_code: '8712345678901',
            stock: 100,
            products_price: 12.99,
            is_hygiene_product: false,
            can_be_returned: true,
          },
          {
            products_id: 1002,
            products_name: 'Vitamin D3 25mcg',
            products_description:
              'Vitamin D3 supplement for bone health and immune system support',
            products_inhoud: '90 tablets',
            products_url: 'https://example.com/products/vitamin-d3-25mcg',
            artnr_up: 'UP12346',
            ean_code: '8712345678902',
            stock: 50,
            products_price: 9.99,
            is_hygiene_product: false,
            can_be_returned: true,
          },
        ],
      };
    },
  });

  // Get product details route
  fastify.get('/get_product_details', {
    schema: {
      summary: 'Get detailed information about a specific product',
      description:
        'Retrieves detailed information about a specific product based on product ID or EAN (European Article Number). Use this to get complete product information when you already know the exact product.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
        products_id: Type.Optional(
          Type.String({
            description: 'Unique identifier for the product',
          }),
        ),
        ean_code: Type.Optional(
          Type.String({
            description: 'European Article Number for the product',
          }),
        ),
      }),
      response: {
        200: ProductDetailResponseSchema,
        400: Type.Object({
          error: Type.String({
            description: 'Error message',
          }),
        }),
      },
    },
    handler: async ({ query }) => {
      if (!query.products_id && !query.ean_code) {
        return {
          error: 'Either products_id or ean_code must be provided',
        };
      }

      // Dummy implementation - in a real system this would fetch product details from a database
      return {
        product: {
          products_id: 1001,
          products_name: 'Vitamin C 1000mg',
          products_description:
            'High dose vitamin C supplement with rose hip extract for optimal absorption. Supports the immune system and helps protect cells from oxidative stress.',
          products_inhoud: '100 tablets',
          products_url: 'https://example.com/products/vitamin-c-1000mg',
          artnr_up: 'UP12345',
          ean_code: '8712345678901',
          stock: 100,
          tht: '2025-12-31',
          products_price: 12.99,
          is_hygiene_product: false,
          can_be_returned: true,
        },
      };
    },
  });

  // Notify stock route
  fastify.post('/notify_stock', {
    schema: {
      summary: 'Register for stock notification',
      description:
        'Register an email address to receive a notification when a product is back in stock. This endpoint is used when a product is currently out of stock and a customer would like to be notified when it becomes available again. Before calling this endpoint, get the product ID using search_product.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: NotifyStockRequestSchema,
      response: {
        200: NotifyStockResponseSchema,
        400: NotifyStockErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Check if the product ID exists (in a real implementation, this would query a database)
      if (body.products_id < 1) {
        return {
          error: 'Invalid product ID',
        };
      }

      // Check if the email is valid (a more sophisticated validation would be used in production)
      if (!body.email_address.includes('@')) {
        return {
          error: 'Invalid email address format',
        };
      }

      // Dummy implementation - in a real system this would register the notification in a database
      return {
        success: `Notification registration successful. You will be notified at ${body.email_address} when product #${body.products_id} is back in stock.`,
      };
    },
  });

  // Send return label route
  fastify.post('/send_return_label', {
    schema: {
      summary: 'Send return label',
      description:
        'Use this endpoint to send a return label to a customer for a specific order. This can be useful when a customer wants to return an item or the complete order and needs a return label. Especially used by support teams to help customers with returns.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: ReturnLabelRequestSchema,
      response: {
        200: ReturnLabelResponseSchema,
        400: ReturnLabelErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Check if order exists (in a real implementation, this would query a database)
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return {
          error: 'Order not found',
        };
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body && !body.email_address.includes('@')) {
        return {
          error: 'Invalid email address format',
        };
      }

      // If using address identification, check if the address is valid
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return {
            error: 'Invalid postal code format',
          };
        }

        if (!body.housenumber) {
          return {
            error: 'House number is required',
          };
        }
      }

      // Check if the order is eligible for returns (example: within 30 days)
      const daysSinceShipping = 15; // Mock value - in a real implementation, this would be calculated

      if (daysSinceShipping > 30) {
        return {
          error: 'Returns are only possible within 30 days after shipping',
        };
      }

      // Dummy implementation - in a real system this would generate and send a return label
      return {
        success: `Return label has been sent${'email_address' in body ? ' to ' + body.email_address : ' to the delivery address'}`,
        details: {
          orders_id: body.orders_id,
          days_since_shipping: daysSinceShipping,
        },
      };
    },
  });

  // Resend shipping mail route
  fastify.post('/resend_shipping_mail', {
    schema: {
      summary: 'Resend shipping confirmation',
      description:
        "Use this endpoint to resend the shipping confirmation to the customer. This can be useful if a customer accidentally deleted the shipping confirmation or never received it. The system looks for the most recent shipping confirmation (template: 'shipping-confirmation-2023') that was sent to this email address.",
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: ResendShippingMailRequestSchema,
      response: {
        200: ResendShippingMailResponseSchema,
        400: ResendShippingMailErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Validate email address format
      if (!body.email_address || !body.email_address.includes('@')) {
        return {
          error: 'Invalid email address format',
        };
      }

      // Check if any orders exist for this email address (in a real implementation, this would query a database)
      const emailExists = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!emailExists) {
        return {
          error: 'No shipping confirmations found for this email address',
        };
      }

      // Dummy implementation - in a real system this would resend the shipping confirmation email
      return {
        success: `Shipping confirmation has been resent to ${body.email_address}`,
      };
    },
  });

  // Resend shipping mail to different email route
  fastify.post('/resend_shipping_mail_to_different_email', {
    schema: {
      summary: 'Resend shipping confirmation to different email address',
      description:
        'Use this endpoint to resend the shipping confirmation to a different email address than the original. This can be useful if a customer wants to receive the shipping confirmation at a different email address. If no orders_id is provided, the most recent shipping confirmation for the given email address will be used. In this case, the new email address must be similar to the original one (e.g. correcting typos like hotmal.com to hotmail.com).',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: ResendShippingMailToDifferentEmailRequestSchema,
      response: {
        200: ResendShippingMailToDifferentEmailResponseSchema,
        400: ResendShippingMailToDifferentEmailErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Validate email addresses format
      if (
        !body.email_address.includes('@') ||
        !body.new_email_address.includes('@')
      ) {
        return {
          error: 'Invalid email address format',
        };
      }

      // Check if the original email address exists (in a real implementation, this would query a database)
      const emailExists = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!emailExists) {
        return {
          error:
            'No shipping confirmations found for the original email address',
        };
      }

      // If no order ID was provided, check if the new email is similar to the original one
      if (!body.orders_id) {
        // This is a simple similarity check. In a real implementation, this would be more sophisticated
        const originalDomain = body.email_address.split('@')[1];
        const newDomain = body.new_email_address.split('@')[1];

        if (originalDomain !== newDomain) {
          return {
            error:
              'The new email address is too different from the original email address. For security reasons, we can only send to similar email addresses (e.g. fixing typos like hotmal.com to hotmail.com)',
          };
        }
      }

      // Check if the order exists (if provided)
      if (
        body.orders_id &&
        body.orders_id !== '1234' &&
        body.orders_id !== '5678'
      ) {
        return {
          error: 'Order not found',
        };
      }

      // Dummy implementation - in a real system this would resend the shipping confirmation email to the new address
      return {
        success: `Shipping confirmation has been resent from ${body.email_address} to ${body.new_email_address}${body.orders_id ? ` for order #${body.orders_id}` : ''}`,
      };
    },
  });

  // Resend order confirmation route
  fastify.post<{
    Body: (typeof ResendOrderConfirmationRequestSchema)['static'];
  }>(
    '/resend_order_confirmation',
    {
      schema: {
        summary: 'Resend order confirmation',
        description:
          'Use this endpoint to resend the order confirmation to the customer. This can be useful if a customer accidentally deleted the order confirmation or never received it. The system looks for the most recent order confirmation sent to this email address. This endpoint is not for placing new orders.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResendOrderConfirmationRequestSchema,
        response: {
          200: ResendOrderConfirmationResponseSchema,
          400: ResendOrderConfirmationErrorResponseSchema,
        },
      },
    },
    async (req, res) => {
      const { body } = req;

      // Validate email address format
      if (!body.email_address || !body.email_address.includes('@')) {
        return res.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Check if any orders exist for this email address (in a real implementation, this would query a database)
      const emailExists = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!emailExists) {
        return res.code(400).send({
          error: 'No order confirmations found for this email address',
        });
      }

      // Dummy implementation - in a real system this would resend the order confirmation email
      return res.code(200).send({
        success: `Order confirmation has been resent to ${body.email_address}`,
      });
    },
  );

  // Resend order confirmation to different email route
  fastify.post<{
    Body: (typeof ResendOrderConfirmationToDifferentEmailRequestSchema)['static'];
  }>(
    '/resend_order_confirmation_to_different_email',
    {
      schema: {
        summary: 'Resend order confirmation to different email address',
        description:
          'Use this endpoint to resend the order confirmation to a different email address than the original. This can be useful if a customer wants to receive the order confirmation at a different email address. If no orders_id is provided, the most recent order confirmation for the given email address will be used. In this case, the new email address must be similar to the original one (e.g. correcting typos like hotmal.com to hotmail.com).',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResendOrderConfirmationToDifferentEmailRequestSchema,
        response: {
          200: ResendOrderConfirmationToDifferentEmailResponseSchema,
          400: ResendOrderConfirmationToDifferentEmailErrorResponseSchema,
        },
      },
    },
    async (req, res) => {
      const { body } = req;

      // Validate email addresses format
      if (
        !body.email_address.includes('@') ||
        !body.new_email_address.includes('@')
      ) {
        return res.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Check if the original email address exists (in a real implementation, this would query a database)
      const emailExists = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!emailExists) {
        return res.code(400).send({
          error: 'No order confirmations found for the original email address',
        });
      }

      // If no order ID was provided, check if the new email is similar to the original one
      if (!body.orders_id) {
        // This is a simple similarity check. In a real implementation, this would be more sophisticated
        const originalDomain = body.email_address.split('@')[1];
        const newDomain = body.new_email_address.split('@')[1];

        if (originalDomain !== newDomain) {
          return res.code(400).send({
            error:
              'The new email address is too different from the original email address. For security reasons, we can only send to similar email addresses (e.g. fixing typos like hotmal.com to hotmail.com)',
          });
        }
      }

      // Check if the order exists (if provided)
      if (
        body.orders_id &&
        body.orders_id !== '1234' &&
        body.orders_id !== '5678'
      ) {
        return res.code(400).send({
          error: 'Order not found',
        });
      }

      // Dummy implementation - in a real system this would resend the order confirmation email to the new address
      return res.code(200).send({
        success: `Order confirmation has been resent from ${body.email_address} to ${body.new_email_address}${body.orders_id ? ` for order #${body.orders_id}` : ''}`,
      });
    },
  );

  // Resend complete order route
  fastify.post<{
    Body: (typeof ResendCompleteOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/resend_complete_order',
    {
      schema: {
        summary: 'Resend complete order',
        description:
          'This endpoint creates a new order that is a complete copy of an existing order. This is typically used when a package is lost or damaged in transit, or when a customer claims they never received their order despite the tracking information showing it was delivered.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResendCompleteOrderRequestSchema,
        response: {
          200: ResendCompleteOrderResponseSchema,
          400: ResendCompleteOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // Check if the order is too old to be resent (in a real system, this would use actual dates)
      const orderDate = new Date('2023-01-15'); // Example date
      const currentDate = new Date();
      const daysDifference = Math.floor(
        (currentDate.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24),
      );

      if (daysDifference > 180) {
        // 6 months
        return reply.code(400).send({
          error:
            'This order is too old to be resent. We can only resend orders that are less than 6 months old.',
        });
      }

      // In a real implementation, we would create a new order with the same products as the original order
      // Here we just return a success response with mock data
      return reply.code(200).send({
        success: `Created complete resend for orders_id ${body.orders_id}`,
        resend_order_id: 98765,
        products_count: 3, // Mock value - in a real implementation, this would be the actual count
      });
    },
  );

  // Contact product management route
  fastify.post<{
    Body: (typeof ContactProductManagementRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/contact_productmanagement',
    {
      schema: {
        summary: 'Contact product management',
        description:
          'Use this endpoint to contact the product management department about product data issues. This could include incorrect product information, missing details, issues with product categorization, etc. Note that this is not for inventory or stock issues; for those, use /contact_supplier.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ContactProductManagementRequestSchema,
        response: {
          200: ContactProductManagementResponseSchema,
          400: ContactProductManagementErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the request is defined
      if (!body.request || body.request.trim() === '') {
        return reply.code(400).send({
          error:
            'No request defined. Please provide a detailed description of the product data issue.',
        });
      }

      // Validate request length
      if (body.request.length < 10) {
        return reply.code(400).send({
          error:
            'Request is too short. Please provide more details about the product data issue.',
        });
      }

      // Check if the request contains product information
      const containsProductInfo =
        body.request.includes('product') ||
        body.request.includes('EAN') ||
        body.request.includes('SKU') ||
        body.request.includes('ID');

      if (!containsProductInfo) {
        return reply.code(400).send({
          error:
            'Please include specific product information in your request (product name, ID, EAN, or SKU).',
        });
      }

      // Dummy implementation - in a real system this would create a ticket for the product management department
      return reply.code(200).send({
        success:
          'Request sent to the product management department. If a response is needed, we will respond within 3 business days',
      });
    },
  );

  // Resend part of order route
  fastify.post<{
    Body: (typeof ResendPartOfOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/resend_part_of_order',
    {
      schema: {
        summary: 'Resend part of an order',
        description:
          'Use this endpoint to resend part of an order to the customer. This can be useful if part of an order was damaged or not received. The resend is created as a new order without charges. Only products from the original order can be resent, and quantities cannot be higher than the original order.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResendPartOfOrderRequestSchema,
        response: {
          200: ResendPartOfOrderResponseSchema,
          400: ResendPartOfOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // Check if the products array is valid
      if (!body.products || body.products.length === 0) {
        return reply.code(400).send({
          error: 'No products specified for resend',
        });
      }

      // In a real implementation, we would check if each product was part of the original order
      // and if the requested quantity is less than or equal to the original quantity
      const originalOrderProducts = ['1001', '1002', '1003']; // Example original order products
      const originalOrderQuantities: Record<string, number> = {
        '1001': 2,
        '1002': 1,
        '1003': 3,
      }; // Example original order quantities

      for (const product of body.products) {
        if (!originalOrderProducts.includes(product.products_id)) {
          return reply.code(400).send({
            error: `Product ${product.products_id} was not part of the original order`,
          });
        }

        const originalQuantity = originalOrderQuantities[product.products_id];
        if (product.quantity > originalQuantity) {
          return reply.code(400).send({
            error: `Requested quantity (${product.quantity}) for product ${product.products_id} exceeds the original order quantity (${originalQuantity})`,
          });
        }
      }

      // Dummy implementation - in a real system this would create a new order for the specified products
      return reply.code(200).send({
        success: `Created partial resend for orders_id ${body.orders_id}`,
        resend_order_id: 87655,
        products_count: body.products.length,
      });
    },
  );

  // Cancel order route
  fastify.post<{
    Body: (typeof CancelOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/cancel_order',
    {
      schema: {
        summary: 'Cancel order',
        description:
          'This endpoint cancels an order that is still pending or has not been shipped yet. Use this when a customer decides to cancel their order and no shipping confirmation has been sent. The response depends on the current order status and payment method.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: CancelOrderRequestSchema,
        response: {
          200: CancelOrderResponseSchema,
          400: CancelOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // In a real implementation, we would check if the order is in a state that can be canceled
      // For example, if the order is already shipped, it cannot be canceled
      const orderCancelStatus = 'pending'; // Example order status (in a real system, this would be retrieved from a database)

      // Dummy implementation - in a real system this would cancel the order
      return reply.code(200).send({
        success: 'We have canceled your order',
        reason: body.cancel_reason || null,
      });
    },
  );

  // Refund order route
  fastify.post<{
    Body: (typeof RefundOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/refund_order',
    {
      schema: {
        summary: 'Refund order',
        description:
          'This endpoint creates a full refund request for a specific order. A new refund order is created with negative amounts. The order must be in a refundable state (e.g. shipped) to process the refund. The refund is processed and the customer is notified.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: RefundOrderRequestSchema,
        response: {
          200: RefundOrderResponseSchema,
          400: RefundOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // In a real implementation, we would check if the order is in a state that can be refunded
      // For example, if the order is canceled, it cannot be refunded
      const orderRefundStatus = 'shipped'; // Example order status (in a real system, this would be retrieved from a database)

      // Dummy implementation - in a real system this would create a refund for the order
      return reply.code(200).send({
        success: `Created full refund for order ${body.orders_id}`,
        refund_order_id: 98765,
      });
    },
  );

  // Resend invoice schemas
  const ResendInvoiceByEmailSchema = Type.Object({
    orders_id: Type.String({
      description: 'Unique identifier for the order',
    }),
    email_address: Type.String({
      description: 'Email address of the customer',
      format: 'email',
    }),
  });

  const ResendInvoiceByAddressSchema = Type.Object({
    orders_id: Type.String({
      description: 'Unique identifier for the order',
    }),
    postcode: Type.String({
      description: 'Postal code of the delivery address',
    }),
    housenumber: Type.String({
      description: 'House number of the delivery address',
    }),
  });

  const ResendInvoiceRequestSchema = Type.Union([
    ResendInvoiceByEmailSchema,
    ResendInvoiceByAddressSchema,
  ]);

  const ResendInvoiceResponseSchema = Type.Object({
    success: Type.String({
      description: 'Success message',
      examples: ['Invoice has been resent successfully'],
    }),
  });

  const ResendInvoiceErrorResponseSchema = Type.Object({
    error: Type.String({
      description: 'Error message',
      examples: [
        'To identify an order, we need orders_id and email_address OR orders_id, postcode and house number',
      ],
    }),
  });

  // Resend invoice route
  fastify.post<{
    Body: (typeof ResendInvoiceRequestSchema)['static'];
  }>(
    '/resend_invoice',
    {
      schema: {
        summary: 'Resend invoice by email',
        description:
          "This endpoint allows an invoice to be resent to the customer's email address. To identify an order, one of these combinations is required: orders_id and email_address, or orders_id, postcode and house number",
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResendInvoiceRequestSchema,
        response: {
          200: ResendInvoiceResponseSchema,
          400: ResendInvoiceErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // Dummy implementation - in a real system this would send the invoice email
      return reply.code(200).send({
        success: `Invoice for order ${body.orders_id} has been resent to the customer's email address`,
      });
    },
  );

  // Update delivery address schemas
  const UpdateDeliveryAddressRequestSchema = Type.Object({
    orders_id: Type.String({
      description: 'Unique identifier for the order to update the address',
    }),
    email_address: Type.String({
      description: 'Email address of the customer associated with the order',
      format: 'email',
    }),
    street_address: Type.String({
      description:
        'Full street address including house number and any additions',
      examples: ['Example Street 123A'],
    }),
    city: Type.String({
      description: 'City name',
    }),
    postcode: Type.String({
      description: 'Postal code (spaces will be removed)',
      examples: ['1234 AB'],
    }),
    country: Type.Optional(
      Type.String({
        description: "Country name, defaults to 'Netherlands' if not provided",
        default: 'Netherlands',
      }),
    ),
  });

  const UpdateDeliveryAddressResponseSchema = Type.Object({
    success: Type.String({
      description: 'Success message',
      examples: ['Delivery address updated successfully'],
    }),
    details: Type.Object({
      orders_id: Type.String({
        description: 'ID of the order whose address was updated',
      }),
      new_address: Type.Object({
        street: Type.String({
          description: 'New street name and house number',
        }),
        city: Type.String({
          description: 'New city name',
        }),
        postcode: Type.String({
          description: 'New postal code',
        }),
        country: Type.String({
          description: 'New country',
        }),
      }),
    }),
  });

  const UpdateDeliveryAddressErrorResponseSchema = Type.Object({
    error: Type.String({
      description: 'Error message',
      examples: [
        'The delivery address cannot be updated because the order has already been sent to the warehouse',
      ],
    }),
  });

  // Update delivery address route
  fastify.post<{
    Body: (typeof UpdateDeliveryAddressRequestSchema)['static'];
  }>(
    '/update_delivery_address',
    {
      schema: {
        summary: 'Update delivery address of an existing order',
        description:
          'Use this endpoint to update the delivery address of an existing order. This only works if the order has not yet been sent to the warehouse. The system will automatically extract the street name, house number, and house number addition from the provided address. If no country is provided, Netherlands is assumed as the default country. Do not use this function for new orders.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: UpdateDeliveryAddressRequestSchema,
        response: {
          200: UpdateDeliveryAddressResponseSchema,
          400: UpdateDeliveryAddressErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists and if it belongs to the provided email
      const validOrder = body.orders_id === '1234' || body.orders_id === '5678';
      const validEmail = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!validOrder || !validEmail) {
        return reply.code(400).send({
          error: 'Order not found or email does not match the order',
        });
      }

      // Validate email address format
      if (!body.email_address.includes('@')) {
        return reply.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Validate postal code format
      if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
        return reply.code(400).send({
          error: 'Invalid postal code format',
        });
      }

      // In a real implementation, we would check if the order is still in a state that allows address updates
      const orderStatus: string = 'pending';

      if (orderStatus !== 'pending') {
        return reply.code(400).send({
          error:
            'The delivery address cannot be updated because the order has already been sent to the warehouse',
        });
      }

      // Extract street name and house number from street_address (in a real implementation, this would be more sophisticated)
      const streetParts = body.street_address.split(' ');
      const houseNumber = streetParts.pop() || '';
      const street = streetParts.join(' ');

      // Normalize postcode by removing spaces
      const normalizedPostcode = body.postcode.replace(/\s+/g, '');

      // Use Netherlands as default country if not provided
      const country = body.country || 'Netherlands';

      // Dummy implementation - in a real system this would update the address in the database
      return reply.code(200).send({
        success: `Delivery address for order ${body.orders_id} has been updated successfully`,
        details: {
          orders_id: body.orders_id,
          new_address: {
            street: body.street_address,
            city: body.city,
            postcode: normalizedPostcode,
            country: country,
          },
        },
      });
    },
  );

  // Reset password schemas
  const ResetPasswordRequestSchema = Type.Object({
    email_address: Type.String({
      description:
        'Email address linked to the customer account that needs a password reset',
      format: 'email',
    }),
  });

  const ResetPasswordResponseSchema = Type.Object({
    success: Type.String({
      description: 'Success message',
      examples: ['Password reset email sent'],
    }),
  });

  const ResetPasswordErrorResponseSchema = Type.Object({
    error: Type.String({
      description: 'Error message',
      examples: ['No email address provided'],
    }),
  });

  // Reset password route
  fastify.post<{
    Body: (typeof ResetPasswordRequestSchema)['static'];
  }>(
    '/reset_password',
    {
      schema: {
        summary: 'Reset password',
        description:
          'Use this endpoint to reset the password for a customer account.\nThis will send an email to the customer with their new password.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ResetPasswordRequestSchema,
        response: {
          200: ResetPasswordResponseSchema,
          400: ResetPasswordErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Validate email address format
      if (!body.email_address || !body.email_address.includes('@')) {
        return reply.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Check if the email address exists in the system (in a real implementation, this would query a database)
      const emailExists = ['customer@example.com', 'test@example.com'].includes(
        body.email_address,
      );

      if (!emailExists) {
        // For security reasons, don't reveal whether the email exists in the system or not
        // Instead, always return success even if the email doesn't exist
        return reply.code(200).send({
          success: `Password reset email has been sent to ${body.email_address}`,
        });
      }

      // Dummy implementation - in a real system this would generate a new password and send an email
      return reply.code(200).send({
        success: `Password reset email has been sent to ${body.email_address}`,
      });
    },
  );

  // Contact supplier route
  fastify.post<{
    Body: (typeof ContactSupplierRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/contact_supplier',
    {
      schema: {
        summary: 'Contact supplier department',
        description:
          'Use this endpoint to contact the supplier department about product availability, delivery times, or other supplier-related issues.\nTypically used for:\n- Product availability questions\n- Delivery time questions\n- Supplier-specific product issues\n- Supply chain related questions\nNote: For product data issues, use contact_productmanagement. For order specific issues, use contact_warehouse.\n\nIf the user is asking about product availability, fetch the product details first to check if it is in stock using the search_product and product_details endpoints.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ContactSupplierRequestSchema,
        response: {
          200: ContactSupplierResponseSchema,
          400: ContactSupplierErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the request is defined
      if (!body.request || body.request.trim() === '') {
        return reply.code(400).send({
          error:
            'No request defined. Please provide a detailed description of the supplier-related issue or question.',
        });
      }

      // Validate request length
      if (body.request.length < 10) {
        return reply.code(400).send({
          error:
            'Request is too short. Please provide more details about the supplier-related issue or question.',
        });
      }

      // Dummy implementation - in a real system this would create a ticket for the supplier department
      return reply.code(200).send({
        success:
          'Request sent to the supplier department. We will respond to the customer within 3 business days',
      });
    },
  );

  // Contact PostNL route
  fastify.post<{
    Body: (typeof ContactPostNLRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/contact_postnl',
    {
      schema: {
        summary: 'Contact PostNL about a shipment',
        description:
          'Use this endpoint to contact PostNL about issues with a specific shipment.\nThis will create a support ticket with PostNL to investigate the shipment status.\nTypically used when:\n- A package seems to be lost\n- Tracking information is not updated\n- Delivery status is unclear\n- Package is marked as delivered but not received',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: ContactPostNLRequestSchema,
        response: {
          200: ContactPostNLResponseSchema,
          400: ContactPostNLErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // Validate email address format
      if (!body.email_address.includes('@')) {
        return reply.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Check if the email matches the order (in a real system, this would be verified in the database)
      const validEmailForOrder = [
        'customer@example.com',
        'test@example.com',
      ].includes(body.email_address);

      if (!validEmailForOrder) {
        return reply.code(400).send({
          error: 'Email address does not match the order',
        });
      }

      // Check if the order has tracking information (in a real system, this would be verified in the database)
      const hasTracking = true; // Dummy value - assuming tracking exists for the order

      if (!hasTracking) {
        return reply.code(400).send({
          error: 'No tracking information available for this order',
        });
      }

      // Dummy implementation - in a real system this would create a ticket with PostNL
      return reply.code(200).send({
        success:
          'Request sent to PostNL. We will contact the customer once we have received a response from PostNL',
      });
    },
  );

  // Refund part of order route
  fastify.post<{
    Body: (typeof RefundPartOfOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/refund_part_of_order',
    {
      schema: {
        summary: 'Refund part of an order',
        description:
          'This endpoint initiates a partial refund for specific products within an order.\nA new refund order is created with zero costs and negative quantities.\nOnly products from the original order can be refunded, and quantities cannot be higher than the original order.\nThe order must be in a refundable state (e.g. shipped) to process the refund.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: RefundPartOfOrderRequestSchema,
        response: {
          200: RefundPartOfOrderResponseSchema,
          400: RefundPartOfOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // Check if the products array is valid
      if (!body.products || body.products.length === 0) {
        return reply.code(400).send({
          error: 'No products specified for refund',
        });
      }

      // In a real implementation, we would check if each product was part of the original order
      // and if the requested quantity is less than or equal to the original quantity
      const originalOrderProducts = ['1001', '1002', '1003']; // Example original order products
      const originalOrderQuantities: Record<string, number> = {
        '1001': 2,
        '1002': 1,
        '1003': 3,
      }; // Example original order quantities
      const productPrices: Record<string, number> = {
        '1001': 12.99,
        '1002': 9.99,
        '1003': 15.5,
      }; // Example product prices

      let refundAmount = 0;

      for (const product of body.products) {
        if (!originalOrderProducts.includes(product.products_id)) {
          return reply.code(400).send({
            error: `Product ${product.products_id} was not part of the original order`,
          });
        }

        const originalQuantity = originalOrderQuantities[product.products_id];
        if (product.quantity > originalQuantity) {
          return reply.code(400).send({
            error: `Requested quantity (${product.quantity}) for product ${product.products_id} exceeds the original order quantity (${originalQuantity})`,
          });
        }

        // Calculate refund amount
        refundAmount += product.quantity * productPrices[product.products_id];
      }

      // In a real implementation, we would check if the order is in a state that can be refunded
      // For example, if the order is canceled, it cannot be refunded
      const orderStatus = 'shipped'; // Example order status (in a real system, this would be retrieved from a database)

      // Dummy implementation - in a real system this would create a refund for the specified products
      return reply.code(200).send({
        success: `Partial refund created for order ${body.orders_id}`,
        refund_order_id: 87656,
        refund_amount: refundAmount,
        status: 21,
      });
    },
  );

  // Pause order route
  fastify.post<{
    Body: (typeof PauseOrderRequestSchema)['static'];
    Querystring: { ticket_number: string };
  }>(
    '/pause_order',
    {
      schema: {
        summary: 'Pause order',
        description:
          'This endpoint pauses an order that is still pending.\nUse this when a customer wants to make changes to a recent order.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
        }),
        body: PauseOrderRequestSchema,
        response: {
          200: PauseOrderResponseSchema,
          400: PauseOrderErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { body } = request;

      // Check if the order exists
      if (body.orders_id !== '1234' && body.orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // If using email identification, check if the email is valid
      if ('email_address' in body) {
        if (!body.email_address.includes('@')) {
          return reply.code(400).send({
            error: 'Invalid email address format',
          });
        }

        // Check if the email matches the order (in a real system, this would be verified in the database)
        const validEmailForOrder = [
          'customer@example.com',
          'test@example.com',
        ].includes(body.email_address);

        if (!validEmailForOrder) {
          return reply.code(400).send({
            error: 'Email address does not match the order',
          });
        }
      }

      // If using address identification, validate the address
      if ('postcode' in body) {
        if (!body.postcode.match(/^[0-9]{4}\s?[A-Z]{2}$/i)) {
          return reply.code(400).send({
            error: 'Invalid postal code format',
          });
        }

        // Check if the address matches the order (in a real system, this would be verified in the database)
        if (body.postcode !== '1234AB' || body.housenumber !== '123') {
          return reply.code(400).send({
            error: 'Address does not match the order',
          });
        }
      }

      // In a real implementation, we would check if the order is in a state that can be paused
      // For example, if the order is already shipped, it cannot be paused
      const orderStatus = 'processing'; // Example order status (in a real system, this would be retrieved from a database)

      // Dummy implementation - in a real system this would pause the order
      return reply.code(200).send({
        success: 'We have paused the order',
      });
    },
  );

  // Get order details by order ID and email route
  fastify.get<{
    Querystring: {
      ticket_number: string;
      orders_id: string;
      email_address: string;
    };
  }>(
    '/get_order_details_by_orderid_and_email',
    {
      schema: {
        summary: 'Get order details',
        description:
          'Retrieves order information using an order number and verification via email address.\n\nIf the provided email address is similar but not exactly the same, the order(s) will still be returned with a notice about the email mismatch.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
          orders_id: Type.String({
            description: 'Order number',
          }),
          email_address: Type.String({
            description:
              'Email address used when placing the order (exact match or similar)',
            format: 'email',
          }),
        }),
        response: {
          200: GetOrderDetailsByOrderIdAndEmailResponseSchema,
          400: GetOrderDetailsByOrderIdAndEmailErrorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { orders_id, email_address } = request.query;

      // Check if the order exists
      if (orders_id !== '1234' && orders_id !== '5678') {
        return reply.code(400).send({
          error: 'Order not found',
        });
      }

      // Validate email address format
      if (!email_address.includes('@')) {
        return reply.code(400).send({
          error: 'Invalid email address format',
        });
      }

      // Example stored email for the order
      const storedEmail = 'customr@example.com'; // Note the deliberate typo to simulate email mismatch

      // Check if the provided email is similar to the stored email
      const emailDomain = email_address.split('@')[1];
      const storedEmailDomain = storedEmail.split('@')[1];

      const exactMatch = email_address === storedEmail;
      const similarDomain = emailDomain === storedEmailDomain;

      if (!exactMatch && !similarDomain) {
        return reply.code(400).send({
          error: 'Email address does not match the order',
        });
      }

      // Generate notice for email mismatch
      const notices = !exactMatch
        ? [
            {
              type: 'email_mismatch',
              orders_id,
              message:
                'The provided email address is similar but not exactly the same as the one used for the order',
              details: {
                provided: email_address,
                actual: storedEmail,
                similarity: 85, // Example similarity score
              },
            },
          ]
        : undefined;

      // Dummy implementation - in a real system this would retrieve the order details from the database
      return reply.code(200).send({
        orders: [
          {
            orders_id,
            orders_status: 'shipped',
            address_can_be_changed: 'false',
            can_cancel: 'no',
            shipments: [
              {
                tracktrace: '3STGVC123456789',
                status: 'In transit',
                track_trace_link:
                  'https://postnl.nl/tracktrace/3STGVC123456789',
                returned: null,
                delivery_date: '2023-10-10',
                delivery_timeframe: {
                  from: '14:00',
                  to: '16:00',
                },
                status_history: [
                  {
                    timestamp: '2023-10-09T15:30:00Z',
                    description: 'Package received at sorting center',
                  },
                  {
                    timestamp: '2023-10-09T18:45:00Z',
                    description: 'Package in transit to delivery center',
                  },
                ],
              },
            ],
            date_purchased: '2023-10-08T10:15:00Z',
            payment_method: 'iDEAL',
            total: 38.97,
            delivery_address: {
              street: 'Example Street 123',
              postcode: '1234AB',
              city: 'Amsterdam',
            },
            products: [
              {
                product_id: '1001',
                name: 'Vitamin C 1000mg',
                artnr_up: 'UP12345',
                eancode: '8712345678901',
                quantity: 2,
                quantity_delivered: 2,
                products_price: 12.99,
              },
              {
                product_id: '1002',
                name: 'Vitamin D3 25mcg',
                artnr_up: 'UP12346',
                eancode: '8712345678902',
                quantity: 1,
                quantity_delivered: 1,
                products_price: 9.99,
              },
            ],
            connected_orders: [],
            emails: [
              {
                recipient_name: 'Customer Name',
                recipient_email: storedEmail,
                subject: 'Your order confirmation #1234',
                date: '2023-10-08T10:16:00Z',
                status: 'delivered',
              },
              {
                recipient_name: 'Customer Name',
                recipient_email: storedEmail,
                subject: 'Your order has been shipped #1234',
                date: '2023-10-09T09:30:00Z',
                status: 'delivered',
              },
            ],
            contact_history: [],
          },
        ],
        notices,
      });
    },
  );

  // Get order details by order ID and housenumber/postcode route
  fastify.get(
    '/get_order_details_by_orderid_and_housenumber_postcode',
    {
      schema: {
        summary: 'Get order details',
        description:
          'Retrieves order information using an order number and verification via postal code and house number.\n\nIf the provided postal code and house number match the order details, the order(s) will be returned.',
        querystring: Type.Object({
          ticket_number: Type.String({
            description: 'Support ticket number associated with this request',
          }),
          orders_id: Type.String({
            description: 'Order number',
          }),
          postcode: Type.String({
            description: 'Postal code',
          }),
          housenumber: Type.String({
            description: 'House number',
          }),
        }),
        response: {
          200: GetOrderDetailsByOrderIdAndPostcodeResponseSchema,
          400: GetOrderDetailsByOrderIdAndPostcodeErrorResponseSchema,
        },
      },
    },
    async (req) => {
      const { query } = req;
      // Dummy implementation - in a real system this would verify postal code and house number
      return {
        orders: [
          {
            orders_id: query.orders_id,
            orders_status: 'Processed',
            address_can_be_changed: 'false',
            can_cancel: 'no' as const,
            shipments: [
              {
                tracktrace: '3STTNL1234567890',
                status: 'Delivered',
                track_trace_link:
                  'https://postnl.nl/track-and-trace/3STTNL1234567890',
                returned: null,
                delivery_date: '2023-04-15',
                delivery_timeframe: {
                  from: '09:00',
                  to: '12:00',
                },
                status_history: [
                  {
                    timestamp: '2023-04-15T11:30:00Z',
                    description: 'Package delivered',
                  },
                  {
                    timestamp: '2023-04-15T08:15:00Z',
                    description: 'Out for delivery',
                  },
                ],
              },
            ],
            date_purchased: '2023-04-13T14:25:00Z',
            payment_method: 'iDEAL',
            total: 45.99,
            delivery_address: {
              street: 'Example Street 42',
              postcode: query.postcode,
              city: 'Amsterdam',
            },
            products: [
              {
                product_id: '1001',
                name: 'Vitamin C 1000mg',
                artnr_up: 'UP12345',
                eancode: '8712345678901',
                quantity: 2,
                quantity_delivered: 2,
                products_price: 22.99,
              },
            ],
            connected_orders: [],
            emails: [
              {
                recipient_name: 'John Doe',
                recipient_email: 'customer@example.com',
                subject: 'Your order confirmation',
                date: '2023-04-13T14:26:00Z',
                status: 'delivered',
              },
            ],
            contact_history: [],
          },
        ],
      };
    },
  );

  // Get limited order information via email address route
  fastify.get<{
    Querystring: {
      ticket_number: string;
      email_address: string;
    };
  }>('/get_orders_for_mail_address', {
    schema: {
      summary: 'Get limited order information via email address',
      description:
        'Retrieves a list of orders with limited information (only date and status) for a given email address.\nThis endpoint is designed for preliminary order status checking without revealing sensitive order details. Useful when a user only provides an email address and asks about order status.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
        email_address: Type.String({
          description: 'Email address to search orders for',
          format: 'email',
        }),
      }),
      response: {
        200: GetOrdersForEmailAddressResponseSchema,
        400: GetOrdersForEmailAddressErrorResponseSchema,
      },
    },
    handler: async ({ query }) => {
      // Dummy implementation - in a real system this would fetch limited order data for the email
      return {
        orders: [
          {
            date_purchased: '2023-04-13T14:25:00Z',
            orders_status: 'Processed',
          },
          {
            date_purchased: '2023-03-05T09:12:00Z',
            orders_status: 'Delivered',
          },
        ],
      };
    },
  });

  // Unsubscribe from newsletter route
  fastify.post<{
    Body: {
      email_address: string;
    };
    Querystring: {
      ticket_number: string;
    };
  }>('/unsubscribe_newsletter', {
    schema: {
      summary: 'Unsubscribe from newsletter',
      description:
        'Use this endpoint to unsubscribe an email address from the newsletter.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: UnsubscribeNewsletterRequestSchema,
      response: {
        200: UnsubscribeNewsletterResponseSchema,
        400: UnsubscribeNewsletterErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Dummy implementation - in a real system this would unsubscribe the email from the newsletter
      if (!body.email_address || !body.email_address.includes('@')) {
        return {
          error: 'Invalid email address',
        };
      }

      return {
        success: 'Successfully unsubscribed from newsletter',
      };
    },
  });

  // Unsubscribe from product reviews route
  fastify.post<{
    Body: {
      email_address: string;
    };
    Querystring: {
      ticket_number: string;
    };
  }>('/unsubscribe_product_reviews', {
    schema: {
      summary: 'Unsubscribe from product review invitations',
      description:
        'Use this endpoint to unsubscribe an email address from product review invitations.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
      }),
      body: UnsubscribeProductReviewsRequestSchema,
      response: {
        200: UnsubscribeProductReviewsResponseSchema,
        400: UnsubscribeProductReviewsErrorResponseSchema,
      },
    },
    handler: async ({ body }) => {
      // Dummy implementation - in a real system this would unsubscribe the email from product reviews
      if (!body.email_address || !body.email_address.includes('@')) {
        return {
          error: 'Invalid email address',
        };
      }

      return {
        success: 'Successfully unsubscribed from product reviews',
      };
    },
  });

  // Check account route
  fastify.get<{
    Querystring: {
      ticket_number: string;
      email_address: string;
    };
  }>('/check_account', {
    schema: {
      summary: 'Check if a customer account exists',
      description:
        'Use this endpoint to check if a customer account exists for a given email address.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
        email_address: Type.String({
          description: 'Email address to check if a customer account exists',
          format: 'email',
        }),
      }),
      response: {
        200: CheckAccountResponseSchema,
        400: CheckAccountErrorResponseSchema,
      },
    },
    handler: async ({ query }) => {
      // Dummy implementation - in a real system this would check if an account exists
      const validEmails = ['customer@example.com', 'john.doe@example.com'];

      if (!query.email_address || !query.email_address.includes('@')) {
        return {
          error: 'Invalid email address',
        };
      }

      if (validEmails.includes(query.email_address)) {
        return {
          success: 'Customer account exists for the given email address',
        };
      } else {
        return {
          error: 'No customer account found for the given email address',
        };
      }
    },
  });

  // Get my orders route
  fastify.get<{
    Querystring: {
      ticket_number: string;
      email_address?: string;
    };
  }>('/get_my_orders', {
    schema: {
      summary: 'Get all orders for the user',
      description:
        'Retrieves all orders for the user. Authentication can be via different channels:\n\n1. WhatsApp - Authenticated via the WhatsApp number\n2. Chat - Authenticated when logged in\n3. Email - Authenticated via the email_address parameter\n\nThe response contains detailed information about all orders of the user, including status, shipping details, and contact history.',
      querystring: Type.Object({
        ticket_number: Type.String({
          description: 'Support ticket number associated with this request',
        }),
        email_address: Type.Optional(
          Type.String({
            description: 'Email address for email authentication context',
            format: 'email',
          }),
        ),
      }),
      response: {
        200: GetMyOrdersResponseSchema,
        400: GetMyOrdersErrorResponseSchema,
      },
    },
    handler: async (request: {
      query: { ticket_number: string; email_address?: string };
    }) => {
      const { query } = request;

      // Dummy implementation - determine authentication context
      let context: 'whatsapp' | 'chat_authenticated' | 'email' =
        'chat_authenticated';

      if (query.email_address) {
        context = 'email';
      }

      // Check if we have a valid authentication context (for demo purposes, assume we do)
      if (!context) {
        return {
          error: 'No valid authentication context found',
        };
      }

      // Return dummy orders data
      return {
        orders: [
          {
            orders_id: '123456',
            orders_status: 'Delivered',
            address_can_be_changed: false,
            can_cancel: 'no',
            shipments: [
              {
                status: 'Delivered',
                returned: null,
                delivery_date: '2023-04-15',
                delivery_timeframe: {
                  from: '09:00',
                  to: '12:00',
                },
                track_trace_link:
                  'https://postnl.nl/track-and-trace/3STTNL1234567890',
                status_history: [
                  {
                    timestamp: '2023-04-15T11:30:00Z',
                    description: 'Package delivered',
                  },
                  {
                    timestamp: '2023-04-15T08:15:00Z',
                    description: 'Out for delivery',
                  },
                ],
              },
            ],
            date_purchased: '2023-04-13T14:25:00Z',
            payment_method: 'iDEAL',
            total: 45.99,
            delivery_address: {
              street: 'Example Street 42',
              postcode: '1234 AB',
              city: 'Amsterdam',
            },
            products: [
              {
                product_id: '1001',
                name: 'Vitamin C 1000mg',
                artnr_up: 'UP12345',
                eancode: '8712345678901',
                quantity: 2,
                quantity_delivered: 2,
                products_price: 22.99,
              },
            ],
            connected_orders: [],
            emails: [
              {
                recipient_name: 'John Doe',
                recipient_email: 'john.doe@example.com',
                subject: 'Your order confirmation',
                date: '2023-04-13T14:26:00Z',
                status: 'delivered',
              },
            ],
            contact_history: [
              {
                type: 'email',
                date: '2023-04-14',
                timestamp: 1681484400,
                user: 'Customer Service',
                summary: 'Customer asked about delivery time',
              },
            ],
          },
          {
            orders_id: '123457',
            orders_status: 'Processing',
            address_can_be_changed: true,
            can_cancel: 'yes',
            shipments: [],
            date_purchased: '2023-05-20T10:15:00Z',
            payment_method: 'Credit Card',
            total: 32.5,
            delivery_address: {
              street: 'Example Street 42',
              postcode: '1234 AB',
              city: 'Amsterdam',
            },
            products: [
              {
                product_id: '2001',
                name: 'Vitamin D3 5000IU',
                artnr_up: 'UP23456',
                eancode: '8712345678902',
                quantity: 1,
                quantity_delivered: 0,
                products_price: 32.5,
              },
            ],
            connected_orders: [],
            emails: [
              {
                recipient_name: 'John Doe',
                recipient_email: 'john.doe@example.com',
                subject: 'Your order confirmation',
                date: '2023-05-20T10:16:00Z',
                status: 'delivered',
              },
            ],
            contact_history: [],
          },
        ],
        context,
      };
    },
  });

  // Listen on port
  fastify.listen({ port, host: '0.0.0.0' }, (err: Error | null) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server is running on http://localhost:${port}`);
  });

  return fastify;
}
