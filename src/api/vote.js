import api from "./api"

export async function submitVote(submit) {
    return api.post("/submit", {
        params: {
            submit: submit,
        }
    })
}