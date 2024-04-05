import { useState, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);//number degismedikce bellekteki number in kullanıldıgnı bir useMemo hook

  /*useMemo hook'u, bir değeri önbelleğe almak ve bu değerin yeniden hesaplanmasını gerektiren durumlarda performansı artırmak için kullanılır. 
  Özellikle, bir hesaplama işlemi veya bir fonksiyonun sonucunun değişmediği durumlarda useMemo kullanılır.
useMemo hook'u, iki parametre alır: birincisi bir fonksiyon veya hesaplanacak değer, ikincisi ise bağımlılıkları içeren bir dizi. Bağımlılıklar, 
değerin değiştiğinde yeniden hesaplanması gereken değerleri belirtir. */


// useMemo: Hesaplanan değeri döndürür.
// useCallback: Önbelleğe alınmış fonksiyonu döndürür.


  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };

  return (
    <div className="App">
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <div style={theme}>{doubleNumber}</div>
      </>
    </div>
  );
}

function slowFunc(num) {
  console.log('Fonksiyon çağrıldı');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;
