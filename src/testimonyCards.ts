import ala from "@/assets/ala.png"
/**
 * Interface for testimony data props.
 * Defines the shape of objects representing testimony data.
 * Includes id, title, name, pic, alt, content and role fields.
 */
interface dataProps {
  id: number;
  title: string;
  pic: string;
  name: string;
  alt: string;
  content: string;
  role: string;
}
export const testimonyCards: dataProps[] = [
  {
    id: 1,
    title: 'Title 1',
    name: 'niimatullahi',
    pic: ala,
    content: '“Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”',
    alt: 'testimony',
    role: 'Developer'
  },
  {
     id: 2,
    title: "Title 2",
    name: "Muhammad Niimatullahi",
    pic: ala,
    content: "“Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”",
     alt: 'testimony',
     role: 'product designer'
  },
  {
     id: 3,
    title: "Title 3",
    name: "Bukhari Auwal",
    pic: ala,
    content: "“Lorem ipsum dolor sit amet consectetur. Fermentum convallis semper integer adipiscing adipiscing nibh eget. Posuere neque semper gravida massa cursus turpis vulputate. Mi maecenas.”",
     alt: 'testimony',
     role: 'software engineer'
  }
];