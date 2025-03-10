import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Collapse icon from Devicons
 * @module
 */
export function FcCollapse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#2196F3","points":"5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12"}}]})(props);
}
export default FcCollapse;
