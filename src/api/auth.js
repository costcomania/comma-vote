import api from "./api"

export async function login(studentId) {
    return api.get("/auth/submit", {
        params: {
            studentId: studentId,
        }
    })
}