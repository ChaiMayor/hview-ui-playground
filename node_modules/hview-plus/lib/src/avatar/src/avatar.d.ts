import type { ExtractPropTypes, PropType } from "vue";
declare type FitProperty = "contain" | "cover" | "fill" | "none" | "scale-down";
export declare const avatarProps: {
    size: {
        type: (StringConstructor | NumberConstructor)[];
        values: string[];
        default: string;
    };
    shape: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    border: {
        type: StringConstructor;
        value: string[];
        default: string;
    };
    icon: {
        type: StringConstructor;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    srcSet: StringConstructor;
    alt: StringConstructor;
    fit: {
        type: PropType<FitProperty>;
        default: string;
    };
};
export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export declare const avatarEmits: {
    error: (evt: Event) => boolean;
};
export declare type AvatarEmits = typeof avatarEmits;
export {};
