import { root } from "./index";
import App from "./App";

export const rerenderEntireTree = () => {
    root.render(<App />);
};
