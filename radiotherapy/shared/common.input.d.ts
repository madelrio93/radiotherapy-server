export declare class CreateCommonInput {
    name: string;
}
declare const UpdateCommonInput_base: import("@nestjs/common").Type<Partial<CreateCommonInput>>;
export declare class UpdateCommonInput extends UpdateCommonInput_base {
    id: number;
}
export {};
