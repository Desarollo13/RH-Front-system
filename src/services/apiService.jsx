const API_URL = import.meta.env.VITE_API_URL;

const apiService = {
    getCsrfToken: () => {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "";
    },

    get: async (endpoint) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });

            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

            return await response.json();
        } catch (err) {
            console.error("API Error:", err.message);
            return { status: false, message: err.message };
        }
    },

    post: async (endpoint, bodyParams = {}) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(bodyParams),
            });
    
            const textResponse = await response.text();
    
            try {
                const jsonResponse = JSON.parse(textResponse);
    
                if (!response.ok || jsonResponse.status === false) {
                    const errorMessages = jsonResponse.errors
                        ? Object.values(jsonResponse.errors).flat().join(" ")
                        : jsonResponse.message || `Error ${response.status}`;
    
                    return {
                        status: false,
                        message: errorMessages,
                        code: response.status
                    };
                }
    
                return jsonResponse;
            } catch (err) {
                console.error("Error parsing JSON:", textResponse);
                return {
                    status: false,
                    message: `Error de respuesta no válida del servidor (${response.status})`,
                    code: response.status
                };
            }
        } catch (err) {
            console.error("API Error:", err.message);
            return {
                status: false,
                message: "No se pudo conectar con el servidor",
                code: 500
            };
        }
    },
    

    put: async (endpoint, bodyParams = {}) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": apiService.getCsrfToken(),
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(bodyParams),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || `Error ${response.status}: ${response.statusText}`);
            }

            return result;
        } catch (err) {
            console.error("API Error:", err.message);
            throw err;
        }
    },

    patch: async (endpoint, bodyParams = {}) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": apiService.getCsrfToken(),
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(bodyParams),
            });

            if (!response.ok) {
                const errorResponse = await response.text();
                console.error("Respuesta del servidor:", errorResponse);
                throw new Error(`Error ${response.status}: ${errorResponse}`);
            }

            return await response.json();
        } catch (err) {
            console.error("API Error:", err.message);
            throw err;
        }
    },
};

export default apiService;
