import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c698439b689345d3a6a5ce9253e0674a"
    },
});