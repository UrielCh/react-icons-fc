import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Music icon from Devicons
 * @module
 */
export function FcMusic(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#E91E63"},child:[{tag:"circle",attr:{"cx":"19","cy":"33","r":"9"}},{tag:"polygon",attr:{"points":"24,6 24,33 28,33 28,14 39,17 39,10"},child:[]}]}]})(props);
}
export default FcMusic;
