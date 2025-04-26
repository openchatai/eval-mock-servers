export declare const TrajectorySchema: import("@sinclair/typebox").TObject<{
    task_id: import("@sinclair/typebox").TInteger;
    info: import("@sinclair/typebox").TObject<{
        task: import("@sinclair/typebox").TObject<{
            user_id: import("@sinclair/typebox").TString;
            instruction: import("@sinclair/typebox").TString;
            actions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                kwargs: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
            }>>;
        }>;
    }>;
}>;
export declare function scenarios(params: {
    indexes?: Array<number>;
}): Promise<{
    task_id: number;
    info: {
        task: {
            user_id: string;
            instruction: string;
            actions: {
                name: string;
                kwargs: {
                    [x: string]: unknown;
                };
            }[];
        };
    };
}[]>;
