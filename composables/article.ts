import { v4 as uuidv4 } from 'uuid';
import { reactive } from 'vue';

interface ArticleI {
    id: string;
    title: string;
    poster: string;
    description: string;
    published: boolean,
    created_by: string,
    created_at: string
}

export const useArticle = () => {
    const articles = useLocalStorage('articles', [] as ArticleI[]);
    const article = ref()
    const newArticle = <ArticleI>reactive({
        id: '',
        title: '',
        poster: '',
        description: '',
        published: false,
        created_by: '',
        created_at: ''
    });

    function createArticle(article: ArticleI) {
        article.id = uuidv4();
        article.created_at = (new Date()).toLocaleDateString();

        articles.value.unshift(article)

        newArticle.id = '';
        newArticle.title = '';
        newArticle.description = '';
        newArticle.created_by = '';
        newArticle.created_at = '';
    }


    function getArticle(articleId: string) {
        article.value = articles.value.find((a) => a.id === articleId)
    }


    function deleteArticle(id: string) {
        articles.value = articles.value.filter((a) => a?.id != id)
    }

    return {
        article,
        articles,
        newArticle,
        getArticle,
        createArticle,
        deleteArticle
    }
}