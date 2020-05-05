import React from 'react';
import './App.css';
import {Home} from "./pages/Home";

function App() {

    const photos = [
        { id: 1, url: 'https://avatars.mds.yandex.net/get-pdb/25978/69c8943b-9174-423c-87dd-f030a61df7a5/s1200?webp=false'},
        { id: 2, url:  'https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200?webp=false'},
        { id: 3, url: 'https://avatars.mds.yandex.net/get-pdb/985144/eb480ab3-d75b-4bf9-9458-ab7c2ef8d958/s1200?webp=false'},
        { id: 4, url:    'https://avatars.mds.yandex.net/get-pdb/38069/4408a7cc-5100-4f49-9828-63b60ef931a5/s1200?webp=false'},
        { id: 5, url: 'https://avatars.mds.yandex.net/get-pdb/1534889/0e2ea796-75ac-41b5-ba05-50b3b3906416/s1200?webp=false'},
        { id: 6, url:  'https://avatars.mds.yandex.net/get-pdb/1691218/52f51211-410c-4e25-a866-0ff8221fa1ee/s1200?webp=false'},
    ]

    const comments = [
        { id: 1, date: '18.12.2019', text: 'Текст комментария'},
        { id: 1, date: '03.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 1, date: '12.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 2, date: '18.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 3, date: '12.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 4, date: '13.11.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 6, date: '18.08.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 1, date: '10.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 2, date: '03.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},
        { id: 3, date: '12.12.2019', text: 'Текст комментария Текст комментария Текст комментария Текст комментария Текст комментария'},

    ]



  return (
      <div className={'wrapper'}>
          <h1>TEST APP</h1>
            <Home photos={photos} comments={comments}/>
      </div>
  );
}

export default App;
