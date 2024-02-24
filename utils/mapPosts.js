import { v4 as uuid } from "uuid"

export const mapPosts = (posts) => {
    return (posts || []).map(post => ({
        id: uuid(),
        postId: post.node.databaseId || 0,
        date: post.node.date || null,
        title: post.node.title || null,
        slug: post.node.slug || null,
        excerpt: post.node.excerpt || null,
        featuredImage: post.node.featuredImage?.node?.sourceUrl || null,
        categories: (post.node.categories.edges || []).map(category => ({
            id: uuid(),
            categoryId: category.node.databaseId || 0,
            name: category.node.name || "",
            slug: category.node.slug || "",
            uri: category.node.uri || "",
            description: category.node.description || "",
            parentId: category.node.parentId || 0,
        })) || null,
        author: post.node.author.node.name || "",
        uri: post.node.uri || "",
        seo: post.node.seo
        // status: post.status || null
    }));
};