import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Minus icon from Devicons
 * @module
 */
export function FcMinus(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"rect",attr:{x:"8",y:"21",fill:"#5C6BC0","width":"32","height":"6"}}]})(props);
}
export default FcMinus;
