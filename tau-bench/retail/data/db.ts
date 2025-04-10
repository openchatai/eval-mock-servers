import { Type, type Static, type StaticDecode } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export type User = Static<typeof UserSchema>;

export const UserSchema = Type.Object({
  name: Type.Object({
    first_name: Type.String(),
    last_name: Type.String(),
  }),
  address: Type.Object({
    address1: Type.String(),
    address2: Type.String(),
    city: Type.String(),
    country: Type.String(),
    state: Type.String(),
    zip: Type.String(),
  }),
  email: Type.String(),
  payment_methods: Type.Record(
    Type.String(),
    Type.Union([
      Type.Object({
        source: Type.Literal("paypal"),
        id: Type.String(),
      }),
      Type.Object({
        source: Type.Literal("credit_card"),
        brand: Type.String(),
        last_four: Type.String(),
        id: Type.String(),
      }),
      Type.Object({
        source: Type.Literal("gift_card"),
        balance: Type.Number(),
        id: Type.String(),
      }),
    ])
  ),
  orders: Type.Array(Type.String()),
});

export type Product = Static<typeof ProductSchema>;

export const ProductSchema = Type.Object({
  name: Type.String(),
  product_id: Type.String(),
  variants: Type.Record(
    Type.String(), // Variant ID
    Type.Object({
      item_id: Type.String(),
      options: Type.Record(Type.String(), Type.String()), // Flexible options schema
      available: Type.Boolean(),
      price: Type.Number(),
    })
  ),
});

export type Order = Static<typeof OrdersSchema>;

export const OrdersSchema = Type.Object({
  order_id: Type.String(),
  user_id: Type.String(),
  address: Type.Object({
    address1: Type.String(),
    address2: Type.String(),
    city: Type.String(),
    country: Type.String(),
    state: Type.String(),
    zip: Type.String(),
  }),
  items: Type.Array(
    Type.Object({
      name: Type.String(),
      product_id: Type.String(),
      item_id: Type.String(),
      price: Type.Number(),
      options: Type.Record(Type.String(), Type.String()),
    })
  ),
  fulfillments: Type.Array(
    Type.Object({
      tracking_id: Type.Array(Type.String()),
      item_ids: Type.Array(Type.String()),
    })
  ),
  status: Type.String(),
  payment_history: Type.Array(
    Type.Object({
      transaction_type: Type.String(),
      amount: Type.Number(),
      payment_method_id: Type.String(),
    })
  ),
});

export const DBSchema = Type.Object({
  users: Type.Record(Type.String(), UserSchema),
  orders: Type.Record(Type.String(), OrdersSchema),
  products: Type.Record(Type.String(), ProductSchema),
});

export async function buildRetailDB(): Promise<StaticDecode<typeof DBSchema>> {
  const [{ default: users }, { default: orders }, { default: products }] =
    await Promise.all([
      import("./users.json"),
      import("./orders.json"),
      import("./products.json"),
    ]);

  return Value.Decode(DBSchema, { users, orders, products });
}
