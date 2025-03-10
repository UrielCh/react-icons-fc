import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Export icon from Devicons
 * @module
 */
export function FcExport(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFCCBC",d:"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"}},{tag:"g",attr:{fill:"#FF5722"},child:[{tag:"polygon",attr:{"points":"42.7,24 32,33 32,15"},child:[]},{tag:"rect",attr:{x:"14",y:"21","width":"23","height":"6"},child:[]}]}]})(props);
}
export default FcExport;
