import type { Ref } from "vue";
export declare type HandleScroll = () => void;
export declare type ScrollTo = (options: ScrollToOptions | number, yCoord?: number) => void;
export declare type SetScrollTop = (scrollTop: number) => void;
export declare type SetScrollLeft = (scrollTop: number) => void;
export declare type Update = () => void;
export declare type WrapRef = () => Ref<HTMLDivElement>;
