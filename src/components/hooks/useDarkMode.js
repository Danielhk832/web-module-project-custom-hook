import UseLocalStorage from "./UseLocalStorage";

export default function UseDarkMode(key) {
  const [darkMode, setDarkMode] = UseLocalStorage(key);
  return [darkMode, setDarkMode];
}
