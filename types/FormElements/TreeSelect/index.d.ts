import { TreeProps } from "../../Tree";
type TreeSelectProps = {
    classList?: any;
    class?: string;
    style?: any;
    data?: any[];
    transfer?: boolean;
    align?: 'bottomLeft' | 'bottomRight';
    disabled?: boolean;
    clearable?: boolean;
    prepend?: any;
    mode?: 'All' | 'Half' | 'Leaf' | 'Shallow';
    size?: 'small' | 'large';
    showMax?: number;
    valueClosable?: boolean;
    showMore?: boolean;
} & TreeProps;
export declare function TreeSelect(props: TreeSelectProps): import("solid-js").JSX.Element;
export {};