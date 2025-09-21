import React, { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  content: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  color: string;
}

const BackgroundAnimations: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  // Coding-related symbols and characters
  const codingSymbols = [
    '{', '}', '[', ']', '(', ')', '<', '>',
    ';', ':', '=', '+', '-', '*', '/', '%',
    '&', '|', '!', '?', '@', '#', '$', '^',
    '~', '`', '"', "'", '\\', '|', '//', '/*',
    '*/', '=>', '==', '!=', '<=', '>=', '&&', '||',
    '++', '--', '+=', '-=', '*=', '/=', '%=',
    'var', 'let', 'const', 'function', 'return', 'if', 'else',
    'for', 'while', 'do', 'switch', 'case', 'break', 'continue',
    'try', 'catch', 'finally', 'throw', 'new', 'this', 'super',
    'class', 'extends', 'import', 'export', 'default', 'async', 'await',
    'Promise', 'Array', 'Object', 'String', 'Number', 'Boolean',
    'true', 'false', 'null', 'undefined', 'NaN', 'Infinity'
  ];

  const colors = [
    '#667eea', '#764ba2', '#f093fb', '#f5576c',
    '#4facfe', '#00f2fe', '#43e97b', '#38f9d7',
    '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3',
    '#d299c2', '#fef9d7', '#667eea', '#764ba2'
  ];

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      // Responsive element count based on screen size
      const elementCount = window.innerWidth < 768 ? 30 : 50;

      for (let i = 0; i < elementCount; i++) {
        newElements.push({
          id: i,
          content: codingSymbols[Math.floor(Math.random() * codingSymbols.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 10, // 10px to 30px
          speed: Math.random() * 0.5 + 0.1, // 0.1 to 0.6
          opacity: Math.random() * 0, // 0.2 to 0.8
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      setElements(newElements);
    };

    createElements();

    const animate = () => {
      setElements(prevElements =>
        prevElements.map(element => ({
          ...element,
          y: element.y + element.speed,
          x: element.x + (Math.sin(Date.now() * 0.001 + element.id) * 0.1),
          rotation: element.rotation + 0.5,
          opacity: 0.2 + Math.sin(Date.now() * 0.002 + element.id) * 0.3
        }))
      );
    };

    const interval = setInterval(animate, 50);

    // Handle window resize
    const handleResize = () => {
      createElements();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map(element => (
        <div
          key={element.id}
          className="absolute select-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            opacity: element.opacity,
            transform: `rotate(${element.rotation}deg)`,
            color: element.color,
            textShadow: `0 0 10px ${element.color}`,
            animation: 'float 8s ease-in-out infinite',
            animationDelay: `${element.id * 0.1}s`
          }}
        >
          {element.content}
        </div>
      ))}

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-green-500 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-pink-500 rounded-full opacity-25 animate-pulse"></div>

      {/* Code brackets floating around */}
      <div className="absolute top-1/4 left-1/4 text-6xl text-blue-400 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        {'{'}
      </div>
      <div className="absolute top-1/3 right-1/4 text-6xl text-purple-400 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        {'}'}
      </div>
      <div className="absolute bottom-1/4 left-1/3 text-5xl text-green-400 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
        {'['}
      </div>
      <div className="absolute bottom-1/3 right-1/3 text-5xl text-pink-400 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
        {']'}
      </div>

      {/* Binary code rain effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 opacity-10 text-sm font-mono"
            style={{
              left: `${i * 5}%`,
              top: '-100px',
              animation: `binary-rain ${Math.random() * 3 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      {/* Additional coding symbols with different animations */}
      <div className="absolute top-1/2 left-10 text-4xl text-cyan-400 opacity-15 float-slow">
        {'</>'}
      </div>
      <div className="absolute top-1/4 right-10 text-3xl text-yellow-400 opacity-15 drift">
        {'{}'}
      </div>
      <div className="absolute bottom-1/4 left-1/2 text-5xl text-red-400 opacity-15 glow-pulse">
        {'<>'}
      </div>
      <div className="absolute top-3/4 right-1/3 text-2xl text-indigo-400 opacity-15 float-slow">
        {'()'}
      </div>

      {/* Terminal-like cursor blinking */}
      <div className="absolute bottom-20 left-1/2 text-2xl text-white opacity-30 animate-pulse">
        {'_'}
      </div>

    </div>
  );
};

export default BackgroundAnimations;
