const ThemeMode = ({ callback, darkMode }) => {
  return (
    <button
      className="select-none border-1 aspect-square w-8 h-8 font-bold rounded-full cursor-pointer bg-white"
      onClick={callback}
    >
      {!darkMode ? (
        <svg
          className="m-auto"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="18"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2"></path>
          <path d="M12 21v2"></path>
          <path d="M4.22 4.22l1.42 1.42"></path>
          <path d="M18.36 18.36l1.42 1.42"></path>
          <path d="M1 12h2"></path>
          <path d="M21 12h2"></path>
          <path d="M4.22 19.78l1.42-1.42"></path>
          <path d="M18.36 5.64l1.42-1.42"></path>
        </svg>
      ) : (
        <svg
          className="m-auto"
          fill="none"
          height="24"
          stroke="currentColor"
          shapeRendering="geometricPrecision"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      )}
    </button>
  );
};

export { ThemeMode };
