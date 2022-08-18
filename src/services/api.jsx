
const getUserInfo = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/user/${id}`)
            return response.data;
        } catch (error) {
            console.log(error);
        }
}

const getUserPerformance = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/performance`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getUserActivity = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/activity`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const getUserAverage = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${id}/average`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getUserInfo,
    getUserPerformance,
    getUserActivity,
    getUserAverage
};