export class NavRoute {
  title: string;
  link: string;
  isActiveExact?: boolean = false;
  dropdownItems?: {
    title: string;
    link: string;
  }[];
}
