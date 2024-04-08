export interface Post{
    title: string;
    slug: {current: string};
    body: any;
    publishedAt: string;
    category: Array<Category>; 
    _id: string;

}

export interface Category {
    title: string;
    _id: string;
}