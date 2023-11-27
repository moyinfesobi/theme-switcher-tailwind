import React, {useState} from "react";

const themes = {
  light : 'bg-white text-black',
  dark : 'bg-gray-900 text-white',
};

const  App = ( ) => {
   const [currrentTheme, setCurrentTheme] = useState("light");

   const ToggleTheme = () => {
         setCurrentTheme ((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
   };
  return (
    <div className={`min-h-screen ${themes[currrentTheme]}`}>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Tailwind Theme Switcher</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={ToggleTheme}>
            Toggle Theme
          </button>
          <p className="mt-4"> Current Theme: {currrentTheme === "light" ? <span> Light </span> : <span> Dark </span>  }</p>
        </div>
    </div>
  );
}

export default App;
