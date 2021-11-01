import React from 'react';

const PopularArticles = () => (
  <section className="popular-articles">
    <div className="popular-articles_wrapper">
      <h2>POPULAR ARTICLES TODAY</h2>
      <ol>
        <li>
          <a><span>1</span>Apple's explanation for no Face ID on the MacBook Pro is nonsense</a>
        </li>
        <li>
          <a><span>2</span>This new $15 Raspberry Pi is like mana for at-home programming projects</a>
        </li>
        <li>
          <a><span>3</span>China says it has a quantum computer a million times more powerful than Google's</a>
        </li>
        <li>
          <a><span>4</span>Why flat-Earthers are a clear and present threat to an AI-powered society</a>
        </li>
        <li>
          <a><span>5</span>An exhaustive investigation into Mark Zuckerberg's saucy bookshelves</a>
        </li>
      </ol>
    </div>
  </section>
);

export default PopularArticles;
