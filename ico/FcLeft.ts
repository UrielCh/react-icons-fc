import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Left icon from Devicons
 * @module
 */
export function FcLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#3F51B5"},child:[{tag:"polygon",attr:{"points":"4,24 18,12.3 18,35.7"}},{tag:"rect",attr:{x:"15",y:"20","width":"27","height":"8"},child:[]}]}]})(props);
}
export default FcLeft;
