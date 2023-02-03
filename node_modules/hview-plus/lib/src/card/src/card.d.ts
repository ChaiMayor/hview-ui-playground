import type { ExtractPropTypes, StyleValue, PropType } from "vue";
export declare const cardProps: {
    header: {
        type: StringConstructor;
        default: string;
    };
    handle: {
        type: StringConstructor;
        default: string;
    };
    bodyStyle: {
        type: PropType<StyleValue>;
        default: string;
    };
    shadow: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type CardProps = ExtractPropTypes<typeof cardProps>;
