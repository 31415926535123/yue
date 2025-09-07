"use client";
import Link from "next/link";
import { useState, useEffect } from "react";



const Game2048 = () => {
  const [grid, setGrid] = useState(Array(16).fill(0));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // 初始化游戏
  const initializeGame = () => {
    const newGrid = Array(16).fill(0);
    addRandomTile(newGrid);
    addRandomTile(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
  };

  // 添加随机方块
  const addRandomTile = (grid) => {
    const emptyCells = grid.map((value, index) => (value === 0 ? index : -1)).filter(index => index !== -1);
    if (emptyCells.length > 0) {
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      grid[randomIndex] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  // 移动方块
  const moveTiles = (direction) => {
    if (gameOver) return;

    const newGrid = [...grid];
    let moved = false;

    // 移动逻辑
    const moveRow = (row) => {
      const filtered = row.filter(val => val !== 0);
      const result = [];
      
      for (let i = 0; i < filtered.length; i++) {
        if (filtered[i] === filtered[i + 1]) {
          result.push(filtered[i] * 2);
          setScore(prev => prev + filtered[i] * 2);
          i++;
        } else {
          result.push(filtered[i]);
        }
      }
      
      while (result.length < 4) result.push(0);
      return result;
    };

    // 根据方向处理移动
    if (direction === 'left') {
      for (let i = 0; i < 4; i++) {
        const row = newGrid.slice(i * 4, i * 4 + 4);
        const newRow = moveRow(row);
        if (JSON.stringify(row) !== JSON.stringify(newRow)) moved = true;
        newGrid.splice(i * 4, 4, ...newRow);
      }
    } else if (direction === 'right') {
      for (let i = 0; i < 4; i++) {
        const row = newGrid.slice(i * 4, i * 4 + 4).reverse();
        const newRow = moveRow(row).reverse();
        if (JSON.stringify(row.reverse()) !== JSON.stringify(newRow)) moved = true;
        newGrid.splice(i * 4, 4, ...newRow);
      }
    } else if (direction === 'up') {
      for (let i = 0; i < 4; i++) {
        const column = [newGrid[i], newGrid[i + 4], newGrid[i + 8], newGrid[i + 12]];
        const newColumn = moveRow(column);
        if (JSON.stringify(column) !== JSON.stringify(newColumn)) moved = true;
        [newGrid[i], newGrid[i + 4], newGrid[i + 8], newGrid[i + 12]] = newColumn;
      }
    } else if (direction === 'down') {
      for (let i = 0; i < 4; i++) {
        const column = [newGrid[i + 12], newGrid[i + 8], newGrid[i + 4], newGrid[i]].reverse();
        const newColumn = moveRow(column).reverse();
        if (JSON.stringify(column.reverse()) !== JSON.stringify(newColumn)) moved = true;
        [newGrid[i + 12], newGrid[i + 8], newGrid[i + 4], newGrid[i]] = newColumn.reverse();
      }
    }

    if (moved) {
      addRandomTile(newGrid);
      setGrid(newGrid);
      checkGameOver(newGrid);
    }
  };

  // 检查游戏是否结束
  const checkGameOver = (grid) => {
    // 检查是否有空格
    if (grid.some(cell => cell === 0)) return;
    
    // 检查是否可以合并
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const index = i * 4 + j;
        if (j < 3 && grid[index] === grid[index + 1]) return;
        if (i < 3 && grid[index] === grid[index + 4]) return;
      }
    }
    
    setGameOver(true);
  };

  // 键盘控制
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowUp': e.preventDefault(); moveTiles('up'); break;
        case 'ArrowDown': e.preventDefault(); moveTiles('down'); break;
        case 'ArrowLeft': e.preventDefault(); moveTiles('left'); break;
        case 'ArrowRight': e.preventDefault(); moveTiles('right'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [grid, gameOver]);

  // 初始化游戏
  useEffect(() => {
    initializeGame();
  }, []);

  // 获取方块颜色
  const getTileColor = (value) => {
    const colors = {
      0: 'bg-gray-200',
      2: 'bg-amber-100 text-amber-800',
      4: 'bg-amber-200 text-amber-800',
      8: 'bg-orange-300 text-orange-800',
      16: 'bg-orange-400 text-orange-800',
      32: 'bg-red-300 text-red-800',
      64: 'bg-red-400 text-red-800',
      128: 'bg-yellow-300 text-yellow-800',
      256: 'bg-yellow-400 text-yellow-800',
      512: 'bg-yellow-500 text-yellow-800',
      1024: 'bg-yellow-600 text-yellow-800',
      2048: 'bg-yellow-700 text-yellow-100'
    };
    return colors[value] || 'bg-purple-500 text-white';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* 导航栏 */}
      <nav className="w-full max-w-4xl mx-auto mb-6">
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            首页
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* 游戏标题和分数 */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">2048</h1>
          <div className="text-right">
            <div className="text-sm text-gray-600">分数</div>
            <div className="text-2xl font-bold text-amber-600">{score}</div>
          </div>
        </div>

        {/* 游戏网格 */}
        <div className="bg-gray-300 p-2 rounded-lg mb-4">
          <div className="grid grid-cols-4 gap-2">
            {grid.map((value, index) => (
              <div
                key={index}
                className={`w-16 h-16 md:w-20 md:h-20 rounded flex items-center justify-center font-bold text-xl ${getTileColor(value)}`}
              >
                {value !== 0 ? value : ''}
              </div>
            ))}
          </div>
        </div>

        {/* 游戏控制 */}
        <div className="text-center mb-4">
          <div className="text-sm text-gray-600 mb-2">使用方向键或触摸滑动来移动方块</div>
          <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
            <div></div>
            <button
              onClick={() => moveTiles('up')}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ↑
            </button>
            <div></div>
            <button
              onClick={() => moveTiles('left')}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ←
            </button>
            <button
              onClick={() => moveTiles('down')}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ↓
            </button>
            <button
              onClick={() => moveTiles('right')}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              →
            </button>
          </div>
        </div>

        {/* 重新开始按钮 */}
        <button
          onClick={initializeGame}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold"
        >
          重新开始
        </button>

        {/* 游戏结束提示 */}
        {gameOver && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">游戏结束！</h2>
              <p className="text-gray-700 mb-4">最终得分: {score}</p>
              <button
                onClick={initializeGame}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                再玩一次
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game2048;