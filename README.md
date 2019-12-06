## news-viewer

- react
- styled-components
- axios
- react-router-dom

#### newsapi API 키 

- https://newsapi.org/register 가입 후, 발급

- https://newsapi.org/s/south-korea-news-api : API에 대한 설명

#### API 주소

1) 전체 뉴스 불러오기

    GET https://newsapi.org/v2/top-headlines?country=kr&apiKey=yourAPIKey

2) 특정 카테고리 뉴스 불러오기

    GET https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=yourAPIKey

    (카테고리 종류 : business, entertainment, health, science, sports, technology)

<br>

- 김민준, 『리액트를 다루는 기술, 개정판』