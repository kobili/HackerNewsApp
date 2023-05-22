export interface User {
    id: string;              // The user's unique username. Case-sensitive
    delay?: number;          // Delay in minutes between a comment's creation and its visibility to other users
    created: number;         // Creation date of the user; Unix time
    karma: number;           // The user's karma
    about?: string;          // The user's optional self-description; HTML
    submitted: number[];     // List of the user's stories, polls and comments
}
