import { fetchData } from "../../utils/postgres.js";

const authModel = `
    select * from users
`;

const auth = () => fetchData(authModel);

export default auth;
