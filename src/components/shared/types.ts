export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
    year: string;
    client: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface NavigationItem {
    name: string;
    href: string;
    icon?: string;
    hasDropdown?: boolean;
}