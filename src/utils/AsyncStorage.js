import { AsyncStorage } from "react-native";

const initialDataObj = {
    React: {
        title: "React",
        questions: [
            {
                question: "What is React?",
                answer: "A library for managing user interfaces"
            },
            {
                question: "Where do you make Ajax requests in React?",
                answer: "The componentDidMount lifecycle event"
            }
        ]
    },
    JavaScript: {
        title: "JavaScript",
        questions: [
            {
                question: "What is a closure?",
                answer:
                    "The combination of a function and the lexical environment within which that function was declared."
            }
        ]
    },
    Question: {
        title: "Question",
        questions: [
            {
                question: "Question 1",
                answer: "Answer 1"
            },
            {
                question: "Question 2",
                answer: "Answer 2"
            },
            {
                question: "Question 3",
                answer: "Answer 3"
            }
        ]
    }
};

const ASYNC_KEY = "FLASHCARDS";

export const setInitialData = async () => {
    try {
        let response0 = await AsyncStorage.setItem(
            ASYNC_KEY,
            JSON.stringify(initialDataObj)
        );
        let response1 = await getAsyncData();
        return response1; // return an object back
    } catch (err) {
        console.log("setInitialData", err);
    }
};

export const getAsyncData = async () => {
    try {
        let response = await AsyncStorage.getItem(ASYNC_KEY);
        return JSON.parse(response); // returns an object back
    } catch (err) {
        console.log("getAsyncData", err);
    }
};
