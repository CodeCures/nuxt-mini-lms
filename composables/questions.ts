import { v4 as uuidv4 } from 'uuid';
import { reactive, onMounted } from 'vue';

interface OptionI {
    name: string,
    correct: boolean
}

interface QuestionI {
    id: string;
    article_id: string,
    title: string;
    options?: OptionI[];
    answer: string
}

export const useQuestion = (articleId: string) => {
    const questions = useLocalStorage('questions', [] as QuestionI[]);
    const newQuestion = <QuestionI>reactive({
        id: '',
        article_id: articleId,
        title: ''
    });

    function createQuestion(question: QuestionI) {
        question.id = uuidv4();
        questions.value.unshift(question)

        newQuestion.id = '';
        newQuestion.article_id = '';
        newQuestion.title = '';
        newQuestion.options = [];
        newQuestion.answer = '';
        
        return true;
    }

    function deleteQuestion(id: string) {
        questions.value = questions.value.filter((a) => a?.id != id)
    }

    const articleQuestions = computed(
        () => questions.value.filter((ques) => ques.article_id === articleId)
    );

    return {
        questions,
        newQuestion,
        articleQuestions,
        createQuestion,
        deleteQuestion
    }
}