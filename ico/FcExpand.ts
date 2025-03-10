import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Expand icon from Devicons
 * @module
 */
export function FcExpand(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#2196F3","points":"43,17.1 39.9,14 24,29.9 8.1,14 5,17.1 24,36"}}]})(props);
}
export default FcExpand;
