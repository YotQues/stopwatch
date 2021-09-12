// Meant as a helper for determining weather a "heroicons" icon should
// be rendered solid or outlined
export interface IconProps {
  // 👇 Should icon be rendered solid or outlined
  solid?: boolean;
  // 👇 TailwindCSS based class helpers
  styles: {
    color: string; // text-{}
    activeColor: string; // group-focus:/-hover:text-{}
    width?: string; // w-{} (default is w-full)
  };
}
