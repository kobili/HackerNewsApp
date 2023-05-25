import axios from "axios";
import { User } from "./types/hacker-news-api/User";
import { iHackerNewsItem} from "./types/hacker-news-api/Item";

const HACKER_NEWS_API_ENDPOINT_BASE_URL = "https://hacker-news.firebaseio.com/v0";


export const getItem = async (itemId: number) => {
    return axios.get<iHackerNewsItem>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${itemId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching item ${itemId}: ${err}`);
        });
}

export const getUser = async (username: string) => {
    return axios.get<User>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/user/${username}.json`)
        .then((response) => {
            return response.data;
        })
        .catch(err => {
            throw new Error(`Encountered error when fetching info for user ${username}: ${err}`)
        });
}

export const getMaxItem = () => {
    return axios.get<number>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/maxitem.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching max item: ${err}`);
        });
}

export const getTopStories = () => {
    return axios.get<number[]>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/topstories.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching top stories: ${err}`);
        });
}

export const getAskStories = () => {
    return axios.get<number[]>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/askstories.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching ask stories: ${err}`);
        });
}
