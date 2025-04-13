import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
export declare function policy(): Promise<string>;
export declare function serve({ port }: {
    port?: number;
}): Promise<import("fastify").FastifyInstance<import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>, import("http").IncomingMessage, import("http").ServerResponse<import("http").IncomingMessage>, import("fastify").FastifyBaseLogger, TypeBoxTypeProvider>>;
export declare function getDB(tenantId: string): Promise<{
    orders: {
        [x: string]: {
            address: {
                address1: string;
                address2: string;
                city: string;
                country: string;
                state: string;
                zip: string;
            };
            order_id: string;
            user_id: string;
            items: {
                name: string;
                product_id: string;
                item_id: string;
                options: {
                    [x: string]: string;
                };
                price: number;
            }[];
            fulfillments: {
                tracking_id: string[];
                item_ids: string[];
            }[];
            status: string;
            payment_history: {
                transaction_type: string;
                amount: number;
                payment_method_id: string;
            }[];
        };
    };
    users: {
        [x: string]: {
            name: {
                first_name: string;
                last_name: string;
            };
            address: {
                address1: string;
                address2: string;
                city: string;
                country: string;
                state: string;
                zip: string;
            };
            email: string;
            payment_methods: {
                [x: string]: {
                    source: "paypal";
                    id: string;
                } | {
                    source: "credit_card";
                    id: string;
                    brand: string;
                    last_four: string;
                } | {
                    source: "gift_card";
                    id: string;
                    balance: number;
                };
            };
            orders: string[];
        };
    };
    products: {
        [x: string]: {
            name: string;
            product_id: string;
            variants: {
                [x: string]: {
                    item_id: string;
                    options: {
                        [x: string]: string;
                    };
                    available: boolean;
                    price: number;
                };
            };
        };
    };
}>;
