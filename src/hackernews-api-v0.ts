import axios from "axios";
import { User } from "./types/hacker-news-api/User";
import { iComment, iJob, iPoll, iPollOption, iStory } from "./types/hacker-news-api/Item";

const HACKER_NEWS_API_ENDPOINT_BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const getUser = async (username: string) => {
    return axios.get<User>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/user/${username}.json`)
        .then((response) => {
            return response.data;
        })
        .catch(err => {
            throw new Error(`Encountered error when fetching info for user ${username}: ${err}`)
        });
}

export const getStory = async (storyId: number) => {
    return axios.get<iStory>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${storyId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching story ${storyId}: ${err}`);
        });
}

export const getComment = async (commentId: number) => {
    return axios.get<iComment>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${commentId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching comment ${commentId}: ${err}`);
        });
}

export const getJob = async (jobId: number) => {
    return axios.get<iJob>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${jobId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching job ${jobId}: ${err}`);
        });
}

export const getPoll = (pollId: number) => {
    return axios.get<iPoll>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${pollId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching poll ${pollId}: ${err}`);
        });
}

export const getPollOpt = (pollOptId: number) => {
    return axios.get<iPollOption>(`${HACKER_NEWS_API_ENDPOINT_BASE_URL}/item/${pollOptId}.json`)
        .then(response => response.data)
        .catch(err => {
            throw new Error(`Encountered error when fetching poll option ${pollOptId}: ${err}`);
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
