import React from 'react';
import './NewsPage.css';



const articles = [
  {
    id: 1,
    title: 'The Importance of Cybersecurity in the Digital Age',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non semper massa. Nulla in lobortis justo, in cursus quam.',
    date: 'July 1, 2023',
  },
  {
    id: 2,
    title: 'Web Design Best Practices for a Modern Website',
    content: 'Sed malesuada neque vitae turpis interdum, in pharetra velit tristique. Quisque euismod tempor ex nec commodo.',
    date: 'June 28, 2023',
  },
  {
    id: 3,
    title: 'Mobile App Development Trends to Watch Out For',
    content: 'Vestibulum blandit accumsan lacus, id feugiat purus congue sed. Suspendisse ullamcorper, erat nec condimentum semper.',
    date: 'June 25, 2023',
  },
  {
    id: 4,
    title: 'Artificial Intelligence: Transforming the Future of Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non semper massa. Nulla in lobortis justo, in cursus quam.',
    date: 'June 20, 2023',
  },
  {
    id: 5,
    title: 'The Rise of E-commerce: How Online Shopping is Changing Retail',
    content: 'Sed malesuada neque vitae turpis interdum, in pharetra velit tristique. Quisque euismod tempor ex nec commodo.',
    date: 'June 15, 2023',
  },
  {
    id: 6,
    title: 'Cloud Computing: Simplifying Data Storage and Accessibility',
    content: 'Vestibulum blandit accumsan lacus, id feugiat purus congue sed. Suspendisse ullamcorper, erat nec condimentum semper.',
    date: 'June 10, 2023',
  },
];

const NewsPage = () => {
  return (
    <div className="news-page">
      <h1>Latest Technologies Update</h1>
      <div className="articles">
        {articles.map((article) => (
          <div className="article" key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <span className="date">{article.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
