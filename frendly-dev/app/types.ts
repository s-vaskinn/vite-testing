export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    features: boolean;
};

export type PostMeta = {
    id: string;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
    url: string;
};