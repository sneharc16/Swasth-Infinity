import "./cards.css"
import post1 from "../../assets/images/post1.jpeg"
import post2 from "../../assets/images/post2.jpg"
import post3 from "../../assets/images/post3.png"
import post4 from "../../assets/images/post4.jpeg"
import post5 from "../../assets/images/post5.jpeg"
import post6 from "../../assets/images/post6.jpeg"
import post7 from "../../assets/images/post7.jpg"
import post8 from "../../assets/images/post8.jpeg"

export const Cards = () =>{

const section = document.createElement('section');

// Array of image 
const imageUrls = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8
];

// Array of card titles
const Titles = [
  'My Battle with Anxiety: A Personal Journey Towards Healing', 
  'Navigating the Depths: A Personal Journey Through Depression', 
  'Give me some sunshine, cover by Love Singhal', 
  'Beyond the Surface: Insights into Attention-Deficit(ADHD)', 
  'Into the Depths: Journeying through Eating Disorders', 
  'Finding Calm in the Storm: Coping with Post-Traumatic Stress Disorder',
  'Unraveling the Mystery: Exploring Borderline Personality Disorder',
  'Breaking the Silence: Shedding Light on Schizophrenia' , 
  'Navigating the Maze: Understanding Obsessive-Compulsive Disorder'
];

// Array of card texts
const cardTexts = [
  'Anxiety is a silent predator that can grip your mind and suffocate your soul. As someone who has gain ... ',
  'In a world often painted in vibrant colors, there exists a shadow realm where hues fade into shades of ...',
  'Living with bipolar disorder is like riding a roller coaster with no seatbelt – exhilarating highs foll...',
  'Living with Attention-Deficit /Hyperactivity Disorder (ADHD) is like navigating constantly followed...',
  'Anxiety is a silent predator that can grip your mind and suffocate your soul. As someone who has gain ... ',
  'In a world often painted in vibrant colors, there exists a shadow realm where hues fade into shades of ...',
  'Living with bipolar disorder is like riding a roller coaster with no seatbelt – exhilarating highs foll...',
  'Living with Attention-Deficit /Hyperactivity Disorder (ADHD) is like navigating constantly followed...'
]
// Loop through each image URL and create the card structure
for (let i = 0; i < imageUrls.length; i++) {
  // Create <a> element
  const anchor = document.createElement('a');
  anchor.href = '#';

  // Create <article> element
  const article = document.createElement('article');
  article.classList.add('card');

  // Create <figure> element
  const figure = document.createElement('figure');
  figure.classList.add('card-img');

  // Create <img> element
  const img = document.createElement('img');
  img.src = imageUrls[i];

  // Create <figcaption> element
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = 'Anonymous';

  // Append img and figcaption to figure
  figure.appendChild(img);
  figure.appendChild(figcaption);

  // Create <div> element for card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // Create <h2> element for card title
  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = Titles[i];

  // Create <p> element for card text
  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = cardTexts[i];

  // Append card title and card text to card body
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  // Append figure and card body to article
  article.appendChild(figure);
  article.appendChild(cardBody);
  
  // Create a "Read More" button
  const readMoreButton = document.createElement('button');
  readMoreButton.classList.add('read-more');
  readMoreButton.textContent = 'Read More';

  // Append the "Read More" button to the article
  article.appendChild(readMoreButton);
  // Append article to anchor
  anchor.appendChild(article);

  // Append anchor to section
  section.appendChild(anchor);
}

// Append section to the document body
document.body.appendChild(section);
return section;
}