import { getCollection, type CollectionEntry } from 'astro:content';

// Só retorna posts com pubDate <= agora, ordenados do mais recente pro mais antigo.
// Um post com pubDate futura fica de fora até um rebuild acontecer depois da data.
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', ({ data }) => data.pubDate <= new Date());
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
